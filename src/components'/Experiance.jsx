import React from 'react'
import html from "../../public/html.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import nodejs from "../../public/node.png";
import css from "../../public/css.png";
import springboot from "../../public/springboot.png";
import mongodb from "../../public/mongodb.png";

export function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript"
    },
    {
      id: 4,
      logo: springboot,
      name: "SpringBoot"
    },
    {
      id: 5,
      logo: java,
      name: "java"
    },
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-black text-white py-10 rounded-lg">
      <div>
        <h1 className="text-2xl font-bold mb-5">Experience</h1>
        <span className="text-gray-400">
          I've more than 2 years of experience in the technologies below
        </span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-5">
          {
            cardItem.map(({ id, logo, name }) => (
              <div className="flex flex-col items-center border border-gray-600 p-4 md:h-[200px] md:w-[200px] cursor-pointer hover:scale-110 duration-300 rounded-xl" key={id}>
                <img src={logo}
                  className="w-[100px] h-[100px] rounded-full object-contain"
                  alt="" />
                <div className="mt-3 font-semibold">{name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
