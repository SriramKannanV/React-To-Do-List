import React, { useContext } from 'react'
import '../index.css'
import '../components/Style.css'
import { TaskContext } from '../TaskContent'

const navbar = () => {
  
  const dateOption = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
};

const {listValues, completedTask} = useContext(TaskContext);

const dateShow = new Date().toLocaleDateString('en-US', dateOption);

const percentage = listValues.length === 0 ? 0 : Math.round((completedTask.length / listValues.length) * 100);
  
  return (
    <div>
      <div id="navContainer">
        <div id="navItems">
            <div id="navItem">
                <i className="fa-solid fa-calendar colorGray"></i>
                <p className='colorGray'>{dateShow}</p>
            </div>
            <div id="navItem">
                <i className="fa-solid fa-pencil navIcon"></i>
                <h1>Zenith Task</h1>
            </div>
        </div>
        <div id="navItems">
            <h1>Welcome, Zenith!</h1>
        </div>
        <div id="navItems">
            <p>YOUR DAILY FOCUS</p>
            <div id="navBar" style={{'--bar' : `${percentage}%`}}></div>
            <div id="navItemP">
                <p className='colorGray'>{percentage}% COMPLETED</p>
                <p className='colorGray'>{completedTask.length}/{listValues.length}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
