import React, { useEffect, useState } from "react";
import firedb from "../firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    firedb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);
  const onDelete = (id) =>{
    if(window.confirm("are you sure to delete this contact")){
      firedb.child(`contacts/${id}`).remove((err)=>{
        if(err){
          toast.error(err)
        }else{
          toast.success("Contact Deleted successfully")
        }
      })
    }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <td>
                    <Link to={`/update/${id}`}>
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button type="button" onClick={()=>onDelete(id)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/view/${id}`}>
                      <button type="button" className="btn btn-info">
                        View
                      </button>
                    </Link>
                  </td>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
