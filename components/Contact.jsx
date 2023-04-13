import React from "react";
import Layout from "./Layout";

export const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-fit px-[4rem] py-[5rem]">
        <h1 className="text-[6.5rem] font-bold  text-center leading-[1.3]">
          Guaranteed PR Placement in Major Publications
        </h1>
        <p className="text-[2.5rem] my-[2rem] text-center">
          IMPACT PR PROS will Increase Your Presence in the Media and Search
          Engines.
        </p>
        <a
          href="#contactUs"
          className="bg-blue-500 hover:bg-blue-700 text-white  py-[1.5rem] px-[5rem] rounded-full"
        >
          Conact Us
        </a>
      </div>
    </Layout>
  );
};
