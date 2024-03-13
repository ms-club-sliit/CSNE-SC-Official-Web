import Image from "next/image";
function Header() {
  return (
    <div className="content-center w-full ">
      <div className="bg-[#1D1163] mb-10 pt-10 w-full  min-h-[200px] text-center text-5xl rounded-xl p-4 text-white ">
        Computer Systems and Network Engineering <br /> Student Committee
      </div>
      <Image
        className="w-10/12 mx-auto rounded-xl mt-[-80px]"
        src={"/images/about/board.jpeg"}
        width={4159}
        height={1863}
      />
    </div>
  );
}

export default Header;
