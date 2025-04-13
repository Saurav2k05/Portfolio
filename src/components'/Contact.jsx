import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"

export function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      await axios.post("https://getform.io/f/bejrdqma", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.success("Something went wrong");
    }
  }

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-black text-white py-10 rounded-xl"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span className="text-gray-400">Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            action="https://getform.io/f/bejrdqma"
            method="POST"
            className="bg-gray-900 w-96 px-8 py-6 rounded-xl shadow-lg"
          >
            <h1 className="font-semibold text-xl mb-4 text-white">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow appearance-none border border-gray-700 rounded-lg py-2 px-3 bg-black text-white leading-tight focus:outline-none"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Email Address</label>
              <input
                {...register("Email", { required: true })}
                className="shadow appearance-none border border-gray-700 rounded-lg py-2 px-3 bg-black text-white leading-tight focus:outline-none"
                id="email"
                name="Email"
                type="text"
                placeholder="Enter Your Email"
              />
              {errors.Email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Message</label>
              <input
                {...register("Message", { required: true })}
                className="shadow appearance-none border border-gray-700 rounded-lg py-2 px-3 bg-black text-white leading-tight focus:outline-none"
                id="message"
                name="Message"
                type="text"
                placeholder="Enter Your Query"
              />
              {errors.Message && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
