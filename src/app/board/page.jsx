"use client";
import React, { useState } from "react";
import Teamcard from "@/components/TeamCard";
import BoardData from '@/data/BoardData';

const Board = () => {


  const [ismore, setIsMore] = useState(true);
  const [dropdown,setDropwown]=useState(false);
  const [year,setYear] = useState('Y2023');

  // Limit the number of items to display
  const Top3Position =  BoardData[year].TopPosition.slice(0, 3);
  const TopPosition = BoardData[year].TopPosition.slice(3);
  const member = BoardData[year].member;



  return (
    <>
      <div className="mx-10 flex flex-col items-center pt-10">
        <h1 className="font-bold text-3xl text-center text-[6vw]">OUR TEAM</h1>
        <hr className=" mt-[5vw] w-full" />

        
        <div className="flex md:justify-end justify-center  w-full p-5 relative z-50 ">
      

            <div className="dropdown inline-block relative">
              <button onClick={()=> setDropwown(!dropdown)} className="bg-[#1d1163] text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">{year}</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              {(dropdown) ? (
                <ul className="dropdown-menu absolute w-full    text-white pt-1">
                <li className=""><button onClick={()=> {setYear('Y2023');setDropwown(!dropdown)}} className="rounded-t bg-[#1d1163]  w-full  py-2 px-4 block whitespace-no-wrap" >2023</button></li>
                <li className=""><button onClick={()=> {setYear('Y2022');setDropwown(!dropdown)}} className=" bg-[#1d1163] w-full     py-2 px-4 block whitespace-no-wrap" >2022</button></li>
                <li className=""><button onClick={()=> {setYear('Y2021');setDropwown(!dropdown)}} className="bg-[#1d1163] w-full  py-2 px-4   block whitespace-no-wrap" >2021</button></li>
                <li className=""><button onClick={()=> {setYear('Y2020');setDropwown(!dropdown)}} className="rounded-b w-full  bg-[#1d1163]    py-2 px-4 block whitespace-no-wrap" >2020</button></li>
              </ul>
              ): ''}
            </div>

          
        </div>

        <div className="md:flex    flex-wrap  justify-center items-baseline w-full hidden  md:w-[70vw] top_board">
          {Top3Position.map((user) => {
            if (user.position == "PRESIDENT") {
              return <Teamcard key={Math.random()} height={440} width={440} name={user.name} image={user.image} position={user.position} link={user.link} />
            } else {
              return <Teamcard key={Math.random()} height={170} width={170} name={user.name} image={user.image} position={user.position} link={user.link} />
            }
          })}
        </div>

        <div className="flex    flex-wrap  justify-center items-baseline w-full md:hidden  md:w-[70vw] top_board">
          {Top3Position.map((user) => {
             return <Teamcard key={Math.random()} height={170} width={170} name={user.name} image={user.image} position={user.position} link={user.link} />
            
          })}
        </div>

        <div className="grid    md:grid-cols-5 gap-x-10   mx-10  place-items-baseline place-content-center">
          {TopPosition.map((user) => (
            <Teamcard key={Math.random()} height={130} width={130} name={user.name} image={user.image} position={user.position} link={user.link} />
          ))}
        </div>



        {(ismore) ? (
          <div className="flex px-[45px] w-full justify-end">
            <button onClick={() => { setIsMore(false) }} className="w-[30px] text-[18px]     font-bold rounded-full h-[30px] bg-blue-900 flex justify-center items-center text-white">{">"}</button>
          </div>
        ) :
          <div className="grid md:grid-cols-5 gap-x-10   mx-10  place-items-baseline place-content-center">
            {member.map((user) => (
              <Teamcard key={Math.random()} height={130} width={130} name={user.name} image={user.image} position={user.position} link={user.link} />
            ))}
          </div>
        }

        <hr className=" mt-5 w-full" />

        <br></br>
      </div>
    </>
  );
};

export default Board;
