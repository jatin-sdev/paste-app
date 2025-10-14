import React, {useState} from 'react'
import { useSearchParams} from 'react-router-dom'


const Home = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams("");

  const pasteId = searchParams.get("pasteId");

  return ( 
    <div className='Home'>
      <input className='Input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' />

      <button className='Button'>{pasteId ? "Update Paste" : "Create Paste"}</button>
    </div>
  )
}

export default Home