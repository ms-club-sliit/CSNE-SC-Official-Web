"use client";
import React from "react";

export default function index() {
  return (
    <div class=" h-1/3 font-['arial']">

<div class="flex flex-col md:flex-row md:space-x-5 pl-8 pt-8 pb-8 text-gray-400">
    {/*  20% Section  */}
    <div class="w-1/5 text-left mb-4 md:mb-0">
        {/*  Logo  */}
        {/* <img src="/images/logo_csne.jpg" alt="Logo" class="w-133px h-auto mx-0 mb-2"> */}
        
        {/*  Small text area */}
        <div class="para m-5 text-sm">
        <p>A volunteer-driven student community aiming to bridge the skill gap between an  Undergraduate and an Industry  Professional</p>
        </div>
        {/*  Social media icons  */}
        <div class="flex justify-left mt-4 ml-5 ">
            <a href="#" target="_blank" class="mr-2"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3f51b5" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"/></svg></a>
            <a href="#" target="_blank" class="mr-2"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"/></svg></a>
            <a href="#" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"/></svg></a>                    
        </div>
        
    </div>
    
    {/*  80% Section  */}
   
    <div class="md:w-4/5 mr-8 ml-5  p-12  bg-blue-50 text-gray-800 rounded-s-lg"> 
        <h3 class="text-lg font-semibold mb-4 ">Usefull links</h3>
        {/*  Columns */}
        <div class="flex flex-col md:flex-row md:space-x-5" >
        {/* Column 1  */}
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a> </li>
                <li><a href="#">Code of conduc</a></li>
            </ul>
        </div>
        
        {/*  Column 2  */}
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
            <ul>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        
        {/*  Column 3  */}
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Business</a></li>
            </ul>
        </div>
        
        {/*  Column 4 */}
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
            <ul>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="#">Support 24</a></li>
            </ul>
        </div>
         </div>
    </div>
</div>
<div class="p text-gray-400 text-center text-sm">Copyright @ 2023 MS-CLUB</div>

</div>
  );
}
