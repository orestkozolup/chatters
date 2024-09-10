import { User } from "@/types";

export interface GlobalState {
  currentConversation: User | null;
  allConversations: User[];
}

export type Action =
  | { type: "SET_CURRENT_CONVERSATION"; payload: User }
  | { type: "UNSET_CURRENT_CONVERSATION" }
  | { type: "ADD_CONVERSATION"; payload: User };

export const initialState: GlobalState = {
  currentConversation: null,
  allConversations: [],
};

export const globalReducer = (
  state: GlobalState,
  action: Action
): GlobalState => {
  switch (action.type) {
    case "SET_CURRENT_CONVERSATION":
      return { ...state, currentConversation: action.payload };
    case "UNSET_CURRENT_CONVERSATION":
      return { ...state, currentConversation: null };
    case "ADD_CONVERSATION":
      return {
        ...state,
        allConversations: [...state.allConversations, action.payload],
      };
    default:
      return state;
  }
};
