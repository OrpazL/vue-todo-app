function saveToStorage(key , val) {
    localStorage.setItem(key, JSON.stringify(val));
    return loadFromStorage(key);
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export default {
    saveToStorage,
    loadFromStorage,
}