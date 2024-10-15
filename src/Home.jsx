import React from "react";
import web from "../src/assets/download.svg";
import Common from "./Common";

export default function Home() {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
}
