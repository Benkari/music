function addToStorage(id, state) {
  localStorage.setItem(id, JSON.stringify(state));
}

function getFromStorage() {
  const favArrayFromStorage = JSON.parse(localStorage.getItem("favList"));
  return favArrayFromStorage;
}

export { addToStorage, getFromStorage };
