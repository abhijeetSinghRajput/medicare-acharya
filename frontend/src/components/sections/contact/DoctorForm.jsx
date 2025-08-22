// DoctorForm.jsx

import React, { useState } from "react";
import TextField from "./TextField";
import SelectField from "./SelectField";
import SpecializationSelector from "./SpecializationSelector";
import TextAreaField from "./TextAreaField";
import { validateEmail, validateNumberRange, validatePhone, validateRequired } from "@/lib/formValidators";

const DoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    email: "",
    phoneNo: "",
    fullName: "",
    gender: "",
    specializations: [],
    experience: "",
    description: "",
  });

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ];

  const updateDoctorData = (field, value) => {
    setDoctorData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <h4 className="text-2xl font-semibold mb-6 text-white">
        Join Our Network
      </h4>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          id="doctor-name"
          placeholder="Dr. John Smith"
          value={doctorData.fullName}
          onChange={(value) => updateDoctorData("fullName", value)}
        />

        <SelectField
          label="Gender"
          id="doctor-gender"
          value={doctorData.gender}
          onChange={(value) => updateDoctorData("gender", value)}
          options={genderOptions}
          placeholder="Select your gender"
        />

        <TextField
          label="Phone Number"
          id="doctor-phone"
          type="tel"
          placeholder="(123) 456-7890"
          value={doctorData.phoneNo}
          onChange={(value) => updateDoctorData("phoneNo", value)}
        />

        <TextField
          label="Email Address"
          id="doctor-email"
          type="email"
          placeholder="john@yourclinic.com"
          value={doctorData.email}
          onChange={(value) => updateDoctorData("email", value)}
        />

        <TextField
          label="Years of Experience"
          type="number"
          id="doctor-experience"
          min="1"
          max="50"
          value={doctorData.experience}
          onChange={(value) => updateDoctorData("experience", value)}
          placeholder="Enter years of experience"
        />

        <SpecializationSelector
          specializations={doctorData.specializations}
          onAdd={(specialization) =>
            updateDoctorData("specializations", [
              ...doctorData.specializations,
              specialization,
            ])
          }
          onRemove={(index) =>
            updateDoctorData(
              "specializations",
              doctorData.specializations.filter((_, i) => i !== index)
            )
          }
          isMultiple={true}
          placeholder="Add specializations"
        />

        <TextAreaField
          label="Describe Yourself"
          id="doctor-description"
          placeholder="Tell us about your medical background, approach to patient care, and any other relevant information..."
          value={doctorData.description}
          onChange={(value) => updateDoctorData("description", value)}
        />

        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-[#a365ff] to-[#7630ba] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#a365ff]/30"
        >
          Request Demo
        </button>
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        We'll contact you within 24 hours to schedule your consultation.
      </p>
    </div>
  );
};

export default DoctorForm;
