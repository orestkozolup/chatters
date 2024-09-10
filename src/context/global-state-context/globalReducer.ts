export interface GlobalState {
  currentConversation: string;
}

export type Action =
  | { type: "SET_CURRENT_CONVERSATION"; payload: string }
  | { type: "UNSET_CURRENT_CONVERSATION" };

export const initialState: GlobalState = {
  currentConversation: '',
};

export const globalReducer = (
  state: GlobalState,
  action: Action
): GlobalState => {
  switch (action.type) {
    case "SET_CURRENT_CONVERSATION":
      return { ...state, currentConversation: action.payload }
    case "UNSET_CURRENT_CONVERSATION":
      return { ...state, currentConversation: '' }
    default:
      return state;
  }
};
