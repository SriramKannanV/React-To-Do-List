import React from 'react'
import Navbar from './components/Navbar.jsx'
import Search from './components/Search.jsx'
import Lists from './components/Lists.jsx'
import { TaskContext } from './TaskContent.jsx'
import { useState } from 'react'

const App = () => {

const [listValues, setListValues] = useState(() => {
  const savedTask = localStorage.getItem('localTask');

  if(savedTask){
    return JSON.parse(savedTask);
  }
  return [];
});

const completedTask = listValues.filter(task => task.completed);

  return (
    <TaskContext.Provider value={{listValues, setListValues, completedTask}}>
      <div className='glassEffect'>
          <Navbar />
          {/* <Search /> */}
          <Lists />
      </div>
    </TaskContext.Provider>
  )
}

export default App
