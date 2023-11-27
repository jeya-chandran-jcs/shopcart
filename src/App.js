import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Section from './components/Section';
import { useState } from 'react';

function App() {
  const [cartCount,setCartCount]=useState(0)
  const items=[{
  
    pic:"https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg",
    name:"Apple iPhone 13 (128GB)",
    summary:"15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
    
  },{
  
    pic:"https://m.media-amazon.com/images/I/41LRhCMbApL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"Redmi A2",
    summary:"Processor: High performance MediaTek Helio G36,upto 2.2GHz; | Upto 4GB RAM including 2GB Virtual RAM | 64GB Storage"
},{
  
    pic:"https://m.media-amazon.com/images/I/41GsqdiCvOL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"Redmi 12C (Matte Black)",
    summary:"Camera: 50MP f/1.8 AI Dual camera with Portrait mode & Night Mode | 5MP Selfie camera"
},{
    pic:"https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"realme narzo N55 ",
    summary:"With fast 33W SUPERVOOC charging, the realme narzo N55 charges up the massive 5000mAh battery from 0-50% in just 29 minutes"
},{
    pic:"https://m.media-amazon.com/images/I/41yAce7gd4L._SX300_SY300_QL70_FMwebp_.jpg",
    name:"iQOO Z7 Pro 5G",
    summary:"Dimensity 7200 5g processor based on the latest 4nm energy-efficient process"
},{
    pic:"https://m.media-amazon.com/images/I/41snmTn9mrL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"realme narzo 60 5G",
    summary:"Immerse yourself in a smooth and responsive visual experience with our vibrant 90Hz Super AMOLED display."
},{
    pic:"https://m.media-amazon.com/images/I/31-hWNXDxiL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"Nokia 105 Classic ",
    summary:"Send and receive UPI payments with built-in UPI app"
},{
    pic:"https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"realme narzo N55",
    summary:"Dimensity 7200 5g processor based on the latest 4nm energy-efficient process"
}]

  return (
    <div className="App">
      <Topbar  cartCount={cartCount} />
      <div className='items'>
      {items.map((item,index)=>(
         <Section key={index} product={item} pd={index} cartCount={cartCount} updatedCartCount={setCartCount}/>
      ))}
      </div>
     <Footer />
     
    </div>
  );
}

function Footer(){
  return(
    <>
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    </>
  )
  
}

export default App;
