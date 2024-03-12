import Image from "next/image";
function Header() {
  return (
    <div className="content-center w-full">
      <div className="bg-[#1D1163] w-full  min-h-[200px] text-center text-lg rounded-xl p-4 text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repellendus quis tempore sequi laboriosam
      </div>
      <Image
        className="w-10/12 mx-auto mt-[-80px]"
        src={"/images/about/aboutHeaderImg.png"}
        width={946}
        height={369}
      />
    </div>
  );
}

export default Header;
