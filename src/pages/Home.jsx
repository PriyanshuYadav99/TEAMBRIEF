import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const fontStyle = { fontFamily: "Lexend, sans-serif" };
  
  return (
    <div className="min-h-screen bg-white">
      {/* ====================== HERO SECTION ====================== */}
      <section
        className="relative overflow-hidden"
        style={{
          width: "100%",
          height: "700px",
          background: "linear-gradient(180deg, rgba(142, 197, 252, 1) 0%, rgba(180, 210, 250, 0.8) 50%, rgba(224, 235, 252, 0.4) 80%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <Navbar />
        
        {/* HERO CONTENT */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center" 
          style={{ width: "1000px", marginTop: "-50px", ...fontStyle }}
        >
          <h1 
            className="text-[64px] font-bold text-gray-900 mb-6 leading-tight" 
            style={{ color: "#1A1A1A", whiteSpace: "nowrap" }}
          >
            Smarter updates. Stronger teams.
          </h1>

          <p 
            className="text-gray-900 text-[17px] mb-8 leading-relaxed px-12" 
            style={{ color: "#1A1A1A" }}
          >
            5 minutes a week gets you a well-informed team. AI-powered briefings that keep your team aligned and informed.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-base">
              Get Started Free
            </button>
            <Link to="/how-it-works">
              <button className="bg-white text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition text-base border border-gray-200">
                See How It Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== WHAT YOUR TEAM NEEDS ====================== */}
      <section className="pt-0 pb-12 px-8" style={{paddingTop: "0px", marginTop: "-150px"}}>
        <div className="max-w-[1240px] mx-auto">
          
          <h2
            className="font-semibold text-center mb-6"
            style={{
              ...fontStyle,
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "1.35",
              letterSpacing: "0.16px",
              color: "#212121",
              width: "1065px",
              margin: "0 auto",
              whiteSpace: "nowrap",
            }}
          >
            What your team needs to know — delivered beautifully.
          </h2>

          {/* Industry Tags */}
          <div className="flex justify-center gap-4 mb-12" style={fontStyle}>
            <div className="flex items-center bg-white rounded-[10px] px-5 py-2.5 gap-2 shadow-sm" style={{ width: "210px", height: "47px" }}>
              <i className="ri-car-fill text-gray-600 text-xl"></i>
              <span className="text-gray-700 text-base font-medium">Automotive</span>
            </div>
            <div className="flex items-center bg-white rounded-[10px] px-5 py-2.5 gap-2 shadow-sm" style={{ width: "210px", height: "47px" }}>
              <i className="ri-capsule-line text-gray-600 text-xl"></i>
              <span className="text-gray-700 text-base font-medium">Pharmaceutical</span>
            </div>
            <div className="flex items-center bg-white rounded-[10px] px-5 py-2.5 gap-2 shadow-sm" style={{ width: "210px", height: "47px" }}>
              <i className="ri-oil-line text-gray-600 text-xl"></i>
              <span className="text-gray-700 text-base font-medium">Oil & Gas</span>
            </div>
            <div className="flex items-center bg-white rounded-[10px] px-5 py-2.5 gap-2 shadow-sm" style={{ width: "210px", height: "47px" }}>
              <i className="ri-building-2-line text-gray-600 text-xl"></i>
              <span className="text-gray-700 text-base font-medium">Manufacturing</span>
            </div>
            <div className="flex items-center bg-white rounded-[10px] px-5 py-2.5 gap-2 shadow-sm" style={{ width: "210px", height: "47px" }}>
              <i className="ri-bank-line text-gray-600 text-xl"></i>
              <span className="text-gray-700 text-base font-medium">Legal & Finance</span>
            </div>
            <div className="flex items-center bg-white rounded-[10px] px-5 py-2.5 gap-2 shadow-sm" style={{ width: "210px", height: "47px" }}>
              <span className="text-gray-500 text-base font-medium">...and more</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={fontStyle}>
            <div className="group bg-[#F5F5F5] p-5 rounded-[20px] hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#F5F5F5]" style={{width: '400px', minHeight: '242px'}}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-gray-900 group-hover:text-white transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300">
                Curate Smarter
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                AI finds and filters the latest and relevant articles, reports,
                podcasts, and videos for your chosen topics.
              </p>
            </div>

            <div className="group bg-[#F5F5F5] p-5 rounded-[20px] hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#F5F5F5]" style={{width: '400px', minHeight: '242px'}}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-gray-900 group-hover:text-white transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300">
                Create Effortlessly
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Stunning newsletters (Team Briefs) are auto-generated. You can
                edit and drag-and-drop any resource.
              </p>
            </div>

            <div className="group bg-[#F5F5F5] p-5 rounded-[20px] hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#F5F5F5]" style={{width: '400px', minHeight: '242px'}}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-gray-900 group-hover:text-white transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300">
                Share and Measure
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Share directly as a link or download a PDF. Measure your team's
                growth and track engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FROM CHAOS TO CLARITY ====================== */}
<section className="py-20 px-8 bg-white">
  <div className="max-w-[1182px] mx-auto flex items-center justify-between gap-20">
    {/* ================= Left Text Content ================= */}
    <div
      className="flex flex-col justify-center"
      style={{ width: "572px", gap: "16px", fontFamily: "Lexend, sans-serif" }}
    >
      <h2
        style={{
          fontFamily: "Funnel Display, sans-serif",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "120%",
          letterSpacing: "0.16px",
          color: "#212121",
          marginBottom: "0",
        }}
      >
        From chaos to clarity, in one click.
      </h2>
      <p
        style={{
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "140%",
          color: "#424242",
          marginTop: "8px",
        }}
      >
        Team Brief brings all your team's learning and updates into one living
        space. AI finds what matters. You approve. Everyone grows.
      </p>
    </div>

    {/* ================= Right Video Box ================= */}
    <div
      className="relative flex items-center justify-center"
      style={{
        width: "505px",
        height: "505px",
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: "0 4px 20px 0 rgba(60, 120, 200, 0.08)",
      }}
    >
      {/* ===== Background Video ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/team-brief-animation.webm" type="video/webm" />
      </video>

      {/* ===== Optional Gradient Overlay (for a soft Figma-like glow) ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(232,240,254,0.5) 0%, rgba(212,228,252,0.3) 50%, rgba(240,246,254,0.2) 100%)",
        }}
      ></div>
    </div>
  </div>
</section>





 

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="py-16 px-8 bg-gray-50 overflow-hidden">
        <div className="mx-auto" style={{ width: "1240px", maxWidth: "100%", ...fontStyle }}>
          <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
          <div className="overflow-x-auto scrollbar-hide" style={{ width: "1240px", height: "425px" }}>
            <div className="flex gap-[32px]">
              <div
                className="bg-[#6B6B6B] text-white flex-shrink-0 rounded-[20px] p-[27px_32px] shadow-lg flex flex-col justify-between"
                style={{ width: "610px", height: "355px" }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "1.5",
                    letterSpacing: "0.16px",
                    color: "#FFFFFF",
                  }}
                >
                  "We have a million third party partners out there, and nobody's ever played back to us 'this is your onboarding flow and the events that fire'. You guys truly get it, and it's very impressive. Thank you for getting deep, deep, deep in the weeds."
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-300 mb-1">co-founder &amp; head of growth</p>
                  <p className="font-semibold text-base" style={{ color: "#FFFFFF" }}>John Doe</p>
                </div>
              </div>

              <div
                className="bg-gray-100 text-gray-900 flex-shrink-0 rounded-[20px] p-[27px_32px] shadow-lg flex flex-col justify-between"
                style={{ width: "610px", height: "355px" }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "1.5",
                    letterSpacing: "0.16px",
                    color: "#424242",
                  }}
                >
                  "We looked at everything in the space–over 100 vendors– and it was clear Hello Patient had the right product and the right team to support our practice."
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-1">director of IT</p>
                  <p className="font-semibold text-base" style={{ color: "#424242" }}>Jane Smith</p>
                </div>
              </div>

              <div
                className="bg-[#6B6B6B] text-white flex-shrink-0 rounded-[20px] p-[27px_32px] shadow-lg flex flex-col justify-between"
                style={{ width: "610px", height: "355px" }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "1.5",
                    letterSpacing: "0.16px",
                    color: "#FFFFFF",
                  }}
                >
                  "We use it to keep marketing productive and aligned. Clients appreciate it, and our team loves it."
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-300 mb-1">CEO, Marketing Agency</p>
                  <p className="font-semibold text-base" style={{ color: "#FFFFFF" }}>Jenny Bee</p>
                </div>
              </div>

              <div
                className="bg-gray-100 text-gray-900 flex-shrink-0 rounded-[20px] p-[27px_32px] shadow-lg flex flex-col justify-between"
                style={{ width: "610px", height: "355px" }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "1.5",
                    letterSpacing: "0.16px",
                    color: "#424242",
                  }}
                >
                  "My weekly 1-on-1s just got WAY better. You and your team are getting some big changes in AI first."
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-1">VP of Operations</p>
                  <p className="font-semibold text-base" style={{ color: "#424242" }}>Jesse Arlen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
      <section className="flex justify-center items-center py-[41px] px-[105px]">
        <div
          className="text-center text-white rounded-[20px] flex flex-col justify-center items-center"
          style={{
            width: "1240px",
            minHeight: "221px",
            background: "linear-gradient(90deg, #0277BC 0%, #805CFB 100%)",
            padding: "41px 105px",
          }}
        >
          <h2
            className="font-bold mb-4"
            style={{
              ...fontStyle,
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "1.35",
              letterSpacing: "0.16px",
            }}
          >
            Why your team needs TeamBrief
          </h2>
          <p
            className="font-normal leading-relaxed mt-2"
            style={{
              fontSize: "20px",
              ...fontStyle,
            }}
          >
            Every team drowns in information — news, reports, podcasts, market trends. TeamBrief makes sense of it all.<br />
            It connects your people to what matters — inside and outside your company.
          </p>
        </div>
      </section>

      {/* ====================== CREATE YOUR FIRST BRIEF ====================== */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center" style={fontStyle}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Create your first team brief in under 5 minutes.
          </h2>
          <button
            className="bg-[#0277BC] text-white font-semibold rounded-[8px] shadow border border-[#0277BC] hover:bg-[#025d99] transition"
            style={{
              width: "400px",
              height: "48px",
              padding: "12px 20px",
              fontSize: "18px",
              gap: "8px",
            }}
          >
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}