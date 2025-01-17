import React, { SelectHTMLAttributes } from "react";
import Image from "next/image";
import { MentorCreationArrDown } from "@/public";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string;
  selectId?: string;
  value?: string | number;
  selectName?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  isRequired?: boolean;
  children?: React.ReactNode;
}

function SelectInputType({
  selectName,
  selectId,
  isRequired = true,
  onChange,
  labelText,
  placeholder,
  value,
  children,
}: SelectInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-between">
        <label htmlFor={labelText} className="font-[500] py-1">
          {labelText}{" "}
          {isRequired && <span className="text-Error50 font-bold">*</span>}
        </label>
        <div className="relative">
          <select
            value={value}
            id={selectId}
            name={selectName}
            placeholder="Give this session a name"
            required={isRequired}
            className="appearance-none first:text-gray-500 border rounded-lg sm:rounded-lg p-2 md:p-4 md:py-5 w-full focus:outline-none focus:border-gray-600"
            onChange={onChange}
          >
            <option value="" disabled className="text-gray-300">
              {placeholder || "select an option"}
            </option>
            {children}
          </select>
          <Image
            className="absolute right-4 translate-y-[-50%] top-[50%] pointer-events-none"
            src={MentorCreationArrDown}
            alt="arrow-down"
          />
        </div>
      </div>
    </div>
  );
}
export default SelectInputType;
