import { useState } from 'react'

const Search = () => {
  
  const [inputValues, setInputValues] = useState('');
  
  function inputHandle(e){
    setInputValues(e.target.value)
  }

  const inputUpdate = () => {
    console.log(inputValues);
  }

  return (
    <div>
        <div id='searchContainer'>
            <input onChange={inputHandle} type="text" placeholder='What need to be done?'/>
            <div className='searchIcon'>
                <i onClick={inputUpdate} className="fa-solid fa-plus"></i>
            </div>
        </div>
    </div>
  )
}

export default Search
