// import React, { useState } from "react";
// import Image from "next/image";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import Link from "next/link";
// import Button from "./reuse/Button";

// const Navbar = () => {
//   return (
//     <>
//       <div className="bg-[#fff] py-[2rem]">
//         <div className="container">
//           <div className="flex justify-between items-center bg-white">
//             <div className="center gap-[2rem]">
//               <img src="images/location.svg" alt="location svg" />
//               <p className="text-[12px] md:text-[16px]">
//                 Mariel miller franchise 3225, Se Habla Espanol
//               </p>
//             </div>
//             <div className="center gap-[2rem]">
//               <img src="images/phone.svg" alt="phone icon svg" />
//               <p className="text-[12px] md:text-[16px]">
//                 Impact PR PROS{" "}
//                 <span className="text-[#4B93FF] ml-[1rem]"> 7322980900</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#222A2E]">
//         <div className="container">
//           <div className="flex justify-between items-center ">
//             <div>
//               <Image
//                 src="/image/impactPr.png"
//                 alt="logo"
//                 width={147}
//                 height={147}
//                 // className=" w-[120px] lg:w-[147px] lg:h-[147px] h-[120px] "
//                 className=" w-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]  h-[80px] lg:w-[147px] lg:h-[147px] "
//               />
//             </div>
//             <nav>
//               <ul className="flex items-center gap-[5rem] text-white ">
//                 <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
//                   <a href="#services">Services</a>
//                 </li>
//                 <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
//                   <a href="#impact">Impact</a>
//                 </li>
//                 <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
//                   <a href="#featured">Featured</a>
//                 </li>
//                 <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
//                   <a href="#contactUs">Contact Us</a>
//                 </li>

//                 <li>
//                   <a href="#contactUs">
//                     <Button text="Get Service" />
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Button from "./reuse/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-[#fff] py-[2rem]">
        <div className="container">
          <div className="flex justify-between items-center bg-white">
            <div className="center gap-[2rem]">
              <img src="images/location.svg" alt="location svg" />
              <p className="text-[12px] md:text-[16px]">
                Mariel miller franchise 3225, Se Habla Espanol
              </p>
            </div>
            <div className="center gap-[2rem]">
              <img src="images/phone.svg" alt="phone icon svg" />
              <p className="text-[12px] md:text-[16px]">
                Impact PR PROS{" "}
                <span className="text-[#4B93FF] ml-[1rem]"> 7322980900</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222A2E]">
        <div className="container">
          <div className="flex justify-between items-center ">
            <div>
              <Image
                src="/image/impactPr.png"
                alt="logo"
                width={147}
                height={147}
                className="w-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] h-[80px] lg:w-[147px] lg:h-[147px]"
              />
            </div>

            {/* large Screen */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-[5rem] text-white ">
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
                  <a href="#services">Services</a>
                </li>
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
                  <a href="#impact">Why Us</a>
                </li>
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
                  <a href="#featured">Featured</a>
                </li>
                <li className="hover:text-[rgba(255,255,255,0.5)] transition-all ">
                  <a href="#contactUs">Contact Us</a>
                </li>

                <li>
                  <a href="#contactUs">
                    <Button text="Get Service" />
                  </a>
                </li>
              </ul>
            </nav>

            {/* Small Screen */}

            <nav className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
              <ul className="flex flex-col items-center gap-[5rem]   absolute z-10 w-screen left-0 top-0 bg-white pt-[23rem] pb-[10rem] shadow-lg">
                <li className="hover:opacity-75 transition-all ">
                  <a href="#services" onClick={toggleMenu}>
                    Services
                  </a>
                </li>
                <li className="hover:opacity-75 transition-all ">
                  <a href="#impact" onClick={toggleMenu}>
                    Why Us
                  </a>
                </li>
                <li className="hover:opacity-75 transition-all ">
                  <a href="#featured" onClick={toggleMenu}>
                    Featured
                  </a>
                </li>
                <li className="hover:opacity-75 transition-all ">
                  <a href="#contactUs" onClick={toggleMenu}>
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="#contactUs" onClick={toggleMenu}>
                    <Button text="Get Service" />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="md:hidden  ">
              <button
                className=" absolute translate-x-[-50%] translate-y-[-50%] "
                style={{ zIndex: "10" }}
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <HiOutlineX className="text-black" />
                ) : (
                  <HiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
