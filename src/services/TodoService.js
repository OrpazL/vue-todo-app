import StorageService from './StorageService';

function getTodos() {
	const todos = [
		{ _id: '1', content: 'todo1', isCompleted: false },
		{ _id: '2', content: 'todo2', isCompleted: true },
		{ _id: '3', content: 'todo3', isCompleted: false }
	];

	return Promise.resolve(
		StorageService.loadFromStorage('todos') ||
			StorageService.saveToStorage('todos', todos)
	);

	// return fetch(`${BASE_URL}/api/todos/`)
}

function editTodo(todos, { content, _id }) {
	const idx = todos.findIndex(todo => todo._id === _id);
	if (idx !== -1) todos[idx].content = content;
	else todos.push(_createTodo(content));
	return Promise.resolve(todos);
}

function removeTodo(todos, id) {
	todos.splice(todos.findIndex(todo => todo._id === id), 1);
	return Promise.resolve(todos);
}

export default {
	getTodos,
	editTodo,
	removeTodo
};

function _createTodo(content) {
	return {
		_id: _makeId(),
		content,
		isCompleted: false
	};
}

function _makeId(length = 5) {
	var txt = '';
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return txt;
}
