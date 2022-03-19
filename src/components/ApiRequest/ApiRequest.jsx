import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApiRequest() {
    const [users, setUsers] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/users";

    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await fetch(url);
    //         const response = await data.json(data);
    //         console.log(response);
    //         setUsers(response);
    //     }
    //     fetchData();
    // }, []) primer método: async await

    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response);
    //         setUsers(response);
    //     })
    // }, []); segundo método: fetch

    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            console.log(response);
            setUsers(response.data);
        })
    }, []);

  return (
    <div>
        {users.map((user) => {
            return (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                {/* <img src={user.image} alt="" /> */}
            </div>
            )
        })}
    </div>
  )
}
