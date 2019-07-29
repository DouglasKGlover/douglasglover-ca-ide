export const state = () => ({
    repoSha: '',
    projects: []
})

export const mutations = {
    updateSha: (state, payload) => {
        state.repoSha = payload
        console.log(state.repoSha);
    }
}

export const actions = {
    async getSha({ state, commit }) {
        if (state.repoSha.length) return

        try {
            let myRepoSha = await fetch(`https://api.github.com/repos/douglaskglover/douglasglover-ca-projects/git/refs/heads/master`)
                .then(res => res.json())
            commit("updateSha", myRepoSha.object.sha)
        } catch (err) {
            console.log(err)
        }
    }
}