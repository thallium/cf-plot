import './App.css';
import React, { useState, useEffect } from 'react'
import RatingGraph from './graph.js'
import { RatingDisplay } from './rating-display';
import { getRatings, getUserData } from './utils';

const UsersForm = ({ handles, setHandles, submitAct }) => {
  return (
    <form onSubmit={submitAct} className='form'>
      <div className='input-div'>
        <textarea
         rows={3}
         placeholder='codeforces handles, one per line'
         className='input'
         value={handles}
         onChange={e => setHandles(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">go</button>
      </div>
    </form>
  )
}



const App = () => {
  useEffect(() => {
    document.title = "cf plot"
  }, []);
 
  const [handles, setHandles] = useState("")
  const [users, setUsers] = useState([])
  const [datasets, setDatasets] = useState([])
  const [progress, setProgress] = useState({
    done:0,
    total:0
  })
  const makeGraph = (event) => {
    event.preventDefault()
    getUserData(handles, setUsers)
    getRatings(handles, setDatasets, setProgress)
  }
  return (
    <div>
      <UsersForm handles={handles} setHandles={setHandles} submitAct={makeGraph} />
      <RatingDisplay users={users} />
      <RatingGraph datasets={datasets} progress={progress}/>
    </div>
  )
}

export default App;
// vim:tabstop=2:shiftwidth=2
