import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApiRequest() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then(
//         (response) => {
//           console.log(response);
//           setLoading(true);
//           setUsers(response);
//         },
//         (error) => {
//           console.log("error:" + error);
//           setLoading(true);
//           setError(error);
//         }
//         // podemos manejar los errores de la petición dentro del .then para que no se crucen con la propia petición
//       )
//     //   .catch((error) => {
//     //     console.log("error:" + error);
//     //     setLoading(true);
//     //     setError(error);
//     //   }) podemos manejarlos con .catch
//       .finally(() => setLoading(false));
//   }, []); //segundo método: fetch

  useEffect(() => {
      axios
      .get(url)
      .then(response => {
          console.log(response);
          //setLoading(true);
          setUsers(response.data);
      }, error => {
          setLoading(true);
          setError(error);
      })
      //.catch((error) => {
        //     //     console.log("error:" + error);
        //     //     setLoading(true);
        //     //     setError(error);
        //     //   })
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else
    return (
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              {/* <img src={user.image} alt="" /> */}
            </div>
          );
        })}
      </div>
    );
}
