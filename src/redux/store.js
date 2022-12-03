import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    contacts: [
      { id: 1, text: 'Dima', tel: +380668742294},
      { id: 2, text: 'Dimas', tel: +380668742294}
    ],
    filter: ""
  }

  const rootReducer = (state = initialState, action) => {
    return state;
  };

  const enhancer = devToolsEnhancer();

  export const store = createStore(rootReducer, enhancer);