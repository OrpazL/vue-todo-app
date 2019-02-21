<template>
    <section class="search-bar">
        <form @submit.prevent="setFilter">
            <input type="text" placeholder="Search" v-model="filter" @input="debouncedFilter">
            <button>&#128269;</button>
        </form>
    </section>
</template>

<script>
import _ from 'lodash';
export default {
    data() {
        return {
            filter: ''
        };
    },
    methods: {
        debouncedFilter() {
            _.debounce(this.setFilter, 250)();
        },
        setFilter() {
            this.$store.dispatch({ type: 'setFilter', filter: this.filter });
        }
    }
};
</script>

<style lang="scss" scoped>
.search-bar {
    * {
        height: 30px;
        padding: 0px 15px;
        &:focus {
            outline: 0;
        }
    }
    input {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        width: 50%;
    }

    button {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        width: 10%;
    }
}
</style>
