
import { useState } from 'react';
import { API_CONSTANTS } from '../constants/API.constants';
import { useNavigate } from "react-router-dom";
import { HOME } from './../constants/App.constants';


export const Register= () =>{

  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  //address data
  const [street, setStreet] = useState("");
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [favorite, setFavorite] = useState("");

  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handleBirthday = (e) =>{
    setBirthday(e.target.value)
  }

  const handleStreet = (e) =>{
    setStreet(e.target.value)
  }
  const handleCep = (e) =>{
    setCep(e.target.value)
  }
  const handleNumber = (e) =>{
    setNumber(e.target.value)
  }
  const handleCity = (e) =>{
    setCity(e.target.value)
  }
  /* const handleFavorite = (e) =>{
    setFavorite(e.target.value)
  } */


  const sendForm = async(e) =>{
    e.priventDefault();

    const params = {
      name,
      birthday,
      street,
      cep,
      number,
      city,
      //favorite
    };

    const response = await fetch(API_CONSTANTS.PERSON(), {
      method: `POST`,
      body: JSON.stringify(params),
      headers: { "Content-type": "application/json" },
    });

    if (response.status === 201) {
      alert("Sus datos se registraron correctamente");
      clear();
    } else {
      alert("Hubo un error al registrar los datos. Intentelo nuevamente.");
    }
  }

  const clear = () =>{
    setName("");
    setBirthday("");
    setStreet("");
    setCep("");
    setNumber("");
    setCity("");
  }

  const navigate = useNavigate();


  return(
    <div className="w-25 mx-auto mt-5">
    <h4 className="mb-3">Humano Registrate!</h4>
    <form className="needs-validation" noValidate>
      <div className="row g-3">
      <div className="col-12">
          <label htmlFor="text" className="form-label">
            NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="insert your name"
            name="name"
            value = {name}
            onChange={handleName}
          />
           <label htmlFor="text" className="form-label">
            BIRTHDAY
          </label>
          <input
            type="text"
            className="form-control"
            id="birthday"
            placeholder="dd/mm/yyyy"
            name="birthday"
            value = {birthday}
            onChange={handleBirthday}
          />
      </div>
      <div className="col-12">
        <div className="invalid-feedback">
            Please enter a valid address
        </div>
        <label htmlFor="text" className="form-label">
            STREET
        </label>
        <input
            type="text"
            className="form-control"
            id="street"
            placeholder="street"
            name="street"
            value = {street}
            onChange={handleStreet}
        />
         <label htmlFor="text" className="form-label">
            CEP
        </label>
        <input
            type="text"
            className="form-control"
            id="cep"
            placeholder="00000"
            name="cep"
            value = {cep}
            onChange={handleCep}
        />
         <label htmlFor="text" className="form-label">
            NUMBER
        </label>
        <input
            type="text"
            className="form-control"
            id="00"
            placeholder="number"
            name="number"
            value = {number}
            onChange={handleNumber}
        />
         <label htmlFor="text" className="form-label">
            CITY
        </label>
        <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city name"
            name="city"
            value = {city}
            onChange={handleCity}
        />

      {/*   <label htmlFor="text" className="form-label">
            IT´S YOUR PRINCIPAL ADRRESS?
        </label>
        <input
            type="checkbox"
            className="form-control"
            id="favorite"
            name="favorite"
            value = {favorite}
            onChange={handleFavorite}
        /> */}
         
      </div>

        <hr className="my-4" />
        <button
          className="w-100 btn btn-primary btn-lg"
          type="submit"
          onClick={sendForm}
        >
          Registrarme
        </button>
        <button
          className="w-100 btn btn-primary btn-lg"
          type="button"          
          onClick={() => navigate(HOME)}
        >
          Back
        </button>
      </div>
    </form>
  </div>
  )
}