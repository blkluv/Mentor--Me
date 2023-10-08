"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderAfterSignUp from "@/components/mentor-profile-verification/HeaderAfterSignUp";
import {
  Amico,
  verificationApproved,
  verificationPending,
  verificationRejected,
  SucessIcon,
} from "@/public";
import Certificates from "@/components/mentor-profile-verification/Certificates";
import Qualifications from "@/components/mentor-profile-verification/Qualifications";
import Achievements from "@/components/mentor-profile-verification/Achievements";
import Identification from "@/components/mentor-profile-verification/Identification";
import StepList from "@/components/mentor-profile-verification/StepList";
import SucessModal from "@/components/mentor-profile-verification/SucessModal";
import {
  PendingStatusIcon,
  ApprovedStatusIcon,
  RejectedStatusIcon,
  CancelIcon,
} from "@/public/SVGs";
import { Button } from "@/components/buttons/button";
import MentorSideBar from "@/components/SideBar/MentorSideBar";
import MobileSideBar from "@/components/MobileSideBar";

export default function MentorProfileVerification() {
  const [step, setStep] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowModal(true);
    setVerificationStatus("pending");
    setStep(0);
    setFormSubmitted(true);
  };
  return (
    <>
      <div className="w-full flex bg-white text-black h-full lg:pb-0 pb-14">
        <div className="hidden lg:block">
          <MentorSideBar />
        </div>
        <div className="w-full h-full">
          <HeaderAfterSignUp step={step} />

          <div className="content my-5 flex flex-col items-center">
            <h1 className="font-Hanken font-[600] md:text-3xl text-2xl">
              Welcome to Mentor Me
            </h1>
            <p className="font-Hanken font-[400] md:text-base text-sm px-3 md:px-0">
              First things first, complete your verification. This will allow us
              to know more about you
            </p>

            <div className="container mt-5 lg:grid grid-cols-6">
              <div className="left-panel col-span-2 lg:ml-10 md:mx-5">
                <StepList
                  step={step}
                  setStep={setStep}
                  formSubmitted={formSubmitted}
                />
              </div>
              <div className="right-panel col-span-4">
                {step === 0 && (
                  <>
                    {verificationStatus === "" && (
                      <div className="flex flex-col justify-center items-center py-20">
                        <Image src={Amico} alt="amico" />

                        <div className="md:px-8 px-3 mt-8">
                          <h5 className="font-Hanken text-[24px] font-[700]">
                            Verify your profile in a few steps and let’s get
                            started!
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            This application should take no more than 5 - 10
                            minutes. Please complete the following information
                            to verify your qualifications and expertise as a
                            mentor.
                            <br />
                          </p>
                          <p className="mt-2 font-Hanken text-[16px] font-[400] text-Neutra40">
                            Your credentials will be reviewed to ensure the
                            highest level of professionalism and quality
                            guidance. Your profile will be verified between 24 -
                            48 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {verificationStatus === "pending" && (
                      <div className="flex flex-col justify-center items-center md:ml-5 ml-0">
                        <div className="w-full bg-[#fffbde] py-3 px-4 border-t-4 border-[#e5b800]">
                          <div className="flex justify-between">
                            <p className="flex font-Inter font-[600] text-[16px] text-[#e5b800]">
                              <PendingStatusIcon />
                              Status
                            </p>
                            <span>
                              <CancelIcon />
                            </span>
                          </div>
                          <p className=" font-Inter font-[500] text-[14px] text-Neutra50">
                            Your application is pending
                          </p>
                        </div>
                        <Image
                          src={verificationPending}
                          alt="amico"
                          className="mt-10"
                        />
                        <div className="md:px-8 px-3 mt-8">
                          <h5 className="font-Hanken text-[24px] font-[700]">
                            Your application has been submitted!
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            Your profile will be verified between 24 - 48 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {verificationStatus === "approved" && (
                      <div className="flex flex-col justify-center items-center ml-5">
                        <div className="w-full bg-[#e0fff0] py-3 px-4 border-t-4 border-[#386a20]">
                          <div className="flex justify-between">
                            <p className="flex font-Inter font-[600] text-[16px] text-Success60">
                              <ApprovedStatusIcon />
                              Status
                            </p>
                            <span>
                              <CancelIcon />
                            </span>
                          </div>
                          <p className="font-Inter font-[500] text-[14px] text-Neutra50">
                            Your application was approved
                          </p>
                        </div>
                        <Image
                          src={verificationApproved}
                          alt="amico"
                          className="mt-10"
                        />
                        <div className="md:px-8 px-3 mt-8">
                          <h5 className=" font-Hanken text-[24px] font-[700]">
                            Your application has been approved!
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            Head to approved dashboard
                          </p>

                          <Button
                            variant="primary"
                            className="mt-5 w-full py-3 text-center font-Inter font-500 text-[16px]"
                            paddingLess
                          >
                            Go to dashboard
                          </Button>
                        </div>
                      </div>
                    )}

                    {verificationStatus === "rejected" && (
                      <div className="flex flex-col justify-center items-center ml-5">
                        <div className="w-full bg-[#ffdcdc] py-3 px-4 border-t-4 border-[#e53535]">
                          <div className="flex justify-between">
                            <p className="flex font-Inter font-[600] text-[16px] text-Error60">
                              <RejectedStatusIcon />
                              Status
                            </p>
                            <span>
                              <CancelIcon />
                            </span>
                          </div>
                          <p className="font-Inter font-[500] text-[14px] text-Neutra50">
                            Your application was rejected
                          </p>
                        </div>
                        <Image
                          src={verificationRejected}
                          alt="amico"
                          className="mt-10"
                        />
                        <div className="md:px-8 px-3 mt-8">
                          <h5 className=" font-Hanken text-[24px] font-[700]">
                            Your application has been rejected
                          </h5>
                          <p className="font-Hanken text-[16px] font-[400] text-Neutra40">
                            Check your email to see the reason your application
                            was rejected
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {step === 1 && <Certificates onNext={handleNextStep} />}
                {step === 2 && (
                  <Qualifications
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                  />
                )}
                {step === 3 && (
                  <Achievements
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                  />
                )}
                {step === 4 && (
                  <Identification
                    onPrev={handlePrevStep}
                    handleSubmit={handleSubmit}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <MobileSideBar />
      </div>
      {showModal && (
        <SucessModal
          handleClose={() => setShowModal(false)}
          iconSrc={SucessIcon}
          iconAlt="Sucess Icon"
          title="Submission successful"
          message={`Your application has been submitted. \n
              Your profile will be verified between 24 - 48 hours.`}
          buttonText="Go to dashboard"
        />
      )}
    </>
  );
}