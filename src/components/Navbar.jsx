import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import AnchorLinkImport from "react-anchor-link-smooth-scroll";
const AnchorLink = AnchorLinkImport.default || AnchorLinkImport;
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const LinkComponent = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-teal-900" : ""}
      hover:text-teal-700 duration-500 transition`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navbarScrollEffectBorder = isTopOfPage ? "" : "bg-gray-50 shadow";
  return (
    <nav className={`${navbarScrollEffectBorder} z-40 w-full fixed top-0 py-5`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-serif text-3xl font-bold">MT</h4>
        {/* desktop nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-sans font-semibold">
            <LinkComponent
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />{" "}
            <LinkComponent
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />{" "}
            <LinkComponent
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />{" "}
            <LinkComponent
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />{" "}
            <LinkComponent
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div>
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <FaBarsStaggered
                size={24}
                className="hover:text-teal-700 transition duration-500 linear"
              />
            </button>
          </div>
        )}
        {/* mobile menu popup */}
        {!isAboveSmallScreens && isMenuToggle && (
          <div className="fixed right-0 bottom-0 h-full w-75 bg-gray-50">
            <div className="justify-end flex p-12">
              <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                <IoCloseSharp
                  size={24}
                  className="hover:text-teal-700 transition duration-500 linear cursor-pointer"
                />
              </button>
            </div>
            {/* menue items */}
            <div className="flex flex-col gap-8 ml-[33%] font-bold ">
              <LinkComponent
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <LinkComponent
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <LinkComponent
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <LinkComponent
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <LinkComponent
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
