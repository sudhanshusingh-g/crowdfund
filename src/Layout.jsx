import companyLogo from "./assets/logo.svg";
import mobileCoverImage from "./assets/mobile-cover-image.jpg"
import {Menu, X} from "lucide-react";
import MenuModal from "./components/MenuModal";
import useOutsideClickAndTimeout from "./hooks/useOutsideClickAndTimeout"

function Layout({children}) {

  const {ref,setIsVisible,isVisible} = useOutsideClickAndTimeout(false,5000);
  
  
  return (
    <div>
      <header
        style={{ backgroundImage: `url(${mobileCoverImage})` }}
        className={` relative bg-center bg-cover h-[48vh]`}
      >
        <div className="bg-black/30 absolute inset-0"></div>
        <nav className="relative z-10 flex items-center justify-between p-4">
          <img src={companyLogo} alt="Crowdfund logo" className="h-6" />
          {isVisible ? (
            <button onClick={() => setIsVisible(false)}>
              <X className="h-7 w-7 text-primary-white" />
            </button>
          ) : (
            <button onClick={() => setIsVisible(true)}>
              <Menu className="h-7 w-7 text-primary-white" />
            </button>
          )}
        </nav>
        {isVisible && (
          <div ref={ref}>
            <MenuModal />
          </div>
        )}
      </header>
      <main className="w-[72%] md:w-[60%] mx-auto">{children}</main>
      <footer className="p-8 text-center bg-primary-moderateCyan">
        <div className="bg-primary-moderateCyan p-4 flex items-center justify-between">
          <img src={companyLogo} alt="Crowdfund" />
          <ul className="text-left flex flex-col gap-4">
            <li className="text-primary-white underline cursor-pointer">About</li>
            <li className="text-primary-white underline cursor-pointer">Discover</li>
            <li className="text-primary-white underline cursor-pointer">Get Started</li>
          </ul>
        </div>
        <a
          className="text-primary-white text-xs underline font-semibold"
          href="https://www.linkedin.com/in/sudhanshusingh32/"
        >
          © Sudhanshu Singh
        </a>
      </footer>
    </div>
  );
}

export default Layout