"use client";

import React, { FC } from "react";

import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {
  NotificationIcon,
  NotifyIcon,
  ProfileIcon,
  ShoppingIcon,
} from "@/public/SVGs";
import Hambuger from "../hambuger";

interface HomeNavProps {
  isUserLogin?: boolean;
}

// const HomeNavBar: FC = ({ isUserLogin = true }: HomeNavProps) =>
const HomeNavBar: FC<HomeNavProps> = ({ isUserLogin = false }) => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);
  const [dropdown, setDropdown] = React.useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <>
      <header className="bg-[white] block fixed top-0 w-full z-[20] shadow-sm">
        <nav className="bg-[white] flex justify-between items-center py-[1.5rem] w-9/10  mx-auto bg-[#FFFF] cursor-pointer z-[10]">
          <Link href="/">
            <svg
              width="195"
              height="31"
              viewBox="0 0 195 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[195px] md:w-[152px] w-[130px]"
            >
              <path
                d="M25.342 30H22.066V12.402L13.12 30L4.132 12.402V30H0.856V0.599998L13.12 23.7L25.342 0.599998V30ZM39.8635 8.874C41.2915 8.874 42.6355 9.168 43.8955 9.756C45.1555 10.316 46.2475 11.086 47.1715 12.066C48.0955 13.046 48.8235 14.194 49.3555 15.51C49.9155 16.826 50.1955 18.226 50.1955 19.71C50.1955 20.494 50.1115 21.264 49.9435 22.02H33.1855C33.4095 22.776 33.7455 23.476 34.1935 24.12C34.6415 24.764 35.1595 25.324 35.7475 25.8C36.3355 26.248 36.9655 26.598 37.6375 26.85C38.3375 27.102 39.0515 27.228 39.7795 27.228C40.7315 27.228 41.5575 27.172 42.2575 27.06C42.9575 26.92 43.5735 26.752 44.1055 26.556C44.6375 26.332 45.0855 26.094 45.4495 25.842C45.8135 25.59 46.1355 25.324 46.4155 25.044L48.6835 27.396C47.7315 28.348 46.5555 29.104 45.1555 29.664C43.7835 30.224 41.9775 30.504 39.7375 30.504C38.3095 30.504 36.9655 30.224 35.7055 29.664C34.4735 29.076 33.3955 28.292 32.4715 27.312C31.5475 26.332 30.8195 25.198 30.2875 23.91C29.7555 22.594 29.4895 21.194 29.4895 19.71C29.4895 18.226 29.7555 16.826 30.2875 15.51C30.8475 14.194 31.5895 13.046 32.5135 12.066C33.4655 11.086 34.5715 10.316 35.8315 9.756C37.0915 9.168 38.4355 8.874 39.8635 8.874ZM46.6675 19.248C46.7235 18.268 46.5695 17.358 46.2055 16.518C45.8415 15.65 45.3375 14.894 44.6935 14.25C44.0775 13.606 43.3355 13.102 42.4675 12.738C41.6275 12.346 40.7455 12.15 39.8215 12.15C38.8695 12.15 37.9595 12.332 37.0915 12.696C36.2515 13.032 35.5095 13.522 34.8655 14.166C34.2495 14.782 33.7595 15.524 33.3955 16.392C33.0595 17.26 32.9055 18.212 32.9335 19.248H46.6675ZM63.7044 8.916C65.0204 8.916 66.2524 9.168 67.4004 9.672C68.5764 10.148 69.5984 10.82 70.4664 11.688C71.3344 12.556 72.0064 13.578 72.4824 14.754C72.9864 15.902 73.2384 17.134 73.2384 18.45V30H69.9624V18.954C69.9624 18.198 69.8364 17.428 69.5844 16.644C69.3604 15.832 68.9824 15.104 68.4504 14.46C67.9464 13.788 67.3024 13.242 66.5184 12.822C65.7344 12.402 64.7964 12.192 63.7044 12.192C62.7244 12.192 61.8424 12.43 61.0584 12.906C60.2744 13.382 59.6164 13.984 59.0844 14.712C58.5524 15.412 58.1464 16.182 57.8664 17.022C57.5864 17.834 57.4464 18.576 57.4464 19.248V30H54.1704V9.42L56.7744 12.906C57.0264 12.598 57.3624 12.22 57.7824 11.772C58.2024 11.296 58.7064 10.848 59.2944 10.428C59.8824 10.008 60.5404 9.658 61.2684 9.378C62.0244 9.07 62.8364 8.916 63.7044 8.916ZM82.0276 12.696V20.298C82.0276 21.306 82.1816 22.244 82.4896 23.112C82.8256 23.952 83.2736 24.68 83.8336 25.296C84.3936 25.912 85.0516 26.388 85.8076 26.724C86.5916 27.06 87.4176 27.228 88.2856 27.228V30.504C86.9696 30.504 85.7236 30.252 84.5476 29.748C83.3996 29.244 82.3916 28.572 81.5236 27.732C80.6836 26.864 80.0116 25.856 79.5076 24.708C79.0036 23.532 78.7516 22.286 78.7516 20.97V12.696H76.2736L78.7516 9.42V0.599998H82.0276V9.42H88.2856V12.696H82.0276ZM101.315 8.874C102.799 8.874 104.199 9.168 105.515 9.756C106.831 10.316 107.979 11.086 108.959 12.066C109.939 13.046 110.709 14.194 111.269 15.51C111.857 16.826 112.151 18.226 112.151 19.71C112.151 21.194 111.857 22.594 111.269 23.91C110.709 25.226 109.939 26.374 108.959 27.354C107.979 28.334 106.831 29.104 105.515 29.664C104.199 30.224 102.799 30.504 101.315 30.504C99.8308 30.504 98.4308 30.224 97.1148 29.664C95.7988 29.104 94.6508 28.334 93.6708 27.354C92.6908 26.374 91.9208 25.226 91.3608 23.91C90.8008 22.594 90.5208 21.194 90.5208 19.71C90.5208 18.226 90.8008 16.826 91.3608 15.51C91.9208 14.194 92.6908 13.046 93.6708 12.066C94.6508 11.086 95.7988 10.316 97.1148 9.756C98.4308 9.168 99.8308 8.874 101.315 8.874ZM101.315 27.228C102.379 27.228 103.359 27.032 104.255 26.64C105.179 26.248 105.977 25.716 106.649 25.044C107.349 24.372 107.895 23.574 108.287 22.65C108.679 21.726 108.875 20.746 108.875 19.71C108.875 18.646 108.679 17.666 108.287 16.77C107.895 15.846 107.349 15.048 106.649 14.376C105.977 13.676 105.179 13.13 104.255 12.738C103.359 12.346 102.379 12.15 101.315 12.15C100.279 12.15 99.2988 12.346 98.3748 12.738C97.4508 13.13 96.6528 13.676 95.9808 14.376C95.3088 15.048 94.7768 15.846 94.3848 16.77C93.9928 17.666 93.7968 18.646 93.7968 19.71C93.7968 20.746 93.9928 21.726 94.3848 22.65C94.7768 23.574 95.3088 24.372 95.9808 25.044C96.6528 25.716 97.4508 26.248 98.3748 26.64C99.2988 27.032 100.279 27.228 101.315 27.228ZM118.667 13.116C119.087 12.556 119.591 12.024 120.179 11.52C120.767 10.988 121.411 10.54 122.111 10.176C122.811 9.784 123.553 9.476 124.337 9.252C125.149 9.028 125.975 8.916 126.815 8.916C128.271 8.916 129.671 9.196 131.015 9.756L130.007 12.906C129.587 12.682 129.055 12.514 128.411 12.402C127.795 12.262 127.193 12.192 126.605 12.192C125.513 12.192 124.505 12.458 123.581 12.99C122.685 13.494 121.915 14.124 121.271 14.88C120.655 15.636 120.179 16.448 119.843 17.316C119.507 18.156 119.339 18.912 119.339 19.584V30H116.063V9.42L118.667 13.116ZM169.799 30H166.523V12.402L157.577 30L148.589 12.402V30H145.313V0.599998L157.577 23.7L169.799 0.599998V30ZM184.321 8.874C185.749 8.874 187.093 9.168 188.353 9.756C189.613 10.316 190.705 11.086 191.629 12.066C192.553 13.046 193.281 14.194 193.813 15.51C194.373 16.826 194.653 18.226 194.653 19.71C194.653 20.494 194.569 21.264 194.401 22.02H177.643C177.867 22.776 178.203 23.476 178.651 24.12C179.099 24.764 179.617 25.324 180.205 25.8C180.793 26.248 181.423 26.598 182.095 26.85C182.795 27.102 183.509 27.228 184.237 27.228C185.189 27.228 186.015 27.172 186.715 27.06C187.415 26.92 188.031 26.752 188.563 26.556C189.095 26.332 189.543 26.094 189.907 25.842C190.271 25.59 190.593 25.324 190.873 25.044L193.141 27.396C192.189 28.348 191.013 29.104 189.613 29.664C188.241 30.224 186.435 30.504 184.195 30.504C182.767 30.504 181.423 30.224 180.163 29.664C178.931 29.076 177.853 28.292 176.929 27.312C176.005 26.332 175.277 25.198 174.745 23.91C174.213 22.594 173.947 21.194 173.947 19.71C173.947 18.226 174.213 16.826 174.745 15.51C175.305 14.194 176.047 13.046 176.971 12.066C177.923 11.086 179.029 10.316 180.289 9.756C181.549 9.168 182.893 8.874 184.321 8.874ZM191.125 19.248C191.181 18.268 191.027 17.358 190.663 16.518C190.299 15.65 189.795 14.894 189.151 14.25C188.535 13.606 187.793 13.102 186.925 12.738C186.085 12.346 185.203 12.15 184.279 12.15C183.327 12.15 182.417 12.332 181.549 12.696C180.709 13.032 179.967 13.522 179.323 14.166C178.707 14.782 178.217 15.524 177.853 16.392C177.517 17.26 177.363 18.212 177.391 19.248H191.125Z"
                fill="#000"
              />
            </svg>
          </Link>

          {isUserLogin ? (
            <div className=" items-center gap-10  font-Hanken hidden lg:flex text-NeutalBase ">
              <Link href="" className="font-[700] border-b-[3px] border-black">
                Home
              </Link>
              <Link href="">Dashboard</Link>
              <Link href="/mentee-communities" className="text-[#565656] ">
                Community
              </Link>

              <Link
                href="/mentee-resources/explore?path=Explores"
                className="text-[#565656] "
              >
                Resources
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-10  font-Hanken">
              <Link href="/explore" className="text-[#565656] text-[0.8rem]">
                Find a Mentor
              </Link>

              <Link href="" className="text-[#565656] text-[0.8rem]">
                Become a Mentor
              </Link>
              <Link
                href="/communities"
                className="text-[#565656] text-[0.8rem]"
              >
                Community
              </Link>
              <Link
                href="/mentee-resources/explore?path=Explores"
                className="text-[#565656] text-[0.8rem]"
              >
                Resources
              </Link>
            </div>
          )}

          {isUserLogin ? (
            <div className=" md:flex hidden items-center gap-5 text-NeutalBase">
              <span className="flex">
                <ShoppingIcon />
              </span>
              <NotificationIcon />

              <div className="flex items-center gap-2">
                <ProfileIcon />
                <div className=" flex flex-col  font-Inter  ">
                  <span className=" text-[11px]">Funmi Oladapo</span>

                  <span className=" text-[10px]">C++ Developer</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:flex gap-2 hidden">
              <button
                type="button"
                className="text-black  bg-white rounded-[7px] border-[1px] text-[13px] w-[90px]  border-black p-2 "
              >
                <Link href="/welcome/login"> Log in</Link>
              </button>
              <button
                type="button"
                className="bg-[#121212] text-white rounded-[8px] w-[90px] p-2 text-[13px] "
              >
                <Link href="/welcome/signup"> Sign up</Link>
              </button>
            </div>
          )}
          <Link href="" className="lg:hidden" onClick={handleToggleMenu}>
            <Hambuger isOpen={toggleMenu} />
          </Link>
          {/* mobile */}
        </nav>
      </header>

      <div
        className={`lg:hidden ${
          toggleMenu ? "flex" : "hidden"
        } flex flex-col items-start h[100vh]  pl-3 w-[57%] max-w-[300px] left-0 bg-white shadow-xl  fixed h-[100vh] z-[10] top-[77px] 
        `}
      >
        <ul className="flex flex-col mt-[2rem] gap-7 justify-between  font-[400] text-[18px] leading-[28px] w-9/10  cursor-pointer">
          <li className="text-[12px] text-Inter">
            <Link
              href="/explore"
              onClick={handleToggleMenu}
              className="text-[#565656] text-[0.9rem]"
            >
              Find a mentor
            </Link>
          </li>

          <li className="text-[12px] text-Inter">
            <Link
              href=""
              onClick={handleToggleMenu}
              className="text-[#565656] text-[0.9rem]"
            >
              {" "}
              Become a mentor
            </Link>
          </li>
          <li className="text-[12px] text-Inter">
            <Link
              href="/communities"
              className="text-[#565656] text-[0.9rem]"
              onClick={handleToggleMenu}
            >
              Community
            </Link>
          </li>

          <li className="text-[12px] text-Inter  hover:bg-black hover:text-white hover:p-2 rounded">
            <Link
              href="/mentee-resources/explore?path=Explores"
              className="text-[#565656] text-[0.9rem]"
              onClick={handleToggleMenu}
            >
              Resources
            </Link>
          </li>

          <div className="flex gap-2 flex-col mt-[1rem]">
            <Link href="welcome/login">
              <button
                type="button"
                className="text-black  bg-white  rounded-[7px] border-[1px] text-[0.9rem] w-[120px]  border-black p-2.5 "
              >
                Log in
              </button>
            </Link>

            <Link href="welcome/signup">
              <button
                type="button"
                className="bg-[#121212] text-white rounded-[8px] w-[120px] p-2.5 text-[0.9rem] "
              >
                Sign up
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default HomeNavBar;
