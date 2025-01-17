/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";
import { UpcomingSessionProp } from "@/lib/constants/constants";
import Button from "@/app/(mentee)/(dashboard-route)/mentee-sessions/(ui)/VxrcelBtn";

type SuccessReminderProps = {
  openModal: Dispatch<SetStateAction<boolean>>;
  getView: string | null;
};

export default function UpcomingCard({
  name,
  time,
  date,
  meetingLink,
  rescheduleBtn,
  reminderBtn,
  imgSrc,
  openModal,
  getView,
}: UpcomingSessionProp & SuccessReminderProps) {
  const isGrid = getView === "Grid";
  return (
    <div className="flex w-full sm:max-w-[90%] sm:ml-4 px-4 sm:px-6 xl:px-8 pb-6 pt-8 border border-Neutra10 rounded-xl gap-6 flex-col sm:flex-row hover:shadow-2xl shadow-black/20 transition-all duration-300">
      <div className={`max-w-[120px] ${isGrid ? "hidden" : ""}`}>
        <Image src={imgSrc} alt="cover" width={77} height={77} />
      </div>
      <div className="flex flex-col w-full gap-[6px]">
        <div
          className={`${!isGrid ? "hidden" : ""} w-full flex justify-between `}
        >
          <div className={`max-w-[120px] ${!isGrid ? "hidden" : ""}`}>
            <Image src={imgSrc} alt="cover" width={77} height={77} />
          </div>
          <span className="w-[40px] h-[40px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-[#e5ffff] rounded-full leading-none flex justify-center items-center">
            {date}
          </span>
        </div>
        <p className="flex w-full justify-between">
          <span className="text-Neutra50 font-Inter text-[16px] font-medium">
            Mentor session with
            <span className="text-Accent1"> {name}</span>
          </span>
          <span
            className={`w-[40px] h-[40px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-[#e5ffff] rounded-full leading-none flex justify-center items-center ${
              isGrid ? "hidden" : ""
            }`}
          >
            {date}
          </span>
        </p>
        <p className="font-Hanken text-[16px] text-Neutra40">
          Time: <span>{time}</span>
        </p>
        <p className="text-Neutra40 font-Hanken font-medium text-[16px] ">
          Meeting Link:{" "}
          <span className="text-Accent1 font-normal">{meetingLink}</span>
        </p>
        <div
          className={`${
            isGrid
              ? " max-[1364px]:gap-2 max-[1250px]:flex-col xl:flex-row max-md:flex-row max-[410px]:flex-col"
              : "sm:flex-row"
          } flex items-center w-full justify-center gap-4 sm:gap-6 flex-col  `}
        >
          <Button
            className={`px-4 py-2 border-Neutra50 !bg-transparent ${
              isGrid ? "max-[1364px]:px-1" : ""
            }`}
            title={rescheduleBtn}
            variant="secondary"
            fullWidth
          />
          <div className="w-full" role="dialog" onClick={() => openModal(true)}>
            <Button
              className="px-4 py-2 border-Neutra50"
              title={reminderBtn}
              variant="primary"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
