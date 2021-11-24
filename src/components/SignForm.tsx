import '../components/SignForm.scss';
import '../components/container.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';

export const SignForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [passValue, setPassValue] = useState('');
  const [isPassValid, setIsPassValid] = useState(true);
  const [checkPassValue, setCheckPassValue] = useState('');
  const [isPassSame, setIsPassSame] = useState(true);
  const [passwordShow, setPasswordShow] = useState(false);
  const [isEyePassChecked, setIsEyePassChecked] = useState(false);
  const [checkPasswordShow, setcheckPasswordShow] = useState(false);
  const [isEyeCheckPassChecked, setIsEyeCheckPassChecked] = useState(false);

  const checkEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);

    if (!emailValue.match(checkEmail)) {
      setIsEmailValid(false);
      return;
    } else {
      setIsEmailValid(true);
    }
  }

  const passHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(event.target.value);

    if (passValue.length < 5) {
      setIsPassValid(false);
      return;
    } else {
      setIsPassValid(true);
    }
  }

  const confirmPassHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassValue(event.target.value);

    if (event.target.value !== passValue) {
      setIsPassSame(false);
      return;
    } else {
      setIsPassSame(true);
    }
  }

  const showHide = (event: any) => {
    if (event.currentTarget.name === "but1") {
      setIsEyePassChecked(!isEyePassChecked);
      setPasswordShow(!passwordShow);
    }

    if (event.currentTarget.name === "but2") {
      setIsEyeCheckPassChecked(!isEyeCheckPassChecked);
      setcheckPasswordShow(!checkPasswordShow);
    }
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {

    event.preventDefault();

    if (!emailValue.match(checkEmail)) {
      setIsEmailValid(false);
      return;
    } else {
      setIsEmailValid(true);
    }

    if (passValue.length < 6) {
      setIsPassValid(false);
      return;
    } else {
      setIsPassValid(true);
    }

    if (checkPassValue !== passValue) {
      setIsPassSame(false);
      return;
    } else {
      setIsPassSame(true);
    }

    setEmailValue('');
    setPassValue('');
    setCheckPassValue('');
  };

  return (
    <div className="container">
      <form
        action="#"
        className="form"
        onSubmit={handleSubmit}
        noValidate
      >

        <h4>
          Gender
        </h4>

        <div className="form__buttons-box">
          <input
              type="radio"
              id="sexMale1"
              name="sex"
              className="btn-check"
            />
          <label
            htmlFor="sexMale1"
            className="form__input form__button-radio"
          >
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.0625 0H22.3125C21.7948 0 21.375 0.41975 21.375 0.9375C21.375 1.45525 21.7948 1.875 22.3125 1.875H28.7992L17.9802 12.694C16.0113 11.0314 13.5443 10.125 10.9375 10.125C8.016 10.125 5.26937 11.2627 3.2035 13.3285C1.13762 15.3943 0 18.141 0 21.0625C0 23.984 1.13769 26.7306 3.2035 28.7965C5.26931 30.8624 8.016 32 10.9375 32C13.859 32 16.6056 30.8623 18.6715 28.7965C20.7374 26.7307 21.875 23.984 21.875 21.0625C21.875 18.4557 20.9686 15.9888 19.306 14.0198L30.125 3.20081V9.6875C30.125 10.2052 30.5448 10.625 31.0625 10.625C31.5802 10.625 32 10.2052 32 9.6875V0.9375C32 0.41975 31.5802 0 31.0625 0ZM17.3457 27.4707C15.634 29.1823 13.3582 30.125 10.9375 30.125C8.51681 30.125 6.241 29.1823 4.52931 27.4707C2.81769 25.759 1.875 23.4832 1.875 21.0625C1.875 18.6418 2.81769 16.366 4.52931 14.6543C6.241 12.9427 8.51681 12 10.9375 12C13.3582 12 15.634 12.9427 17.3457 14.6543C19.0573 16.366 20 18.6418 20 21.0625C20 23.4832 19.0573 25.759 17.3457 27.4707Z"/>
              </svg>
            </div>
            <span>
              Male
            </span>
          </label>

          <input
              type="radio"
              id="sexMale2"
              name="sex"
              className="btn-check"
            />
          <label
            htmlFor="sexMale2"
            className="form__button-radio form__input"
          >
            <div>
              <svg width="20" height="32" viewBox="0 0 20 32"xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6875 9.6875C19.6875 4.34581 15.3417 0 10 0C4.65831 0 0.3125 4.34581 0.3125 9.6875C0.3125 14.7129 4.15906 18.8564 9.0625 19.3295V25.75H5.625C5.10725 25.75 4.6875 26.1698 4.6875 26.6875C4.6875 27.2052 5.10725 27.625 5.625 27.625H9.0625V31.0625C9.0625 31.5802 9.48225 32 10 32C10.5177 32 10.9375 31.5802 10.9375 31.0625V27.625H14.375C14.8927 27.625 15.3125 27.2052 15.3125 26.6875C15.3125 26.1698 14.8927 25.75 14.375 25.75H10.9375V19.3295C15.8409 18.8564 19.6875 14.7129 19.6875 9.6875ZM2.1875 9.6875C2.1875 5.37969 5.69219 1.875 10 1.875C14.3078 1.875 17.8125 5.37969 17.8125 9.6875C17.8125 13.9953 14.3078 17.5 10 17.5C5.69219 17.5 2.1875 13.9953 2.1875 9.6875Z"/>
              </svg>
            </div>
            <span>
              Female
            </span>
          </label>

          <input
              type="radio"
              id="sexMale3"
              name="sex"
              className="btn-check"
            />
          <label
            htmlFor="sexMale3"
            className="form__button-radio form__input"
          >
            <div>
              <svg width="30" height="32" viewBox="0 0 30 32"xmlns="http://www.w3.org/2000/svg">
              <path d="M28.1252 1.9223e-06H22.5002C21.9824 1.9223e-06 21.5627 0.419752 21.5627 0.937503C21.5627 1.45525 21.9824 1.875 22.5002 1.875H25.8619L20.8024 6.93451C19.1839 5.72026 17.1746 5.00001 15.0002 5.00001C12.8257 5.00001 10.8164 5.72026 9.198 6.93451L7.12406 4.86051L8.99312 4.35969C9.49325 4.22569 9.79 3.71163 9.656 3.2115C9.522 2.71144 9.008 2.4145 8.50781 2.54863L6.63875 3.04944L7.13956 1.18038C7.27356 0.680252 6.97681 0.16619 6.47669 0.0321894C5.97631 -0.101936 5.46244 0.19494 5.3285 0.695065L4.82769 2.56413L3.56775 1.30425C3.20162 0.938128 2.608 0.938128 2.24194 1.30425C1.87581 1.67038 1.87581 2.26394 2.24194 2.63007L3.50187 3.89L1.63281 4.39082C1.13269 4.52482 0.835937 5.03888 0.969937 5.53901C1.08212 5.95788 1.46094 6.23413 1.87487 6.23413C1.95519 6.23413 2.03681 6.22369 2.11812 6.20194L3.98719 5.70113L3.48637 7.57019C3.35237 8.07032 3.64912 8.58438 4.14925 8.71838C4.23056 8.7402 4.31212 8.75057 4.3925 8.75057C4.80644 8.75057 5.18525 8.47432 5.29744 8.05544L5.79825 6.18638L7.81206 8.2002C6.25944 9.91876 5.31269 12.1946 5.31269 14.6875C5.31269 19.713 9.15925 23.8564 14.0627 24.3295V27H11.2502C10.7324 27 10.3127 27.4198 10.3127 27.9375C10.3127 28.4553 10.7324 28.875 11.2502 28.875H14.0627V31.0625C14.0627 31.5803 14.4824 32 15.0002 32C15.5179 32 15.9377 31.5803 15.9377 31.0625V28.875H18.7502C19.2679 28.875 19.6877 28.4553 19.6877 27.9375C19.6877 27.4198 19.2679 27 18.7502 27H15.9377V24.3295C20.8411 23.8565 24.6877 19.713 24.6877 14.6875C24.6877 12.1946 23.7409 9.9187 22.1884 8.20013L27.1877 3.20082V6.56251C27.1877 7.08026 27.6074 7.50001 28.1252 7.50001C28.6429 7.50001 29.0627 7.08026 29.0627 6.56251V0.937503C29.0627 0.419752 28.6429 1.9223e-06 28.1252 1.9223e-06ZM22.8127 14.6875C22.8127 18.9953 19.308 22.5 15.0002 22.5C10.6924 22.5 7.18769 18.9953 7.18769 14.6875C7.18769 10.3797 10.6924 6.87501 15.0002 6.87501C19.308 6.87501 22.8127 10.3797 22.8127 14.6875Z"/>
              </svg>
            </div>
            <span>
              Other
            </span>
          </label>
        </div>

        <h4>
          E-mail
        </h4>

        <div className="form__pass">
          <input
            type="email"
            value={emailValue}
            onChange={emailHandler}
            className={
              isEmailValid
                ? 'form__input form__input-email'
                : "form__input form__input-email form__error form__error-message--visible"
              }
            placeholder="example@mail.com"
            required
          />
          {
            isEmailValid
            || <span className="form__error-message">
                please enter valid email
              </span>
          }
        </div>

        <h4>
          Create Password
        </h4>
        <div className="form__pass">
          <input
            type={passwordShow ? "text" : "password"}
            required
            onChange={passHandler}
            value={passValue}
            className={
              isPassValid
                ? 'form__input form__input-email'
                : "form__input form__input-email form__error"
              }
          />
          {
            isPassValid
            || <span className="form__error-message">
                please enter valid password (min 6 signs)
              </span>
          }

          <button
            type="button"
            name="but1"
            className={
              isEyePassChecked
              ? "form__visible-eye form__checked-eye"
              : "form__visible-eye"
            }
            onClick={showHide}
          >
            <svg width="28" height="16" viewBox="0 0 28 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.0695 8C2.08206 8.02198 2.09559 8.04544 2.11011 8.07033C2.22382 8.26526 2.39746 8.54701 2.63334 8.88668C3.10555 9.56666 3.82449 10.4748 4.80789 11.3826C6.7721 13.1957 9.78136 15 14 15C18.2186 15 21.2279 13.1957 23.1921 11.3826C24.1755 10.4748 24.8944 9.56666 25.3667 8.88668C25.6025 8.54701 25.7762 8.26526 25.8899 8.07033C25.9044 8.04544 25.9179 8.02198 25.9305 8C25.9179 7.97802 25.9044 7.95455 25.8899 7.92967C25.7762 7.73474 25.6025 7.45299 25.3667 7.11332C24.8944 6.43334 24.1755 5.52516 23.1921 4.6174C21.2279 2.80428 18.2186 1 14 1C9.78136 1 6.7721 2.80428 4.80789 4.6174C3.82449 5.52516 3.10555 6.43334 2.63334 7.11332C2.39746 7.45299 2.22382 7.73474 2.11011 7.92967C2.09559 7.95455 2.08206 7.97802 2.0695 8ZM26.5 8C26.9472 7.77639 26.9471 7.77616 26.947 7.7759L26.9466 7.77523L26.9457 7.77339L26.9428 7.76766L26.9328 7.74822C26.9243 7.73177 26.912 7.7084 26.8959 7.67858C26.8638 7.61894 26.8165 7.53344 26.7537 7.4258C26.6281 7.21057 26.4404 6.90639 26.188 6.54293C25.6837 5.81666 24.9182 4.84984 23.8704 3.8826C21.7721 1.94572 18.5314 0 14 0C9.46863 0 6.22789 1.94572 4.12961 3.8826C3.08176 4.84984 2.31632 5.81666 1.81197 6.54293C1.55956 6.90639 1.37188 7.21057 1.24633 7.4258C1.18354 7.53344 1.13623 7.61894 1.10409 7.67858C1.08802 7.7084 1.07573 7.73177 1.0672 7.74822L1.0572 7.76766L1.05429 7.77339L1.05336 7.77523L1.05303 7.7759C1.0529 7.77616 1.05278 7.77639 1.5 8L1.05278 7.77639L0.940979 8L1.05278 8.22361L1.5 8C1.05278 8.22361 1.0529 8.22384 1.05303 8.2241L1.05336 8.22477L1.05429 8.22661L1.0572 8.23234L1.0672 8.25178C1.07573 8.26823 1.08802 8.2916 1.10409 8.32142C1.13623 8.38106 1.18354 8.46656 1.24633 8.5742C1.37188 8.78943 1.55956 9.09361 1.81197 9.45707C2.31632 10.1833 3.08176 11.1502 4.12961 12.1174C6.22789 14.0543 9.46863 16 14 16C18.5314 16 21.7721 14.0543 23.8704 12.1174C24.9182 11.1502 25.6837 10.1833 26.188 9.45707C26.4404 9.09361 26.6281 8.78943 26.7537 8.5742C26.8165 8.46656 26.8638 8.38106 26.8959 8.32142C26.912 8.2916 26.9243 8.26823 26.9328 8.25178L26.9428 8.23234L26.9457 8.22661L26.9466 8.22477L26.947 8.2241C26.9471 8.22384 26.9472 8.22361 26.5 8ZM26.5 8L26.9472 8.22361L27.059 8L26.9472 7.77639L26.5 8Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.75C12.2051 4.75 10.75 6.20507 10.75 8C10.75 9.79493 12.2051 11.25 14 11.25C15.7949 11.25 17.25 9.79493 17.25 8C17.25 6.20507 15.7949 4.75 14 4.75ZM9.75 8C9.75 5.65279 11.6528 3.75 14 3.75C16.3472 3.75 18.25 5.65279 18.25 8C18.25 10.3472 16.3472 12.25 14 12.25C11.6528 12.25 9.75 10.3472 9.75 8Z"/>
            </svg>
          </button>
        </div>


        <h4>
          Confirm Password
        </h4>
        <div className="form__pass">
          <input
            type={checkPasswordShow ? "text" : "password"}
            required
            onChange={confirmPassHandler}
            value={checkPassValue}
            className={
              isPassSame
                ? 'form__input form__input-email'
                : "form__input form__input-email form__error"
              }
          />
          {
            isPassSame
            || <span className="form__error-message">
                your password isn't same
              </span>
          }

          <button
            type="button"
            onClick={showHide}
            name="but2"
            className={
              isEyeCheckPassChecked
              ? "form__visible-eye form__checked-eye"
              : "form__visible-eye"
            }
          >
            <svg width="28" height="16" viewBox="0 0 28 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.0695 8C2.08206 8.02198 2.09559 8.04544 2.11011 8.07033C2.22382 8.26526 2.39746 8.54701 2.63334 8.88668C3.10555 9.56666 3.82449 10.4748 4.80789 11.3826C6.7721 13.1957 9.78136 15 14 15C18.2186 15 21.2279 13.1957 23.1921 11.3826C24.1755 10.4748 24.8944 9.56666 25.3667 8.88668C25.6025 8.54701 25.7762 8.26526 25.8899 8.07033C25.9044 8.04544 25.9179 8.02198 25.9305 8C25.9179 7.97802 25.9044 7.95455 25.8899 7.92967C25.7762 7.73474 25.6025 7.45299 25.3667 7.11332C24.8944 6.43334 24.1755 5.52516 23.1921 4.6174C21.2279 2.80428 18.2186 1 14 1C9.78136 1 6.7721 2.80428 4.80789 4.6174C3.82449 5.52516 3.10555 6.43334 2.63334 7.11332C2.39746 7.45299 2.22382 7.73474 2.11011 7.92967C2.09559 7.95455 2.08206 7.97802 2.0695 8ZM26.5 8C26.9472 7.77639 26.9471 7.77616 26.947 7.7759L26.9466 7.77523L26.9457 7.77339L26.9428 7.76766L26.9328 7.74822C26.9243 7.73177 26.912 7.7084 26.8959 7.67858C26.8638 7.61894 26.8165 7.53344 26.7537 7.4258C26.6281 7.21057 26.4404 6.90639 26.188 6.54293C25.6837 5.81666 24.9182 4.84984 23.8704 3.8826C21.7721 1.94572 18.5314 0 14 0C9.46863 0 6.22789 1.94572 4.12961 3.8826C3.08176 4.84984 2.31632 5.81666 1.81197 6.54293C1.55956 6.90639 1.37188 7.21057 1.24633 7.4258C1.18354 7.53344 1.13623 7.61894 1.10409 7.67858C1.08802 7.7084 1.07573 7.73177 1.0672 7.74822L1.0572 7.76766L1.05429 7.77339L1.05336 7.77523L1.05303 7.7759C1.0529 7.77616 1.05278 7.77639 1.5 8L1.05278 7.77639L0.940979 8L1.05278 8.22361L1.5 8C1.05278 8.22361 1.0529 8.22384 1.05303 8.2241L1.05336 8.22477L1.05429 8.22661L1.0572 8.23234L1.0672 8.25178C1.07573 8.26823 1.08802 8.2916 1.10409 8.32142C1.13623 8.38106 1.18354 8.46656 1.24633 8.5742C1.37188 8.78943 1.55956 9.09361 1.81197 9.45707C2.31632 10.1833 3.08176 11.1502 4.12961 12.1174C6.22789 14.0543 9.46863 16 14 16C18.5314 16 21.7721 14.0543 23.8704 12.1174C24.9182 11.1502 25.6837 10.1833 26.188 9.45707C26.4404 9.09361 26.6281 8.78943 26.7537 8.5742C26.8165 8.46656 26.8638 8.38106 26.8959 8.32142C26.912 8.2916 26.9243 8.26823 26.9328 8.25178L26.9428 8.23234L26.9457 8.22661L26.9466 8.22477L26.947 8.2241C26.9471 8.22384 26.9472 8.22361 26.5 8ZM26.5 8L26.9472 8.22361L27.059 8L26.9472 7.77639L26.5 8Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.75C12.2051 4.75 10.75 6.20507 10.75 8C10.75 9.79493 12.2051 11.25 14 11.25C15.7949 11.25 17.25 9.79493 17.25 8C17.25 6.20507 15.7949 4.75 14 4.75ZM9.75 8C9.75 5.65279 11.6528 3.75 14 3.75C16.3472 3.75 18.25 5.65279 18.25 8C18.25 10.3472 16.3472 12.25 14 12.25C11.6528 12.25 9.75 10.3472 9.75 8Z"/>
            </svg>
          </button>
        </div>


        <button
          type="submit"
          className="
            form__button
            form__input
            form__input-email
          "
        >
          <h4>Sign Up</h4>
        </button>

        <div className="form__log form__log-in">
          <h4>Already have an account?</h4>
          <Link to="/logIn">
            <h4>Log In</h4>
          </Link>
        </div>

        <div className="form__log">
          <h4>Review privacy and disclosures</h4>
          <Link to="/privacy">
            <h4>here</h4>
          </Link>
        </div>

      </form>
    </div>
  );
};
