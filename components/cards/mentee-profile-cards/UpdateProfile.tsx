/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MenteeDashboardProfileImg } from "@/public";
import { EditIcon } from "@/public/SVGs";
import Button from "@/app/(mentee)/mentee-sessions/(ui)/VxrcelBtn";
import UpdateProfileForm from "./forms/UpdateProfileForm";

type UpdateProfileTabsProp = {
  id: number;
  title: string;
  tab: string;
};
const updateProfileTabs: UpdateProfileTabsProp[] = [
  {
    id: 1,
    title: "Basic info",
    tab: "basic-info",
  },
  {
    id: 2,
    title: "Experience",
    tab: "experience",
  },
  {
    id: 3,
    title: "Social links",
    tab: "social_links",
  },
];
export default function UpdateProfile() {
  const [isDark, setIsDark] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const isDisabled =
    !formData.name || !formData.email || !formData.message || !formData.phone;
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");

  const router = useRouter();
  const params = useSearchParams().get("tab");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // save to local storage
  useEffect(() => {
    setActiveTab(params || "basic-info");
    if (typeof localStorage !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setIsDark(true);
      }
    }
  }, [params]);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className={`w-full justify-start  flex flex-col items-start gap-8 h-full min-h-screen relative   px-4 pb-16 sm:pb-0 sm:pl-10 lg:pl-20 ${
        isDark ? "bg-NeutalBase" : ""
      }`}
    >
      <Link
        href="/mentee-profile?path=profile"
        className="absolute top-5 right-5 h-[40px] w-[40px] flex justify-center items-center bg-black"
      >
        <button className="text-white text-2xl font-medium">X</button>
      </Link>
      <div className="absolute top-5 left-5 h-[40px] w-[60px] flex justify-center items-center ">
        <div
          className={`w-[50px] h-[20px] p-[2px] ${
            isDark
              ? "bg-white before:bg-black before:scale-105"
              : "before:bg-white bg-NeutalBase"
          }  rounded-full relative before:absolute before:content-[''] before:h-[16px] before:w-[16px] before:rounded-full cursor-pointer before:active:scale-90   ${
            isDark && "before:right-0 transition-all duration-300"
          } `}
          onClick={() => setIsDark(!isDark)}
        />
      </div>
      <div
        className={`pt-16  font-medium text-lg font-Inter ${
          isDark
            ? "font-semibold uppercase bg-gradient-to-r from-[#0d62ff] via-[#00ffb7] to-[#ff00fb] bg-clip-text text-transparent"
            : "text-Neutra50"
        }`}
      >
        <p>Update your profile details</p>
      </div>
      <div className="flex gap-4 w-full justify-between sm:max-w-[400px] px-2">
        {updateProfileTabs.map((session) => (
          <button
            className={`${
              isDark ? "text-white" : "text-Neutra40"
            } cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken pb-2 border-b-[2px] border-[#f9fafc]   ${
              activeTab === session.tab && !isDark
                ? "!border-Accent1 text-black font-medium"
                : activeTab === session.tab && isDark
                ? "!border-Accent3  font-medium"
                : ""
            }`}
            key={session.id}
            onClick={() => {
              router.push(`?action=edit-profile&tab=${session.tab}`, {
                scroll: false,
              });
              setActiveTab(session.tab);
            }}
          >
            {session.title}
          </button>
        ))}
      </div>
      {activeTab === "basic-info" && <UpdateProfileForm isDark={isDark} />}
    </div>
  );
}
