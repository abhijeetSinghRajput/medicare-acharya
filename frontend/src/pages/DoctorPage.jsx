import React from "react";
import { useParams } from "react-router-dom";

const DoctorPage = () => {
  const { doctorId } = useParams();
  return <div>{doctorId}</div>;
};

export default DoctorPage;
