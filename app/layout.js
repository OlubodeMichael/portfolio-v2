import "@/app/_styles/global.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Michael Olubode',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col items-center min-h-screen">
        <div className="w-full max-w-[350px] sm:max-w-[600px] m-4 flex-grow">
          <Navigation />
          <main className="mt-4">
            {children}
          </main>
        </div>
        <Footer className="w-full max-w-[350px] sm:max-w-[600px] m-4" />
      </body>
    </html>
  );
}