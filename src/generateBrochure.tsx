import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import Brochure from "./components/Brochure";

// Generate the PDF brochure
const generateBrochure = async () => {
  try {
    await renderToFile(<Brochure />, "./SimEng-Brochure.pdf");
    console.log("✅ Brochure generated successfully!");
    console.log("📄 File saved as: SimEng-Brochure.pdf");
  } catch (error) {
    console.error("❌ Error generating brochure:", error);
  }
};

// Run the generation
generateBrochure();
