import React from "react";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f78423f9-6ad1-47e2-af9e-042f3785adef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
     <section className="contacts w-screen h-full bg-gray-950">
          <h1 className="bg-gray-950 text-white text-center font-bold text-5xl">
            CONTACT
          </h1>
          <p
            id="contacts"
            className="text-white text-center bg-gray-950 w-1/2  m-auto p-9"
          >
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

       <form onSubmit={onSubmit} className="bg-green-400">
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
      
      </section>
    
    </>
  );
}

export default App;