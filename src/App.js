import React from 'react'
// Route Link BrowserRouter
import {Route,BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './components/contact';
import Home from './components/home';
import About from './components/Aboutus';
export default function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        </div>
      <Footer/>
    
    </BrowserRouter>
  )
}