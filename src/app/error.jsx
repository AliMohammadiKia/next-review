"use client";

const Error = ({ error }) => {
  return (
    <div>
      <p>error is: {error.message}</p>
    </div>
  );
};

export default Error;
