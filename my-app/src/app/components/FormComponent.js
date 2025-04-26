"use client";

import React, { useState, useRef } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedOptionError, setSelectedOptionError] = useState("");
  const [fileError, setFileError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);

    setNameError("");
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    setEmailError("");
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    setSelectedOptionError;
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // console.log(event.target.files)
    setFile(selectedFile);
    setFileError("");
  };

  const hadleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/@(google\.com|yahoo\.com)$/.test(email)) {
      //regex
      setEmailError("Invalid email format, use google.com or yahoo.com");
      isValid = false;
    }

    if (!selectedOption) {
      setSelectedOptionError("please select an option");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    console.log(`Form data:`, { name, email, selectedOption, file });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("selectedOption", selectedOption);
    formData.append("file", file);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response", result);
      } else {
        const errorData = await response.json();
        console.error("API Error", errorData);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error while submitting form");
    }

    setName("");
    setEmail("");
    setSelectedOption("");
    setFile(null);

    setNameError("");
    setEmailError("");
    setSelectedOptionError("");
    setFileError("");
  };

  return (
    <form onSubmit={hadleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="block text-xl text-blue-500 font-bold mb-2">Controlled Form</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-amber-50"
        />
        {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your Email here..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-amber-50"
        />
        {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="options" className="block text-gray-700 text-sm font-bold mb-2">
          Select an option:
        </label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleSelectChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-amber-50"
        >
          <option value="">-- Select --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {selectedOptionError && <p className="text-red-500 text-xs italic">{selectedOptionError}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">
          Upload FIle:
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-amber-50"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-amber-50"
      >
        Submit
      </button>
    </form>
  );
}

function UnControlledForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const hadleSubmit = (event) => {
    event.preventDefault();
    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;

    console.log(`Form data dari (uncontrolled):`, { name: nameValue, email: emailValue });

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <form onSubmit={hadleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="block text-xl text-blue-500 font-bold mb-2">Uncontrolled Form</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          placeholder="Your Name..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-amber-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          placeholder="Your Email here..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-amber-50"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-amber-50"
      >
        Submit
      </button>
    </form>
  );
}

export { ControlledForm, UnControlledForm };