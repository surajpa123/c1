import logo from './logo.svg';
import './App.css';

import React from 'react';
import { useState } from 'react';

function App() {

  const [book,setBook] = useState(13)
  const handelinc = (value) => {
    setBook(book + value)
    console.log(book)
  }
  const handeldec = (value) => {
    if(book <= 0){
      return;
    }else{
      setBook(book + value)
      console.log(book)
    }
  }

  const [pen,setPen] = useState(10);

  const handelpeni = (value) => {
    setPen(pen + value)
    console.log(pen)

  }
  const handelpend = (value) => {
    if(pen <= 0){
      return;
    }else{
      setPen(pen + value)
      console.log(pen)

    }
  }

  
  const [notebook,setNotebook] = useState(44);

  
  const handelnotei = (value) => {
    setNotebook(notebook + value)
    console.log(notebook)

  }
  const handelnoted = (value) => {
    if(notebook <= 0){
      return;
    }else{
      setNotebook(notebook + value)
      console.log(notebook)

    }
  }

  const [inkpen,setInkpen] = useState(78);


  
  const handelinki = (value) => {
    setInkpen(inkpen + value)
    console.log(inkpen)

  }
  const handelinkd = (value) => {
    if(inkpen <= 0){
      return;
    }else{
      setInkpen(inkpen + value)
      console.log(inkpen)

    }
  }



 return (
  
    <div className="main">
      <h1>Inventory management</h1>
      <div className= 'items'>
      <span>Books</span>
      <button onClick={() => handelinc(1)} className='addBook'>Add Book</button>
      <button onClick={() => handeldec(-1)} className='remBook'>Remove Book</button>
      <button className='totalBooks'>Total Books = {book}</button>
      </div>
      <div className='items'>
      <span>Pens</span>
      <button onClick={() => handelpeni(1)} className='addPen'>Add Pen</button>
      <button onClick={() => handelpend(-1)} className='remPen'>Remove Pen</button>
      <button className='totalPens'>Total Pens = {pen}</button>
      </div>
       <div claName = 'items'>
         <span>Notebooks</span>
       <button onClick={() => handelnotei(1)} className='addNotebook'>Add Notebook</button>
      <button onClick={() => handelnoted(-1)} className='remNotebook'>Remove Notebook</button>
      <button className='totalNotebooks'>Total Notebooks = {notebook}</button>
       </div>
       <div className='items'>
       <span>Inkpen</span>
       <button onClick={() => handelinki(1)} className='addInkpen'>Add Inkpen</button>
      <button onClick={() => handelinkd(-1)} className='remInkpen'>Remove Inkpen</button>
      <button className='totalInkpens'>Total Inkpens = {inkpen}</button>
       </div>
      </div>
    
  );
}

export default App;
