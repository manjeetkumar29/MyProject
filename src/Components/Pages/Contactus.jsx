import axios from "axios";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import base_url from "../../Utils/server";
// import base_url from "../../Utils/server";


export default function Contactus() {
//   const [token,setToken] =useState(null);

//   useEffect(()=>{
//     if(sessionStorage.getItem("jwtToken")){
//       let t=sessionStorage.getItem("jwtToken")
//       setToken(t);
//   }
//   },[])
//   function handlequery() {
//     let nm = document.getElementById("nm").value;
//     let em = document.getElementById("em").value;
//     let sm = document.getElementById("sm").value;
//     let mm = document.getElementById("mm").value;
//     let myfm = document.getElementById("myfm");
    // const id = toast.loading("Sending Query...", {
    //   position: toast.POSITION.TOP_RIGHT,
    // });
    // try {
    //   axios
    //     .post(`${base_url}/contactus/create`, {
    //       "name":nm,
    //       "email":em,
    //       "subject":sm,
    //       "message":mm
    //       }
    //       )
    //     .then((res) => {
          
    //       if (res.data.status == "fail") {
    //         setTimeout(
    //           function () {
    //             toast.update(id, {
    //               render: res.data.message,
    //               type: "error",
    //               isLoading: false,
    //               position: toast.POSITION.TOP_RIGHT,
    //               autoClose: 1000,
    //             });
    //           },
    //           [500]
    //         );
    //       }
    //       else{
    //         myfm.reset();
    //         toast.update(id, {
    //           render: "Query Send Successfully",
    //           type: "success",
    //           isLoading: false,
    //           position: toast.POSITION.TOP_RIGHT,
    //           autoClose: 1500,
    //         });
    //       }         
    //     })
    //     .catch((e) => {
    //       // console.log(e);
    //       toast.update(id, {
    //         render: "Error Sending Query",
    //         type: "error",
    //         isLoading: false,
    //         position: toast.POSITION.TOP_RIGHT,
    //         autoClose: 1000,
    //       });
    //     });
    // } catch (err) {
    //   // console.log(err);
    //   toast.update(id, {
    //     render: "Error Sending Query",
    //     type: "error",
    //     isLoading: false,
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 1000,
    //   });
    // }
//   }
function handlequery() {
    console.log("object")
}

  return (
    <div>
      {/* <Navbar /> */}
      <main className="flex overflow-hidden">
        <div className="flex-1 hidden lg:block">
          <img
            src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
          <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
            <div>
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Get in touch
              </h3>
              <p className="mt-3">
                We’d love to hear from you! Please fill out the form bellow.
              </p>
            </div>
            <form
              id="myfm"
              onSubmit={(e) => {
                e.preventDefault();
                handlequery();
              }}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  id="nm"
                  name="name"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  id="em"
                  required
                  name="email"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Subject</label>
                <input
                  type="text"
                  id="sm"
                  required
                  name="subject"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  id="mm"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
