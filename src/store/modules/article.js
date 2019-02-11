
import { FETCH_ARTICLE } from './../actions.type'
import { SET_ARTICLE } from './../mutations.type'
import axios from 'axios'

export const state = { articles: [] }

export const actions = {
    async [FETCH_ARTICLE](context) {
        console.log('FETCH_ARTICLE called!')
        axios
            .get('https://tot-hackathon-2019.firebaseapp.com/api/Bangsaothong')
            .then(function (response) {
                console.log("KUY " + JSON.stringify(response.data.result))
                context.commit(SET_ARTICLE, response.data.result)
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
    }
}

export const mutations = {
    [SET_ARTICLE](state, articles) {
        state.articles = articles
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}