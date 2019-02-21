<template>
    <section class="add-todo">
        <form @submit.prevent="editTodo">
            <input type="text" v-model="content" placeholder="+ Write new todo...">
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            content: ''
        };
    },
    methods: {
        editTodo() {
            this.$store
                .dispatch({ type: 'editTodo', todo: { content: this.content } })
                .then(() => {
                    this.content = '';
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.add-todo {
    input {
        height: 30px;
        padding: 10px;
        width: 100%;
        border: 0;
        border-bottom: 1px solid gray;
    }
}
</style>

