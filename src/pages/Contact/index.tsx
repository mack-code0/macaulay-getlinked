import { Col, Row } from "antd";
import ComponentContainer from "../../components/ComponentContainer";
import NavBar from "../../components/Navbar";
import Paragraph from "../../components/Paragraph";
import twitter from "../../assets/images/landingPage/icons/twitter.svg"
import facebook from "../../assets/images/landingPage/icons/facebook.svg"
import instagram from "../../assets/images/landingPage/icons/instagram.svg"
import linkedin from "../../assets/images/landingPage/icons/linkedin.svg"
import Button from "../../components/Button";

const Contact = () => {
    return (<div className="!tw-bg-contactBg tw-bg-cover">
        <NavBar />
        <ComponentContainer className="lg:tw-py-[300px] tw-py-[100px] !tw-bg-[transparent]">
            <Row className="lg:tw-items-center" gutter={[20, 20]}>
                <Col className="tw-hidden lg:tw-block" xs={24} lg={12}>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide">Get in Touch</h1>
                    <Paragraph>Contact Information</Paragraph>

                    <div className="tw-space-y-7 tw-flex tw-flex-col tw-mt-3">
                        <Paragraph className="tw-w-[200px] tw-font-[400] tw-leading-tight">
                            27,Alara Street
                            Yaba 100012
                            Lagos State
                        </Paragraph>
                        <Paragraph className="tw-w-[200px] tw-font-[400] tw-leading-tight">
                            Call Us : 07067981819
                        </Paragraph>
                        <Paragraph className="tw-w-[200px] tw-font-[400] tw-leading-tight">
                            we are open from Monday-Friday
                            08:00am - 05:00pm
                        </Paragraph>

                        <div className="">
                            <Paragraph className="tw-font-bold !tw-text-[12px] tw-text-violet tw-opacity-[.9]">
                                Share on
                            </Paragraph>
                            <div className="tw-flex tw-items-center tw-space-x-3">
                                <a href=""><img src={instagram} alt="" /></a>
                                <a href=""><img src={twitter} alt="" /></a>
                                <a href=""><img src={facebook} alt="" /></a>
                                <a href=""><img src={linkedin} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <div className="tw-p-10 lg:tw-bg-[#e9e9e911] tw-rounded-lg">
                        <h1 className="!tw-font-[300] tw-mb-5 tw-font-clashDisplay tw-text-violet tw-text-xl tw-tracking-wide">
                            Questions or need assistance?
                            Let us know  about it!
                        </h1>

                        <Paragraph className="lg:tw-w-[200px] lg:tw-hidden tw-font-[400] tw-leading-tight tw-my-5">
                            Email us below to any question related
                            to our event
                        </Paragraph>

                        <form className="tw-flex tw-flex-col tw-space-y-10" action="">
                            <input
                                placeholder="First Name"
                                type="text"
                                className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />

                            <input
                                placeholder="Mail"
                                type="text"
                                className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />

                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white">
                            </textarea>

                            <Button className="tw-mx-auto">Submit</Button>
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

export default Contact;