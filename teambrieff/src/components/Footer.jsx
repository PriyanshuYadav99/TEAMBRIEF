import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
          <div 
            className="flex items-center gap-[60px] text-[15px] font-medium" 
            style={{ color: "#1A1A1A", fontFamily: "Lexend, sans-serif" }}
          >
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link to="/terms" className="hover:text-blue-600 transition">Terms and conditions</Link>
            <Link to="/privacy" className="hover:text-blue-600 transition">Privacy policy</Link>
          </div>
          <p className="text-[15px] font-medium" style={{ color: "#1A1A1A", fontFamily: "Lexend, sans-serif" }}>
            ©2025 Team Brief
          </p>
        </div>
      </div>
    </section>
  );
}