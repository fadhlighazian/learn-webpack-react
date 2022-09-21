import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('app');

const element = (
  <>
    <img
      src='https://imgix3.ruangguru.com/assets/user_uploads/pp/pp_iqo2rc_8285.png'
      alt='logo-react'
    />
    <h1>Hello React's World</h1>
    <a href='#'>Learn React</a>
  </>
);

// ReactDOM.render(element, root)
ReactDOM.render(element, root);
