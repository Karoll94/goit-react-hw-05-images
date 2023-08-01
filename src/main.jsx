import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './components/App/App.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
