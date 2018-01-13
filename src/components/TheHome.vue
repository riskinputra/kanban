<template>
  <v-layout row wrap>
    <v-flex md3 xs12>
      <v-card dark color="blue">
        <v-card-text class="px-3 text-xs-center"><h1><b>Back Log</b></h1></v-card-text>
        <v-divider></v-divider>
        <v-card light>
          <v-card-text>
            <v-expansion-panel popout>
              <v-expansion-panel-content v-for="(task, index) in tasks" :key="index" v-if="task.status === 0">
                <div slot="header"><h3><b>{{task.title}}</b></h3></div>
                <v-card>
                  <v-card-text>
                    <p><b>Description :</b></p>
                    <p id="description"> {{task.description}}</p>
                    <p><b>Point :</b> {{task.point}}%</p>
                    <p><b>Assigned To :</b> {{task.assigned}}</p>
                  </v-card-text>
                  <v-card-actions class="text-xs-center">
                    <v-btn color="orange" @click="updateTaskStatus(index, 1)">To do</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="red" icon @click.prevent="deleteTask(index)"><v-icon>delete</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-card>
    </v-flex>
    <v-flex md3 xs12>
      <v-card dark color="red">
        <v-card-text class="px-3 text-xs-center"><h1><b>To Do</b></h1></v-card-text>
        <v-divider></v-divider>
        <v-card-text></v-card-text>
      </v-card>
    </v-flex>
    <v-flex md3 xs12>
      <v-card dark color="purple">
        <v-card-text class="px-3 text-xs-center"><h1><b>Doing</b></h1></v-card-text>
        <v-divider></v-divider>
        <v-card-text></v-card-text>
      </v-card>
    </v-flex>
    <v-flex md3 xs12>
      <v-card dark color="orange">
        <v-card-text class="px-3 text-xs-center"><h1><b>Done</b></h1></v-card-text>
        <v-divider></v-divider>
        <v-card-text></v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.getAllTasks()
  },
  computed: {
    tasks () {
      console.log('task', this.$store.getters.tasks)
      return this.$store.getters.tasks
    }
  },
  methods: {
    ...mapActions([
      'getAllTasks'
    ]),
    deleteTask (index) {
      this.$store.dispatch('removeTask', index)
    },
    updateTaskStatus (index, status) {
      this.$store.dispatch('editTask', {
        index: index,
        status: status
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
hr {
  height:5px;
  background-color: white;
  color: white;
}
#description {
  white-space: pre-wrap;
}
</style>
