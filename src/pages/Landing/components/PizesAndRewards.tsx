import { Col, Row } from "antd";
import ComponentContainer from "../../../components/ComponentContainer";
import Paragraph from "../../../components/Paragraph";
import trophy from "../../../assets/images/landingPage/trophy.png"
import medal2 from "../../../assets/images/landingPage/medal2.png"
import medal3 from "../../../assets/images/landingPage/medal3.png"
import medal1 from "../../../assets/images/landingPage/medal1.png"
import styled from "styled-components";
import bground from "../../../assets/images/bg/prizes.png"

const PrizesAndRewards = () => {
    return (<Container className="tw-py-[90px]">
        <Row gutter={[30, 30]}>
            <Col xs={0} lg={12}></Col>
            <Col xs={24} lg={12}>
                <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide tw-text-center lg:tw-text-left">Prizes and</h1>
                <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide tw-text-center lg:tw-text-left">Rewards</h1>
                <Paragraph className="lg:tw-w-[64%] tw-text-center lg:tw-text-left">Highlight of the prizes or rewards for winners and
                    for participants.
                </Paragraph>
            </Col>
        </Row>
        <Row className="tw-items-center lg:tw-mt-[100px]">
            <Col className="tw-mb-[100px] lg:tw-mb-0" xs={24} lg={12}>
                <div className="lg:tw-w-[70%] tw-mx-auto">
                    <img src={trophy} alt="" />
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <Row className="tw-pt-[50px]" gutter={[20, 20]}>
                    <Col span={8}>
                        <div className="tw-h-[150px] sm:tw-h-[220px] tw-relative tw-bg-[#d434fe1e] tw-border tw-border-violet tw-px-4 tw-pb-5 tw-rounded-[8px] tw-flex tw-items-center tw-justify-end tw-flex-col">
                            <div className="tw-w-[100px] sm:tw-w-[130px] tw-absolute -tw-top-[60px]">
                                <img src={medal2} className="" alt="" />
                            </div>
                            <h1 className="tw-font-bold tw-text-white sm:tw-text-2xl">2nd</h1>
                            <h1 className="tw-font-semibold tw-text-white sm:tw-text-[1.2rem]">Runner</h1>
                            <h1 className="tw-font-bold tw-text-violet tw-text-base sm:tw-text-lg lg:tw-text-[1.6rem]">N200,000</h1>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="tw-h-[160px] sm:tw-h-[240px] tw-relative tw-bg-[#903aff1e] tw-border tw-border-lightBlue tw-px-4 tw-pb-5 tw-rounded-[8px] tw-flex tw-items-center tw-justify-end tw-flex-col">
                            <div className="tw-w-[140px] sm:tw-w-[200px] tw-absolute sm:-tw-top-[110px] -tw-top-[100px]">
                                <img src={medal1} className="" alt="" />
                            </div>
                            <h1 className="tw-font-bold tw-text-white sm:tw-text-2xl">1st</h1>
                            <h1 className="tw-font-semibold tw-text-white sm:tw-text-[1.2rem]">Runner</h1>
                            <h1 className="tw-font-bold tw-text-lightBlue tw-text-base sm:tw-text-lg lg:tw-text-[1.6rem]">N400,000</h1>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="tw-h-[150px] sm:tw-h-[220px] tw-relative tw-bg-[#d434fe1e] tw-border tw-border-violet tw-px-4 tw-pb-5 tw-rounded-[8px] tw-flex tw-items-center tw-justify-end tw-flex-col">
                            <div className="tw-w-[100px] sm:tw-w-[130px] tw-absolute -tw-top-[60px]">
                                <img src={medal3} className="" alt="" />
                            </div>
                            <h1 className="tw-font-bold tw-text-white sm:tw-text-2xl">3rd</h1>
                            <h1 className="tw-font-semibold tw-text-white sm:tw-text-[1.2rem]">Runner</h1>
                            <h1 className="tw-font-bold tw-text-violet tw-text-base sm:tw-text-lg lg:tw-text-[1.6rem]">N150,000</h1>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>);
}

const Container = styled(ComponentContainer)`
    /* background-image: url(${bground});
    background-blend-mode: hard-light;
    background-size: cover; */
`
export default PrizesAndRewards;