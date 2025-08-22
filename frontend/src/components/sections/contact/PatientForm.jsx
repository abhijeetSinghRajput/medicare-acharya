// PatientForm.jsx
import React, { useState } from "react";
import TextField from "./TextField";
import SelectField from "./SelectField";
import { Label } from "@/components/ui/label";
import { CommandDialog } from "@/components/ui/command";
import DoctorList from "@/components/DoctorList";
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from "@/lib/formValidators";
import { cn } from "@/lib/utils";

const PatientForm = () => {
  const [doctorDialogOpen, setDoctorDialogOpen] = useState(false);
  const updateDoctorData = () => {
    setPatientData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDoctorSelect = (item) => {
    updatePatientData("doctorType", item.specialization);
    setDoctorDialogOpen(false);
  };

  const [patientData, setPatientData] = useState({
    email: "",
    phoneNo: "",
    fullName: "",
    gender: "",
    doctorType: "",
  });

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer-not-to-say", label: "Prefer not to say" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const updatePatientData = (field, value) => {
    setPatientData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h4 className="text-2xl font-semibold mb-6 text-white">
        Find the Right Doctor
      </h4>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Step 1: Name */}
        <TextField
          label="Your Name"
          id="patient-name"
          placeholder="John Smith"
          value={patientData.fullName}
          onChange={(value) => updatePatientData("fullName", value)}
        />

        {/* Step 2: Gender */}
        <SelectField
          label="Gender"
          id="patient-gender"
          value={patientData.gender}
          onChange={(value) => updatePatientData("gender", value)}
          options={genderOptions}
          placeholder="Select your gender"
        />

        {/* Step 3: Phone Number */}
        <TextField
          label="Phone Number"
          id="patient-phone"
          type="tel"
          placeholder="(123) 456-7890"
          value={patientData.phoneNo}
          onChange={(value) => updatePatientData("phoneNo", value)}
        />

        {/* Step 4: Email */}
        <TextField
          label="Email Address"
          id="patient-email"
          type="email"
          placeholder="john@example.com"
          value={patientData.email}
          onChange={(value) => updatePatientData("email", value)}
        />

        {/* Step 5: Doctor Type */}
        <DoctorTypeInput
          value={patientData.doctorType}
          onClick={() => setDoctorDialogOpen(true)}
          placeholder="Click to select doctor type"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-[#a365ff] to-[#7630ba] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#a365ff]/30"
        >
          Find Doctors
        </button>
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        We'll help you find the right specialist for your needs.
      </p>

      <CommandDialog open={doctorDialogOpen} onOpenChange={setDoctorDialogOpen}>
        <DoctorList onSelect={handleDoctorSelect} />
      </CommandDialog>
    </div>
  );
};

const DoctorTypeInput = ({
  value,
  onClick,
  placeholder = "Select doctor type",
  error = null,
}) => {
  const errorClass = error
    ? "ring-destructive ring-1 text-destructive focus-visible:ring-destructive bg-destructive/5"
    : "";
  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground">Doctor Type</Label>
      <div
        className={cn(
          "h-12 w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center px-3 cursor-pointer hover:border-white/20 transition-colors",
          errorClass
        )}
        onClick={onClick}
      >
        {value ? (
          <span className="text-white">{value}</span>
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default PatientForm;
