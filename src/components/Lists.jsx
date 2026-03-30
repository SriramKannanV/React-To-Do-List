import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../TaskContent";

function Lists() {

const {listValues, setListValues} = useContext(TaskContext);

const [inputValues, setInputValues] = useState('');

// const [listValues, setListValues] = useState([]);

const [activeFilter, setActiveFilter] = useState('all');

useEffect(() => {
    localStorage.setItem('localTask', JSON.stringify(listValues));
}, [listValues]);

function inputHandle(e){
    setInputValues(e.target.value)
  }

  const inputUpdate = () => {
    if(inputValues.trim() !== ''){

        const newTask = {
            id: Date.now(),
            text: inputValues,
            completed: false
        };

        setListValues([...listValues, newTask]);
        setInputValues('');
    }
  }

    const toggleTask = (taskId) => {
            setListValues(listValues.map(task => 
                task.id === taskId ? {...task, completed: !task.completed} : task
            ));
        };

    const pendingTask = listValues.filter(task => !task.completed)
    const completedTask = listValues.filter(task => task.completed)

    let taskDisplay = listValues;
    if(activeFilter === 'pending') taskDisplay = pendingTask;
    if(activeFilter === 'completed') taskDisplay = completedTask;

function deleteHandle(index){
    // console.log("delete handle")
    const deleteValue = listValues.filter((item, currentIndex) => {
        return currentIndex !== index;
    });

    setListValues(deleteValue);
}

function updateHandle(index){
    // console.log("delete handle")
    const updateValue = listValues.map((item, currentIndex) => {
        if(currentIndex === index){
            return {...item, text: draft};
        }
        return item;
    });

    setListValues(updateValue);
    setEdit(null)
}

const [edit, setEdit] = useState(null);

// console.log("What is listValues?", listValues);
const [draft, setDraft] = useState('');

useEffect(() => {
    if(listValues && listValues.text){
        setDraft(listValues.text)
    }
}, [listValues]);

const editHandle = (index, curText) => {
    setEdit(index);
    setDraft(curText);
}

const cancelHandle = () => {
    setEdit(null);
}

// function checkHandle(index){
//     console.log(index)
// }

    return (
    <div>

    <div>
        <div id='searchContainer'>
            <input onChange={inputHandle} value={inputValues} type="text" placeholder='What need to be done?'/>
            <div className='searchIcon'>
                <i onClick={inputUpdate} className="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>

      <div id="mainContainer">
        <div id="filterSec">
            <p onClick={() => {setActiveFilter('all')}}>[ All ({listValues.length}) ]</p>
            <p onClick={() => {setActiveFilter('pending')}}>[ Pending ({pendingTask.length}) ]</p>
            <p onClick={() => {setActiveFilter('completed')}}>[ Completed ({completedTask.length}) ]</p>
        </div>
        <div id="listSec">
            {taskDisplay.map((task, index) => (
                <div key={index} id='listItems'>
                    {edit === index ? (
                        <div className="taskWrapper inputWrapper">
                            <input type="text" value={draft} onChange={(e) => setDraft(e.target.value)}/>
                            <div className='listWrapper'>
                                <i onClick={() => updateHandle(index, task.text)} className="fa-solid fa-check"></i>
                                <i onClick={cancelHandle} className="fa-solid fa-x"></i>
                            </div>
                        </div>
                    ) : (
                        <div className="taskWrapper">
                            <div className='listWrapper'>
                                <input checked={task.completed} onChange={() => toggleTask(task.id)}  type="checkbox"/>
                                <p style={{textDecoration : task.completed ? 'line-through' : 'none'}}>{task.text}</p>
                            </div>
                            <div className='listWrapper'>
                                <i onClick={() => editHandle(index, task.text)} className="fa-solid fa-pencil"></i>
                                <i onClick={() => deleteHandle(index)} className="fa-solid fa-delete-left"></i>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Lists
