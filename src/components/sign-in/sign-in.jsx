import {connect} from 'react-redux';
import {Operation} from '../../store/action/action-creator';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._loginData = {
      email: ``,
      password: ``,
    };

    this._inputChangeHandler = this._inputChangeHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  _inputChangeHandler(evt) {
    const {name, value} = evt.target;
    this._loginData[name] = value;
  }

  _formSubmitHandler(evt) {
    const {setUserData} = this.props;
    evt.preventDefault();
    setUserData(this._loginData);
  }

  render() {
    return <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this._formSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={this._inputChangeHandler} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={this._inputChangeHandler} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>;
  }
}

SignIn.propTypes = {
  setUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: (data) => dispatch(Operation.loginUser(data))
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);