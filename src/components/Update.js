import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = e => {
        e.preventDefault();
        console.log(user);

        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert('User updated');
                }
                console.log(data)
            })
    };

    const handleInputOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    };

    return (
        <div>
            <h2>Please Update: {storedUser.name}</h2>

            <form onSubmit={handleUpdateUser}>
                <input onBlur={handleInputOnChange} type="text" defaultValue={storedUser.name} name='name' placeholder='name' />
                <br />
                <input onBlur={handleInputOnChange} type="text" defaultValue={storedUser.address} name='address' placeholder='address' />
                <br />
                <input onBlur={handleInputOnChange} type="email" defaultValue={storedUser.email} name="email" id="" placeholder='email' />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;