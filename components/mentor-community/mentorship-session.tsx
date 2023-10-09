import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  ClockIcon,
} from "@/public/assets/Icons/mentor-communities";

interface Props {
  sessionImg: StaticImageData;
  pfp: StaticImageData;
  name: string;
  about: string;
  // datePublished?: string;
  title: string;
  description: string;
}

const MentorshipSessionCard = ({
  pfp,
  name,
  about,
  title,
  description,
  sessionImg,
}: Props) => (
  <div className="border-[1px] border-solid border-Neutra20 overflow-hidden rounded-lg md:max-w-[18.625rem] flex flex-col">
    {/* Image */}
    <div className="max-h-[11.4375rem] w-full basis-0">
      <Image
        src={sessionImg}
        alt="Session"
        className="object-cover h-full w-full"
      />
    </div>
    {/* Description */}
    <div className="flex flex-col justify-between gap-3 p-4">
      {/* Details */}
      <div className="flex flex-col gap-2">
        {/* Info */}
        <div className="flex gap-1">
          {/* Profile Photo */}
          <div className="max-w-[1.75rem] self-start overflow-hidden border-[3px] border-solid border-NeutalBase rounded-full ">
            <Image
              src={pfp}
              alt="Mentor"
              className="object-cover aspect-square"
            />
          </div>
          {/* Info */}
          <div>
            {/* name */}
            <div className="flex items-center gap-2">
              <h3 className="text-[.75rem] md:text-[1.125rem] leading-[1] font-semibold font-Hanken">
                {name}
              </h3>
              <Image
                width={24}
                height={24}
                className="w-auto md:h-auto"
                src="/assets/images/mentor-communities/verified.svg"
                alt="verified"
              />
            </div>
            {/* about */}
            <span className="text-[.625rem] md:text-[0.75rem] leading-[1] text-Neutra30 inline-block font-Hanken">
              {about}
            </span>
          </div>
        </div>
        {/* Date published */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[.75rem] font-Hanken">
            {/* <Image
                  src="/assets/Icons/verified.svg"
                  alt="Verified"
                  width={} */}
            <CalendarIcon />
            <span>28th Sept</span>
          </span>
          <span className="flex items-center gap-1 text-[.75rem] font-Hanken">
            <ClockIcon /> <span>12:30pm</span>
          </span>
        </div>
        {/* Title and description */}
        <div className="font-Hanken flex flex-col gap-2">
          <h2 className="font-semibold text-NeutalBase text-[1.125rem] leading-[1.5]">
            {title}
          </h2>
          <p className="text-[.75rem] text-Neutra40">{description}</p>
        </div>
      </div>
      <hr className="border-solid border-Neutra10" />
      <Link
        href="#"
        className="border-solid border-[1px] px-4 py-2 border-NeutalBase rounded-lg font-medium font-Inter text-center text-xs md:text-base"
      >
        Join Classroom
      </Link>
    </div>
  </div>
);
export default MentorshipSessionCard;
