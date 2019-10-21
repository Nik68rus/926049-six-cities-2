import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {adverts, clickHandler} = props;
  return <MainScreen cards={adverts} clickHandler={clickHandler}/>;
};

App.propTypes = {
  adverts: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default App;
