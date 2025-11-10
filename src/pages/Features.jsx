export default function Features() {
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
              Home
            </a>
            <a href="/how-it-works" className="text-gray-900 hover:text-blue-600">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center" style={{ width: "900px", marginTop: "-20px" }}>
          <h1 
            className="font-bold text-gray-900 mb-4 leading-tight" 
            style={{ 
              fontFamily: "Lexend, sans-serif",
              fontSize: "56px",
              color: "#1A1A1A",
            }}
          >
            Keep your team in sync with the world<br />in just 5 minutes a week.
          </h1>

          <p 
            className="text-gray-700 leading-relaxed" 
            style={{ 
              fontFamily: "Lexend, sans-serif",
              fontSize: "18px",
            }}
          >
            From AI-powered curation to drag-and-drop editing—everything you need to<br />
            stay agile, no steep learning curve.
          </p>
        </div>
      </section>

      {/* ====================== AI-POWERED CURATION ====================== */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-8">
            <h2 
              className="font-bold text-gray-900 mb-3"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "42px",
                lineHeight: "1.2",
              }}
            >
              AI-Powered Curation
            </h2>
            <p 
              className="text-gray-600"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              Choose your topics. AI does the heavy lifting.
            </p>
          </div>

          {/* Visual Card */}
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
              minHeight: "500px",
            }}
          >
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    Industry News
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lexend, sans-serif" }}>
                    Latest updates from your sector
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    Market Trends
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lexend, sans-serif" }}>
                    Key insights and analysis
                  </p>
                </div>
              </div>

              {/* Center - Team Brief Logo */}
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="bg-blue-600 text-white font-bold px-6 py-4 rounded-xl text-center text-3xl" style={{ fontFamily: "Lexend, sans-serif" }}>
                    TB
                  </div>
                  <p className="text-center mt-4 font-bold text-gray-900" style={{ fontFamily: "Lexend, sans-serif", fontSize: "18px" }}>
                    TEAM BRIEF
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    Tech Updates
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lexend, sans-serif" }}>
                    Innovation and breakthroughs
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lexend, sans-serif", fontSize: "16px" }}>
                    Best Practices
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Lexend, sans-serif" }}>
                    Expert tips and guides
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px", color: "#6B7280" }}>
            <p>✓ AI scans thousands of sources</p>
            <p>✓ Filters by relevance and recency</p>
            <p>✓ Saves you hours of manual research</p>
          </div>
        </div>
      </section>

      {/* ====================== CUSTOMIZABLE TEAM STREAMS ====================== */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-8">
            <h2 
              className="font-bold text-gray-900 mb-3"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "42px",
                lineHeight: "1.2",
              }}
            >
              Customizable Team Streams
            </h2>
            <p 
              className="text-gray-600"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              Every team is different. Tailor your streams to match your goals.
            </p>
          </div>

          {/* Visual Card */}
          <div
            className="rounded-3xl p-12"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
              minHeight: "400px",
            }}
          >
            <div className="grid grid-cols-3 gap-6">
              {[
                ["Leadership", "Strategy", "Innovation", "Growth"],
                ["Marketing", "Campaigns", "Branding", "Analytics"],
                ["Engineering", "DevOps", "Architecture", "Security"],
                ["Sales", "Pipeline", "CRM", "Deals"],
                ["Product", "Features", "Roadmap", "UX"],
                ["Finance", "Budget", "Revenue", "Forecasting"],
              ].map((column, colIndex) => (
                <div key={colIndex} className="space-y-3">
                  {column.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl px-4 py-3 shadow-md text-center"
                      style={{
                        fontFamily: "Lexend, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#374151",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px", color: "#6B7280" }}>
            <p>✓ Drag-and-drop interface for easy customization</p>
            <p>✓ Create unlimited streams for different teams or projects</p>
            <p>✓ Real-time updates keep everyone in sync</p>
          </div>
        </div>
      </section>

      {/* ====================== AUTOMATIC NEWSLETTER BUILDER ====================== */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-8">
            <h2 
              className="font-bold text-gray-900 mb-3"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "42px",
                lineHeight: "1.2",
              }}
            >
              Automatic Newsletter Builder
            </h2>
            <p 
              className="text-gray-600"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              Beautiful newsletters, auto-generated. Just review and send.
            </p>
          </div>

          {/* Visual Card */}
          <div
            className="rounded-3xl p-12"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
              minHeight: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Newsletter Previews */}
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-6 shadow-2xl"
                  style={{ minHeight: "200px" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-4 w-full h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px", color: "#6B7280" }}>
            <p>✓ AI designs beautiful layouts automatically</p>
            <p>✓ Drag-and-drop to rearrange content</p>
            <p>✓ One-click publish or schedule delivery</p>
          </div>
        </div>
      </section>

      {/* ====================== INTEGRATIONS ====================== */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 
            className="font-bold text-gray-900 mb-3"
            style={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "42px",
              lineHeight: "1.2",
            }}
          >
            Integrations That Fit Your Workflow
          </h2>
          <p 
            className="text-gray-600 mb-12"
            style={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            LAUNCHING SOON
          </p>

          <div
            className="rounded-3xl p-20 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
              minHeight: "350px",
            }}
          >
            <div className="text-center">
              <h3 
                className="text-white font-bold mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "48px",
                }}
              >
                Launching Soon
              </h3>
              <p 
                className="text-white/90"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "20px",
                }}
              >
                Seamless integrations with your favorite tools
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-600" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px" }}>
            Connect with Slack, Teams, Notion, and more—your workflow stays uninterrupted.
          </p>
        </div>
      </section>

      {/* ====================== LEARNING ANALYTICS ====================== */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 
            className="font-bold text-gray-900 mb-3"
            style={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "42px",
              lineHeight: "1.2",
            }}
          >
            Learning Analytics
          </h2>
          <p 
            className="text-gray-600 mb-12"
            style={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            COMING SOON
          </p>

          <div
            className="rounded-3xl p-20 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 100%)",
              minHeight: "350px",
            }}
          >
            <div className="text-center">
              <h3 
                className="text-gray-900 font-bold mb-4"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "48px",
                }}
              >
                Coming Soon
              </h3>
              <p 
                className="text-gray-700"
                style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "20px",
                }}
              >
                Track engagement and measure team growth
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-600" style={{ fontFamily: "Lexend, sans-serif", fontSize: "15px" }}>
            Get insights into what your team is reading, learning, and engaging with. Make data-driven decisions about your content strategy.
          </p>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
      <section className="py-16 px-8 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-[1240px] mx-auto">
          <div
            className="text-center text-white rounded-3xl flex flex-col justify-center items-center"
            style={{
              minHeight: "280px",
              background: "linear-gradient(90deg, #0EA5E9 0%, #06B6D4 100%)",
              padding: "60px 80px",
            }}
          >
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "Lexend, sans-serif",
                fontSize: "48px",
                lineHeight: "1.3",
              }}
            >
              From data to shared understanding.<br />That's TeamBrief.
            </h2>
            <p
              className="font-normal leading-relaxed mb-8 max-w-2xl"
              style={{
                fontSize: "20px",
                fontFamily: "Lexend, sans-serif",
                opacity: "0.95",
              }}
            >
              Turn scattered information into focused insights. Start building a smarter, more aligned team today.
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
              2025© Team Brief
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}