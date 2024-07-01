import "@/app/_styles/global.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LinkNav from "./components/LinkNav";

export const metadata = {
  title: 'Michael Olubode',
  description: 'Michael Olubode Portfolio',
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
          <div className="flex flex-col sm:flex-row">
            <LinkNav add="https://github.com/OlubodeMichael">Github</LinkNav>
            <LinkNav add="https://www.linkedin.com/in/michael-olubode-olushola/">Linkedin</LinkNav>
          </div>
          <Footer className="w-full max-w-[350px] sm:max-w-[600px] m-4" />
        </div>
      </body>
    </html>
  );
}
