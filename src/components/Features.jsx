import React from "react";

function Features() {
  return (
    <div>
      <style>{`
        .grid-background {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px);
        }
        .grid-background {
          --grid-line-color: rgba(240, 80, 50, 0.15);
        }
      `}</style>

      <div className="bg-[#121212] text-slate-100 font-sans transition-colors duration-300">
        <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          <div className="inline-block bg-[#F05032] text-white text-[10px] uppercase tracking-widest px-2 py-1 mb-0 font-semibold">
            Jasper Grid Overview
          </div>

          <div className="border border-[#F05032] relative">
            <div className="flex flex-col lg:flex-row">
              <div className="p-8 lg:p-12 flex-1">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                  Scale your content and your outcomes
                </h1>
              </div>

              <div className="hidden lg:flex border-l border-[#F05032] w-full max-w-md relative grid-background">
                <div className="absolute top-0 left-0 border-r border-b border-[#F05032] p-2 text-[#F05032] font-mono text-xs">
                  12
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#F05032]">
              {/* Feature 1: Scaled content orchestration */}
              <div className="border-b md:border-b-0 md:border-r border-[#F05032] flex flex-col h-fullbg-[#121212]/50">
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white h-14 lg:h-20 leading-tight">
                    Scaled content orchestration
                  </h3>
                </div>
                <div className="flex items-center justify-center p-8 bg-black/20 grid-background border-t border-b border-[#F05032]/20">
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-[#F05032]"
                      fill="none"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="30"
                        x="10"
                        y="30"
                      ></rect>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="12"
                        x2="25"
                        y1="35"
                        y2="35"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="12"
                        x2="35"
                        y1="40"
                        y2="40"
                      ></line>
                      <circle cx="70" cy="40" fill="currentColor" r="10"></circle>
                      <path
                        d="M40 40 H55 V60 H70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                      <path d="M15 60 L25 80 L35 60 Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Grid's workflow automation enables large-scale production from
                    structured inputs like briefs, keywords, &amp; campaign goals.
                  </p>
                </div>
              </div>

              {/* Feature 2: Embedded brand governance */}
              <div className="border-b md:border-b-0 lg:border-r border-[#F05032] flex flex-col h-fullbg-[#121212]/50">
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white h-14 lg:h-20 leading-tight">
                    Embedded brand governance
                  </h3>
                </div>
                <div className="flex items-center justify-center p-8 bg-black/20 grid-background border-t border-b border-[#F05032]/20">
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-[#F05032]"
                      fill="none"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="50"
                        cy="50"
                        rx="40"
                        ry="15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform="rotate(45 50 50)"
                      ></ellipse>
                      <ellipse
                        cx="50"
                        cy="50"
                        rx="40"
                        ry="15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform="rotate(-45 50 50)"
                      ></ellipse>
                      <circle cx="50" cy="50" fill="currentColor" r="8"></circle>
                      <path
                        d="M10 20 L15 15 M80 80 L85 85"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                      <rect
                        fill="currentColor"
                        height="6"
                        transform="rotate(15 78 28)"
                        width="6"
                        x="75"
                        y="25"
                      ></rect>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Jasper IQ applies your voice, audiences, and knowledge across every
                    asset, ensuring consistent, on-brand content from the outset.
                  </p>
                </div>
              </div>

              {/* Feature 3: Purpose-built for marketing workflows */}
              <div className="border-b md:border-b-0 md:border-r border-[#F05032] flex flex-col h-full bg-[#121212]/50">
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white h-14 lg:h-20 leading-tight">
                    Purpose-built for marketing workflows
                  </h3>
                </div>
                <div className="grow flex items-center justify-center p-8 bg-black/20 grid-background border-t border-b border-[#F05032]/20">
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-[#F05032]"
                      fill="none"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 70 C10 70 30 65 50 70 C70 65 90 70 90 70 V30 C90 30 70 25 50 30 C30 25 10 30 10 30 V70Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                      <line
                        stroke="currentColor"
                        strokeWidth="2"
                        x1="50"
                        x2="50"
                        y1="30"
                        y2="70"
                      ></line>
                      <circle
                        cx="30"
                        cy="45"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></circle>
                      <path
                        d="M70 40 L80 50 M80 40 L70 50"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></path>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="25"
                        x2="40"
                        y1="55"
                        y2="55"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="60"
                        x2="75"
                        y1="55"
                        y2="55"
                      ></line>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    From campaign launches and localization to personalization and SEO,
                    Grid is designed for marketing use cases — not generic automation.
                  </p>
                </div>
              </div>

              {/* Feature 4: No-code configuration */}
              <div className="flex flex-col h-full bg-[#121212]/50">
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white h-14 lg:h-20 leading-tight">
                    No-code configuration
                  </h3>
                </div>
                <div className="grow flex items-center justify-center p-8 bg-black/20 grid-background border-t border-b border-[#F05032]/20">
                  <div className="relative w-full h-22 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-[#F05032]"
                      fill="none"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        height="50"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        width="70"
                        x="15"
                        y="25"
                      ></rect>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="15"
                        x2="85"
                        y1="37.5"
                        y2="37.5"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="15"
                        x2="85"
                        y1="50"
                        y2="50"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="15"
                        x2="85"
                        y1="62.5"
                        y2="62.5"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="32.5"
                        x2="32.5"
                        y1="25"
                        y2="75"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="50"
                        x2="50"
                        y1="25"
                        y2="75"
                      ></line>
                      <line
                        stroke="currentColor"
                        strokeWidth="1"
                        x1="67.5"
                        x2="67.5"
                        y1="25"
                        y2="75"
                      ></line>
                      <path d="M80 20 L85 25 L80 30 L75 25 Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    An intuitive spreadsheet-like interface allows marketers to build and
                    manage workflows independently — no developers or custom APIs
                    required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
