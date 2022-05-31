import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter  } from 'react-router-dom'
// import App from './react-hooks/useStateTodoList';
// import App from './react-hooks/useEffectPractice';
// import App from './react-hooks/useMemoPractice';
// import App from './react-hooks/useReducer-own';
// import App from './react-hooks';
import App from './demo/App';
import { Provider } from 'react-redux'
import { store, persistor } from './demo/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
