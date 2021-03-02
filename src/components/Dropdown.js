import React, { useState } from 'react';
import '../styles/dropdown.css';

const Dropdown = (props) => {

    const [list, updateList] = useState('');    

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        updateList(e.target.value);
    }   

    return (
        <>
            <div className="dropdown-wrapper">
                <select name="dropdown" value={list} onChange={handleChange}>
                    {props.dropdownList.map((option) => {
                        return (
                            <option key={option} value={option}>{option}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default Dropdown;