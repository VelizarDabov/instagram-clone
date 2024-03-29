import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtoms";
const Header = () => {
  const [user] = useAuthState(auth);
 const router= useRouter();
 const [open, setOpen] = useRecoilState(modalState)

  return (
    <div className=" shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
          onClick={() => router.push('/')}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png "
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            onClick={() => router.push('/')}
            src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md  ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon   onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute  -top-2 -right-1 text-xs  w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>

          <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
          onClick={()=> auth.signOut()}
            src={user.photoURL}
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
