import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmailVerification: React.FC = () => {
  //   const navigate = useNavigate();
  const { token } = useParams();
  return (
    <>
      <div>Email verification page.</div>
      <p>{token}</p>
    </>
  );
};

export default EmailVerification;
