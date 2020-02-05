import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/redux/reducers";
import { middlewares } from "../src/configureStore";
import { ApplicationReduxShape } from "../src/redux/applicationReduxShape";
import { ShallowWrapper } from "enzyme";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer, middlewares.
 * @param {object} initialState – Initial state for store.
 * @function storeFactory
 * @returns {Store} – Redux store.
 */
export const storeFactory = (initialState: any) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper – Enzyme shallow wrapper.
 * @param {string} val – Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};
