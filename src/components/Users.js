import { useEffect, useState } from "react";
import BasicExample from './BasicExample';

function Users(){
    const[users,setUsers]=useState( );
    let [loading,setLoading]=useState(false);

    function enableSpinner() {
      setLoading(loading=true)
    }
    
    function  disableSpinner () {
      setLoading(loading=false)
    }

  useEffect(()=>{
        const fetchData = async () => {
          await fetch(`https://reqres.in/api/users?page=1`)
            .then((res) => res.json())
            .then((e) => {setUsers(e.data) }
            )
            .catch((e) => console.error(e));
        };
        enableSpinner();
        fetchData();
      setTimeout(() => {
          fetchData();
          disableSpinner();
        }, 3000);
       
       
  },[]);
 
 const newUsers=users?.map((user)=>{
    return <div className="card m-4 col-lg-3 text-center p-3 col-md-4" key={user.id}>
    <img src={user.avatar} className="card-img-top rounded-circle d-inline-block m-auto " alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{user.first_name} {user.last_name}</h5>
      <p className="card-text">Email: {user.email}</p>
    </div>
  </div>
  })
    return(
        <>
         {
      loading ? (
         <BasicExample />
      )
      
      :(
        <div>
          <h1 className="text-center p-3">All Users</h1>
        <div className="row d-flex justify-content-center">
     {newUsers}
      </div>
        </div>
      )
      }
     
      
      
        </>
    );
}
export default Users;