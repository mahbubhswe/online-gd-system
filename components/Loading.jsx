import React from "react";
import { FadeLoader } from "react-spinners";
export default function Loading() {
  return (
    <div style={{height:"100%", display: "grid", placeContent: "center" }}>
      <FadeLoader />;
    </div>
  );
}
