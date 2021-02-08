<template>
  <div class="taskmanager">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Ajouter une tâche </label>
                <input
                    v-model="newTodoText"
                    id="new-todo"
                    placeholder=""
                >
                <button> Ajouter</button>
            </form>
            
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <ul>
                            <li
                            is="todo-item"
                            v-for="(todo, index) in todos"
                            v-bind:key="todo.id"
                            v-bind:title="todo.title"
                            v-on:remove="todos.splice(index, 1)"
                            ></li>
                        </ul>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>

Vue.component('todo-item', {
            template: '\
                <div class="col">\
                    <div class="card shadow-sm">\
                        <div class="card-body">\
                            <p class="card-text">{{ title }}</p>\
                                <button v-on:click="$emit(\'remove\')" class="btn btn-sm btn-outline-secondary">Supprimer</button>\
                                <div class="d-flex justify-content-between align-items-center">\
                                    <div class="btn-group">\
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Voir</button>\
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Editer</button>\
                                    </div>\
                                    <small class="text-muted">9 min</small>\
                                </div>\
                        </div>\
                    </div>\
                </div>\
                <li>\
                ',
            props: ['title']
            })
            new Vue({
                el: '#todo-list-example',
                data: {
                    newTodoText: '',
                    todos: [
                    {
                        id: 1,
                        title: 'Faire la vaisselle',
                        // date: '01/02/2021',
                    },
                    {
                        id: 2,
                        title: 'Sortir les poubelles',
                        // date: '02/02/2021',
                    },
                    {
                        id: 3,
                        title: 'Tondre la pelouse',
                        // date: '03/02/2021'
                    }
                    ],
                    nextTodoId: 4
                },
                methods: {
                    addNewTodo: function () {
                        // var currentDate = new Date();
                        this.todos.push({
                            id: this.nextTodoId++,
                            title: this.newTodoText,
                            // date: this.currentDate
                        })
                        this.newTodoText = ''
                    }
                }
            })

</script>

<script>
export default {
  name: 'Taskmanager',
  props: {
    msg: String
  }
  
}
</script>
