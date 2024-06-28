import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editedIndex, setEditedIndex] = useState('');

    const handleAdd = (e) => { 
        let obj = {
            text: inputValue 
        }
        let temp = [...todos]
        temp.push(obj)
        setTodos(temp)
        setInputValue('')
    };


    const handleDelete = (index) => {
        let temp = [...todos]
        let ans = []
        for(let i = 0; i < temp.length; i++){
            if(index !== i)
            ans.push(temp[i]);
        }
        setTodos(ans);

    };

    const handleEdit = (index) => {
        let previousValue = todos[index].text
        setInputValue(previousValue)
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>TODO_LIST</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    <input 
                        style={{
                            backgroundColor: '',
                            height: 30,
                            width: 600,
                            margin: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', width: 600, }}>
                    <button
                        style={{
                            backgroundColor: '#000000',
                            color: '#fff',
                            fontSize: 14,
                        }}
                        onClick={handleAdd}>ADD</button>
                </div>
            </div>

            <div style={{ justifyContent: 'center', backgroundColor: '', marginTop: 30 }}>
                
                {todos.map((todo, index) => (
                    <div key={todo.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '', padding: 20 }}>
                        <div style={{
                            backgroundColor: 'gray',
                            height: 20,
                            width: 550,
                            padding: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <p>{todo.text}</p>
                            </div>
                            <div>
                                <button onClick={() => handleEdit(index) }> Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList;
