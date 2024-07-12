"use client";
import React, { useState } from "react";
import Teamcard from "@/components/TeamCard";
import BoardData from "@/data/BoardData";

const Board = () => {
  const [ismore, setIsMore] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [year, setYear] = useState("2024");

  const Top3Position = BoardData[year].TopPosition.slice(0, 3);
  const TopPosition = BoardData[year].TopPosition.slice(3);
  const member = BoardData[year].member;

  const changeYear = (year) => {
    setYear(year);
    setDropdown(!dropdown);
  };

  const renderTeamcards = (users, height, width) => {
    return users.map((user) => (
      <Teamcard
        key={user.id}
        height={height}
        width={width}
        name={user.name}
        image={user.image}
        position={user.position}
        link={user.link}
      />
    ));
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="text-4xl lg:text-6xl font-semibold text-center">
        Our Team
      </div>
      <hr className="w-full my-8" />

      <div className="flex md:justify-end justify-center w-full relative z-50">
        <div className="dropdown inline-block relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="bg-[#1d1163] text-white font-semibold py-2 px-4 rounded-t inline-flex items-center"
          >
            <span className="mr-1">{year}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          {dropdown && (
            <ul className="dropdown-menu absolute w-full text-white ">
              {["2024", "2023", "2022"].map((yr, index, array) => (
                <li key={yr}>
                  <button
                    onClick={() => changeYear(yr)}
                    className={`bg-[#1d1163] w-full py-2 px-4 block whitespace-no-wrap ${
                      index === array.length - 1 ? "rounded-b" : ""
                    }`}
                  >
                    {yr}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {Top3Position.length > 0 && (
        <>
          <div className="md:flex flex-wrap justify-center items-baseline w-full hidden md:w-[70vw]">
            {Top3Position.map((user) => (
              <Teamcard
                key={user.id}
                height={user.position === "PRESIDENT" ? 230 : 200}
                width={user.position === "PRESIDENT" ? 230 : 200}
                name={user.name}
                image={user.image}
                position={user.position}
                link={user.link}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-baseline w-full md:hidden md:w-[70vw]">
            {renderTeamcards(Top3Position, 200, 200)}
          </div>
        </>
      )}

      <div className="grid md:grid-cols-4 gap-x-10 mx-10 place-items-baseline place-content-center">
        {renderTeamcards(TopPosition, 200, 200)}
      </div>

      {ismore ? (
        <div className="flex px-[45px] w-full justify-end">
          <button
            onClick={() => setIsMore(false)}
            className="w-[30px] text-[18px] font-bold rounded-full h-[30px] bg-blue-900 flex justify-center items-center text-white"
          >
            {">"}
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 gap-x-10 mx-10 place-items-baseline place-content-center">
          {member && member.length > 0 && renderTeamcards(member, 200, 200)}
        </div>
      )}
      <br />
    </div>
  );
};

export default Board;
