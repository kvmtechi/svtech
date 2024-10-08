import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setmenu] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const menuToggler = () => {
    setmenu(!menu);
  };

  const [Details, setDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Details);
    // console.log(
    //   `Message from ${(Details.fullName, "with email " + Details.email)}`,
    //   `Phone: ${Details.phone}\n\nMessage: ${Details.message}`
    // );
    try {
      const response = await axios.post("/api/email/send", {
        fullName: Details.fullName,
        phone: Details.phone,
        email: Details.email,
        message: Details.message,
      });
      alert("Mail sent successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
    }
  };
  return (
    <>
      <div
        className={`ud-header  ${
          darkMode ? "bg-dark-2 text-white" : "bg-primary text-black"
        } absolute left-0 top-0 z-40 flex w-full items-center bg-transparent`}
      >
        <div className="container">
          <div className="relative -mx-4 pt-4  flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <img
                src="/assets/images/logo/logo11.png"
                alt="logo1"
                className="header-logo w-full"
              />
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="  w-full">
                <button
                  onClick={menuToggler}
                  id="navbarToggler"
                  className="absolute right-4  block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={` right-4 top-full ${
                    menu ? "absolute  border border-white" : "hidden"
                  } w-full max-w-[250px] rounded-lg ${
                    darkMode
                      ? "bg-dark-2 text-white"
                      : "bg-primary   text-white"
                  }  py-5 shadow-lg  lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6`}
                >
                  <ul className="block lg:flex justify-center  w-[60%] 2xl:ml-20">
                    <li className="group relative">
                      <a
                        href="#home"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium   group-hover:text-slate-400 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                      >
                        Home
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#about"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium  group-hover:text-slate-400 dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        About
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#services"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium  group-hover:text-slate-400 dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Services
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="#contact"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium  group-hover:text-slate-400 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Contact
                      </a>
                    </li>

                    {/* <li className="submenu-item group relative">
                      <a
                        href="javascript:void(0)"
                        className="relative mx-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Pages
                        <svg
                          className="ml-2 fill-current"
                          width="16"
                          height="20"
                          viewBox="0 0 16 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                        </svg>
                      </a>
                      <div className="submenu relative left-0 top-full hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                        <a
                          href="about.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          About Page
                        </a>
                        <a
                          href="pricing.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          Pricing Page
                        </a>
                        <a
                          href="contact.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          Contact Page
                        </a>
                        <a
                          href="blog-grids.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          Blog Grid Page
                        </a>
                        <a
                          href="blog-details.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          Blog Details Page
                        </a>
                        <a
                          href="signup.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          Sign Up Page
                        </a>
                        <a
                          href="signin.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          Sign In Page
                        </a>
                        <a
                          href="404.html"
                          className="block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                        >
                          404 Page
                        </a>
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div class="flex items-center justify-end pr-16 lg:pr-0">
                <button
                  onClick={toggleDarkMode}
                  style={{ cursor: "pointer" }}
                  for="themeSwitcher"
                  class="inline-flex cursor-pointer items-center"
                  aria-label="themeSwitcher"
                  name="themeSwitcher"
                >
                  <input
                    type="checkbox"
                    name="themeSwitcher"
                    id="themeSwitcher"
                    class="sr-only"
                  />
                  <span
                    class={` text-white  ${darkMode ? "hidden" : "block"} `}
                  >
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.3125 1.50001C12.675 1.31251 12.0375 1.16251 11.3625 1.05001C10.875 0.975006 10.35 1.23751 10.1625 1.68751C9.93751 2.13751 10.05 2.70001 10.425 3.00001C13.0875 5.47501 14.0625 9.11251 12.975 12.525C11.775 16.3125 8.25001 18.975 4.16251 19.0875C3.63751 19.0875 3.22501 19.425 3.07501 19.9125C2.92501 20.4 3.15001 20.925 3.56251 21.1875C4.50001 21.75 5.43751 22.2 6.37501 22.5C7.46251 22.8375 8.58751 22.9875 9.71251 22.9875C11.625 22.9875 13.5 22.5 15.1875 21.5625C17.85 20.1 19.725 17.7375 20.55 14.8875C22.1625 9.26251 18.975 3.37501 13.3125 1.50001ZM18.9375 14.4C18.2625 16.8375 16.6125 18.825 14.4 20.0625C12.075 21.3375 9.41251 21.6 6.90001 20.85C6.63751 20.775 6.33751 20.6625 6.07501 20.55C10.05 19.7625 13.35 16.9125 14.5875 13.0125C15.675 9.56251 15 5.92501 12.7875 3.07501C17.5875 4.68751 20.2875 9.67501 18.9375 14.4Z" />
                    </svg>
                  </span>
                  <span
                    class={` text-white  ${darkMode ? "block" : "hidden"} `}
                  >
                    <svg
                      class="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2172_3070)">
                        <path d="M12 6.89999C9.18752 6.89999 6.90002 9.18749 6.90002 12C6.90002 14.8125 9.18752 17.1 12 17.1C14.8125 17.1 17.1 14.8125 17.1 12C17.1 9.18749 14.8125 6.89999 12 6.89999ZM12 15.4125C10.125 15.4125 8.58752 13.875 8.58752 12C8.58752 10.125 10.125 8.58749 12 8.58749C13.875 8.58749 15.4125 10.125 15.4125 12C15.4125 13.875 13.875 15.4125 12 15.4125Z" />
                        <path d="M12 4.2375C12.45 4.2375 12.8625 3.8625 12.8625 3.375V1.5C12.8625 1.05 12.4875 0.637497 12 0.637497C11.55 0.637497 11.1375 1.0125 11.1375 1.5V3.4125C11.175 3.8625 11.55 4.2375 12 4.2375Z" />
                        <path d="M12 19.7625C11.55 19.7625 11.1375 20.1375 11.1375 20.625V22.5C11.1375 22.95 11.5125 23.3625 12 23.3625C12.45 23.3625 12.8625 22.9875 12.8625 22.5V20.5875C12.8625 20.1375 12.45 19.7625 12 19.7625Z" />
                        <path d="M18.1125 6.74999C18.3375 6.74999 18.5625 6.67499 18.7125 6.48749L19.9125 5.28749C20.25 4.94999 20.25 4.42499 19.9125 4.08749C19.575 3.74999 19.05 3.74999 18.7125 4.08749L17.5125 5.28749C17.175 5.62499 17.175 6.14999 17.5125 6.48749C17.6625 6.67499 17.8875 6.74999 18.1125 6.74999Z" />
                        <path d="M5.32501 17.5125L4.12501 18.675C3.78751 19.0125 3.78751 19.5375 4.12501 19.875C4.27501 20.025 4.50001 20.1375 4.72501 20.1375C4.95001 20.1375 5.17501 20.0625 5.32501 19.875L6.52501 18.675C6.86251 18.3375 6.86251 17.8125 6.52501 17.475C6.18751 17.175 5.62501 17.175 5.32501 17.5125Z" />
                        <path d="M22.5 11.175H20.5875C20.1375 11.175 19.725 11.55 19.725 12.0375C19.725 12.4875 20.1 12.9 20.5875 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z" />
                        <path d="M4.23751 12C4.23751 11.55 3.86251 11.1375 3.37501 11.1375H1.50001C1.05001 11.1375 0.637512 11.5125 0.637512 12C0.637512 12.45 1.01251 12.8625 1.50001 12.8625H3.41251C3.86251 12.8625 4.23751 12.45 4.23751 12Z" />
                        <path d="M18.675 17.5125C18.3375 17.175 17.8125 17.175 17.475 17.5125C17.1375 17.85 17.1375 18.375 17.475 18.7125L18.675 19.9125C18.825 20.0625 19.05 20.175 19.275 20.175C19.5 20.175 19.725 20.1 19.875 19.9125C20.2125 19.575 20.2125 19.05 19.875 18.7125L18.675 17.5125Z" />
                        <path d="M5.32501 4.125C4.98751 3.7875 4.46251 3.7875 4.12501 4.125C3.78751 4.4625 3.78751 4.9875 4.12501 5.325L5.32501 6.525C5.47501 6.675 5.70001 6.7875 5.92501 6.7875C6.15001 6.7875 6.37501 6.7125 6.52501 6.525C6.86251 6.1875 6.86251 5.6625 6.52501 5.325L5.32501 4.125Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2172_3070">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="home"
        className={`relative  ${
          darkMode ? "bg-dark-2 text-white" : "bg-primary text-black"
        } overflow-hidden  pt-[120px] md:pt-[130px] lg:pt-[160px]`}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Your IT Solutions Partner
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Providing expert IT services to help your business thrive.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                    >
                      Learn More
                    </a>
                  </li>
                </ul>
                <div>
                  <p className="mb-4 text-center text-base font-medium text-white">
                    Experience with latest technology
                  </p>
                  <div
                    className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                    data-wow-delay=".3s"
                  >
                    <svg
                      className="text-white/60  w-10 duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <g fill="none">
                          <g clip-path="url(#akarIconsGithubFill0)">
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                              clip-rule="evenodd"
                            />
                          </g>
                          <defs>
                            <clipPath id="akarIconsGithubFill0">
                              <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                          </defs>
                        </g>
                      </g>
                    </svg>

                    <svg
                      className=" w-10 text-white/60 duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <circle
                          cx="24"
                          cy="24"
                          r="21.5"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535c3.63.086 7.194-.993 10.167-3.08m-5.926-11.93l-2.025 6.504l-2.024-6.504l-2.025 6.504l-2.024-6.504m9.984 5.955c.449.376.932.549 2.019.549h.55c.896 0 1.622-.728 1.622-1.626h0c0-.898-.726-1.626-1.622-1.626h-1.1a1.624 1.624 0 0 1-1.623-1.626h0c0-.898.726-1.626 1.622-1.626h.55c1.087 0 1.57.173 2.019.55m-16.147 3.499a2.454 2.454 0 0 1-2.454 2.454h0a2.454 2.454 0 0 1-2.454-2.454v-1.595a2.454 2.454 0 0 1 2.454-2.454h0a2.454 2.454 0 0 1 2.454 2.454m0 4.05v-6.504"
                        />
                      </g>
                    </svg>

                    <svg
                      className=" w-12 text-white/60 duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          d="M10.013 13.738l-2.254.387a4.475 4.475 0 0 0 1.753 2.231l.865-2.095a.27.27 0 0 0 .022-.228c-.022-.18-.204-.295-.386-.295zm.865-2.914c.205 0 .387-.159.387-.364l.114-2.277l-.456.091a4.516 4.516 0 0 0-2.118 1.162l1.89 1.343c.069.022.115.045.183.045zm-1.002 1.48a.366.366 0 0 0-.045-.524l-1.685-1.503a4.797 4.797 0 0 0-.661 2.778l2.209-.637c.091-.023.137-.046.182-.114zm1.457.797l.616.296l.614-.296l.16-.661l-.433-.546h-.683l-.433.546zm1.344-2.436c.114.159.341.182.5.091l1.867-1.32a4.286 4.286 0 0 0-2.573-1.23l.137 2.3a.215.215 0 0 0 .069.159z"
                          fill="currentColor"
                        />
                        <path
                          d="M21.944 14.103l-1.73-7.446c-.113-.364-.387-.66-.729-.842L12.541 2.49c-.182-.091-.387-.114-.569-.114s-.387 0-.569.045L4.457 5.769a1.22 1.22 0 0 0-.683.842l-1.708 7.492c-.068.387.023.774.25 1.093l4.805 5.943c.273.273.66.456 1.047.479h7.651c.41.045.797-.137 1.048-.479l4.805-5.943c.227-.319.318-.706.272-1.093zm-2.845.501c-.046 0-.068 0-.114-.023c-.022-.023-.022-.023-.045-.023c-.046 0-.068-.022-.092-.022c-.091-.023-.159-.068-.25-.114a.32.32 0 0 1-.137-.045h-.022a3.91 3.91 0 0 0-.729-.205h-.022a.26.26 0 0 0-.182.068s0 .023-.023.023l-.183-.024a5.628 5.628 0 0 1-2.46 3.097l.068.182s-.022 0-.022.022a.264.264 0 0 0-.022.228c.091.228.205.455.364.66v.045a.396.396 0 0 1 .091.114a.81.81 0 0 1 .159.228c.023.022.046.045.046.068c0 0 .022 0 .022.022a.582.582 0 0 1 .023.342a.38.38 0 0 1-.205.25c-.068.022-.114.045-.183.045a.511.511 0 0 1-.433-.273c-.022 0-.022-.022-.022-.022c-.022-.023-.022-.045-.046-.068c-.045-.068-.068-.159-.091-.25l-.046-.137v-.022a3.816 3.816 0 0 0-.296-.706a.353.353 0 0 0-.182-.137c0-.023 0-.023-.023-.023l-.091-.159c-.228.068-.479.159-.729.205c-.41.114-.82.159-1.229.159a5.368 5.368 0 0 1-1.981-.364l-.091.182c0 .023 0 .023-.023.023a.35.35 0 0 0-.182.137c-.114.228-.228.455-.296.706l-.045.137c-.023.091-.068.159-.091.25c-.022.023-.045.045-.045.068c-.023 0-.023.022-.023.022a.508.508 0 0 1-.433.273a.434.434 0 0 1-.159-.045a.469.469 0 0 1-.182-.615c.023 0 .023-.023.023-.023c.022-.023.022-.045.045-.068c.068-.091.114-.182.159-.228s.068-.068.091-.114v-.023a3.73 3.73 0 0 0 .364-.66a.268.268 0 0 0-.023-.228s-.022 0-.022-.022l.114-.16a3.578 3.578 0 0 1-.615-.41a5.493 5.493 0 0 1-1.867-2.664l-.205.022s0-.022-.023-.022a.256.256 0 0 0-.182-.068h-.022a4.015 4.015 0 0 0-.751.205h-.024c-.045 0-.091.023-.137.046c-.068.022-.159.068-.25.091c-.022 0-.091-.022-.091 0c0 .023 0 .023-.023.023c-.045.023-.068.023-.114.023a.424.424 0 0 1-.456-.319a.445.445 0 0 1 .364-.524c.023-.023.023-.023.046-.023c.045 0 .068-.022.091-.022c.091 0 .182-.023.273-.023c.045-.022.091-.022.137-.022a4.2 4.2 0 0 0 .774-.137c.068-.046.137-.091.16-.16c0 0 .022 0 .022-.022l.182-.046c-.205-1.298.091-2.618.797-3.734c.022-.045.045-.068.068-.114l-.131-.132a.106.106 0 0 1-.004.019v-.023l.004.004c.01-.065-.031-.145-.072-.186c-.182-.182-.41-.319-.638-.455l-.136-.069a2.587 2.587 0 0 1-.251-.136c-.022 0-.068-.045-.068-.045s0-.023-.022-.023a.49.49 0 0 1-.092-.639c.068-.114.182-.159.319-.159a.54.54 0 0 1 .319.114l.023.023c.022.022.045.022.068.045c.068.069.114.137.182.205c.023.022.068.045.091.091c.159.182.364.364.569.524c.045.022.091.045.137.045c.045 0 .068-.023.091-.023h.023l.137.091a5.426 5.426 0 0 1 2.801-1.594c.273-.046.523-.091.774-.114l.023-.182v-.045c.068-.045.091-.114.114-.182c0-.273 0-.524-.045-.774v-.023c0-.045 0-.091-.023-.137a1.129 1.129 0 0 1-.045-.273v-.113c0-.114.045-.228.137-.319c.114-.114.25-.182.387-.159a.45.45 0 0 1 .387.478v.137c-.023.091-.023.182-.045.273c0 .045-.023.091-.023.136v.023c-.048.273-.048.524-.048.774c.023.068.045.136.114.182v-.023l.023.182a5.84 5.84 0 0 1 2.96 1.184c.183.182.387.364.569.546l.183-.114h.022c.022.023.068.023.091.023c.046 0 .091-.023.137-.045c.205-.137.41-.319.569-.501c.022-.023.068-.046.091-.091c.046-.068.114-.137.183-.205c.022 0 .045-.022.068-.045l.022-.023a.546.546 0 0 1 .318-.114c.114 0 .251.068.319.16c.159.205.113.478-.091.637c0 .023.022.023 0 .046c-.023.022-.046.022-.068.045c-.092.045-.16.091-.251.137l-.137.068a4.104 4.104 0 0 0-.638.455c-.045.046-.068.137-.068.205v.023l-.136.137c.364.569.638 1.207.797 1.867c.137.66.182 1.343.091 2.003l.182.046a.278.278 0 0 0 .16.159c.25.068.523.114.773.137h.023a.297.297 0 0 0 .137.022c.091 0 .182 0 .272.023c.046 0 .092 0 .092.023c0 .022.022.022.045.022a.537.537 0 0 1 .41.479a.49.49 0 0 1-.453.32z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.085 14.718a.352.352 0 0 0-.455.091l-1.116 2.027c.456.136.957.228 1.435.228c.341 0 .66-.045.979-.114c.159-.045.296-.068.433-.091l-1.093-1.981c-.069-.069-.115-.115-.183-.16zm3.644-4.441l-1.708 1.548a.36.36 0 0 0-.091.16c-.046.205.068.41.273.455l2.163.615a4.375 4.375 0 0 0-.092-1.435a4.63 4.63 0 0 0-.545-1.343zm-2.073 3.484a.371.371 0 0 0-.205.433l.889 2.141a4.366 4.366 0 0 0 1.366-1.366c.182-.25.318-.547.433-.865l-2.277-.387a.634.634 0 0 0-.206.044z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>

                    <svg
                      className="text-white/60 w-10 duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          fill="currentColor"
                          d="M6 10v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5Zm2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5ZM6 17v5h12v-5Zm7 3H7v-1h6Zm1.5 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5Zm2 0a.5.5 0 1 1 .5-.5a.5.5 0 0 1-.5.5Z"
                        />
                        <path
                          fill="currentColor"
                          d="M22.965 8a5.35 5.35 0 0 0-3.615-1.96a7.492 7.492 0 0 0-14-2A5.904 5.904 0 0 0 4 4.365A5.98 5.98 0 0 0 4 15.65V8h16v7.9a5.003 5.003 0 0 0 4-4.9a4.908 4.908 0 0 0-1.035-3Z"
                        />
                      </g>
                    </svg>

                    <svg
                      className="text-white/60 w-10 duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="m15.37 13.68l-4-12a1 1 0 0 0-1-.68H5.63a1 1 0 0 0-.95.68l-4.05 12a1 1 0 0 0 1 1.32h2.93a1 1 0 0 0 .94-.68l.61-1.78l3 2.27a1 1 0 0 0 .6.19h4.68a1 1 0 0 0 .98-1.32Zm-5.62.66a.32.32 0 0 1-.2-.07L3.9 10.08l-.09-.07h3l.08-.21l1-2.53l2.24 6.63a.34.34 0 0 1-.38.44Zm4.67 0H10.7a1 1 0 0 0 0-.66l-4.05-12h3.72a.34.34 0 0 1 .32.23l4.05 12a.34.34 0 0 1-.32.43Z"
                          clip-rule="evenodd"
                        />
                      </g>
                    </svg>

                    <svg
                      className="text-white/60 w-10 fill-white duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          fill="currentColor"
                          d="M13.281 11.156a.84.84 0 0 1 .375.297c.084.125.143.276.18.453c.02.104.044.2.07.29a1.772 1.772 0 0 0 .219.476c.047.073.11.153.188.242c.067.073.127.167.18.281a.793.793 0 0 1 .077.328a.49.49 0 0 1-.093.305a.944.944 0 0 1-.235.219c-.12.083-.245.156-.375.219c-.13.062-.26.127-.39.195a3.624 3.624 0 0 0-.555.328c-.156.115-.313.26-.469.438a2.815 2.815 0 0 1-.625.523a1.471 1.471 0 0 1-.383.172c-.13.036-.26.06-.39.07c-.302 0-.552-.052-.75-.156c-.198-.104-.37-.294-.516-.57c-.042-.079-.083-.128-.125-.149a.774.774 0 0 0-.203-.055L8.67 15c-.26-.02-.525-.031-.796-.031a4.28 4.28 0 0 0-.672.054c-.229.037-.456.081-.68.133c-.046.01-.093.05-.14.117a1.7 1.7 0 0 1-.196.227a1.106 1.106 0 0 1-.335.219a1.475 1.475 0 0 1-.555.101c-.172 0-.357-.018-.555-.054a1.82 1.82 0 0 1-.531-.18a3.578 3.578 0 0 0-.953-.328c-.313-.057-.643-.11-.992-.156a3.392 3.392 0 0 1-.344-.063a.774.774 0 0 1-.29-.133a.705.705 0 0 1-.194-.219a.78.78 0 0 1-.079-.351c0-.162.021-.318.063-.469c.042-.15.065-.31.07-.476c0-.115-.008-.227-.023-.336a3.53 3.53 0 0 1-.032-.352c0-.265.063-.46.188-.586c.125-.125.307-.224.547-.297a.99.99 0 0 0 .297-.148a2.27 2.27 0 0 0 .234-.203a1.86 1.86 0 0 0 .203-.242c.063-.089.133-.178.211-.266a.114.114 0 0 0 .024-.07c0-.063-.003-.123-.008-.18l-.016-.188c0-.354.055-.71.164-1.07c.11-.36.253-.71.43-1.055a9.08 9.08 0 0 1 .594-.992c.218-.317.435-.612.648-.883a4.35 4.35 0 0 0 .68-1.203c.15-.416.229-.87.234-1.36c0-.207-.01-.413-.031-.616a6.122 6.122 0 0 1-.031-.625c0-.417.047-.792.14-1.125c.094-.334.24-.62.438-.86s.456-.419.773-.539C7.474.075 7.854.01 8.296 0c.527 0 .946.104 1.259.313c.312.208.552.481.718.82c.167.338.274.716.32 1.133c.048.416.074.838.079 1.265v.133c0 .214.002.404.008.57a2.527 2.527 0 0 0 .226.977c.073.161.182.336.328.523c.25.329.506.66.766.993c.26.333.497.677.71 1.03c.214.355.389.725.524 1.11c.136.386.206.802.211 1.25a3.3 3.3 0 0 1-.164 1.04zm-6.554-8.14c.072 0 .132.018.18.054a.357.357 0 0 1 .109.149a.85.85 0 0 1 .054.187c.01.063.016.128.016.196a.282.282 0 0 1-.024.125a.27.27 0 0 1-.07.086l-.094.078a.796.796 0 0 0-.093.093a.428.428 0 0 1-.149.141a2.129 2.129 0 0 0-.18.117a1.31 1.31 0 0 0-.156.133a.264.264 0 0 0-.07.195c0 .047.023.086.07.117a.704.704 0 0 1 .266.305c.052.12.11.237.172.352c.062.114.143.21.242.289c.099.078.253.117.46.117h.048c.208-.01.406-.065.594-.164c.187-.099.375-.203.562-.313a.633.633 0 0 1 .102-.046a.37.37 0 0 0 .101-.055l.57-.445a.926.926 0 0 0 .024-.102a2.75 2.75 0 0 0 .016-.11a.236.236 0 0 0-.04-.14a.4.4 0 0 0-.093-.094a.34.34 0 0 0-.133-.054a.909.909 0 0 1-.14-.04a1.083 1.083 0 0 1-.352-.14a1.457 1.457 0 0 0-.344-.156c-.02-.006-.036-.021-.047-.047a.983.983 0 0 1-.031-.094a.23.23 0 0 1-.008-.102a.126.126 0 0 0-.008-.078c0-.062.005-.127.016-.195a.551.551 0 0 1 .07-.195a.417.417 0 0 1 .125-.14a.411.411 0 0 1 .203-.056c.162 0 .279.06.352.18c.073.12.112.25.117.39a.397.397 0 0 1-.039.18a.379.379 0 0 0-.04.172c0 .042.014.07.04.086a.26.26 0 0 0 .102.031c.12 0 .197-.028.234-.085a.533.533 0 0 0 .062-.258c0-.12-.01-.253-.03-.399a1.32 1.32 0 0 0-.126-.406a.969.969 0 0 0-.242-.313a.574.574 0 0 0-.383-.124c-.27 0-.466.067-.586.203c-.12.135-.182.338-.187.609c0 .078.005.156.015.234c.01.079.016.157.016.235c0 .026-.003.039-.008.039a.218.218 0 0 1-.047-.016a4.263 4.263 0 0 1-.093-.039a.774.774 0 0 0-.118-.039a.514.514 0 0 0-.203-.008a1.007 1.007 0 0 1-.125.008c-.073 0-.11-.013-.11-.039c0-.078-.004-.177-.015-.297c-.01-.12-.036-.24-.078-.36a.995.995 0 0 0-.156-.296c-.063-.078-.156-.12-.281-.125a.323.323 0 0 0-.227.086a.905.905 0 0 0-.164.203a.64.64 0 0 0-.086.266a5.4 5.4 0 0 1-.031.25a1.459 1.459 0 0 0 .07.406c.026.083.055.156.086.219c.031.062.068.093.11.093c.025 0 .06-.018.101-.054c.042-.037.063-.07.063-.102c0-.016-.008-.026-.024-.031a.147.147 0 0 0-.047-.008c-.036 0-.068-.018-.094-.055a.468.468 0 0 1-.062-.125a5.144 5.144 0 0 1-.047-.148a.564.564 0 0 1 .055-.398c.047-.084.133-.128.258-.133zM5.023 15.18c.125 0 .248-.01.368-.032a.97.97 0 0 0 .336-.125a.614.614 0 0 0 .234-.242a.943.943 0 0 0 .094-.375a.816.816 0 0 0-.047-.273a.963.963 0 0 0-.133-.25a2.763 2.763 0 0 0-.203-.281a2.763 2.763 0 0 1-.203-.282a62.93 62.93 0 0 1-.29-.43c-.093-.14-.187-.288-.28-.445a8.124 8.124 0 0 1-.235-.406a2.646 2.646 0 0 0-.266-.398a1.203 1.203 0 0 0-.218-.211a.469.469 0 0 0-.29-.094a.436.436 0 0 0-.296.11a2.26 2.26 0 0 0-.258.265a3.241 3.241 0 0 1-.297.305c-.11.099-.25.177-.422.234a.744.744 0 0 0-.312.172c-.073.073-.11.185-.11.336c0 .104.008.208.024.312c.015.104.026.209.031.313c0 .14-.02.273-.063.398a1.157 1.157 0 0 0-.062.367c0 .141.05.24.148.297c.1.058.211.097.336.117c.157.027.305.047.446.063c.14.016.278.04.414.07c.135.032.27.065.406.102c.135.036.279.094.43.172c.03.015.078.034.14.054l.211.07c.078.027.151.048.219.063a.741.741 0 0 0 .148.024zm2.86-.938c.146 0 .302-.015.469-.047a3.54 3.54 0 0 0 .976-.336a2.59 2.59 0 0 0 .406-.257a.222.222 0 0 0 .032-.047a.305.305 0 0 0 .023-.063v-.008c.031-.114.057-.24.078-.375a8.63 8.63 0 0 0 .055-.414a8.98 8.98 0 0 1 .055-.414c.02-.135.039-.268.054-.398c.021-.14.047-.276.078-.406c.032-.13.073-.253.125-.368a1.03 1.03 0 0 1 .211-.304a1.54 1.54 0 0 1 .344-.25v-.016l-.008-.023a.29.29 0 0 1 .047-.149a1.4 1.4 0 0 1 .117-.164a.582.582 0 0 1 .149-.133a.946.946 0 0 1 .164-.078a9.837 9.837 0 0 0-.102-.375a4.938 4.938 0 0 1-.094-.375a7.126 7.126 0 0 0-.093-.476a2.954 2.954 0 0 0-.11-.36a1.317 1.317 0 0 0-.18-.32c-.077-.104-.174-.23-.288-.375a1.189 1.189 0 0 1-.118-.156a.555.555 0 0 1-.046-.196a2.206 2.206 0 0 0-.047-.203a9.48 9.48 0 0 0-.242-.75a2.91 2.91 0 0 0-.172-.383a3.87 3.87 0 0 0-.172-.289c-.052-.078-.107-.117-.164-.117c-.125 0-.274.05-.446.149c-.171.099-.354.208-.546.328c-.193.12-.38.232-.563.336c-.182.104-.346.153-.492.148a.7.7 0 0 1-.43-.148a2.236 2.236 0 0 1-.36-.344c-.109-.13-.2-.242-.273-.336c-.073-.094-.127-.146-.164-.156c-.041 0-.065.031-.07.093a2.56 2.56 0 0 0-.008.211v.133c0 .032-.005.052-.016.063c-.057.12-.12.237-.187.351c-.068.115-.135.232-.203.352a1.611 1.611 0 0 0-.219.758c0 .078.005.156.016.234c.01.078.036.154.078.227l-.016.03a1.31 1.31 0 0 1-.133.157a1.072 1.072 0 0 0-.132.164a2.796 2.796 0 0 0-.407.93c-.078.333-.12.672-.125 1.015c0 .089.006.178.016.266c.01.089.016.177.016.266a.526.526 0 0 1-.008.086a.525.525 0 0 0-.008.086a.75.75 0 0 1 .313.109c.12.068.25.154.39.258c.14.104.274.224.399.36c.125.135.244.267.359.398c.115.13.198.26.25.39c.052.13.086.237.101.32a.444.444 0 0 1-.125.329a.955.955 0 0 1-.312.203c.089.156.198.289.328.398c.13.11.271.198.422.266c.151.068.315.117.492.148c.177.032.35.047.516.047zm3.133 1.11c.109 0 .216-.016.32-.047a1.65 1.65 0 0 0 .445-.203c.136-.089.26-.198.375-.329a3.07 3.07 0 0 1 .977-.75l.258-.117a2.18 2.18 0 0 0 .257-.133a.962.962 0 0 0 .165-.132a.256.256 0 0 0 .078-.188a.295.295 0 0 0-.024-.117a.58.58 0 0 0-.07-.117a5.136 5.136 0 0 1-.203-.305a1.978 1.978 0 0 1-.149-.297l-.125-.312a2.558 2.558 0 0 1-.11-.352a.28.28 0 0 0-.054-.101a.53.53 0 0 0-.46-.235a.533.533 0 0 0-.266.07l-.266.149a7.335 7.335 0 0 1-.281.148a.656.656 0 0 1-.297.07a.411.411 0 0 1-.258-.077a.636.636 0 0 1-.172-.211a2.218 2.218 0 0 1-.117-.258l-.094-.258a1.26 1.26 0 0 1-.14.188a.666.666 0 0 0-.125.203c-.068.156-.11.33-.125.523c-.026.302-.06.596-.102.883a4.7 4.7 0 0 1-.21.86a1.914 1.914 0 0 0-.063.273a2.88 2.88 0 0 0-.032.289c0 .255.079.466.235.633c.156.166.367.25.633.25z"
                        />
                      </g>
                    </svg>

                    <svg
                      className="text-white/60 w-12 fill-white duration-300 ease-in-out hover:text-white"
                      viewBox="0 0 256 256"
                      x="128"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <g fill="none">
                          <path
                            fill="currentColor"
                            d="m161.009 92.39l17.385-17.386l1.159-7.32c-31.68-28.807-82.04-25.54-110.6 6.816c-7.932 8.986-13.817 20.19-16.955 31.76l6.226-.878l34.77-5.733l2.684-2.745c15.466-16.986 41.617-19.272 59.475-4.82l5.856.305Z"
                          />
                          <path
                            fill="currentColor"
                            d="M203.16 105.749a78.318 78.318 0 0 0-23.607-38.064l-24.4 24.4a43.37 43.37 0 0 1 15.921 34.404v4.331c11.993 0 21.716 9.722 21.716 21.715c0 11.994-9.723 21.473-21.716 21.473h-43.493l-4.27 4.636v26.047l4.27 4.087h43.493c31.195.243 56.681-24.605 56.924-55.8a56.483 56.483 0 0 0-24.838-47.229Z"
                          />
                          <path
                            fill="currentColor"
                            d="M84.149 208.778h43.432v-34.77H84.149a21.312 21.312 0 0 1-8.906-1.952l-6.161 1.891l-17.507 17.385l-1.525 5.917c9.818 7.413 21.796 11.582 34.099 11.529Z"
                          />
                          <path
                            fill="currentColor"
                            d="M84.149 95.989C52.953 96.175 27.815 121.615 28 152.81a56.486 56.486 0 0 0 22.049 44.438l25.193-25.193c-10.93-4.938-15.787-17.802-10.849-28.731c4.938-10.93 17.802-15.787 28.73-10.85a21.718 21.718 0 0 1 10.85 10.85l25.193-25.193a56.421 56.421 0 0 0-45.018-22.143Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-28"></div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="services"
        className={`pb-8 pt-20  ${
          darkMode ? "bg-dark-2 text-white" : "bg-white text-black"
        }  lg:pb-[70px] lg:pt-[120px]`}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg  text-primary font-semibold ">
                  Services
                </span>
                <h2 className="mb-3 text-3xl font-bold  sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Quality-Driven IT Solutions Tailored for{" "}
                  <span
                    className={` ${
                      darkMode ? " text-primary" : " text-primary"
                    }`}
                  >
                    You.
                  </span>
                </h2>
                {/* <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>

                  <svg
                    className=" w-12 fill-white text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    x="128"
                    y="128"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path
                        fill="currentColor"
                        d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.242 0 2.322.709 2.88 1.754h-1.212a2.237 2.237 0 0 0-1.667-.754h-.071a1 1 0 0 1-.995-.9C13.45 6.325 12.109 5 10 5C7.886 5 6.551 6.316 6.348 8.345a1 1 0 0 1-.995.901h-.07C4.027 9.246 3 10.304 3 11.623C3 12.943 4.028 14 5.282 14H9v1H5.282C3.469 15 2 13.488 2 11.623C2 9.82 3.373 8.347 5.102 8.251l.251-.005C5.587 5.908 7.183 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1v-4Z"
                      />
                    </g>
                  </svg>
                </div>
                <h4
                  className={`mb-3  ${
                    darkMode ? "bg-dark-2 text-primary" : " text-black"
                  }  text-xl font-bold `}
                >
                  Cloud Solutions
                </h4>
                <p className="mb-8 text-body-color  text-justify  lg:mb-9">
                  Optimize your business with our cutting-edge cloud solutions.
                  We offer cloud migration, cloud infrastructure management, and
                  cloud-based application development to ensure your business
                  operates efficiently and securely in the cloud.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>

                  <svg
                    className=" w-12 fill-white text-white"
                    viewBox="0 0 26 26"
                    fill="white"
                    x="128"
                    y="128"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path
                        fill="currentColor"
                        d="M23.633 5.028a1.074 1.074 0 0 0-.777-.366c-2.295-.06-5.199-2.514-7.119-3.477C14.551.592 13.768.201 13.18.098a1.225 1.225 0 0 0-.36.001c-.588.103-1.371.494-2.556 1.087c-1.92.962-4.824 3.416-7.119 3.476a1.08 1.08 0 0 0-.778.366a1.167 1.167 0 0 0-.291.834c.493 10.023 4.088 16.226 10.396 19.831c.164.093.346.141.527.141s.363-.048.528-.141c6.308-3.605 9.902-9.808 10.396-19.831a1.161 1.161 0 0 0-.29-.834zM18.617 8.97l-5.323 7.855c-.191.282-.491.469-.788.469c-.298 0-.629-.163-.838-.372l-3.752-3.753a.656.656 0 0 1 0-.926l.927-.929a.658.658 0 0 1 .926 0l2.44 2.44l4.239-6.257a.657.657 0 0 1 .91-.173l1.085.736a.657.657 0 0 1 .174.91z"
                      />
                    </g>
                  </svg>
                </div>
                <h4
                  className={`mb-3  ${
                    darkMode ? "bg-dark-2 text-primary" : " text-black"
                  }  text-xl font-bold `}
                >
                  Network Security
                </h4>
                <p className="mb-8 text-body-color text-justify dark:text-dark-6 lg:mb-9">
                  Protect your business with our top-tier network security
                  services. Our team of experts provides advanced threat
                  detection, vulnerability assessments, and continuous
                  monitoring to safeguard your network from potential attacks
                  and breaches.
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  Learn More
                </a> */}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>

                  <svg
                    className=" w-12 fill-white text-white"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    x="128"
                    y="128"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path
                        fill="currentColor"
                        d="M8 4v4H4V4h4M2 2v8h8V2zm16 5v4h-4V7h4m-6-2v8h8V5zM8 16v4H4v-4h4m-6-2v8h8v-8z"
                      />
                      <path
                        fill="currentColor"
                        d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"
                      />
                    </g>
                  </svg>
                </div>
                <h4
                  className={`mb-3  ${
                    darkMode ? "bg-dark-2 text-primary" : " text-black"
                  }  text-xl font-bold `}
                >
                  Application Development
                </h4>
                <p className="mb-8 text-body-color text-justify dark:text-dark-6 lg:mb-9">
                  Build scalable and robust applications tailored to your
                  business needs. Our development team specializes in creating
                  custom software solutions, mobile apps, and web applications
                  that enhance your operational efficiency and deliver a
                  superior user experience.
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  Learn More
                </a> */}
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>

                  <svg
                    className=" w-12 fill-white text-white"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    x="128"
                    y="128"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M34 4c-5.523 0-10 4.477-10 10v9a1 1 0 0 0 1 1h9c5.523 0 10-4.477 10-10S39.523 4 34 4Zm-8 10a8 8 0 1 1 8 8h-8v-8ZM7 11.778c0-.426.352-.778.778-.778H14c.425 0 .778.352.778.778c0 2.326.372 4.562 1.06 6.652a.784.784 0 0 1-.198.8l-4.425 4.425l.33.647c2.656 5.222 6.934 9.48 12.15 12.152l.648.332l4.426-4.426a.768.768 0 0 1 .782-.187l.01.003a21.28 21.28 0 0 0 6.661 1.064c.426 0 .778.352.778.778v6.204a.783.783 0 0 1-.778.778C20.082 41 7 27.919 7 11.778ZM7.778 9A2.783 2.783 0 0 0 5 11.778C5 29.023 18.977 43 36.222 43A2.783 2.783 0 0 0 39 40.222v-6.204a2.783 2.783 0 0 0-2.778-2.778a19.28 19.28 0 0 1-6.028-.961a2.768 2.768 0 0 0-2.839.667l-3.389 3.389a25.94 25.94 0 0 1-10.302-10.3l3.39-3.39a2.784 2.784 0 0 0 .691-2.82l-.002-.007l-.002-.007a19.198 19.198 0 0 1-.963-6.033A2.783 2.783 0 0 0 14 9H7.778ZM29 13h4V9h2v4h4v2h-4v4h-2v-4h-4v-2Z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
                <h4
                  className={`mb-3  ${
                    darkMode ? "bg-dark-2 text-primary" : " text-black"
                  }  text-xl font-bold `}
                >
                  IT Consulting
                </h4>
                <p className="mb-8 text-body-color text-justify dark:text-dark-6 lg:mb-9">
                  Leverage our expertise to streamline your IT infrastructure.
                  We offer strategic IT consulting services that help you align
                  technology with your business goals, optimize IT processes,
                  and implement the best solutions for your specific needs.
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`bg-gray-1 ${
          darkMode ? "bg-dark text-white" : "bg-white text-black"
        } pb-8 pt-20  lg:pb-[70px] lg:pt-[120px]`}
      >
        <div className="container">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold leading-tight  sm:text-[40px] sm:leading-[1.2]">
                    ABOUT US
                  </h2>
                  <p className="mb-10 text-base leading-relaxed text-justify text-body-color dark:text-dark-6">
                    SV Technologies is your trusted partner in navigating the
                    digital landscape. Established by a group of visionary IT
                    professionals, we have built our reputation on delivering
                    innovative solutions that transform businesses. Our mission
                    is to empower companies with the tools and strategies they
                    need to thrive in today's fast-paced technological world. We
                    combine industry expertise with a deep understanding of our
                    clients' needs to create customized solutions that drive
                    success.
                    <br />
                    <br />
                    At SV Technologies, we believe in a client-first approach.
                    This means we work closely with you to ensure every solution
                    is tailored to your specific requirements. Our services
                    range from cutting-edge cloud solutions and robust network
                    security to strategic IT consulting and bespoke application
                    development. No matter your size or industry, we have the
                    expertise to help you excel.
                  </p>

                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                  >
                    Know More
                  </a>
                </div>
              </div>

              <div className="w-full  h-full lg:w-[50%]">
                <div className="-mx-2 flex w-full h-full flex-wrap justify-center ">
                  <div className="w-[80%]  h-full  flex justify-center ">
                    <div className="relative z-10 h-full w-full mb-4 flex items-center justify-center overflow-hidden   ">
                      <img
                        className=" w-[80%] flex h-full"
                        src="/assets/images/hero/Creative team-cuate.png"
                        alt=""
                      />
                      <div>
                        <span className=" absolute left-0 top-0 -z-10">
                          <svg
                            className=" w-[100%] h-full"
                            viewBox="0 0 106 144"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.1"
                              x="-67"
                              y="47.127"
                              width="113.378"
                              height="131.304"
                              transform="rotate(-42.8643 -67 47.127)"
                              fill="url(#paint0_linear_1416_214)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1416_214"
                                x1="-10.3111"
                                y1="47.127"
                                x2="-10.3111"
                                y2="178.431"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="white" />
                                <stop
                                  offset="1"
                                  stop-color="white"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute right-0 top-0 -z-10">
                          <svg
                            width="130"
                            height="97"
                            viewBox="0 0 130 97"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.1"
                              x="0.86792"
                              y="-6.67725"
                              width="155.563"
                              height="140.614"
                              transform="rotate(-42.8643 0.86792 -6.67725)"
                              fill="url(#paint0_linear_1416_215)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1416_215"
                                x1="78.6495"
                                y1="-6.67725"
                                x2="78.6495"
                                y2="133.937"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="white" />
                                <stop
                                  offset="1"
                                  stop-color="white"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 -z-10">
                          <svg
                            width="175"
                            height="104"
                            viewBox="0 0 175 104"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.1"
                              x="175.011"
                              y="108.611"
                              width="101.246"
                              height="148.179"
                              transform="rotate(137.136 175.011 108.611)"
                              fill="url(#paint0_linear_1416_216)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1416_216"
                                x1="225.634"
                                y1="108.611"
                                x2="225.634"
                                y2="256.79"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="white" />
                                <stop
                                  offset="1"
                                  stop-color="white"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`relative z-10 ${
          darkMode ? " text-black bg-primary" : "bg-primary text-white"
        } overflow-hidden bg-primary py-20 lg:py-[115px]`}
      >
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                    <span>What Are You Looking For?</span>
                    <span className="text-3xl font-normal md:text-[40px]">
                      Get Started Now
                    </span>
                  </h2>
                  <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                    join us on a journey to innovation and excellence. Let's
                    shape the future of your business together.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                stroke-opacity="0.08"
                stroke-width="12"
              />
            </svg>
          </span>
          <span className="absolute bottom-0 right-0">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                stroke-opacity="0.06"
                stroke-width="13"
              />
            </svg>
          </span>
        </div>
      </section>
      <section
        class={`"${
          darkMode ? " text-white bg-dark" : "bg-primary text-white"
        } dark:bg-dark"`}
      >
        <div class="container px-4">
          <div class=" flex flex-wrap items-center justify-center gap-8 xl:gap-11">
            <h1 className=" flex  text-3xl pt-14 h-full font-bold text-primary md:text-[38px] md:leading-[1.44] justify-center items-end w-full">
              Our Trusted Partners
            </h1>
            <img
              src="/assets/images/logo/bang_jamin.png"
              alt="graygrids"
              class="dark:hidden w-40"
            />

            <img
              src="/assets/images/logo/ldt.png"
              alt="lineicons"
              class="dark:hidden w-64"
            />
            <img
              src="/assets/images/logo/zimble_code.png"
              alt="graygrids"
              class="hidden dark:block w-40"
            />

            <img
              className=" w-40 "
              src="/assets/images/logo/zimble_code.png"
              alt="uideck"
            />
            <img
              src="/assets/images/brands/uideck-white.svg"
              alt="graygrids"
              class="hidden dark:block"
            />

            <img
              src="/assets/images/logo/digispice.png"
              alt="ayroui"
              class="dark:hidden w-40"
            />
            <img
              src="/assets/images/brands/ayroui-white.svg"
              alt="graygrids"
              class="hidden dark:block"
            />
            <img
              src="/assets/images/logo/concordant.png"
              alt="concordant"
              class="w-44 h-16"
            />
          </div>
        </div>
      </section>
      <section
        className={`relative z-20 overflow-hidden bg-white pb-8 pt-20 ${
          darkMode ? "bg-dark text-primary" : "bg-white text-black"
        } lg:pb-[50px] lg:pt-[120px]`}
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2]  sm:text-4xl md:text-[40px]">
                  Any Questions? Look Here
                </h2>
                <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                  Answers of the most commonly asked Questions
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 34 34"
                    className="fill-current"
                  >
                    <path d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                    <path d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                    <path d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold  sm:text-2xl lg:text-xl xl:text-2xl">
                    Do I have to pay a fee for consultation ?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    At our company, we firmly believe in providing exceptional
                    service to our clients. As part of our commitment to
                    transparency and building strong relationships, we offer
                    free consultations. These consultations serve as an
                    opportunity for open and honest communication, allowing us
                    to understand our clients’ needs and tailor our solutions
                    accordingly.
                  </p>
                </div>
              </div>
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 34 34"
                    className="fill-current"
                  >
                    <path d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                    <path d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                    <path d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold  sm:text-2xl lg:text-xl xl:text-2xl">
                    Do you offer cybersecurity services?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Yes, we provide comprehensive cybersecurity solutions
                    including. List of cybersecurity services- threat
                    assessment, vulnerability management, incident response,
                    etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 34 34"
                    className="fill-current"
                  >
                    <path d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                    <path d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                    <path d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold  sm:text-2xl lg:text-xl xl:text-2xl">
                    How can you help my business with cloud migration?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    We offer expert guidance and support for cloud migration
                    projects. Our services include various cloud migration
                    services such as cloud assessment, migration planning, data
                    migration, etc.
                  </p>
                </div>
              </div>
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 34 34"
                    className="fill-current"
                  >
                    <path d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                    <path d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                    <path d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold  sm:text-2xl lg:text-xl xl:text-2xl">
                    What is your approach to IT support?
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    We provide types of IT support such as remote, on-site, or a
                    combination to ensure minimal downtime and maximum
                    productivity. Our support services include helpdesk, network
                    support, hardware maintenance, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-4 top-4 -z-[1]">
            <svg
              width="48"
              height="134"
              viewBox="0 0 48 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="45.6673"
                cy="132"
                r="1.66667"
                transform="rotate(180 45.6673 132)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 45.6673 117.333)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 45.6673 102.667)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 45.6673 88.0001)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 45.6673 73.3335)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 45.6673 45.0001)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 45.6673 16.0001)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 45.6673 59.0001)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 45.6673 30.6668)"
                fill="#13C296"
              />
              <circle
                cx="45.6673"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 45.6673 1.66683)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="132"
                r="1.66667"
                transform="rotate(180 31.0013 132)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.0013 117.333)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.0013 102.667)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 31.0013 88.0001)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 31.0013 73.3335)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 31.0013 45.0001)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 31.0013 16.0001)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 31.0013 59.0001)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 31.0013 30.6668)"
                fill="#13C296"
              />
              <circle
                cx="31.0013"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 31.0013 1.66683)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="132"
                r="1.66667"
                transform="rotate(180 16.3333 132)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 16.3333 117.333)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 16.3333 102.667)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 16.3333 88.0001)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 16.3333 73.3335)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 16.3333 45.0001)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 16.3333 16.0001)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 16.3333 59.0001)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 16.3333 30.6668)"
                fill="#13C296"
              />
              <circle
                cx="16.3333"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 16.3333 1.66683)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="132"
                r="1.66667"
                transform="rotate(180 1.66732 132)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 1.66732 117.333)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 1.66732 102.667)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 1.66732 88.0001)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="73.3335"
                r="1.66667"
                transform="rotate(180 1.66732 73.3335)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 1.66732 45.0001)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 1.66732 16.0001)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 1.66732 59.0001)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 1.66732 30.6668)"
                fill="#13C296"
              />
              <circle
                cx="1.66732"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 1.66732 1.66683)"
                fill="#13C296"
              />
            </svg>
          </span>
          <span className="absolute bottom-4 right-4 -z-[1]">
            <svg
              width="48"
              height="134"
              viewBox="0 0 48 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="45.6673"
                cy="132"
                r="1.66667"
                transform="rotate(180 45.6673 132)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 45.6673 117.333)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 45.6673 102.667)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 45.6673 88.0001)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 45.6673 73.3333)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 45.6673 45.0001)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 45.6673 16.0001)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 45.6673 59.0001)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 45.6673 30.6668)"
                fill="#3758F9"
              />
              <circle
                cx="45.6673"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 45.6673 1.66683)"
                fill="#3758F9"
              />
              <circle
                cx="31.0006"
                cy="132"
                r="1.66667"
                transform="rotate(180 31.0006 132)"
                fill="#3758F9"
              />
              <circle
                cx="31.0006"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.0006 117.333)"
                fill="#3758F9"
              />
              <circle
                cx="31.0006"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.0006 102.667)"
                fill="#3758F9"
              />
              <circle
                cx="31.0006"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 31.0006 88.0001)"
                fill="#3758F9"
              />
              <circle
                cx="31.0008"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.0008 73.3333)"
                fill="#3758F9"
              />
              <circle
                cx="31.0008"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 31.0008 45.0001)"
                fill="#3758F9"
              />
              <circle
                cx="31.0008"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 31.0008 16.0001)"
                fill="#3758F9"
              />
              <circle
                cx="31.0008"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 31.0008 59.0001)"
                fill="#3758F9"
              />
              <circle
                cx="31.0008"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 31.0008 30.6668)"
                fill="#3758F9"
              />
              <circle
                cx="31.0008"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 31.0008 1.66683)"
                fill="#3758F9"
              />
              <circle
                cx="16.3341"
                cy="132"
                r="1.66667"
                transform="rotate(180 16.3341 132)"
                fill="#3758F9"
              />
              <circle
                cx="16.3341"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 16.3341 117.333)"
                fill="#3758F9"
              />
              <circle
                cx="16.3341"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 16.3341 102.667)"
                fill="#3758F9"
              />
              <circle
                cx="16.3341"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 16.3341 88.0001)"
                fill="#3758F9"
              />
              <circle
                cx="16.3338"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 16.3338 73.3333)"
                fill="#3758F9"
              />
              <circle
                cx="16.3338"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 16.3338 45.0001)"
                fill="#3758F9"
              />
              <circle
                cx="16.3338"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 16.3338 16.0001)"
                fill="#3758F9"
              />
              <circle
                cx="16.3338"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 16.3338 59.0001)"
                fill="#3758F9"
              />
              <circle
                cx="16.3338"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 16.3338 30.6668)"
                fill="#3758F9"
              />
              <circle
                cx="16.3338"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 16.3338 1.66683)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="132"
                r="1.66667"
                transform="rotate(180 1.66732 132)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 1.66732 117.333)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 1.66732 102.667)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="88.0001"
                r="1.66667"
                transform="rotate(180 1.66732 88.0001)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 1.66732 73.3333)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="45.0001"
                r="1.66667"
                transform="rotate(180 1.66732 45.0001)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="16.0001"
                r="1.66667"
                transform="rotate(180 1.66732 16.0001)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="59.0001"
                r="1.66667"
                transform="rotate(180 1.66732 59.0001)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="30.6668"
                r="1.66667"
                transform="rotate(180 1.66732 30.6668)"
                fill="#3758F9"
              />
              <circle
                cx="1.66732"
                cy="1.66683"
                r="1.66667"
                transform="rotate(180 1.66732 1.66683)"
                fill="#3758F9"
              />
            </svg>
          </span>
        </div>
      </section>

      {/* <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="blog-details.html" className="block">
                    <img
                      src="./assets/images/blog/blog-01.jpg"
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                <div>
                  <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".15s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="blog-details.html" className="block">
                    <img
                      src="./assets/images/blog/blog-02.jpg"
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                <div>
                  <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".2s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="blog-details.html" className="block">
                    <img
                      src="./assets/images/blog/blog-03.jpg"
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                <div>
                  <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="contact"
        className={`relative py-20 md:py-[120px] ${
          darkMode ? "bg-dark-2 text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute left-0 top-0 -z-[1] h-full w-full "></div>
        <div
          className={`absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] ${
            darkMode ? "bg-dark-2 text-white" : "bg-white text-black"
          } lg:h-[45%] xl:h-1/2`}
        ></div>
        <div className="container px-4">
          <div
            className={`-mx-4 ${
              darkMode ? "bg-dark-2 text-white" : "bg-white text-black"
            } flex flex-wrap items-center`}
          >
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="mb-6 block text-base font-medium ">
                    CONTACT US
                  </span>
                  <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] ">
                    Let's talk about your problem.
                  </h2>
                </div>
                <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                  {/* <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      <svg
                        width="29"
                        height="35"
                        viewBox="0 0 29 35"
                        className="fill-current"
                      >
                        <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                        <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                      </svg>
                    </div>
                    {/* <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                        Our Location
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        401 Broadway, 24th Floor, Orchard Cloud View, London
                      </p>
                    </div> 
                  </div> */}
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      <svg
                        width="34"
                        height="25"
                        viewBox="0 0 34 25"
                        className="fill-current"
                      >
                        <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold ">
                        How Can We Help?
                      </h5>

                      <p className="mt-1 text-base text-body-color ">
                        sandeep.rana@svtechnologies.info
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div
                className={`wow fadeInUp rounded-lg px-8 py-10 shadow-xl ${
                  darkMode
                    ? "bg-transparent text-white border border-white"
                    : "bg-white text-black"
                } sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]`}
                data-wow-delay=".2s
              "
              >
                <h3 className="mb-8 text-2xl font-semibold  md:text-[28px] md:leading-[1.42]">
                  Send us a Message
                </h3>
                <form>
                  <div className="mb-[22px]">
                    <label
                      for="fullName"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Full Name*
                    </label>
                    <input
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      type="text"
                      name="fullName"
                      placeholder="Adam Gelius"
                      required
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    />
                  </div>
                  <div className="mb-[22px]">
                    <label
                      for="email"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Email*
                    </label>
                    <input
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      type="email"
                      name="email"
                      required
                      placeholder="example@yourmail.com"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    />
                  </div>
                  <div className="mb-[22px]">
                    <label
                      for="phone"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Phone*
                    </label>
                    <input
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                      type="text"
                      name="phone"
                      placeholder="+885 1254 5211 552"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    />
                  </div>
                  <div className="mb-[30px]">
                    <label
                      for="message"
                      className="mb-4 block text-sm text-body-color dark:text-dark-6"
                    >
                      Message*
                    </label>
                    <textarea
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                      name="message"
                      rows="1"
                      placeholder="type your message here"
                      className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    ></textarea>
                  </div>
                  <div className="mb-0">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`pb-20 ${
          darkMode ? "bg-dark-2 text-white" : "bg-white text-black"
        }`}
      >
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11"></div>
        </div>
      </section>

      <footer
        className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
        data-wow-delay=".15s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <a
                  href="javascript:void(0)"
                  className="mb-6 inline-block max-w-[160px]"
                >
                  <img
                    src="/assets/images/logo/logo11.png"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="mb-8 max-w-[270px] text-base text-gray-7">
                  We create digital experiences for brands and companies by
                  using technology.
                </p>
                <div className="-mx-3 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M20.1236 5.91236C20.2461 5.76952 20.0863 5.58286 19.905 5.64972C19.5004 5.79896 19.1306 5.8974 18.5837 5.95817C19.2564 5.58362 19.5693 5.04828 19.8237 4.39259C19.885 4.23443 19.7 4.09092 19.5406 4.16647C18.8931 4.47345 18.1945 4.70121 17.4599 4.83578C16.7338 4.11617 15.6988 3.6665 14.5539 3.6665C12.3554 3.6665 10.5725 5.32454 10.5725 7.36908C10.5725 7.65933 10.6081 7.94206 10.6752 8.21276C7.51486 8.06551 4.6968 6.71359 2.73896 4.64056C2.60477 4.49848 2.36128 4.51734 2.27772 4.69063C2.05482 5.15296 1.93056 5.66584 1.93056 6.20582C1.93056 7.49014 2.6332 8.62331 3.70132 9.28732C3.22241 9.27293 2.76441 9.17961 2.34234 9.02125C2.13684 8.94416 1.90127 9.07964 1.92888 9.28686C2.14084 10.8781 3.42915 12.1909 5.09205 12.5011C4.75811 12.586 4.40639 12.6311 4.04253 12.6311C3.95431 12.6311 3.86685 12.6284 3.78019 12.6231C3.55967 12.6094 3.38044 12.8067 3.47499 12.9954C4.09879 14.2404 5.44575 15.1096 7.0132 15.1367C5.65077 16.13 3.93418 16.7218 2.06882 16.7218C1.83882 16.7218 1.74015 17.0175 1.9442 17.1178C3.52016 17.8924 5.31487 18.3332 7.22182 18.3332C14.545 18.3332 18.549 12.6914 18.549 7.79843C18.549 7.63827 18.545 7.47811 18.5377 7.31945C19.1321 6.92012 19.6664 6.44528 20.1236 5.91236Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
                      <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
                      <path d="M16.0276 4.96777C15.6432 4.96777 15.318 5.29304 15.318 5.67745C15.318 6.06186 15.6432 6.38713 16.0276 6.38713C16.412 6.38713 16.7373 6.06186 16.7373 5.67745C16.7373 5.29304 16.4416 4.96777 16.0276 4.96777Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M18.8065 1.8335H3.16399C2.42474 1.8335 1.83334 2.42489 1.83334 3.16414V18.8362C1.83334 19.5459 2.42474 20.1668 3.16399 20.1668H18.7473C19.4866 20.1668 20.078 19.5754 20.078 18.8362V3.13457C20.1371 2.42489 19.5457 1.8335 18.8065 1.8335ZM7.24464 17.4168H4.55379V8.69371H7.24464V17.4168ZM5.88443 7.48135C4.99733 7.48135 4.31721 6.77167 4.31721 5.91414C4.31721 5.05661 5.0269 4.34694 5.88443 4.34694C6.74196 4.34694 7.45163 5.05661 7.45163 5.91414C7.45163 6.77167 6.8011 7.48135 5.88443 7.48135ZM17.4463 17.4168H14.7554V13.1883C14.7554 12.183 14.7258 10.8523 13.336 10.8523C11.9167 10.8523 11.7097 11.976 11.7097 13.0996V17.4168H9.01884V8.69371H11.6506V9.90608H11.6801C12.0645 9.1964 12.9221 8.48672 14.2527 8.48672C17.0027 8.48672 17.5054 10.2609 17.5054 12.6856V17.4168H17.4463Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  About Us
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Testimonial
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Features
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Refund policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <div className="my-1">
                  <div className="-mx-3 flex items-center justify-center md:justify-start">
                    <a
                      href="javascript:void(0)"
                      className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                    >
                      Privacy policy
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                    >
                      Legal notice
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                    >
                      Terms of service
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/3 lg:w-1/2"></div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <img src="/assets/images/footer/shape-1.svg" alt="" />
          </span>

          <span className="absolute bottom-0 right-0 z-[-1]">
            <img src="/assets/images/footer/shape-3.svg" alt="" />
          </span>

          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8667 33.1956C2.89765 33.1956 3.7334 34.0318 3.7334 35.0633C3.7334 36.0947 2.89765 36.9309 1.8667 36.9309C0.835744 36.9309 4.50645e-08 36.0947 0 35.0633C-4.50645e-08 34.0318 0.835744 33.1956 1.8667 33.1956Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 33.1956C19.3249 33.1956 20.1606 34.0318 20.1606 35.0633C20.1606 36.0947 19.3249 36.9309 18.2939 36.9309C17.263 36.9309 16.4272 36.0947 16.4272 35.0633C16.4272 34.0318 17.263 33.1956 18.2939 33.1956Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 33.195C35.7519 33.195 36.5876 34.0311 36.5876 35.0626C36.5876 36.0941 35.7519 36.9303 34.7209 36.9303C33.69 36.9303 32.8542 36.0941 32.8542 35.0626C32.8542 34.0311 33.69 33.195 34.7209 33.195Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 33.195C51.965 33.195 52.8008 34.0311 52.8008 35.0626C52.8008 36.0941 51.965 36.9303 50.9341 36.9303C49.9031 36.9303 49.0674 36.0941 49.0674 35.0626C49.0674 34.0311 49.9031 33.195 50.9341 33.195Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M1.8667 16.7605C2.89765 16.7605 3.7334 17.5966 3.7334 18.6281C3.7334 19.6596 2.89765 20.4957 1.8667 20.4957C0.835744 20.4957 4.50645e-08 19.6596 0 18.6281C-4.50645e-08 17.5966 0.835744 16.7605 1.8667 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 16.7605C19.3249 16.7605 20.1606 17.5966 20.1606 18.6281C20.1606 19.6596 19.3249 20.4957 18.2939 20.4957C17.263 20.4957 16.4272 19.6596 16.4272 18.6281C16.4272 17.5966 17.263 16.7605 18.2939 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 16.7605C35.7519 16.7605 36.5876 17.5966 36.5876 18.6281C36.5876 19.6596 35.7519 20.4957 34.7209 20.4957C33.69 20.4957 32.8542 19.6596 32.8542 18.6281C32.8542 17.5966 33.69 16.7605 34.7209 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 16.7605C51.965 16.7605 52.8008 17.5966 52.8008 18.6281C52.8008 19.6596 51.965 20.4957 50.9341 20.4957C49.9031 20.4957 49.0674 19.6596 49.0674 18.6281C49.0674 17.5966 49.9031 16.7605 50.9341 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M1.8667 0.324951C2.89765 0.324951 3.7334 1.16115 3.7334 2.19261C3.7334 3.22408 2.89765 4.06024 1.8667 4.06024C0.835744 4.06024 4.50645e-08 3.22408 0 2.19261C-4.50645e-08 1.16115 0.835744 0.324951 1.8667 0.324951Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 0.324951C19.3249 0.324951 20.1606 1.16115 20.1606 2.19261C20.1606 3.22408 19.3249 4.06024 18.2939 4.06024C17.263 4.06024 16.4272 3.22408 16.4272 2.19261C16.4272 1.16115 17.263 0.324951 18.2939 0.324951Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 0.325302C35.7519 0.325302 36.5876 1.16147 36.5876 2.19293C36.5876 3.2244 35.7519 4.06056 34.7209 4.06056C33.69 4.06056 32.8542 3.2244 32.8542 2.19293C32.8542 1.16147 33.69 0.325302 34.7209 0.325302Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 0.325302C51.965 0.325302 52.8008 1.16147 52.8008 2.19293C52.8008 3.2244 51.965 4.06056 50.9341 4.06056C49.9031 4.06056 49.0674 3.2244 49.0674 2.19293C49.0674 1.16147 49.9031 0.325302 50.9341 0.325302Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 33.1956C67.9346 33.1956 68.7704 34.0318 68.7704 35.0633C68.7704 36.0947 67.9346 36.9309 66.9037 36.9309C65.8727 36.9309 65.037 36.0947 65.037 35.0633C65.037 34.0318 65.8727 33.1956 66.9037 33.1956Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 33.1956C84.3616 33.1956 85.1974 34.0318 85.1974 35.0633C85.1974 36.0947 84.3616 36.9309 83.3307 36.9309C82.2997 36.9309 81.464 36.0947 81.464 35.0633C81.464 34.0318 82.2997 33.1956 83.3307 33.1956Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 33.1956C100.789 33.1956 101.624 34.0318 101.624 35.0633C101.624 36.0947 100.789 36.9309 99.7576 36.9309C98.7266 36.9309 97.8909 36.0947 97.8909 35.0633C97.8909 34.0318 98.7266 33.1956 99.7576 33.1956Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 16.7605C67.9346 16.7605 68.7704 17.5966 68.7704 18.6281C68.7704 19.6596 67.9346 20.4957 66.9037 20.4957C65.8727 20.4957 65.037 19.6596 65.037 18.6281C65.037 17.5966 65.8727 16.7605 66.9037 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 16.7605C84.3616 16.7605 85.1974 17.5966 85.1974 18.6281C85.1974 19.6596 84.3616 20.4957 83.3307 20.4957C82.2997 20.4957 81.464 19.6596 81.464 18.6281C81.464 17.5966 82.2997 16.7605 83.3307 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 16.7605C100.789 16.7605 101.624 17.5966 101.624 18.6281C101.624 19.6596 100.789 20.4957 99.7576 20.4957C98.7266 20.4957 97.8909 19.6596 97.8909 18.6281C97.8909 17.5966 98.7266 16.7605 99.7576 16.7605Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 0.324966C67.9346 0.324966 68.7704 1.16115 68.7704 2.19261C68.7704 3.22408 67.9346 4.06024 66.9037 4.06024C65.8727 4.06024 65.037 3.22408 65.037 2.19261C65.037 1.16115 65.8727 0.324966 66.9037 0.324966Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 0.324951C84.3616 0.324951 85.1974 1.16115 85.1974 2.19261C85.1974 3.22408 84.3616 4.06024 83.3307 4.06024C82.2997 4.06024 81.464 3.22408 81.464 2.19261C81.464 1.16115 82.2997 0.324951 83.3307 0.324951Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 0.324951C100.789 0.324951 101.624 1.16115 101.624 2.19261C101.624 3.22408 100.789 4.06024 99.7576 4.06024C98.7266 4.06024 97.8909 3.22408 97.8909 2.19261C97.8909 1.16115 98.7266 0.324951 99.7576 0.324951Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M1.8667 82.2029C2.89765 82.2029 3.7334 83.039 3.7334 84.0705C3.7334 85.102 2.89765 85.9382 1.8667 85.9382C0.835744 85.9382 4.50645e-08 85.102 0 84.0705C-4.50645e-08 83.039 0.835744 82.2029 1.8667 82.2029Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 82.2029C19.3249 82.2029 20.1606 83.039 20.1606 84.0705C20.1606 85.102 19.3249 85.9382 18.2939 85.9382C17.263 85.9382 16.4272 85.102 16.4272 84.0705C16.4272 83.039 17.263 82.2029 18.2939 82.2029Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 82.2026C35.7519 82.2026 36.5876 83.0387 36.5876 84.0702C36.5876 85.1017 35.7519 85.9378 34.7209 85.9378C33.69 85.9378 32.8542 85.1017 32.8542 84.0702C32.8542 83.0387 33.69 82.2026 34.7209 82.2026Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 82.2026C51.965 82.2026 52.8008 83.0387 52.8008 84.0702C52.8008 85.1017 51.965 85.9378 50.9341 85.9378C49.9031 85.9378 49.0674 85.1017 49.0674 84.0702C49.0674 83.0387 49.9031 82.2026 50.9341 82.2026Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M1.8667 65.7677C2.89765 65.7677 3.7334 66.6039 3.7334 67.6353C3.7334 68.6668 2.89765 69.503 1.8667 69.503C0.835744 69.503 4.50645e-08 68.6668 0 67.6353C-4.50645e-08 66.6039 0.835744 65.7677 1.8667 65.7677Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 65.7677C19.3249 65.7677 20.1606 66.6039 20.1606 67.6353C20.1606 68.6668 19.3249 69.503 18.2939 69.503C17.263 69.503 16.4272 68.6668 16.4272 67.6353C16.4272 66.6039 17.263 65.7677 18.2939 65.7677Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 65.7674C35.7519 65.7674 36.5876 66.6036 36.5876 67.635C36.5876 68.6665 35.7519 69.5027 34.7209 69.5027C33.69 69.5027 32.8542 68.6665 32.8542 67.635C32.8542 66.6036 33.69 65.7674 34.7209 65.7674Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 65.7674C51.965 65.7674 52.8008 66.6036 52.8008 67.635C52.8008 68.6665 51.965 69.5027 50.9341 69.5027C49.9031 69.5027 49.0674 68.6665 49.0674 67.635C49.0674 66.6036 49.9031 65.7674 50.9341 65.7674Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M1.8667 98.2644C2.89765 98.2644 3.7334 99.1005 3.7334 100.132C3.7334 101.163 2.89765 102 1.8667 102C0.835744 102 4.50645e-08 101.163 0 100.132C-4.50645e-08 99.1005 0.835744 98.2644 1.8667 98.2644Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M1.8667 49.3322C2.89765 49.3322 3.7334 50.1684 3.7334 51.1998C3.7334 52.2313 2.89765 53.0675 1.8667 53.0675C0.835744 53.0675 4.50645e-08 52.2313 0 51.1998C-4.50645e-08 50.1684 0.835744 49.3322 1.8667 49.3322Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 98.2644C19.3249 98.2644 20.1606 99.1005 20.1606 100.132C20.1606 101.163 19.3249 102 18.2939 102C17.263 102 16.4272 101.163 16.4272 100.132C16.4272 99.1005 17.263 98.2644 18.2939 98.2644Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M18.2939 49.3322C19.3249 49.3322 20.1606 50.1684 20.1606 51.1998C20.1606 52.2313 19.3249 53.0675 18.2939 53.0675C17.263 53.0675 16.4272 52.2313 16.4272 51.1998C16.4272 50.1684 17.263 49.3322 18.2939 49.3322Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 98.2647C35.7519 98.2647 36.5876 99.1008 36.5876 100.132C36.5876 101.164 35.7519 102 34.7209 102C33.69 102 32.8542 101.164 32.8542 100.132C32.8542 99.1008 33.69 98.2647 34.7209 98.2647Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 98.2647C51.965 98.2647 52.8008 99.1008 52.8008 100.132C52.8008 101.164 51.965 102 50.9341 102C49.9031 102 49.0674 101.164 49.0674 100.132C49.0674 99.1008 49.9031 98.2647 50.9341 98.2647Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M34.7209 49.3326C35.7519 49.3326 36.5876 50.1687 36.5876 51.2002C36.5876 52.2317 35.7519 53.0678 34.7209 53.0678C33.69 53.0678 32.8542 52.2317 32.8542 51.2002C32.8542 50.1687 33.69 49.3326 34.7209 49.3326Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M50.9341 49.3326C51.965 49.3326 52.8008 50.1687 52.8008 51.2002C52.8008 52.2317 51.965 53.0678 50.9341 53.0678C49.9031 53.0678 49.0674 52.2317 49.0674 51.2002C49.0674 50.1687 49.9031 49.3326 50.9341 49.3326Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 82.2029C67.9346 82.2029 68.7704 83.0391 68.7704 84.0705C68.7704 85.102 67.9346 85.9382 66.9037 85.9382C65.8727 85.9382 65.037 85.102 65.037 84.0705C65.037 83.0391 65.8727 82.2029 66.9037 82.2029Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 82.2029C84.3616 82.2029 85.1974 83.0391 85.1974 84.0705C85.1974 85.102 84.3616 85.9382 83.3307 85.9382C82.2997 85.9382 81.464 85.102 81.464 84.0705C81.464 83.0391 82.2997 82.2029 83.3307 82.2029Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 82.2029C100.789 82.2029 101.624 83.039 101.624 84.0705C101.624 85.102 100.789 85.9382 99.7576 85.9382C98.7266 85.9382 97.8909 85.102 97.8909 84.0705C97.8909 83.039 98.7266 82.2029 99.7576 82.2029Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 65.7674C67.9346 65.7674 68.7704 66.6036 68.7704 67.635C68.7704 68.6665 67.9346 69.5027 66.9037 69.5027C65.8727 69.5027 65.037 68.6665 65.037 67.635C65.037 66.6036 65.8727 65.7674 66.9037 65.7674Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 65.7677C84.3616 65.7677 85.1974 66.6039 85.1974 67.6353C85.1974 68.6668 84.3616 69.503 83.3307 69.503C82.2997 69.503 81.464 68.6668 81.464 67.6353C81.464 66.6039 82.2997 65.7677 83.3307 65.7677Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 65.7677C100.789 65.7677 101.624 66.6039 101.624 67.6353C101.624 68.6668 100.789 69.503 99.7576 69.503C98.7266 69.503 97.8909 68.6668 97.8909 67.6353C97.8909 66.6039 98.7266 65.7677 99.7576 65.7677Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 98.2644C67.9346 98.2644 68.7704 99.1005 68.7704 100.132C68.7704 101.163 67.9346 102 66.9037 102C65.8727 102 65.037 101.163 65.037 100.132C65.037 99.1005 65.8727 98.2644 66.9037 98.2644Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M66.9037 49.3322C67.9346 49.3322 68.7704 50.1684 68.7704 51.1998C68.7704 52.2313 67.9346 53.0675 66.9037 53.0675C65.8727 53.0675 65.037 52.2313 65.037 51.1998C65.037 50.1684 65.8727 49.3322 66.9037 49.3322Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 98.2644C84.3616 98.2644 85.1974 99.1005 85.1974 100.132C85.1974 101.163 84.3616 102 83.3307 102C82.2997 102 81.464 101.163 81.464 100.132C81.464 99.1005 82.2997 98.2644 83.3307 98.2644Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M83.3307 49.3322C84.3616 49.3322 85.1974 50.1684 85.1974 51.1998C85.1974 52.2313 84.3616 53.0675 83.3307 53.0675C82.2997 53.0675 81.464 52.2313 81.464 51.1998C81.464 50.1684 82.2997 49.3322 83.3307 49.3322Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 98.2644C100.789 98.2644 101.624 99.1005 101.624 100.132C101.624 101.163 100.789 102 99.7576 102C98.7266 102 97.8909 101.163 97.8909 100.132C97.8909 99.1005 98.7266 98.2644 99.7576 98.2644Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
              <path
                d="M99.7576 49.3322C100.789 49.3322 101.624 50.1684 101.624 51.1998C101.624 52.2313 100.789 53.0675 99.7576 53.0675C98.7266 53.0675 97.8909 52.2313 97.8909 51.1998C97.8909 50.1684 98.7266 49.3322 99.7576 49.3322Z"
                fill="white"
                fill-opacity="0.08"
              ></path>
            </svg>
          </span>
        </div>
      </footer>

      <a
        href="javascript:void(0)"
        className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
      >
        <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
      </a>
    </>
  );
}

export default Home;
