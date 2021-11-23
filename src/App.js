import './App.css';
import React, {useState} from 'react'
import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
function App() {
  const [isOpen, setIsOpen] = useState(false)  
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
