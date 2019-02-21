import Vue from 'vue';
import Vuex from 'vuex';

import TodoService from './services/TodoService';
import StorageService from './services/StorageService';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [],
		filter: ''
	},
	mutations: {
		setTodos(state, { todos }) {
			state.todos = todos;
		},
		setFilter(state, { filter }) {
			state.filter = filter;
		}
	},
	actions: {
		getTodos({ commit }) {
			TodoService.getTodos().then(todos => {
				commit({ type: 'setTodos', todos });
			});
		},
		editTodo(context, { todo }) {
			TodoService.editTodo(this.getters.todos, todo).then(todos => {
				StorageService.saveToStorage('todos', todos);
			});
		},
		removeTodo(context, { id }) {
			TodoService.removeTodo(this.getters.todos, id).then(todos => {
				StorageService.saveToStorage('todos', todos);
			});
		},

		setFilter({ commit }, { filter }) {
			commit({ type: 'setFilter', filter });
		}
	},
	getters: {
		todos({ todos, filter }) {
			if (!filter.trim().length) return todos;
			else
				return todos.filter(todo =>
					todo.content.toLowerCase().includes(filter.toLowerCase())
				);
		}
	}
});
