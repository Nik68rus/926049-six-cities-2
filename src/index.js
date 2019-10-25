import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers} from './mock/offers';


const init = () => {
  const clickHandler = () => {};

  ReactDOM.render(
      <App offers={offers} clickHandler={clickHandler} />,
      document.querySelector(`#root`)
  );
};

init();
