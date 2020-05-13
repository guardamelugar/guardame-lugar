import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Footer from './components/Footer'
import './styles/Forms.css'
import './styles/SocialMedia.css'
import './styles/NotFound.css'

ReactDOM.render(
  <>
    <div className="app-body">
      <App />
    </div>
      <Footer/>
  </>,
  document.getElementById('root')
);
