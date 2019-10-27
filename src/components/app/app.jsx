import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {offers, clickHandler} = props;
  return <MainScreen offers={offers} clickHandler={clickHandler}/>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default App;
