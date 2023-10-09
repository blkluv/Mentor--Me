import Image from "next/image";

import { UpcomingSessionProp } from "@/lib/constants/constants";
import Button from "@/app/(mentee)/mentee-sessions/(ui)/VxrcelBtn";

export default function CancelledCard({
  name,
  time,
  date,
  meetingLink,
  rescheduleBtn,
  reminderBtn,
  imgSrc,
  underline,
}: UpcomingSessionProp) {
  return (
    <div className="flex max-w-[700px] w-full px-4 sm:px-6 xl:px-8 pb-6 pt-8 border border-Neutra10 rounded-xl gap-6 flex-col sm:flex-row">
      <div className="max-w-[120px]">
        <Image src={imgSrc} alt="cover" width={77} height={77} />
      </div>
      <div className="flex flex-col w-full gap-[6px]">
        <p className="flex w-full justify-between">
          <span className="text-Neutra50 font-Inter text-[16px] font-medium">
            Mentor session with
            <span
              className={`${
                underline ? "border-b border-Neutra50 pb-[1px]" : "text-Accent1"
              }`}
            >
              {" "}
              {name}
            </span>
          </span>
          <span className="w-[35px] h-[35px] font-Hanken font-medium text-[12px] text-Neutra40 text-center bg-Neutra40/10 rounded-full leading-none flex justify-center items-center">
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
        <div className="flex w-full justify-center gap-4 sm:gap-6 flex-col sm:flex-row">
          <Button
            className="px-4 py-2 border-Neutra50 !bg-transparent"
            title={rescheduleBtn}
            variant="secondary"
            fullWidth
          />
          <Button
            className="px-4 py-2 border-Neutra50"
            title={reminderBtn}
            variant="primary"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
