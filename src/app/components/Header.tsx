"use client";
import { useState, useEffect } from "react";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-[9999] bg-white transition-all ease-in-out duration-300 
        ${stickyMenu ? "shadow-sm py-4 lg:py-0" : "py-7 lg:py-0"}
      `}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-3/12 flex items-center justify-between">
          <a href="/">
            <img src="/images/logo/logo.svg" alt="Logo" />
          </a>

          {/* Hamburger Toggle BTN */}
          <button
            id="menuToggler"
            aria-label="button for menu toggle"
            className="lg:hidden block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="du-block absolute right-0 w-full h-full">
                <span
                  className={`block relative bg-dark rounded-xs w-0 h-0.5 my-1 ease-in-out duration-200 delay-0
                    ${!navigationOpen ? "w-full delay-300" : ""}
                  `}
                ></span>
                <span
                  className={`block relative bg-dark rounded-xs w-0 h-0.5 my-1 ease-in-out duration-200 delay-150
                    ${!navigationOpen ? "w-full delay-400" : ""}
                  `}
                ></span>
                <span
                  className={`block relative bg-dark rounded-xs w-0 h-0.5 my-1 ease-in-out duration-200 delay-200
                    ${!navigationOpen ? "w-full delay-500" : ""}
                  `}
                ></span>
              </span>
              <span className="du-block absolute right-0 w-full h-full rotate-45">
                <span
                  className={`block bg-dark rounded-xs ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full
                    ${!navigationOpen ? "h-0 delay-0" : ""}
                  `}
                ></span>
                <span
                  className={`block bg-dark rounded-xs ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5
                    ${!navigationOpen ? "h-0 delay-200" : ""}
                  `}
                ></span>
              </span>
            </span>
          </button>
          {/* Hamburger Toggle BTN */}
        </div>

        {/* Navigation */}
        <div
          className={`w-full lg:ml-40 lg:w-9/12 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between transition-all
            ${navigationOpen ? "visible bg-white shadow-lg h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5" : ""}
          `}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
              <li className={`group relative lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}>
                <a href="/" className="hover:text-dark flex items-center justify-between gap-3">
                  Home
                </a>
              </li>
              <li className={`group relative lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-dark flex items-center gap-3">
                  Pages
                  <svg className="fill-current w-3 h-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="dropdown flex flex-col absolute bg-white shadow-md rounded-md mt-2 p-3">
                    <li>
                      <a href="about.html" className="flex rounded-md text-sm hover:text-primary hover:bg-gray py-2 px-4">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" className="flex rounded-md text-sm hover:text-primary hover:bg-gray py-2 px-4">
                        Contact
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`group relative lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}>
                <a href="#" className="hover:text-dark flex items-center gap-3">
                  Blogs
                </a>
              </li>
              <li className={`nav__menu lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}>
                <a href="signin.html" className="hover:text-dark">
                  Support
                </a>
              </li>
            </ul>
          </nav>

          {/* Social & Buttons */}
          <div className="flex flex-wrap items-center gap-8.5 mt-7 lg:mt-0">
        <div className="flex items-center gap-1.5">
          <a
            id="facebookBtn"
            aria-label="facebook social link"
            href="#"
            className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark"
          >
            <svg
              className="fill-current"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z"
                fill=""
              />
            </svg>
          </a>
          <a
            id="twitterBtn"
            aria-label="twitter social link"
            href="#"
            className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark"
          >
            <svg
              className="fill-current"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_739_364)">
                <path
                  d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_739_364">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            id="linkedinBtn"
            aria-label="linkedin social link"
            href="#"
            className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark"
          >
            <svg
              className="fill-current"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z"
                fill=""
              />
            </svg>
          </a>
          <a
            id="pinterestBtn"
            aria-label="pinterest social link"
            href="#"
            className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark"
          >
            <svg
              className="fill-current"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z"
                fill=""
              />
            </svg>
          </a>
        </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
