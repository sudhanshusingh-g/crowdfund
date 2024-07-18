import companyLogo from "./assets/logo.svg";
import mobileCoverImage from "./assets/mobile-cover-image.jpg"
import {Menu} from "lucide-react";

function Layout({children}) {
  return (
    <div>
      <header
        style={{ backgroundImage: `url(${mobileCoverImage})` }}
        className={` relative bg-center bg-cover h-[40vh]`}
      >
        <div className="bg-black/30 absolute inset-0"></div>
        <nav className="relative z-10 flex items-center justify-between p-4">
          <img src={companyLogo} alt="Crowdfund logo" className="h-6" />
          <button>
            <Menu className="h-7 w-7 text-primary-white" />
          </button>
        </nav>
      </header>
      <main className="w-[72%] md:w-[60%] mx-auto">{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
}

export default Layout