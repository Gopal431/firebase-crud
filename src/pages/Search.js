import React, { useEffect, useState } from "react";
import firedb from "../firebase";
import { useLocation } from "react-router-dom";
const Search = () => {
  const [data, setData] = useState({});
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  let search = query.get("name");
  useEffect(() => {
    searchData();
  }, [search]);
  const searchData = () => {
    firedb
      .child("contacts")
      .orderByChild("name")
      .equalTo(search)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
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
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Search;
