import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {adverts} = props;
  return <MainScreen cards={adverts}/>;
};

App.propTypes = {
  adverts: PropTypes.array.isRequired,
};

export default App;
