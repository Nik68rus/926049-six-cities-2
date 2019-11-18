import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer';
import {offers} from './mock/offers';

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
