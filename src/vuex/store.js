import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import * as firebase from 'firebase'

let app = firebase.initializeApp({
  apiKey: 'AIzaSyALoqi2ou3__v-fP_h-Js_zd217GW0VL8c',
  uthDomain: 'kanban-a014c.firebaseapp.com',
  databaseURL: 'https://kanban-a014c.firebaseio.com',
  projectId: 'kanban-a014c',
  storageBucket: 'kanban-a014c.appspot.com',
  messagingSenderId: '720798796186'
})
const db = app.database()
const tasks = db.ref('tasks')

Vue.use(Vuex, VueFire)

export const store = new Vuex.Store({
  state: {
    tasks: [],
    backlogTasks: [],
    todoTasks: [],
    doingTasks: [],
    doneTasks: []
  },
  getters: {
    tasks (state) {
      return state.tasks
    }
  },
  mutations: {
    setTasks (state, payload) {
      console.log(payload)
      state.tasks = payload
    }
  },
  actions: {
    getAllTasks ({ commit }) {
      tasks.on('value', (snapshot) => {
        commit('setTasks', snapshot.val())
      })
    },
    addNewTask ({ commit }, payload) {
      /* eslint-disable */
      tasks.push(payload).key
      /* eslint-enable */
    },
    removeTask ({ commit }, payload) {
      console.log('delete', payload)
      // eslint-disable-next-line 
      tasks.child(payload).remove()
    },
    editTask ({ commit }, payload) {
      console.log('update', payload)
      db.ref(`tasks/${payload.index}`).update({
        status: payload.status
      })
    }
  }
})
