import React, { useState } from "react";
import "./styles.css";
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForm = () => {
    const newErrors = {};
    const mobileRegex = /^\d{10}$/;
    newErrors.name = !formData.name.trim() && "Field is required";
    newErrors.email = !formData.email.trim() && "Field is required";
    newErrors.mobile =
      (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) &&
      "Mobile Number Invalid";
    newErrors.age =
      (!formData.age.trim() || formData.age <= 0) && "Field is required";

    setError(newErrors);
  };

  return (
    <div className="container">
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            className="input"
            value={formData.mobile}
            onChange={handleChange}
          />
          {error.mobile && <p style={{ color: "red" }}>{error.mobile}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            className="input"
            value={formData.age}
            onChange={handleChange}
          />
          {error.age && <p style={{ color: "red" }}>{error.age}</p>}
        </div>

        <button onClick={handleForm}>Submit</button>
      </div>
    </div>
  );
};

export default Home;
