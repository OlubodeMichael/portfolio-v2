import "@/app/_styles/global.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import LinkNav from "./_components/LinkNav";

export const metadata = {
  title: {
    template: "Michael Olubode - %s",
    default: "Michael Olubode",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col items-center min-h-screen">
        <div className="w-full max-w-[350px] sm:max-w-[600px] m-4 flex-grow">
          <Navigation />
          <main className="mt-4">
            {children}
          </main>
          <div className="flex flex-col sm:flex-row mt-10">
            <LinkNav add="https://github.com/OlubodeMichael">Github</LinkNav>
            <LinkNav add="https://www.linkedin.com/in/michael-olubode-olushola/">Linkedin</LinkNav>
          </div>
          <Footer className="w-full max-w-[350px] sm:max-w-[600px] m-4" />
        </div>
      </body>
    </html>
  );
}
