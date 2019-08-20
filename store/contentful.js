import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  projects: [],
  blogs: []
})

export const mutations = {
  updateProjects: (state, payload) => {
    state.projects = payload
  },
  updateBlogs: (state, payload) => {
    state.blogs = payload
  }
}

export const actions = {
  async getProjects ({ commit }) {
    const response = await client.getEntries({
      content_type: 'project'
    })
    if (response.items.length > 0) {
      commit('updateProjects', response.items)
    }
  },
  async getBlogs ({ commit }) {
    const response = await client.getEntries({
      content_type: 'blogPost'
    })
    if (response.items.length > 0) {
      commit('updateBlogs', response.items)
    }
  }
}
