<template>
    <section class="todo-item" :class="(todo.isCompleted)? 'completed': ''">
        <input type="checkbox" ref="isCompleted" v-model="todo.isCompleted" @change="editTodo">
        <div class="content">{{todo.content}}</div>
        <div class="delete" @click="removeTodo(todo._id)">delete</div>
    </section>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            default: {}
        }
    },
    methods: {
        removeTodo(id) {
            this.$store.dispatch({ type: 'removeTodo', id });
        },
        editTodo() {
            this.$store.dispatch({ type: 'editTodo', todo: this.todo });
        }
    }
};
</script>

<style lang="scss" scoped>
.todo-item {
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    &.completed .content {
        text-decoration: line-through;
    }

    .delete {
        cursor: pointer;
        visibility: hidden;
        &:hover {
            color: red;
        }
    }

    &:hover .delete {
        visibility: visible;
    }
}
</style>

