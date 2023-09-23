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
        <nav className="tw-w-full md:tw-bg-transparent tw-bg-darkPurple tw-absolute tw-z-20">
            <div className="tw-justify-between tw-px-4 tw-mx-auto lg:tw-max-w-7xl md:tw-items-center md:tw-flex md:tw-px-[70px]">
                <div>
                    <div className="tw-flex tw-items-center tw-justify-between tw-py-5 md:tw-py-8 md:tw-block">
                        <img src={logo} onClick={() => navigate("/")} className="tw-cursor-pointer tw-w-[120px]" />
                        <div className="md:tw-hidden">
                            <button
                                className="tw-p-2 tw-text-gray-700 tw-rounded-md tw-outline-none focus:tw-border-gray-400 focus:tw-border"
                                onClick={() => setNavbar(!navbar)}
                            >

                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="14"
                                        fill="none"
                                        viewBox="0 0 19 14"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M1.357 0h6.786c.36 0 .705.147.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41H1.358c-.36 0-.705-.147-.96-.41A1.423 1.423 0 010 1.4C0 1.029.143.673.397.41c.255-.263.6-.41.96-.41zm9.5 11.2h6.786c.36 0 .705.148.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41h-6.785c-.36 0-.705-.148-.96-.41a1.423 1.423 0 01-.397-.99c0-.371.143-.727.398-.99.254-.262.6-.41.96-.41zm-9.5-5.6h16.286c.36 0 .705.147.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41H1.358c-.36 0-.705-.148-.96-.41A1.423 1.423 0 010 7c0-.371.143-.727.397-.99.255-.263.6-.41.96-.41z"
                                        ></path>
                                    </svg>

                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="14"
                                        fill="none"
                                        viewBox="0 0 19 14"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M1.357 0h6.786c.36 0 .705.147.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41H1.358c-.36 0-.705-.147-.96-.41A1.423 1.423 0 010 1.4C0 1.029.143.673.397.41c.255-.263.6-.41.96-.41zm9.5 11.2h6.786c.36 0 .705.148.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41h-6.785c-.36 0-.705-.148-.96-.41a1.423 1.423 0 01-.397-.99c0-.371.143-.727.398-.99.254-.262.6-.41.96-.41zm-9.5-5.6h16.286c.36 0 .705.147.96.41.254.263.397.619.397.99s-.143.727-.398.99c-.254.262-.6.41-.96.41H1.358c-.36 0-.705-.148-.96-.41A1.423 1.423 0 010 7c0-.371.143-.727.397-.99.255-.263.6-.41.96-.41z"
                                        ></path>
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
                                    <a onClick={() => navigate(link.link)} className="tw-cursor-pointer hover:tw-text-[#fff] text-[#fff] tw-text-sm hover:tw-text-opacity-50">{link.text}</a>
                                </li>)}
                        </ul>
                    </div>
                </div>
                <div className={`tw-flex tw-flex-row md:tw-flex ${navbar ? "tw-block tw-py-5" : "tw-hidden"}`}>
                    <button className="tw-rounded-[4px] tw-bg-primary2 tw-font-montserrat hover:tw-bg-primary tw-text-xs tw-text-white tw-px-8 tw-py-3 tw-font-semibold tw-cursor-pointer" onClick={() => navigate("/register")}>
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
}
// https://macaulay-getlinked.netlify.app