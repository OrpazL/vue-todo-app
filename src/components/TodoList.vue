<template>
    <section class="todo-list">
        <todo-item v-for="todo in todos" :key="todo._id" :todo="todo"/>
        <div class="no-todos" v-if="!todos.length">No Todos!</div>
        <add-todo/>
    </section>
</template>

<script>
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default {
    data() {
        return {};
    },
    created() {
        this.$store.dispatch('getTodos');
    },
    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    },
    components: {
        TodoItem,
        AddTodo
    }
};
</script>

<style lang="scss" scoped>
.todo-list {
    padding: 10px 0;
    .no-todos {
        font-weight: bold;
        opacity: 0.6;
    }
}
</style>
