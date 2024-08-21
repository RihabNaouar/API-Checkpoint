import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log("This is the response from the link:", response);
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.log("The error is:", error);
            });
    }, []);

    return (
        <div>
            <ul className="user-list">
                {listOfUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <h3><span>The name is :</span> {user.name}</h3><hr className='line  '/>
                        <p className="address"><span className="address-label">The adress is : </span><br/>
                        {user.address.street}, {user.address.suite},{user.address.city}</p>
                        <p className="phone"><span className="phone-label">contact: : </span>{user.phone},</p>
                    </li>   
                ))}
            </ul>
        </div>
    );
}

export default UserList;
