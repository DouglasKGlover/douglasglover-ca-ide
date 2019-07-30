export const state = () => ({
    projects: []
})

export const mutations = {
    updateRepo: (state, payload) => {
        state.repo = payload
        console.log(state.repo);
    },
    updateTree: (state, payload) => {
        state.tree = payload
        console.log(state.repo);
    },
    updateProjects: (state, payload) => {
        state.projects = payload
        console.log(state.projects);
    }
}

export const actions = {
    // TODO: use the following to decode base64: atob(myString);
    // Travel down the GitHub API tree to get individual project MD files from the repo I've set up to house them
    async getProjects({ state, commit }) {
        let latestRepoCommit,
            treeUrl,
            filesList = [];

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
                console.log(treeUrl);

                // 3: Get the files list from the tree
                if (treeUrl.length === 0) return
                try {
                    let getList = await fetch(treeUrl)
                        .then(res => res.json())
                    filesList = getList.tree

                    console.log(filesList);
                    
                    // 4: Get the file contents from each file and place them into state.projects
                    for (const key in filesList) {
                        if (filesList.hasOwnProperty(key)) {
                            const element = filesList[key]
                            
                            console.log(element);
                            
                            // let getTree = await fetch(latestRepoCommit)
                            //     .then(res => res.json());
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