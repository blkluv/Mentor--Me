/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Commendations from "@/components/cards/mentee-profile-cards/Commendations";
import MyMentorsCard from "@/components/cards/mentee-profile-cards/MyMentorsCard";
import OverviewCard from "@/components/cards/mentee-profile-cards/OverviewCard";

import { DashboardCoverBg, MenteeDashboardProfileImg } from "@/public";
import { EditIcon, GoNextArrowIcon, NaijaFlagIcon } from "@/public/SVGs";
import Button from "../mentee-sessions/(ui)/VxrcelBtn";
import UpdateProfile from "@/components/cards/mentee-profile-cards/UpdateProfile";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

type MenuProfileProps = {
  id: number;
  title: string;
  tab: string;
};
const menteeMenus: MenuProfileProps[] = [
  {
    id: 1,
    title: "overview",
    tab: "overview",
  },
  {
    id: 2,
    title: "My Mentors",
    tab: "my-mentors",
  },
  {
    id: 3,
    title: "commendations",
    tab: "commendations",
  },
];

export default function MenteeProfilePage() {
  const [activeTab, setActiveTab] = useState<string | null | undefined>("");
  const router = useRouter();
  const paramsTab = useSearchParams().get("tab");
  const paramsAction = useSearchParams().get("action");

  useEffect(() => {
    setActiveTab(paramsTab || "overview");
  }, [paramsTab]);

  return (
    <>
      {paramsAction === "edit-profile" ? (
        <Suspense fallback={<LoadingSpinner />}>
          <div className="w-full justify-center flex relative ">
            <UpdateProfile />
          </div>
        </Suspense>
      ) : (
        <section className="w-full max-lg:pb-16 relative">
          <div className="flex w-full max-sm:h-[150px]">
            <Image
              src={DashboardCoverBg}
              alt="cover"
              width={2000}
              height={500}
            />
          </div>
          <div className="flex w-full justify-between items-center px-6 lg:px-8 max-lg:flex-col max-lg:items-start max-lg:gap-6 2xl:px-32">
            <div className="flex items-center gap-6  w-full max-lg:flex-col max-lg:items-start max-lg:gap-6">
              <div className="relative -mt-12 ">
                <Suspense fallback={<LoadingSpinner />}>
                  <Image
                    src={MenteeDashboardProfileImg}
                    alt="cover"
                    width={130}
                    height={130}
                  />
                </Suspense>
                <div
                  className="absolute bottom-2 right-0 h-8 w-8 rounded-lg bg-white flex items-center justify-center cursor-pointer"
                  onClick={() => router.push("?action=edit-profile")}
                >
                  <EditIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="flex gap-4 font-Inter font-bold lg:text-[32px] text-Neutra50 items-center">
                  <span>Henrietta Okankwo</span>
                  <NaijaFlagIcon />
                </p>
                <p>
                  Product designer <span>at</span> Federal University of
                  Technology, Owerri
                </p>
              </div>
            </div>
            <Link
              href="/mentee-profile?action=edit-profile"
              className="w-full max-w-fit "
              onClick={() => router.push("?action=edit-profile")}
            >
              <Button
                className="px-4 py-2"
                title="Edit Profile"
                variant="secondary"
              />
            </Link>
          </div>
          <div className=" flex w-full justify-center max-xl:flex-col px-4 sm:px-6 lg:px-8 2xl:px-32 lg:gap-8 xl:gap-16 2xl:gap-28 max-xl:pb-8">
            <div className="flex flex-col  w-full ">
              <div className="flex mt-10 max-lg:w-full ">
                <div className="flex flex-col w-full ">
                  <div className="flex items-center gap-10 !max-lg:w-full select-nones ">
                    {menteeMenus.map((menu) => (
                      <p
                        className={` cursor-pointer capitalize text-[14px] sm:text-[18px] font-Hanken text-Neutra50 border-b-[3px] pb-1  border-white${
                          activeTab === menu.tab
                            ? " !border-Accent1 text-black font-medium"
                            : ""
                        }`}
                        key={menu.id}
                        onClick={() => {
                          router.push(`?path=profile&tab=${menu.tab}`, {
                            scroll: false,
                          });
                          setActiveTab(menu.tab);
                        }}
                      >
                        {menu.title}
                      </p>
                    ))}
                  </div>
                  <div className="w-full h-full ">
                    {activeTab === "overview" && (
                      <OverviewCard
                        desc="I’m Henrietta Okonkwo, a rising star in the world of product design, I bring to the table a deep-seated passion for innovation and an unwavering commitment to precision in my work.
Armed with my background in graphic design, I’m on a personal mission to connect with experienced mentors who can help me hone my design skills and infuse fresh perspectives into my craft."
                        expertise="UI Design"
                        experience="Product Designer 3 years"
                        workPlace="Federal University of Science Technology, Owerri"
                      />
                    )}
                    {activeTab === "my-mentors" && <MyMentorsCard />}
                    {activeTab === "commendations" && <Commendations />}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-10 w-full lg:w-[80%] justify-center items-center">
              <div className="flex w-full p-4 lg:p-10 border border-Neutra10 flex-col gap-4">
                <p className="w-full flex justify-between font-Inter font-medium text-[15px] text-Neutra50">
                  <span>
                    Profile Strength:{" "}
                    <span className="font-normal">Beginner</span>
                  </span>
                  <GoNextArrowIcon />
                </p>
                <div className="flex relative w-full h-[10px] bg-Neutra10">
                  <div className="w-[30%] absolute top-0 left-0 h-full bg-gradient-to-r from-[#03bf7a] to-[#00ffaa] " />
                </div>
                <p className=" font-Inter font-medium text-[15px] text-Neutra50">
                  Community Statistics
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
                    <p className="font-Inter text-sm font-medium text-Neutra50 ">
                      Average Attendence
                    </p>
                    <p className="font-Hanken text-[20px] text-Neutra50 font-bold relative">
                      0{" "}
                      <span className="absolute top-1 -right-[10px] text-sm">
                        %
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
                    <p className="font-Inter text-sm font-medium text-Neutra50 text-left">
                      Sessions completed
                    </p>
                    <p className="font-Hanken text-[20px] text-Neutra50 font-bold relative">
                      0
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
                    <p className="font-Inter text-sm font-medium text-Neutra50 text-left">
                      Total Learning Time
                    </p>
                    <p className="font-Hanken text-[20px] text-Neutra50 font-bold flex items-center gap-1">
                      0 <span className=" text-sm">hours</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-start border border-Neutra10 pt-4 pb-6">
                    <p className="font-Inter text-sm font-medium text-Neutra50 ">
                      Total Points
                    </p>
                    <p className="font-Hanken text-[20px] text-Neutra50 font-bold relative">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
