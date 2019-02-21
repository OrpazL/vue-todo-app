<template>
    <section class="home-page">
        <div class="title">Todo App</div>
        <search-bar/>
        <todo-list/>
    </section>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList';
import SearchBar from '@/components/SearchBar';

export default {
    name: 'home',
    components: {
        TodoList,
        SearchBar
    }
};
</script>

<style lang="scss" scoped>
.home-page {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    * .title {
        font-size: 5vw;
    }
}
</style>