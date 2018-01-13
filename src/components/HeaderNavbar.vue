<template>
  <v-toolbar fixed app id="dataMenu">
    <v-toolbar-title id="title" color="primary">My Kanban</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down" id="nav-list">
      <v-btn flat @click="dialogAdd">
        <v-icon>add_circle_outline</v-icon>&nbsp; Tasks
      </v-btn>
    </v-toolbar-items>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add Task</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field 
                  v-model="form.title"
                  label="Task Title" 
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
               <v-text-field
                  name="title"
                  v-model="form.description"
                  label="Description"
                  multi-line
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field 
                  label="Point" 
                  required
                  v-model="form.point"
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field 
                  v-model="form.assigned"
                  label="Assigned To" 
                  required
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" dark @click="clear()">Close</v-btn>
          <v-btn color="red" dark @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue" dark @click="addTask(form)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      form: {
        title: '',
        description: '',
        point: 0,
        assigned: '',
        status: 0
      }
    }
  },
  created () {
  },
  methods: {
    dialogAdd () {
      this.dialog = true
    },
    addTask (data) {
      console.log(data)
      this.$store.dispatch('addNewTask', data)
      this.dialog = false
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>
  #title {
    font-family: 'Pattaya', sans-serif;
  }
  a {
    text-decoration: none;
  }
  /* Visibility */
  /* Desktop and bigger */
  @media (min-width: 960px) {
    
  }
  /* Tablets portrait */
  @media (min-width: 768px) and (max-width: 959px) {

  }
  /* Phone landscape and smaller*/
  @media (max-width: 767px) {
  }
</style>