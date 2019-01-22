const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_MEME':
      return { ...state, memes: [...state.memes, action.payload] };
    case 'DELETE_MEME':
      const newMemeList = state.memes.filter(
        meme => meme.id !== action.payload.id
      );
      return { ...state, memes: newMemeList };

    default:
      return state;
  }
}

export default rootReducer;
