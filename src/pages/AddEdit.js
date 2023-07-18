import React, { useEffect, useState } from "react";
import firedb from "../firebase";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const initalState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initalState);
  const [data, setData] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

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
  }, [id]);
  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initalState });
    }
    return () => {
      setState({ ...initalState });
    };
  }, [id, data]);

  const { name, email, contact } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
       
      toast.error("Please Provide value of ecah element");
    } else {
        if(!id){
            firedb.child("contacts").push(state, (err) => {
                if (err) {
                  toast.error(err);
                } else {
                  toast.success("Contact added successfully ");
                }
              });
        }else{
            firedb.child(`contacts/${id}`).set(state, (err) => {
                if (err) {
                  toast.error(err);
                } else {
                  toast.success("Contact updated successfully ");
                }
              });
        }
     
    }
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const handleInputChangr = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name || ""}
          onChange={handleInputChangr}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          value={email || ""}
          onChange={handleInputChangr}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contact</label>
        <input
          type="text"
          name="contact"
          value={contact || ""}
          onChange={handleInputChangr}
          className="form-control"
        />
      </div>
      <input type="submit" value={id ? "Update" : "Save"} className="btn btn-primary" />
    </form>
  );
};

export default AddEdit;
