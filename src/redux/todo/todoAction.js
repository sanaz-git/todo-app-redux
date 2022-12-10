const add = (value = '') => {
  return { type: 'ADDITEM', payload: value };
};

export { add };
