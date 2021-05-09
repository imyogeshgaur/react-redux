import { createStore } from "redux";

import rootReducer from "../reducers/main";

const Store = createStore(rootReducer);

export default Store;
