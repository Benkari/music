const addOrDeleteFromArray = async (state, setState, id) => {
  if (state.includes(id)) {
    setState(state.filter((item) => item != id));
  } else {
    setState((oldArray) => [...oldArray, id]);
  }
};

export default addOrDeleteFromArray;
