import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"

const App = () => {

  const [datas, setDatas] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    handleSubmit()
  }, [])

  let handleSubmit = () => {
    axios.get(`https://api.quotable.io/random`)
    .then((res) => {
    setDatas(res.data.content)
    setAuthor(res.data.author)
    })
  }


  // async function getRandomQuotes() {

  //   let resp = await axios.get(`https://api.quotable.io/random`)
  //   setDatas(resp.data.content)
  //   setAuthor(resp.data.author)
  // }


  return (
    <div>
    <h1>Quotes Of The Day</h1>
     <div className='container'>
      <div className='wrapper'>
        <h1>{datas}</h1>
        <h2>- {author}</h2>
      </div>
      <div >
        <button className='buttonSubmit buttonFirst' onClick={handleSubmit}>New Quotes? Click Here!</button>
      </div>
      
     </div>
      <div className='footer'> ghifaryadnan©2023.reserved</div>
    </div>
  )
}

export default App