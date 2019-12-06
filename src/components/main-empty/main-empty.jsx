const MainEmpty = (props) => {
  const {cityList, activeCity, cityClickHandler} = props;
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cityList.map((city) => {
              return (
                <li key={city} className="locations__item">
                  <a className={`locations__item-link tabs__item${city === activeCity ? `  tabs__item--active` : ``}`} href="#" onClick={(evt) => {
                    evt.preventDefault();
                    cityClickHandler(evt.target.textContent);
                  }}>
                    <span>{city}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property availbale at the moment in {activeCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};

MainEmpty.propTypes = {
  cityList: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  cityClickHandler: PropTypes.func.isRequired,
};

export default MainEmpty;
