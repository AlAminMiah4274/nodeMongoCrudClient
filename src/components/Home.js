import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData();
    // this state is declared for removing data form the client side without refresh
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        // to take opinion of the user
        const agree = window.confirm(`Are you sure? You want to delete: ${user.name}`);
        if (agree) {
            // console.log(`Deleting user with id: ${user._id}`);
            // to send data to the database which user will be deleted from the database
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // to inform about deleting confirmation to the user
                    if (data.deletedCount > 0) {
                        alert('Deleted user successfully.');
                        // to get remainig users 
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                })
        }
    };

    return (
        <div>
            <h2>Users: {displayUsers.length}</h2>

            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user.name} : {user.email} <button onClick={() => handleDelete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;