import React, { useState } from 'react';

const AddUser = () => {

    // want to keep many fields in a one state should use this system
    const [user, setUser] = useState({});

    const handleAddUser = e => {
        e.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('User added successfully');
                }
            })

        e.target.reset();
    };

    const handleInputBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newUser = { ...user }; // being state is used optional chaining 
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2> Please add a user</h2>

            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='email' required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;