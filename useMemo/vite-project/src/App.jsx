import React, { useCallback, useState } from 'react'
import Call2 from './Call2'


const App = () => {
  const [cout,setCout]= useState(0);
  const [task,setTask] = useState([]);
  const myAdd=()=>{
    setTask(values=>([...values,"New task"]))
  }
  const MyTaskAdd = useCallback(myAdd,[task])

  return (
    <>
    <Call2 task={task} addTask={MyTaskAdd}/>
    <button onClick={()=>{setCout(cout+1)}}>Click here</button>
      Count: {cout};   
    </>
  )
}

export default App