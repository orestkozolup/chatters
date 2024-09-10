export interface GlobalState {
  currentConversation: object | null;
}

export type Action =
  | { type: "SET_CURRENT_CONVERSATION"; payload: object }
  | { type: "UNSET_CURRENT_CONVERSATION" };

export const initialState: GlobalState = {
  currentConversation: null,
};

export const globalReducer = (
  state: GlobalState,
  action: Action
): GlobalState => {
  switch (action.type) {
    case "SET_CURRENT_CONVERSATION":
      return { ...state, currentConversation: action.payload }
    case "UNSET_CURRENT_CONVERSATION":
      return { ...state, currentConversation: null }
    default:
      return state;
  }
};
