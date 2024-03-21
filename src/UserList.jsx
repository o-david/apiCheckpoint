import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [data, setData] = useState();// where to store the returned data
    const [error, setError] = useState(null);// where to store the coming errors
    console.log(data)
    useEffect(() => {
      function fetchData() {// the function to fetch data from the api
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(res =>setData(res.data))
        .catch(err => setError(err));
      }
   
      fetchData();
    }, []);
  return (
    <div className='container'>
        {
            data && data.map(user =>(
                <div className='user'>
                    <h1>{user.name}</h1>
                    <h4>{user.email}</h4>
                    <h3>{user.company.name}</h3>
                    <h3>{user.address.geo.lng}</h3>


                </div>
            ))
        }
    </div>
  )
}

export default UserList