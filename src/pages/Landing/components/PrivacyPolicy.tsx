import ComponentContainer from "../../../components/ComponentContainer";
import Paragraph from "../../../components/Paragraph";
import checkCircle from "../../../assets/images/landingPage/icons/checkCircle.svg"
import privacyMan from "../../../assets/images/landingPage/privacy.png"
import { Col, Row } from "antd";
import Button from "../../../components/Button";

const PrivacyPolicy = () => {
    return (<ComponentContainer className="tw-py-[90px]">
        <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
                <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide">Privacy Policy and</h1>
                <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide">Terms</h1>
                <Paragraph className="tw-opacity-[.8] tw-mt-5" >
                    Last updated on September 12, 2023
                </Paragraph>
                <Paragraph className="tw-my-10">
                    Below are our privacy & policy, which outline a lot of goodies.
                    it’s our aim to always take of our participant
                </Paragraph>

                <div className="tw-border tw-border-violet tw-p-10 tw-bg-[#e9e9e911] tw-rounded-lg">
                    <Paragraph>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose,
                        and safeguard your data when you participate in our tech
                        hackathon event. By participating in our event, you consent
                        to the practices described in this policy.
                    </Paragraph>

                    <Paragraph className="tw-text-violet !tw-font-bold tw-mt-5">Licensing Policy</Paragraph>
                    <Paragraph className="!tw-font-bold">
                        Here are terms of our Standard License:
                    </Paragraph>

                    <div className="tw-mt-3 tw-space-y-5">
                        <div className="tw-flex tw-space-x-4">
                            <img src={checkCircle} className="" alt="" />
                            <Paragraph>
                                The Standard License grants you a non-exclusive right to
                                navigate and register for our event
                            </Paragraph>
                        </div>
                        <div className="tw-flex tw-space-x-4">
                            <img src={checkCircle} className="" alt="" />
                            <Paragraph>
                                You are licensed to use the item available at any free source
                                sites, for your project developement
                            </Paragraph>
                        </div>
                    </div>
                    <div className="tw-flex tw-mt-5">
                        <Button className="tw-mx-auto">Read More</Button>
                    </div>
                </div>
            </Col>

            <Col xs={24} md={12}>
                <div>
<img src={privacyMan} alt="" />
                </div>
            </Col>
        </Row>
    </ComponentContainer>);
}

export default PrivacyPolicy;