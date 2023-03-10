<script setup>
import TodoListVue from './TodoList.vue'
</script>

<template>
    <div class="container-fluid">
        <div class="input-group mb-3">
            <input v-model="todo" type="text" class="form-control" placeholder="Enter here" aria-label="Enter here" aria-describedby="button-addon2" required>
            <div class="input-group-append">
                <button @click="addToMyTodo()" class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
        </div>

        <div class="todo p-3 list-group overflow-auto mh-100">
            <ul class="todo__list list-unstyled">
                <li class="d-flex justify-content-between py-2 align-items-center" v-for="(item, index) in list" :key="item.index">
                    <TodoListVue :item="item" :index="index" @deleteTodo="deleteToMyTodo"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            todo: '',
            text: 'Edit',
            list: ["Todo 1","Todo 2"]
        }
    },
    mounted() {

    },
    methods: {
        addToMyTodo() {
            if(this.todo !== '')
                this.list.push(this.todo)

            this.todo = ''
        },
        deleteToMyTodo(id){
            this.list.splice(id, 1);
        },
        editToMyTodo(id){
            let inputDiv = this.$refs.todoItem[id]

            if(inputDiv.querySelector("#todo-edit-update").getAttribute("aria-toggle") == "false") {
                inputDiv.querySelector("#todo-input").removeAttribute("disabled")
                inputDiv.querySelector("#todo-input").focus()
                inputDiv.querySelector("#todo-edit-update").innerText = "Update";
                inputDiv.querySelector("#todo-edit-update").setAttribute("aria-toggle", "true")
            } else {
                inputDiv.querySelector("#todo-input").setAttribute("disabled", "true");
                inputDiv.querySelector("#todo-edit-update").innerText = "Edit";
                inputDiv.querySelector("#todo-edit-update").setAttribute("aria-toggle", "false")
            }
        }
    }
}
</script>

<style scoped>
    .todo {
        height: 500px;
    }
    .todo__list input[type=text]{
        background-color: inherit;
        color: white;
        border: 0;
    }
</style>