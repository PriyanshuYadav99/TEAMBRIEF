export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* ====================== TOP GRADIENT SECTION ====================== */}
      <section
        className="relative overflow-hidden"
        style={{
          width: "100%",
          height: "400px",
          background: "linear-gradient(180deg, rgba(142, 197, 252, 0.9) 0%, rgba(200, 210, 252, 0.5) 70%, rgba(224, 195, 252, 0) 100%)",
        }}
      >
        {/* ====================== NAVBAR ====================== */}
        <nav
          className="absolute z-20 flex justify-between items-center mx-auto"
          style={{
            width: "1240px",
            height: "44px",
            top: "18px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded text-xs flex items-center justify-center" style={{ width: "32px", height: "32px" }}>TB</div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm text-gray-900" style={{ fontFamily: "Lexend, sans-serif" }}>TEAM</span>
              <span className="font-bold text-sm text-gray-900" style={{ fontFamily: "Lexend, sans-serif" }}>BRIEF</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-8 text-sm font-medium" style={{ fontFamily: "Lexend, sans-serif" }}>
           
            <a href="/how-it-works" className="text-gray-900 hover:text-blue-600">
              How It Works
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600">
              Features
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-600">
              Pricing
            </a>
            <div className="relative flex items-center">
              <button className="text-gray-900 hover:text-blue-600 flex items-center">
                Company
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Log In button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
              Log In
            </button>
          </div>
        </nav>

        {/* ====================== HERO CONTENT ====================== */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center" style={{ width: "900px", marginTop: "-20px" }}>
          <h1 
            className="font-bold text-gray-900 mb-4 leading-tight" 
            style={{ 
              fontFamily: "Lexend, sans-serif",
              fontSize: "56px",
              color: "#1A1A1A",
            }}
          >
            A knowledgeable, aligned team<br />in three simple steps.
          </h1>

          <p 
            className="text-gray-900 mb-8 leading-relaxed" 
            style={{ 
              fontFamily: "Lexend, sans-serif",
              fontSize: "18px",
              color: "#1A1A1A" 
            }}
          >
            TeamBrief turns scattered knowledge into focused insights in just a few minutes.
          </p>
        </div>
      </section>

      {/* ====================== STEP 1: CHOOSE WHAT MATTERS ====================== */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-stretch gap-0">
            {/* Left Content */}
            <div 
              className="text-white"
              style={{
                background: "linear-gradient(90deg, #805CFB 0%, #0277BC 100%)",
                width: "583px",
                minHeight: "505px",
                borderRadius: "30px 0 0 30px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div 
                className="inline-block bg-white px-4 py-1 rounded-full text-sm font-semibold mb-6"
                style={{ fontFamily: "Lexend, sans-serif", width: "fit-content", color: "#805CFB" }}
              >
                Step-1
              </div>
              <h2 
                className="font-bold mb-6"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "36px",
                  lineHeight: "1.3",
                }}
              >
                Choose What Matters
              </h2>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                AI finds the most relevant topics based on your position and industry
              </p>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                You choose what your team should stay on top of: industry trends, competitors, markets, or research.
              </p>
              <p 
                className="leading-relaxed"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                TeamBrief's AI then scans across leading publishers, blogs, reports, videos, and podcasts to find what's most relevant.
              </p>
            </div>

            {/* Right Visual */}
            <div 
              className="bg-white"
              style={{
                width: "657px",
                minHeight: "505px",
                borderRadius: "0 30px 30px 0",
                padding: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "-2px 0 10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="w-full">
                <div className="flex flex-wrap gap-3">
                  {[
                    { text: "Visual Principles", selected: true },
                    { text: "Color psychology", selected: true },
                    { text: "Typography", selected: true },
                    { text: "Layout systems", selected: true },
                    { text: "Branding", selected: true },
                    { text: "User research", selected: false },
                    { text: "Prototyping", selected: false },
                    { text: "Accessibility", selected: false },
                    { text: "Design systems", selected: false },
                    { text: "Product thinking", selected: false },
                    { text: "Market trends", selected: false },
                    { text: "Business goals", selected: false },
                    { text: "ROI of design", selected: false },
                    { text: "Design metrics", selected: false },
                    { text: "Collaboration", selected: false },
                    { text: "Feedback culture", selected: false },
                    { text: "Agile workflow", selected: false },
                    { text: "Presentation", selected: false },
                  ].map((tag, i) => (
                    <div 
                      key={i}
                      className={tag.selected ? "text-white" : "text-gray-700 bg-white border border-gray-300"}
                      style={{
                        fontFamily: "Lexend, sans-serif",
                        fontSize: "14px",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        background: tag.selected ? "#805CFB" : "white",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {tag.text}
                      {tag.selected && (
                        <span style={{ fontSize: "12px", cursor: "pointer" }}>✕</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STEP 2: CURATE AND APPROVE ====================== */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-stretch gap-0">
            {/* Left Visual */}
            <div 
              className="bg-white"
              style={{
                width: "657px",
                minHeight: "505px",
                borderRadius: "30px 0 0 30px",
                padding: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="w-full space-y-4">
                <div 
                  className="rounded-2xl p-6 text-white relative"
                  style={{
                    background: "linear-gradient(135deg, #805CFB 0%, #0277BC 100%)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                    <div className="text-xs opacity-75" style={{ fontFamily: "Lexend, sans-serif" }}>TEAM BRIEF</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Lexend, sans-serif" }}>Weekly Industry Brief</h3>
                  <p className="text-sm opacity-90" style={{ fontFamily: "Lexend, sans-serif" }}>AI-generated content ready for review</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-xl p-4">
                      <div className="w-full h-20 bg-gray-200 rounded-lg mb-3"></div>
                      <div className="h-3 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div 
              className="text-white"
              style={{
                background: "linear-gradient(90deg, #805CFB 0%, #0277BC 100%)",
                width: "583px",
                minHeight: "505px",
                borderRadius: "0 30px 30px 0",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div 
                className="inline-block bg-white px-4 py-1 rounded-full text-sm font-semibold mb-6"
                style={{ fontFamily: "Lexend, sans-serif", width: "fit-content", color: "#0277BC" }}
              >
                Step-2
              </div>
              <h2 
                className="font-bold mb-6"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "36px",
                  lineHeight: "1.3",
                }}
              >
                Curate and Approve
              </h2>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                AI finds and fetches. You stay in control.
              </p>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                TeamBrief fetches the latest stories, insights, and ideas saving you hours of browsing.
              </p>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                You can approve, edit, or replace any item before it goes live.
              </p>
              <p 
                className="leading-relaxed"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                Add your own notes for context that matters to your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STEP 3: CREATE AND SHARE ====================== */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-stretch gap-0">
            {/* Left Content */}
            <div 
              className="text-white"
              style={{
                background: "linear-gradient(90deg, #805CFB 0%, #0277BC 100%)",
                width: "583px",
                minHeight: "505px",
                borderRadius: "30px 0 0 30px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div 
                className="inline-block bg-white px-4 py-1 rounded-full text-sm font-semibold mb-6"
                style={{ fontFamily: "Lexend, sans-serif", width: "fit-content", color: "#805CFB" }}
              >
                Step-3
              </div>
              <h2 
                className="font-bold mb-6"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "36px",
                  lineHeight: "1.3",
                }}
              >
                Create and Share
              </h2>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                Generate beautiful Team Briefs and share with your team.
              </p>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                Instantly turn your curated items into a branded newsletter.
              </p>
              <p 
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                Share via PDF or links.
              </p>
              <p 
                className="leading-relaxed"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "15px",
                  opacity: "0.95",
                  lineHeight: "1.6",
                }}
              >
                Track engagement metrics like open rates, reads, and top topics to understand what your team values most.
              </p>
            </div>

            {/* Right Visual */}
            <div 
              className="bg-white"
              style={{
                width: "657px",
                minHeight: "505px",
                borderRadius: "0 30px 30px 0",
                padding: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "-2px 0 10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="w-full space-y-6">
                <div className="flex gap-3 justify-center items-center mb-4">
                  <button 
                    className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    Save PDF
                  </button>
                  <button 
                    className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    Share link
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-lg p-3">
                      <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CONTINUOUS LEARNING LOOP ====================== */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-stretch gap-0">
            {/* Left Visual - Flow Diagram */}
            <div 
              className="bg-gradient-to-br from-blue-50 to-blue-100"
              style={{
                width: "720px",
                minHeight: "625px",
                borderRadius: "30px 0 0 30px",
                padding: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central TeamBrief logo */}
                <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
                  <div 
                    className="bg-blue-600 text-white font-bold rounded-2xl text-center flex items-center justify-center"
                    style={{ 
                      fontFamily: "Lexend, sans-serif", 
                      fontSize: "32px",
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    TB
                  </div>
                </div>
                
                {/* Circular dotted lines */}
                <div 
                  className="absolute border-2 border-dashed border-gray-300 rounded-full"
                  style={{
                    width: "280px",
                    height: "280px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
                <div 
                  className="absolute border-2 border-dashed border-gray-300 rounded-full"
                  style={{
                    width: "450px",
                    height: "450px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
                
                {/* Content cards around the circle */}
                <div className="absolute top-16 left-12 bg-white rounded-lg shadow-md p-3 flex items-center gap-2" style={{ width: "140px" }}>
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="absolute top-12 right-16 bg-white rounded-lg shadow-md p-3 flex items-center gap-2" style={{ width: "140px" }}>
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-20 bg-white rounded-lg shadow-md p-3 flex items-center gap-2" style={{ width: "140px" }}>
                  <div className="w-12 h-12 bg-yellow-100 rounded flex items-center justify-center text-2xl">📄</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>

                <div className="absolute bottom-16 right-20 bg-white rounded-lg shadow-md p-3 flex items-center gap-2" style={{ width: "140px" }}>
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-6 -translate-y-1/2 bg-white rounded-lg shadow-md p-3 flex items-center gap-2" style={{ width: "140px" }}>
                  <div className="w-12 h-12 bg-red-500 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-6 -translate-y-1/2 bg-white rounded-lg shadow-md p-3 flex items-center gap-2" style={{ width: "140px" }}>
                  <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center text-2xl">📊</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div 
              className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white"
              style={{ 
                width: "720px",
                minHeight: "625px",
                borderRadius: "0 30px 30px 0",
                padding: "80px 60px",
              }}
            >
              <h2 
                className="font-bold mb-6 text-gray-900"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "42px",
                  lineHeight: "1.3",
                }}
              >
                Continuous Learning<br />Loop
              </h2>
              <p 
                className="leading-relaxed mb-4 text-gray-700"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                TeamBrief gets smarter with every issue.
              </p>
              <p 
                className="leading-relaxed mb-4 text-gray-700"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                The more your team reads, reacts, and engages, the better your AI curation becomes.
              </p>
              <p 
                className="leading-relaxed text-gray-700"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Over time, TeamBrief learns what resonates, creating a personalized knowledge engine for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
     <section className="py-16 px-8 bg-white">
  <div className="flex justify-center">
    <div
      className="rounded-[20px] flex flex-col justify-center items-center text-center text-white"
      style={{
        width: "1240px",
        minHeight: "250px",
        background: "linear-gradient(90deg, #0277BC 0%, #805CFB 100%)",
        padding: "20px 105px",
        gap: "10px",
      }}
    >
      <h2
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "1.4",
          marginBottom: "10px",
        }}
      >
        Build a more aligned team.
      </h2>

      <p
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "1.6",
          opacity: 0.95,
          maxWidth: "640px",
          marginBottom: "20px",
        }}
      >
        Start with one topic, one team, and one click. <br />
        Let TeamBrief handle the rest.
      </p>

      <button
        className="bg-white font-semibold text-gray-900 rounded-[10px] hover:scale-[1.03] transition-all duration-300 shadow-md hover:shadow-lg"
        style={{
          width: "400px",
          height: "48px",
          fontFamily: "Lexend, sans-serif",
          fontSize: "24px",
        }}
      >
        Get Started Free
      </button>
    </div>
  </div>
</section>


      {/* ====================== FOOTER ====================== */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          width: "100%",
          height: "495px",
          background: "linear-gradient(180deg, rgba(207, 231, 255, 0) 0%, rgba(167, 209, 255, 0.4) 30%, rgba(142, 197, 252, 0.9) 100%)",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <h1
            className="font-semibold"
            style={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 600,
              fontSize: "200px",
              lineHeight: "1.2",
              letterSpacing: "0.16px",
              color: "#212121",
              width: "986px",
              height: "240px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            TeamBrief
          </h1>
          <div
            className="flex justify-between items-center border-t border-b"
            style={{
              width: "1240px",
              height: "64px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderColor: "#757575",
              marginTop: "16px",
            }}
          >
            <div className="flex items-center gap-[60px] text-[15px] font-medium" style={{ color: "#1A1A1A", fontFamily: "Lexend, sans-serif" }}>
              <a href="#" className="hover:text-blue-600 transition">About</a>
              <a href="#" className="hover:text-blue-600 transition">Contact</a>
              <a href="#" className="hover:text-blue-600 transition">Terms and conditions</a>
              <a href="#" className="hover:text-blue-600 transition">Privacy policy</a>
            </div>
            <p className="text-[15px] font-medium" style={{ color: "#1A1A1A", fontFamily: "Lexend, sans-serif" }}>
              2025© Team Brief
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}