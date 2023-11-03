import { createStore, Action } from 'redux';

// Action types
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Interface para o estado
interface State {
  open: boolean;
}

// Ação para alternar a Sidebar
export const toggleSidebar = (): Action => ({ type: TOGGLE_SIDEBAR });

// Reducer
const initialState: State = {
  open: false,
};

const sidebarReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

// Criar a loja Redux
const store = createStore(sidebarReducer);

export default store;
