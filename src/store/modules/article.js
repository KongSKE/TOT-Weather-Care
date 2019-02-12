
import { FETCH_ARTICLE } from './../actions.type'
import { SET_ARTICLE, SET_BRANCH } from './../mutations.type'
import axios from 'axios'

export const state = { articles: [], current_branch: "" }


export const actions = {
    async [FETCH_ARTICLE](context, branch) {
        console.log('FETCH_ARTICLE called!')
        axios
            .get('https://tot-hackathon-2019.firebaseapp.com/api/' + branch)
            .then(function (response) {
                console.log("KUY " + JSON.stringify(response.data.result))
                context.commit(SET_ARTICLE, response.data.result)
                context.commit(SET_BRANCH, branch)
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
            .then(function () {
                // always executed
            })
    }
}

const getters = {
    articles(state) {
        return state.articles
    },
    getCurrentBranch(state) {
        return state.current_branch
    },
}

export const mutations = {
    [SET_ARTICLE](state, articles) {
        state.articles = articles
    },
    [SET_BRANCH](state, branch) {
        state.current_branch = branch
    },

}

export default {
    state,
    actions,
    mutations,
    getters
}