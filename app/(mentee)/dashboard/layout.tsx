import React from "react";
import MobileSideBar from "@/components/MobileSideBar";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import MenteeNavBar from "@/components/menteeTopNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenteeSideBar />
      <MobileSideBar />

      <main className="md:ml-[280px]">
        <MenteeNavBar />
        {children}
      </main>
    </>
  );
}
