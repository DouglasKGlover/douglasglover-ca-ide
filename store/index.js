export const state = () => ({
    projects: []
})

export const mutations = {
    updateProjects: (state, payload) => {
        state.projects.push(payload)
    }
}

export const actions = {
    // TODO: use the following to decode base64: atob(myString);
    // Travel down the GitHub API tree to get individual project MD files from the repo I've set up to house them
    async getProjects({ state, commit }) {
        if (state.projects.length) return

        let latestRepoCommit,
            treeUrl,
            filesList = [],
            filesContents = [];

        // 1: Get the repo
        try {
            let getRepo = await fetch(`https://api.github.com/repos/douglaskglover/douglasglover-ca-projects/git/refs/heads/master`)
                .then(res => res.json());
                latestRepoCommit = getRepo.object.url
                
            // 2: Get the tree url
            if (latestRepoCommit.length === 0) return
            try {
                let getTree = await fetch(latestRepoCommit)
                    .then(res => res.json());
                treeUrl = getTree.tree.url

                // 3: Get the files list from the tree
                if (treeUrl.length === 0) return
                try {
                    let getList = await fetch(treeUrl)
                        .then(res => res.json())
                    filesList = getList.tree.filter(el => el.path != 'README.md')
                    
                    // 4: Get the file contents from each file and place them into state.projects along with other pertinent info
                    for (const key in filesList) {
                        if (filesList.hasOwnProperty(key)) {
                            const element = filesList[key]

                            let getContents = await fetch(element.url)
                                .then(res => res.json())
                                filesContents = {
                                    key: key,
                                    slug: filesList[key].path.replace('.md', ''),
                                    contents: Buffer.from(getContents.content, 'base64').toString()
                                };

                            commit("updateProjects", filesContents)
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
            } catch (err) {
                console.log(err)
            }
        } catch (err) {
            console.log(err)
        }
    }
}