export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* ====================== TOP GRADIENT SECTION ====================== */}
      <section
        className="relative overflow-hidden"
        style={{
          width: "100%",
          minHeight: "500px",
          background: "linear-gradient(180deg, rgba(220, 180, 255, 0.3) 0%, rgba(180, 220, 255, 0.4) 50%, rgba(142, 197, 252, 0) 100%)",
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
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded text-xs flex items-center justify-center" style={{ width: "32px", height: "32px" }}>TB</div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm text-gray-900" style={{ fontFamily: "Lexend, sans-serif" }}>TEAM</span>
              <span className="font-bold text-sm text-gray-900" style={{ fontFamily: "Lexend, sans-serif" }}>BRIEF</span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="flex items-center space-x-8 text-sm font-medium" style={{ fontFamily: "Lexend, sans-serif" }}>
            <a href="/" className="text-gray-900 hover:text-blue-600">
              How It Works
            </a>
            <a href="/features" className="text-gray-900 hover:text-blue-600">
              Features
            </a>
            <a href="/pricing" className="text-gray-900 hover:text-blue-600">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center" style={{ width: "900px", marginTop: "0px" }}>
          <h1 
            className="font-bold text-gray-900 mb-6 leading-tight" 
            style={{ 
              fontFamily: "Lexend, sans-serif",
              fontSize: "56px",
              color: "#1A1A1A",
            }}
          >
            From information overload<br />to insight alignment.
          </h1>

          <p 
            className="text-gray-700 leading-relaxed" 
            style={{ 
              fontFamily: "Lexend, sans-serif",
              fontSize: "18px",
            }}
          >
            We make sense of it all, keeping teams stay aligned, curious, and<br />
            informed — in just 5 minutes a week.
          </p>
        </div>
      </section>

      {/* ====================== OUR MISSION ====================== */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
              Our Mission
            </div>
            
            <h2 
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "36px",
                lineHeight: "1.3",
              }}
            >
              Built for teams that want to think smarter, not harder.
            </h2>

            <p 
              className="text-gray-700 mb-6 leading-relaxed"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "17px",
                lineHeight: "1.7",
              }}
            >
              Every team deserves clarity. But with endless sources—news, reports, podcasts, internal updates—it's hard to separate signal from noise.
            </p>

            <p 
              className="text-gray-700 leading-relaxed"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "17px",
                lineHeight: "1.7",
              }}
            >
              From startups to global enterprises, teams struggle to keep up with their evolving area - research, track insights. We built TeamBrief to bridge that gap — turning AI into a co-pilot for team intelligence. Not just data—understanding.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p 
                className="text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
              >
                TeamBrief started as the answer of "Is AI the the country of Punjab started it — transforming scattered information into actionable, easily intelligible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== OUR VISION ====================== */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
              Our Vision
            </div>
            
            <h2 
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "36px",
                lineHeight: "1.3",
              }}
            >
              To help every team make sense of the world, together.
            </h2>

            <p 
              className="text-gray-700 mb-8 leading-relaxed"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "17px",
                lineHeight: "1.7",
              }}
            >
              We see the best work being done in the office, not on-site in — from a shipping tools.<br />
              Whether scaling a startup or managing a global team, every team needs timely, trusted sources of shared understanding.
            </p>

            <div>
              <h3 
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "20px",
                }}
              >
                Highlights:
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    <strong>Empower Teams to Stay Informed and Connected</strong>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    <strong>Simplify Information Overload into Clarity</strong>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    <strong>Build Smarter, Agile Teams Across Every Industry</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY TEAMS CHOOSE / WE'RE BUILDING SECTION ====================== */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Why Teams Choose */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
              <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
                Why teams choose us
              </div>
              
              <h2 
                className="font-bold text-gray-900 mb-8"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "32px",
                  lineHeight: "1.3",
                }}
              >
                Why teams choose TeamBrief?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px" }}>
                    <strong>AI-Powered Curation:</strong> Your AI00+ top news sources—instantly.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px" }}>
                    <strong>Zero Friction:</strong> Instantly sharing impossible to manages.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px" }}>
                    <strong>For Every Team:</strong> Whether you're a team startups.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px" }}>
                    <strong>Built for Speed:</strong> No credit card required. Get — start.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - We're Building */}
            <div className="flex items-center justify-center">
              <div>
                <h2 
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "48px",
                    lineHeight: "1.2",
                    color: "#1F2937",
                  }}
                >
                  We're building the<br />
                  future of workplace<br />
                  learning —
                </h2>
                <p 
                  className="font-bold"
                  style={{
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "48px",
                    lineHeight: "1.2",
                    color: "#0EA5E9",
                  }}
                >
                  one brief at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div
            className="text-center text-white rounded-3xl flex flex-col justify-center items-center"
            style={{
              minHeight: "280px",
              background: "linear-gradient(90deg, #0EA5E9 0%, #7C3AED 100%)",
              padding: "60px 80px",
            }}
          >
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "48px",
                lineHeight: "1.3",
              }}
            >
              Let's build your first TeamBrief.
            </h2>
            <p
              className="font-normal leading-relaxed mb-8 max-w-2xl"
              style={{
                fontSize: "18px",
                fontFamily: "Lexend, sans-serif",
                opacity: "0.95",
              }}
            >
              No credit card. No steep learning curve. Just smarter teams,<br />
              Riseott of AI-curated or contextual team knowledge.
            </p>
            <button
              className="bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition"
              style={{
                width: "280px",
                height: "56px",
                fontSize: "18px",
                fontFamily: "Lexend, sans-serif",
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
              ©2025 Team Brief
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}