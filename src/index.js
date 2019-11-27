import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer/reducer';
import {Operation} from './store/action/action-creator';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createAPI} from './api';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const dispatchCB = (...args) => store.dispatch(...args);
const loginCB = () => history.push(`/login`);
export const api = createAPI(dispatchCB, loginCB);

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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
