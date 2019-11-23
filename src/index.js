import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer, Operation} from './reducer';
import {offers} from './mock/offers';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
// import {createAPI} from './api';

// const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadOffers());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
