import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegistrationForm from './components/registration/RegistrationForm/RegistrationForm';
import './index.css'; // Ensure you have an appropriate CSS file or remove this line

ReactDOM.render(
  <Provider store={store}>
    <RegistrationForm />
  </Provider>,
  document.getElementById('root')
);
