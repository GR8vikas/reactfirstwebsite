import React from "react";
import Common from "./Common";
import web from "../src/assets/download-2.svg";

export default function About() {
  return (
    <>
      <Common
        name="Welcome To About Page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact us"
      />
    </>
  );
}
