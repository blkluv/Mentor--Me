export type FormProps = {
  id: number;
  label: string;
  placeholder: string;
  nature: string;
  type: string;
};

const form1Arr = [
  {
    id: 1,
    label: "Enter your full name",
    placeholder: "Full name",
    nature: "input",
    type: "text",
  },
  {
    id: 2,
    label: "Email Address",
    placeholder: "Email Address",
    nature: "",
    type: "",
  },
  {
    id: 3,
    label: "What gender do you identify as?",
    placeholder: "Select Gender",
    nature: "dropdown",
    type: "",
  },
  {
    id: 4,
    label: "Which city / country do you live in?",
    placeholder: "Select City/ Country",
    nature: "dropdown",
    type: "",
  },
];

const form2Arr = [
  {
    id: 1,
    label: "Job Title",
    placeholder: "Job title",
    nature: "input",
    type: "text",
  },
  {
    id: 2,
    label: "Company/Organization",
    placeholder: "Company/Organization",
    nature: "dropdown",
    type: "",
  },
  {
    id: 3,
    label: "Industry/Field of Expertise",
    placeholder: "Industry/Field of Expertise",
    nature: "dropdown",
    type: "",
  },
  {
    id: 4,
    label: "Years of Experience",
    placeholder: "Years of Experience",
    nature: "dropdown",
    type: "",
  },
  {
    id: 5,
    label: "Skils",
    placeholder: "Skils",
    nature: "dropdown",
    type: "",
  },
  {
    id: 6,
    label: "LInkedIn Profile",
    placeholder: "Link",
    nature: "",
    type: "",
  },
  {
    id: 7,
    label: "Other Links",
    placeholder: "Link",
    nature: "dropdown",
    type: "",
  },
  {
    id: 8,
    label: "Certifications",
    placeholder: "Certifications",
    nature: "",
    type: "",
  },
];

const form3Arr = [
  {
    id: 1,
    label: "Highest Degree Earned",
    placeholder: "Bachelor’s Degree",
    nature: "dropdown",
    type: "",
  },
  {
    id: 2,
    label: "Institution",
    placeholder: "University of California",
    nature: "dropdown",
    type: "",
  },
  {
    id: 3,
    label: "Year of Graduation",
    placeholder: "2023",
    nature: "dropdown",
    type: "",
  },
];

const form4Arr = [
  {
    id: 1,
    label: "Bio/Introduction",
    placeholder: "",
    nature: "",
    type: "textarea",
  },
];

const form5Arr = [
  {
    id: 1,
    label: "Previous Mentoring Experience",
    placeholder: "List if applicable",
    nature: "",
    type: "",
  },
  {
    id: 2,
    label: "Mentorship Type",
    placeholder: "UI/UX",
    nature: "dropdown",
    type: "",
  },
  {
    id: 3,
    label: "Mentorship Availability",
    placeholder: "6 hours per week",
    nature: "dropdown",
    type: "",
  },
  {
    id: 4,
    label: "Preferred Time Slots",
    placeholder: "6:00pm to 8:00pm",
    nature: "dropdown",
    type: "",
  },
  {
    id: 5,
    label: "Preferred Days",
    placeholder: "Weekdays - Monday to Friday",
    nature: "dropdown",
    type: "",
  },
];

const formData = [form1Arr, form2Arr, form3Arr, form4Arr, form5Arr];

export default formData;