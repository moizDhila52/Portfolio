import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/ui/ParticlesBackground";

const outfit = Outfit({
  subsets: ["latin"], weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

export const metadata = {
  title: "Portfolio - Moiz Dhilawala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
                   {/* Background Particles */}
  <div className="absolute top-0 left-0 w-full h-full min-h-screen -z-10">
          <ParticlesBackground />
        </div>
        {children}
      </body>
    </html>
  );
}
