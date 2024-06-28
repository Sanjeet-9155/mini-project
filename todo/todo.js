import React, { useState } from 'react';

const TodoList = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [rollN, setrollN] = useState('');
    const [age, setage] = useState('');
    const [formData, setFormData] = useState([]);
    const [editedIndex, setEditedIndex] = useState(-1);
    const [count, setCount] = useState(-1);

    const onSubmit = () => {




        let formArr = [...formData];

        let obj = {
            'fName': fName,
            'lName': lName,
            'rollN': rollN,
            'age': age
        };

        if (editedIndex !== -1) {
            formArr[editedIndex] = obj
            setFormData(formArr);
            setEditedIndex(-1)
        } else {
            formArr.push(obj);
            setFormData(formArr);
        }
        setIsOpenPopup(false);



    };

    const handleEdit = (index) => {
        setIsOpenPopup(true);
        setEditedIndex(index)
    }

    const handleDelete = (index) => {
        let temp = [...formData];
        let ans = []
        for (let i = 0; i < temp.length; i++) {
            if (index !== i) {
                 ans.push(temp[i]); 
            }
        }

        setFormData(ans)

    };

    const handleAddItem = () => {
        setfName('');
        setlName('');
        setrollN('');
        setage('');
        setIsOpenPopup(true);
    };

    const onChangeFirstName = (e) => {
        setfName(e.target.value);
    };

    const onChangeLastName = (e) => {
        setlName(e.target.value);
    };

    const onChangeRollNumber = (e) => {
        setrollN(e.target.value);
    };

    const onChangeAge = (e) => {
        setage(e.target.value);
    };

    const handleClose = () => {
        setIsOpenPopup(false);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{
                    height: 30,
                    width: 80,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: "center",
                }} onClick={handleAddItem}>Add items</button>
            </div>

            {formData?.length > 0 && formData.map((val, index) => {
                return (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                        <div style={{ backgroundColor: '#2F4F4F', display: 'flex', flexDirection: 'row', gap: 50, width: '50%', padding: 10 }}>
                            <div>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>First Name</p>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{val.fName}</p>
                            </div>
                            <div>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Last Name</p>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{val.lName}</p>
                            </div>
                            <div>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>RollNumber</p>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{val.rollN}</p>
                            </div>
                            <div>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Age</p>
                                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{val.age}</p>
                            </div>
                            <div>
                                <button onClick={() => handleEdit(index)} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169E1', background: '#4169E1', color: '#fff', fontSize: 14, cursor: 'pointer', padding: 10 }}>Edit</button>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(index)} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#B22222', background: '#B22222', color: '#fff', fontSize: 14, cursor: 'pointer', padding: 10 }}>Delete</button>
                            </div>
                        </div>
                    </div>

                )
            }
            )}

            {isOpenPopup && (
                <div style={{
                    height: 400,
                    width: 400,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#778899',
                    borderRadius: '10px',
                    padding: '60px',
                }}>
                    <div style={{ position: 'fixed', top: 0, left: 500, textAlign: 'left' }}>
                        <button onClick={handleClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>X</button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ alignItems: 'center', padding: '8px', borderRadius: '4px', border: 'none' }}>
                            <p>First Name</p>
                            <input type="text" placeholder="First Name" value={fName} onChange={onChangeFirstName}></input>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" placeholder="Last Name" value={lName} onChange={onChangeLastName}></input>
                        </div>
                        <div>
                            <p>Roll No</p>
                            <input type="text" placeholder="Roll No" value={rollN} onChange={onChangeRollNumber}></input>
                        </div>
                        <div>
                            <p>Age</p>
                            <input type="text" placeholder="Age" value={age} onChange={onChangeAge}></input>
                        </div>
                        <div>
                        </div>
                            <button style={{ height: 20, width: 60, marginTop: 20 }} onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoList;
