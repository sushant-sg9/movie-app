import React, { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
import List from './components/List'


function App(){
  const [text, setText] = useState()
  const [movie,setMovie] = useState([])

  const changeText= (e)=>{
    //  console.log(e)
    setText(e.target.value)
  }
  const getMovie = (e)=>{
    e.preventDefault();
    Axios.get(`https://www.omdbapi.com/?s=${text}&apikey=7b422c76`)
    .then((response)=>{
      // console.log(response)
      setMovie(response.data.Search)
    })
  }


  return (
    <>
    <div>
    
    </div>
    <div className='container'>
      <div className='header'>
        <div className='name'>
          Movie App
        </div>
        <div className='search'>
          <form onSubmit={getMovie}>
        <input placeholder='Search Movie' type="search" value={text} onChange={changeText}/>
        <button className='btn' type='submit'>Search</button>
        </form>
        </div>
      </div>
    </div>
    <div className='container2'>
      <div className='row'>
        <div className='coloum'>
        {
          movie.map((value,index)=>{
            return(
              <div className='col-2'>
                <div className='card'>
                  <img src={value.Poster} className='images' alt=''/>
                  <h4>
                    {value.Title}
                  </h4>
                  <div className='card-body'>
                    <h2>
                    {value.Year}
                    </h2>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
  
    </div>
     </>
  )
}
export default App