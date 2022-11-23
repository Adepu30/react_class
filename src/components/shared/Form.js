import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const defaultInfo = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
    location: "",
  };

  const [info, setInfo] = useState({ ...defaultInfo });
  const [validation, setValidation] = useState({ ...defaultInfo });
  const [body, setBody] = useState([]);

  const upDate = (e) => {
    console.log(e);
    const { name, value } = e.target;
    // setInfo({ ...info, [name]: value });
    switch (name) {
      case "fname":
        setInfo(
          // { ...info, fname: value }
          (prev) => {
            let st = { ...prev };
            st.fname = value;
            return st;
          }
        );
        setValidation({ ...validation, fname: "" });
        // setValidation(...validation,fname);
        break;

      case "lname":
        setInfo((prev) => {
          let st = { ...prev };
          st.lname = value;
          return st;
        });
        setValidation({ ...validation, lname: "" });
        break;
      case "email":
        if (value !== "") {
          if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(
              value
            )
          ) {
            setValidation({ ...validation, email: "" });
          } else {
            setValidation({ ...validation, email: "Enter A valid Email" });
          }
        } else {
          setValidation({ ...validation, email: "Email is required" });
        }
        setInfo((prev) => {
          let st = { ...prev };
          st.email = value;
          return st;
        });

        break;
      case "contact":
        // const digitRegExp = /[6-9]{0,1}[0-9]{0,9}/;
        // if (digitRegExp.test(value))
        setInfo((prev) => {
          let st = { ...prev };
          st.contact = value;
          return st;
        });
        setValidation({ ...validation, contact: "" });
        // /^[0-9]{10}/;
        break;
      case "location":
        setInfo((prev) => {
          let st = { ...prev };
          st.location = value;
          return st;
        });
        setValidation({ ...validation, location: "" });
        break;

      default:
    }
  };

  const submit = (e) => {
    e.preventDefault();
    let errors = { ...validation };
    let validate = true;
    if (info.fname.trim() === "") {
      validate = false;
      errors.fname = "First Name is required";
    } else {
      errors.fname = "";
    }

    if (info.lname.trim() === "") {
      validate = false;
      errors.lname = "Last Name is required";
    } else {
      errors.lname = "";
    }
    const emailCond =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    if (info.email.trim() === "") {
      validate = false;
      errors.email = "Email is required";
    } else if (!emailCond.test(info.email.trim())) {
      validate = false;
      errors.email = "Please enter a valid email id";
    } else {
      errors.email = "";
    }
    const contactCond = /^[0-9]{10}$/;
    if (info.contact.trim() === "") {
      validate = false;
      errors.contact = "Contact Number is required";
    } else if (!contactCond.test(info.contact.trim())) {
      validate = false;
      errors.contact = "Please enter a valid number";
    } else {
      errors.contact = "";
    }
    if (info.location.trim() === "") {
      validate = false;
      errors.location = "Location is required";
    } else {
      errors.location = "";
    }

    if (validate) {
      const data = { ...info, id: new Date().getTime().toString() };
      setBody([...body, data]);
      setInfo({ ...defaultInfo });
    }

    setValidation(errors);
  };

  return (
    <>
      <div>
        <form onSubmit={submit} className="card_info">
          <div>
            <label htmlFor="fname" className="card_category">
              First Name:
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="card_category"
              value={info.fname}
              onChange={upDate}
            />
            {validation.fname}
          </div>
          <div>
            <label htmlFor="lname" className="card_category">
              Last Name:
            </label>
            <input
              type="text"
              name="lname"
              value={info.lname}
              id="lname"
              className="card_category"
              onChange={upDate}
            />
            {validation.lname}
          </div>
          <div>
            <label htmlFor="email" className="card_category">
              E Mail:
            </label>
            <input
              type="text"
              name="email"
              value={info.email}
              id="email"
              className="card_category"
              onChange={upDate}
            />
            {validation.email}
          </div>
          <div>
            <label htmlFor="contact" className="card_category">
              Contact No:
            </label>
            <input
              type="text"
              name="contact"
              value={info.contact}
              id="contact"
              className="card_category"
              onChange={upDate}
            />
            {validation.contact}
          </div>
          <div>
            <label htmlFor="location" className="card_category">
              Location:
            </label>
            <input
              type="text"
              name="location"
              value={info.location}
              id="location"
              className="card_category"
              onChange={upDate}
            />
            {validation.location}
          </div>
          <button type="submit">Submit</button>
        </form>
        <hr />
        <div className="card_title"> user information</div>
        {body.map((value, index) => {
          return (
            <div className="card" key={"id" + index}>
              <p className="card_info">
                <span className="card_category">Full Name: </span>
                {value.fname} {value.lname}
              </p>

              <p className="card_info">
                <span className="card_category">Email: </span>
                {value.email}
              </p>
              <p className="card_info">
                <span className="card_category">Contact No: </span>
                {value.contact}
              </p>
              <p className="card_info">
                <span className="card_category">Location: </span>
                {value.location}
              </p>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Form;
