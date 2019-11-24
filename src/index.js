import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer/reducer';
import {Operation} from './store/action/action-creator';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createAPI} from './api';

export const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadOffers());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
