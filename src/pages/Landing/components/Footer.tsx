import ComponentContainer from "../../../components/ComponentContainer";
import logo from "../../../assets/images/logo.svg"
import { Col, Row } from "antd";
import Paragraph from "../../../components/Paragraph";
import twitter from "../../../assets/images/landingPage/icons/twitter.svg"
import facebook from "../../../assets/images/landingPage/icons/facebook.svg"
import instagram from "../../../assets/images/landingPage/icons/instagram.svg"
import linkedin from "../../../assets/images/landingPage/icons/linkedin.svg"
import phone from "../../../assets/images/landingPage/icons/phone.svg"
import location from "../../../assets/images/landingPage/icons/location.svg"

const Footer = () => {
    return (<ComponentContainer className="tw-pt-[90px] !tw-bg-[#100B20]">
        <Row gutter={[20, 20]}>
            <Col xs={24} md={10}>
                <img src={logo} alt="" />
                <Paragraph className="tw-mt-10 tw-text-[12px] !tw-text-white tw-font-[500]">
                    Getlinked Tech Hackathon is a technology innovation program
                    established by a group of organizations with the aim of showcasing
                    young and talented individuals in the field of technology
                </Paragraph>

                <div className="tw-flex tw-space-x-2 tw-mt-5 tw-items-center">
                    <a href=""><Paragraph className="tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">Terms of Use</Paragraph></a>
                    <span className="tw-text-violet">|</span>
                    <a href=""><Paragraph className="tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">Privacy Policy</Paragraph></a>
                </div>
            </Col>

            <Col className="tw-flex tw-justify-center" xs={24} md={7}>
                <div className="tw-space-y-2 tw-flex tw-flex-col">
                    <Paragraph className="!tw-text-violet !tw-font-bold">Useful Links</Paragraph>
                    <a href="" className="tw-w-fit"><Paragraph className="!tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">Overview</Paragraph></a>
                    <a href="" className="tw-w-fit"><Paragraph className="!tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">Timeline</Paragraph></a>
                    <a href="" className="tw-w-fit"><Paragraph className="!tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">FAQs</Paragraph></a>
                    <a href="" className="tw-w-fit"><Paragraph className="!tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">Register</Paragraph></a>
                    <div className="tw-flex tw-space-x-4">
                        <Paragraph className="!tw-text-[12px] !tw-text-violet !tw-font-bold">Follow Us</Paragraph>
                        <div className="tw-flex tw-items-center tw-space-x-3">
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className="tw-flex tw-justify-center" xs={24} md={7}>
                <div className="tw-space-y-2 tw-flex tw-flex-col">
                    <Paragraph className="!tw-text-violet !tw-font-bold">Contact Us</Paragraph>
                    <a href="tel:+2346707653444" className="tw-flex tw-space-x-3 tw-w-fit">
                        <img src={phone} alt="" />
                        <Paragraph className="!tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">
                            +234 6707653444
                        </Paragraph>
                    </a>
                    <a href="" className="tw-flex tw-space-x-3 tw-w-fit">
                        <img src={location} alt="" />
                        <Paragraph className="!tw-text-[12px] hover:!tw-text-violet !tw-text-white tw-font-[500]">
                            27,Alara Street
                            Yaba 100012
                            Lagos State
                        </Paragraph>
                    </a>
                </div>
            </Col>
        </Row>
        <div className="tw-flex tw-justify-center tw-py-[50px]">
            <Paragraph>
                All rights reserved. © getlinked Ltd.
            </Paragraph>
        </div>
    </ComponentContainer>);
}

export default Footer;