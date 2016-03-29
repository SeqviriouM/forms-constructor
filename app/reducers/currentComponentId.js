export function currentComponentId(state = -1, action) {
  switch (action.type) {
    case 'SET':
      return action.payload.currentId;
    default:
      return state;
  }
}
