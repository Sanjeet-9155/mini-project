import React, { useState } from "react";

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div style={{
            position: 'absolute',
            left: '30%',
            top: '30%'
        }}>
            <div style={{
                height: 400,
                width: 400,
                backgroundColor: 'gray',
                
            }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <div>
                        <p style={{}}>First Name</p>
                        <input type="text" placeholder="First Name" value={firstName} onChange={onChangeFirstName}></input>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <div>
                        <p style={{}}>Last Name</p>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={onChangeLastName}></input>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <div>
                            <p style={{}}>Email Address</p>
                            <input type="text" placeholder="Email Address" value={email} onChange={onChangeEmail}></input>
                        </div>

                        <div>
                            <p style={{}}>Password</p>
                            <input type="password" placeholder="Password" value={password} onChange={onChangePassword}></input>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div>
                                <button style={{
                                    height: 30,
                                    width: 80,
                                    marginTop: 20
                                }} onClick={onSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
