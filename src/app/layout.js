import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={"pt-32"}>
        {children}
        </div>
        <hr className="mt-5 mx-10" />
        <Footer />
      </body>
    </html>
  );
}
