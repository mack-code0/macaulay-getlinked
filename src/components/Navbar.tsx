import { useState } from "react";
import logo from "../assets/images/logo.svg"
import { useNavigate } from "react-router-dom";

const navLinks = [
    {
        link: "/",
        text: "Timeline"
    },
    {
        link: "/",
        text: "Overview"
    },
    {
        link: "/",
        text: "FAQs"
    },
    {
        link: "/contact-us",
        text: "Contact"
    }
]

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate()

    return (
        <nav className="tw-w-full md:tw-bg-transparent tw-bg-darkPurple tw-absolute">
            <div className="tw-justify-between tw-px-4 tw-mx-auto lg:tw-max-w-7xl md:tw-items-center md:tw-flex md:tw-px-[70px]">
                <div>
                    <div className="tw-flex tw-items-center tw-justify-between tw-py-3 md:tw-py-8 md:tw-block">
                        <img src={logo} onClick={() => navigate("/")} className="tw-cursor-pointer tw-w-[120px]" />
                        <div className="md:tw-hidden">
                            <button
                                className="tw-p-2 tw-text-gray-700 tw-rounded-md tw-outline-none focus:tw-border-gray-400 focus:tw-border"
                                onClick={() => setNavbar(!navbar)}
                            >

                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`tw-flex-1 tw-justify-self-center tw-py-3 tw-mt-8 md:tw-block md:tw-pb-0 md:tw-mt-0 ${navbar ? "tw-block" : "tw-hidden"}`}>
                        <ul className="tw-items-center tw-justify-center tw-space-y-8 md:tw-flex md:tw-space-x-6 md:tw-space-y-0">
                            {navLinks.map((link, idx) =>
                                <li key={idx} className="tw-text-[#fff] tw-font-medium">
                                    <a href={link.link} className="hover:tw-text-[#fff] text-[#fff] tw-text-sm hover:tw-text-opacity-50">{link.text}</a>
                                </li>)}
                        </ul>
                    </div>
                </div>
                <div className={`tw-flex tw-flex-row md:tw-flex ${navbar ? "tw-block tw-py-5" : "tw-hidden"}`}>
                    <a href="/register" className="tw-rounded-[4px] tw-bg-primary2 tw-font-montserrat hover:tw-bg-primary tw-text-xs tw-text-white tw-px-8 tw-py-3 tw-font-semibold tw-cursor-pointer" onClick={() => navigate("/signup")}>
                        Register
                    </a>
                </div>
            </div>
        </nav>
    );
}