import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers} from './mock/offers';


const init = () => {
  ReactDOM.render(
      <App offers={offers} />,
      document.querySelector(`#root`)
  );
};

init();
