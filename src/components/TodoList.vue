<template>
    <div class="input-group" ref="todoItem">
        <input id="todo-input" type="text" class="form-control" aria-describedby="button-addon4" v-bind:value=item :disabled="disableInput" ref="todo">
        <div class="input-group-append" id="button-addon4">
            <button id="todo-edit-update" @click="editToMyTodo()" class="btn btn-primary" aria-toggle="false"> {{text}} </button> 
            <button id="todo-delete" @click="deleteToMyTodo()" class="btn btn-danger"> Delete </button> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disableInput: true
        }
    },
    props: {
        item : String,
        index : String
    },
    computed: {
        text() {
            return this.disableInput ? 'Edit' : 'Update'
        }
    },
    methods: {
        deleteToMyTodo(){
            this.$emit('deleteTodo', this.index);
        },
        editToMyTodo() {
            this.$refs.todo.focus();
            this.disableInput = !this.disableInput;
            if(!this.disableInput) {
            }
            console.log(this.$refs.todo);
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