// Mutations Types
const ADD_NAVIGATION_LINK = 0

const state = () => ({
  navigator: {
    links: [
      { link: '/', text: 'About', position: 0 },
      { link: '/blog', text: 'Blog', position: 1 },
      { link: '/projects', text: 'Projects', position: 10 },
      { link: 'https://github.com/znck', text: 'Github', position: 100 },
      { link: 'https://twitter.com/@znck0', text: 'Twitter', position: 101 },
    ]
  }
})

const mutations = {
  [ADD_NAVIGATION_LINK] (state, link) {
    state.navigator.links.push(link)
  }
}

const getters = {
  navigatorLinks ({ navigator }) {
    const links = navigator.links.slice()

    links.sort((a, b) => a.position > b.position)

    return links
  }
}

const actions = {}

export default {
  state,
  mutations,
  getters,
  actions
}
