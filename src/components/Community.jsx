import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityService from "../services/Community.service";
import { HOME } from "../constants/App.constants";
import "./Community.css";


export const Community = () => {
  const [person, setPerson] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    CommunityService.getAllCharacters()
      .then((response) => setPerson(response.person))
      .catch(() => setPerson([]));
  }, []);

  useEffect(() => {
    CommunityService.getAllCharacters()
      .then((response) => setPerson(response.address))
      .catch(() => setAddress([]));
  }, []);

  const rowsA = address.map((m, i) => {
    <tr key={i}>
      <td>
        {m.number} + ("") + {m.city}
      </td>
    </tr>;
  });
  const rows = person.map((m, i) => {
    <tr key={i}>
      <td>{m.name}</td>
      <td>{m.birthdate}</td>
      <td>{rowsA}</td>
    </tr>;
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="div-imagen-fondo">
        <h1 className="display-4 text-center">Astronaut Community</h1>
        <div className="container-fluid">
          <table className="table table-bordered table-hover tabla">
            <thead>
              <tr className="text-center text-dark">
                <th scope="col">Name</th>
                <th scope="col">Birthday</th>
                <th scope="col">Adress</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
        <button
          className="w-100 btn btn-primary btn-lg"
          type="button"
          onClick={() => navigate(HOME)}
        >
          Back
        </button>
      </div>
    </>
  );
};
