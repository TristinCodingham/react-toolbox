export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_COUNT: 'SET_COUNT',
  TOGGLE_SHOWTEXT: 'TOGGLE_SHOWTEXT',
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ACTIONS.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case ACTIONS.TOGGLE_SHOWTEXT:
      return {
        ...state,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

export default reducer;
