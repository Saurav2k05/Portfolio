import React from 'react'
import react from "../../public/react.png";
import java from "../../public/java.png";
import python from "../../public/python.png";
import nodejs from "../../public/node.png";
import css from "../../public/css.png";
import express from "../../public/express.png";
import mongodb from "../../public/mongodb.png";

export function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongodb,
      name: "mongodb"
    },
    {
      id: 2,
      logo: express,
      name: "express"
    },
    {
      id: 3,
      logo: react,
      name: "reactJs"
    },
    {
      id: 4,
      logo: nodejs,
      name: "nodeJs"
    },
    {
      id: 5,
      logo: python,
      name: "python"
    },
  ];
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10 bg-black text-white py-10 rounded-lg">
      <div>
        <h1 className="text-2xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-gray-300">Featured Projects</span>
        <div className="grid grid-col-1 md:grid-cols-4 gap-6 my-5">
          {
            cardItem.map(({ id, logo, name }) => (
              <div className="md:w-[300px] md:h-[300px] border border-gray-600 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300" key={id}>
                <img src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-2 border-gray-500 mx-auto"
                  alt="" />
                <div className="text-center mt-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-400 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex justify-center px-4 py-4 space-x-4">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded">Video</button>
                  <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-2 rounded">Source code</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
} 