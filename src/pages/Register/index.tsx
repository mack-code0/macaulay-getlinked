import { Col, Row } from "antd";
import ComponentContainer from "../../components/ComponentContainer";
import NavBar from "../../components/Navbar";
import Paragraph from "../../components/Paragraph";
import twitter from "../../assets/images/landingPage/icons/twitter.svg"
import facebook from "../../assets/images/landingPage/icons/facebook.svg"
import instagram from "../../assets/images/landingPage/icons/instagram.svg"
import linkedin from "../../assets/images/landingPage/icons/linkedin.svg"
import Button from "../../components/Button";
import registerMan from "../../assets/images/registerMan.png"
import { Checkbox } from "@mantine/core";

const Register = () => {
    return (<div className="!tw-bg-contactBg tw-bg-cover tw-overflow-x-hidden">
        <NavBar />
        <ComponentContainer className="lg:tw-py-[150px] tw-py-[100px] !tw-bg-[transparent]">
            <Row className="lg:tw-items-center" gutter={[20, 20]}>
                <Col className="tw-hidden lg:tw-block" xs={24} lg={12}>
                    <img src={registerMan} alt="" />
                </Col>
                <Col xs={24} lg={12}>
                    <div className="tw-p-10 lg:tw-bg-[#e9e9e911] tw-rounded-lg">
                        <h1 className="!tw-font-[300] tw-mb-5 tw-font-clashDisplay tw-text-violet tw-text-xl tw-tracking-wide">
                            Register
                        </h1>

                        <Paragraph className="tw-font-[400] tw-leading-tight tw-my-5">
                            Be part of this movement!<span className="tw-border-b tw-border-dashed tw-ml-2 tw-text-xl tw-border-violet">🚶‍♂️🚶‍♀️</span>
                        </Paragraph>

                        <Paragraph className="tw-uppercase tw-font-[600] !tw-text-[1.3rem] tw-leading-tight tw-my-5">
                            CREATE YOUR ACCOUNT
                        </Paragraph>

                        <form className="tw-flex tw-flex-col tw-space-y-7" action="">
                            <div className="tw-flex tw-space-x-6">
                                <div className="md:tw-w-1/2 tw-w-full">
                                    <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                        Team's Name
                                    </Paragraph>
                                    <input
                                        placeholder="Enter the name of your group"
                                        type="text"
                                        className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                </div>

                                <div className="md:tw-w-1/2 tw-w-full">
                                    <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                        Phone
                                    </Paragraph>
                                    <input
                                        placeholder="Enter your phone number"
                                        type="text"
                                        className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                </div>
                            </div>

                            <div className="tw-flex tw-space-x-6">
                                <div className="md:tw-w-1/2 tw-w-full">
                                    <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                        Email
                                    </Paragraph>
                                    <input
                                        placeholder="Enter your email address"
                                        type="text"
                                        className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                </div>

                                <div className="md:tw-w-1/2 tw-w-full">
                                    <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                        Project Topic
                                    </Paragraph>
                                    <input
                                        placeholder="What is your group project topic"
                                        type="text"
                                        className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                </div>
                            </div>

                            <div>
                                <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                    Email
                                </Paragraph>
                                <input
                                    placeholder="Enter your email address"
                                    type="text"
                                    className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                            </div>


                            <div>
                                <Paragraph className="tw-text-pinkRed tw-italic tw-text-xs tw-mb-3">Please review your registration details before submitting</Paragraph>
                                <Checkbox
                                    defaultChecked
                                    color="#ffffff21"
                                    styles={{
                                        input: { background: "none" }
                                    }}
                                    label={<Paragraph className="!tw-mt-[-5.9px]">
                                        I agreed with the event terms and conditions  and privacy policy
                                    </Paragraph>}
                                />
                            </div>

                            <Button className="tw-w-full">Register Now</Button>
                        </form>
                    </div>
                    <div className="tw-flex tw-flex-col lg:tw-hidden">
                        <Paragraph className="tw-font-bold !tw-text-[12px] tw-text-violet tw-opacity-[.9] tw-mx-auto">
                            Share on
                        </Paragraph>
                        <div className="tw-flex tw-items-center tw-space-x-3 tw-mx-auto">
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </ComponentContainer>
    </div>);
}

export default Register;