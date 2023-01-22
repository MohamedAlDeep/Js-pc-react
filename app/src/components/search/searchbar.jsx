import React, {useState} from 'react'
import './index.css'
import Data from '../../data/data.json'

function searchbar() {
  const [text, settext] = useState("")
  const [data, setdata] = useState(Data)

  function handlechange(){
    console.log("text changed")
  }

  return (
    <div>
        <input onChange={handlechange} type="text" placeholder="Search for game name" />
    </div>
  )
}

export default searchbar