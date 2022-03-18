import { createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const initialState = {
  latestNews: [],
  allNews: [],
  categories: [],
  aboutData: [],
  aboutCards: [],
  externalLinks: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };
    case "LATESTNEWS":
      return { ...state, latestNews: payload };
    case "ALLNEWS":
      return { ...state, allNews: payload };
    case "CATEGORIES":
      return { ...state, categories: payload };
    case "ABOUTDATA":
      return { ...state, aboutData: payload };
    case "ABOUTCARDS":
      return { ...state, aboutCards: payload };
      case "EXTERNALLINKS":
        return { ...state, externalLinks: payload };
    default:
      return state;
  }
};

const makeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV == "development" ? true : false,
});
