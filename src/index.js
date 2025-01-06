import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
let persistore = persistStore(store)

root.render(
  <Provider store={store}>
 <React.StrictMode>
 <PersistGate persistor={persistore}>
  <App/>
 </PersistGate>
  </React.StrictMode>
  </Provider>
 
);
reportWebVitals();