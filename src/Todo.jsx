import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import List from "./List.jsx";

const Todo = () => {
    const [item, setitem] = useState();
    const [newitem, setnewitem] = useState([]);

    const itemEvent = (event) => {
        setitem(event.target.value)
    };

    const listofItem=()=>{
        setnewitem((preValue)=>{
            console.log(preValue)
            return [...preValue,item]
        })
        setitem("");
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent} />
                    <Button className="newBtn" onClick={listofItem}><AddIcon /></Button>
                    <br />
                    <ol>{
                        newitem.map((val, index)=>{
                            return <List key={index} text={val}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Todo;