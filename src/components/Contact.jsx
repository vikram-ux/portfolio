import React from 'react'



const Contact = () => {

    const onSubmit = async (event) => {
      alert("form submitted")
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
      {/* contacts */}
      <section className="contacts w-screen h-full bg-gray-950">
          <h1 className="contact-heading bg-gray-950 text-white text-center font-bold text-5xl pt-24">
            CONTACT
          </h1>
          <div className="border-2 border-gray-100 m-auto mt-7 w-9 font-extrabold rounded-full" ></div>

        
          <p
            
            className="contacts-para text-white text-center bg-gray-950 w-1/2  m-auto p-9"
          >
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          {/* Box  */}

          <form onSubmit={onSubmit} 
            id="contact"
            className="content-box w-3/5 h-4/5 bg-gray-900 text-white m-auto mt-20 rounded-sm "
          >
            <div className="name m-auto pt-12 text-center ">
              {/* <p className="text-center pt-7"> */}
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name='name'
                  
                  className="text-white font-semibold p-5 w-4/5  rounded-full bg-gray-950 outline-none "
                />
              {/* </p> */}
            </div>

            <div className="name m-auto text-center pt-7">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name='email'
                  
                  className="text-white font-semibold p-5 w-4/5  rounded-full bg-gray-950 outline-none"
                />
            </div>

            <div className="name m-auto text-center pt-7">
              {/* <label className="font-semibold" htmlFor="name">Name</label> */}
                <textarea
                name='message'
                  type="text"
                  placeholder="Enter Your Message"
                  
                  className="text-white font-semibold p-5 w-4/5 h-56 m-auto bg-gray-950 rounded-sm outline-none"
                />

            </div>

            <div className="button text-center">
              <button type='submit'
                className="bg-gray-300 text-black text-xl p-4 pb-4 pl-8 pr-8 font-bold border-none rounded-full mt-6 mb-7 shadow-2xl hover:bg-purple-700 hover:text-white duration-300 w-4/5 active:scale-95"
              >
                Submit
              </button>
            </div>

            <div className="contact-info pb-10">
           <a href="tel:+91 9258528799"><div className="contact-type bg-slate-950 w-80 h-12 flex justify-center items-center mx-auto mb-7 rounded-md "> <i className="fa-solid fa-phone pr-2 text-lg"></i> 
            +91 9258528799
          </div></a> 
          <a href="mailto: vikramsinvk@gmail.com"><div className="contact-type bg-slate-950 w-80 h-12 flex justify-center items-center mx-auto rounded-md"> <i className="fa-solid fa-envelope text-white pr-2 text-xl"></i>
            vikramsinvk@gmail.com
          </div></a>
          </div>
          </form>
          
        </section>
    </>
  )
}

export default Contact
