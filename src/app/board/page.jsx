"use client";
import React, { useState } from "react";
import Teamcard from "@/components/TeamCard";
import BoardData from "@/data/BoardData";

const Board = () => {
  const [ismore, setIsMore] = useState(true);
  const [dropdown, setDropwown] = useState(false);
  const [year, setYear] = useState("2023");

  // Limit the number of items to display
  const Top3Position = BoardData[year].TopPosition.slice(0, 3);
  const TopPosition = BoardData[year].TopPosition.slice(3);
  const member = BoardData[year].member;

  const cheangeyear = (year) => {
    setYear(year);
    setDropwown(!dropdown);
  };

  return (
    <div className="container mx-auto flex flex-col items-center pt-10">
      <div className="text-4xl lg:text-6xl font-bold text-center">Our Team</div>
      <hr className="w-full my-10" />

      <div className="flex md:justify-end justify-center w-full relative z-50 ">
        <div className="dropdown inline-block relative">
          <button
            onClick={() => setDropwown(!dropdown)}
            className="bg-[#1d1163] text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="mr-1">{year}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          {dropdown ? (
            <ul className="dropdown-menu absolute w-full    text-white pt-1">
              <li className="">
                <button
                  onClick={() => {
                    cheangeyear("2023");
                  }}
                  className="rounded-t bg-[#1d1163]  w-full  py-2 px-4 block whitespace-no-wrap"
                >
                  2023
                </button>
              </li>
              <li className="">
                <button
                  onClick={() => {
                    cheangeyear("2022");
                  }}
                  className=" bg-[#1d1163] w-full     py-2 px-4 block whitespace-no-wrap"
                >
                  2022
                </button>
              </li>
              <li className="">
                <button
                  onClick={() => {
                    cheangeyear("2021");
                  }}
                  className="bg-[#1d1163] w-full  py-2 px-4   block whitespace-no-wrap"
                >
                  2021
                </button>
              </li>
              <li className="">
                <button
                  onClick={() => {
                    cheangeyear("2020");
                  }}
                  className="rounded-b w-full  bg-[#1d1163]    py-2 px-4 block whitespace-no-wrap"
                >
                  2020
                </button>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Check if Top3Position has elements before using map */}
      {Top3Position.length > 0 && (
        <div className="md:flex flex-wrap justify-center items-baseline w-full hidden md:w-[70vw] top_board">
          {Top3Position.map((user) => {
            if (user.position === "PRESIDENT") {
              return (
                <Teamcard
                  key={user.id}
                  height={220}
                  width={220}
                  name={user.name}
                  image={user.image}
                  position={user.position}
                  link={user.link}
                />
              );
            } else {
              return (
                <Teamcard
                  key={user.id}
                  height={120}
                  width={120}
                  name={user.name}
                  image={user.image}
                  position={user.position}
                  link={user.link}
                />
              );
            }
          })}
        </div>
      )}

      {/* Check if Top3Position has elements before using map */}
      {Top3Position.length > 0 && (
        <div className="flex flex-wrap justify-center items-baseline w-full md:hidden md:w-[70vw] top_board">
          {Top3Position.map((user) => {
            return (
              <Teamcard
                key={user.id}
                height={170}
                width={170}
                name={user.name}
                image={user.image}
                position={user.position}
                link={user.link}
              />
            );
          })}
        </div>
      )}

      <div className="grid md:grid-cols-5 gap-x-10 mx-10 place-items-baseline place-content-center">
        {TopPosition &&
          TopPosition.length > 0 &&
          TopPosition.map((user) => (
            <Teamcard
              key={user.id}
              height={130}
              width={130}
              name={user.name}
              image={user.image}
              position={user.position}
              link={user.link}
            />
          ))}
      </div>

      {ismore ? (
        <div className="flex px-[45px] w-full justify-end">
          <button
            onClick={() => {
              setIsMore(false);
            }}
            className="w-[30px] text-[18px]     font-bold rounded-full h-[30px] bg-blue-900 flex justify-center items-center text-white"
          >
            {">"}
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 gap-x-10 mx-10 place-items-baseline place-content-center">
          {member &&
            member.length > 0 &&
            member.map((user) => (
              <Teamcard
                key={user.id}
                height={130}
                width={130}
                name={user.name}
                image={user.image}
                position={user.position}
                link={user.link}
              />
            ))}
        </div>
      )}
      <br></br>
    </div>
  );
};

export default Board;
