import React, { useEffect, useState } from "react";
import firedb from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
const View = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const { id } = useParams();
  useEffect(() => {
    firedb
      .child(`contacts/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  return (
    <div>
      <div className="card" >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{user.name}</li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">{user.contact}</li>
        </ul>
      </div>
      <button type="button" onClick={()=>navigate('/')} className="btn btn-primary m-2">Back</button>
    </div>
  );
};

export default View;
