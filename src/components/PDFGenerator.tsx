import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Brochure from "./Brochure";

interface PDFGeneratorProps {
  onBack?: () => void;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ onBack }) => {
  const [pdfError, setPdfError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Website
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SimEng Brochure
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Download our comprehensive research brochure in PDF format
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="h-96">
            <PDFViewer style={{ width: "100%", height: "100%" }}>
              <Brochure />
            </PDFViewer>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Download Brochure
            </h2>
            <p className="text-gray-600 mb-8">
              Get your copy of the SimEng research brochure in high-quality PDF
              format
            </p>

            <PDFDownloadLink
              document={<Brochure />}
              fileName="SimEng-Brochure.pdf"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {({ blob, url, loading, error }) => {
                // Update error state if there's an error
                if (error && !pdfError) {
                  setPdfError(error.message || "Error generating PDF");
                }
                
                return loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating PDF...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF Brochure
                  </div>
                );
              }}
            </PDFDownloadLink>

            {pdfError && (
              <p className="text-red-500 mt-4">
                {pdfError}
              </p>
            )}
          </div>
        </div>

        {/* Brochure Content Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Brochure Content Preview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What's Included:
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Company overview and mission
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Research expertise and capabilities
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Featured research projects
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Impact statistics and achievements
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Features:
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Professional A4 layout
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  High-quality typography
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Contact information included
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Print-ready format
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;
