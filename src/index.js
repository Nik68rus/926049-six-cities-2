import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const cards = [
    {title: `Beautiful luxurious apartment at great location`},
    {title: `Wood and stone place`},
    {title: `Canal View Prinsengracht`},
    {title: `Nice, cozy, warm big bed apartment`},
  ];

  const clickHandler = () => {};

  ReactDOM.render(
      <App adverts={cards} clickHandler={clickHandler} />,
      document.querySelector(`#root`)
  );
};

init();
