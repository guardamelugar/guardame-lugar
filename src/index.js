import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './index.css'
import './styles/Forms.css'
import './styles/SocialMedia.css'
import './styles/NotFound.css'
import './styles/Comentarios.css'

ReactDOM.render(
  <>
    <Header />
    <div className="app-body">
      <App />
    </div>
    <Footer />
  </>,
  document.getElementById('root')
);
