import React from "react";
import { BsCheck } from "react-icons/bs";
import { FormData } from "../models/FormData.model";

export default function ContactPage() {
  // TODO:- Complete contact Page
  const [fromSubmitted, setFormSubmitted] = React.useState(false);

  const [formData, setFormData] = React.useState<FormData>({
    email:"",
    title: "",
    description: ""
  })

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // FIXME:- Implement proper error handling
    setFormSubmitted(true)
    clearFormData()
  }

  const clearFormData = () => {
    setFormData({email:"",title:"",description:""});
  }

  const handleValueChange = (e: any) => {
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  if (!fromSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h3 className="text-4xl font-bold text-slate-200">Contact Me</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-xl p-5 mx-auto space-y-5">
          <input
            placeholder="Enter Email.."
            type="email"
            name="email"
            value={formData.email}
            onChange={handleValueChange}
            className="w-full max-w-2xl p-2 text-center rounded-md placeholder:text-slate-800 placeholder:text-sm" />
          <input
            placeholder="Enter title..."
            type="text"
            name="title"
            value={formData.title}
            onChange={handleValueChange}
            className="w-full max-w-2xl p-2 text-center rounded-md placeholder:text-slate-800 placeholder:text-sm" />
          <textarea
            placeholder="Enter Description..."
            name="description"
            value={formData.description}
            onChange={handleValueChange}
            className="h-[10rem] rounded-md placeholder:text-sm text-center placeholder:text-slate-800 p-2"
          />
          <button
            type="submit"
            className='p-3 duration-100 ease-in-out transform bg-blue-400 rounded-md hover:text-white hover:bg-blue-500'>
            Submit
          </button>
        </form>
      </div>
    );
  }
  else {
    return (
      <div className="flex  items-center justify-center w-screen h-screen">
        <div className="w-[80vw] group max-w-2xl h-[30vh] text-black bg-green-100 rounded-md flex justify-center align-center items-center flex-col gap-2">
          <h3 className="text-2xl sm:text-4xl text-slate-600">Success</h3>
          <div className="bg-green w-[100px] h-[100px] rounded-full animate-pulse sm:animate-none group-hover:animate-pulse duration-100 transition ease-in-out bg-green-300 flex justify-center align-center items-center">
            <BsCheck className="text-8xl text-white font-extrabold"/>
          </div>
          <p className="text-slate-600 font-bold">Thank You for Submitting!</p>
        </div>
      </div>
    )
  }
}
