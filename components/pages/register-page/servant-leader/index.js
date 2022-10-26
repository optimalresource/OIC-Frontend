import Image from "next/image";
import React from "react";
import BioData from "./biodata.js";
import ContactFormPage from "./contact-form/index.js";
import SkillFormPage from "./skill-form.js";
import VolunteerSuccessPage from "./success-page";
import { useRouter } from "next/router";

let stateValue = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  member: "",
  yearJoin: "",
  serve: "",
  department: "",
  comment: "",
  phone: "",
  whatsapp: "",
  age: "",
  accomodation: "",
  sameasContact: false,
  practitioner: "",
  liftobject: "",
  weekoffwork: "",
  days: {
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  },
  team: "",
  media: "",
  checkAllDays: false,
};

let resetStateValue = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  member: "",
  yearJoin: "",
  serve: "",
  department: "",
  comment: "",
  phone: "",
  whatsapp: "",
  age: "",
  accomodation: "",
  sameasContact: false,
  practitioner: "",
  liftobject: "",
  weekoffwork: "",
  days: {
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  },
  team: "",
  media: "",
  checkAllDays: false,
};

const ServantLeader = () => {
  const router = useRouter();
  return (
    <div className="w-[100%] px-[0%] py-[0px] mt-[130px] bmd:mt-[100px] max640:mt-[60px] min1141:grid min1141:grid-cols-2 max-w-[1728px] relative">
      <div className="flex flex-col flex-1 bg-[#000000]  bg-[url('/assets/images/register_frame.png')] bg-cover min-h-[500px] gap-5 items-center justify-center bg-no-repeat max1040:w-[100%] ">
        <div className="w-[700px] min1041:w-[600px] bg-[#000] text-[#ffffff] p-[100px] text-center bg-opacity-70 flex flex-col gap-3 bmd:w-[90%] bmd:px-[50px]">
          <h2 className="text-4xl bmd:text-3xl pb-5 font-semibold">
            Volunteer to be a Servant Leader
          </h2>
          <p className="text-lg bmd:text-lg">Why serve?</p>
          <p className="text-lg bmd:text-lg">
            Therefore, my beloved brethren, be ye steadfast, unmovable, always
            abounding in the work of the Lord, forasmuch as ye know that your
            labour is not in vain in the Lord. - 1 Corinthians 15:58 KJV
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center py-12 max1040:w-[100%] bg-[#F6FCFF] max1040:pb-[150px]">
        {router.query?.id == 1 ||
          router.query?.id == 2 ||
          (!router.query?.id && (
            <div className="flex flex-col items-center mt-[20px]">
              <Image
                src="/assets/images/register_icon.png"
                width={52.6}
                height={50.56}
                alt="logo"
              />
              <h2 className="text-[#1f4477] mt-2 font-semibold text-xl">
                Register
              </h2>
            </div>
          ))}

        <RoutePage />
      </div>
    </div>
  );
};

const RoutePage = ({}) => {
  const router = useRouter();
  if (!router.query?.id) {
    return <BioData />;
  } else {
    if (router.query?.id == 1) {
      return <ContactFormPage />;
    } else if (router.query?.id == 2) {
      return <SkillFormPage />;
    } else if (typeof router.query?.id == "string") {
      if (router.query?.id == "success-page") return <VolunteerSuccessPage />;
      else router.push("/volunteer");
    } else {
      router.push("/volunteer");
    }
  }
};

function postFormData(increasePage) {
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;
  submitButton.className = "whiteButton text-sm";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  myHeaders.append("access-control-allow-methods", "GET,HEAD,OPTIONS,POST,PUT");
  myHeaders.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,Access-Control-Allow-Origin,access-control-allow-headers"
  );
  myHeaders.append(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,Access-Control-Allow-Origin,access-control-allow-headers,access-control-allow-methods"
  );

  const extractKeys = Object.keys(
    Object.fromEntries(
      Object.entries(stateValue.days).filter(
        ([key, value]) => value?.trim().length > 0
      )
    )
  ).join(",");

  var raw = JSON.stringify({
    firstName: stateValue.firstname,
    lastName: stateValue.lastname,
    email: stateValue.email,
    gender: stateValue.gender,
    isMember: stateValue.member,
    yearJoinOasis: stateValue.yearJoin,
    isWorker: stateValue.serve,
    department: stateValue.department,
    phoneNumber: stateValue.phone,
    whatsappNumber: stateValue.whatsapp,
    ageRange: stateValue.age,
    hasMedicalCondition: stateValue.accomodation,
    isMedicalPractitioner: stateValue.practitioner,
    canLiftHeavyObject: stateValue.liftobject,
    isWorkOffWork: stateValue.weekoffwork,
    daysToBeAvailable: extractKeys,
    preferredTeam: stateValue.team,
    mediaSkill: stateValue.media,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://rccgoic.herokuapp.com/api/user", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      if (result.includes("success")) {
        increasePage();
        stateValue = resetStateValue;
      } else {
        alert("Unable to submit form. Please try again later.");
      }
      console.log(result);
      submitButton.disabled = false;
      submitButton.className = "buttonPrimary text-sm";
    })
    .catch((error) => {
      alert("Unable to submit form. Please try again later.");
      console.log("error", error);
      submitButton.disabled = false;
      submitButton.className = "buttonPrimary text-sm";
    });
}

export default ServantLeader;
