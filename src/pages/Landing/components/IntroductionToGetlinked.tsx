import { Row, Col } from "antd";
import ComponentContainer from "../../../components/ComponentContainer";
import theBigIdea from "../../../assets/images/landingPage/introductionToGetlinked/theBigIdea.png"
import judging from "../../../assets/images/landingPage/introductionToGetlinked/judging.png"
import womanSitting from "../../../assets/images/landingPage/introductionToGetlinked/womanSitting.png"
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";
import AddBlurBg from "../../../components/AddBlurBg";


const criteriaAttributes: { title: string, body: string }[] = [
    {
        title: "Innovation and Creativity",
        body: `Evaluate the uniqueness and creativity of the
        solution. Consider whether it addresses a real-world problem in a novel 
        way or introduces innovative features.`
    },
    {
        title: "Functionality",
        body: `Assess how well the solution works. Does it perform its 
        intended functions effectively and without major issues? Judges would
        consider the completeness and robustness of the solution.`
    },
    {
        title: "Impact and Relevance",
        body: `Determine the potential impact of the solution 
        in the real world. Does it address a significant problem, and is it relevant 
        to the target audience? Judges would assess the potential social, 
        economic, or environmental benefits.`
    },
    {
        title: "Technical Complexity",
        body: `Evaluate the technical sophistication of the solution. 
        Judges would consider the complexity of the code, the use of advanced 
        technologies or algorithms, and the scalability of the solution.`
    },
    {
        title: "Adherence to Hackathon Rules",
        body: `Judges will Ensure that the team adhered 
        to the rules and guidelines of the hackathon, including deadlines, use of 
        specific technologies or APIs, and any other competition-specific requirements.`
    }
]

const IntroductionToGetlinked = () => {
    return (<ComponentContainer id="overview" className="tw-py-[90px]">
        <AddBlurBg className="tw-bg-darkPurple">
            <Row className="tw-items-center tw-mb-10" gutter={[20, 50]}>
                <Col xs={24} lg={12}>
                    <div className="tw-w-full tw-flex">
                        <img src={theBigIdea} alt="" className="tw-mx-auto" />
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide tw-text-center md:tw-text-left">Introduction to getlinked</h1>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide tw-text-center md:tw-text-left">tech Hackathon 1.0</h1>

                    <Paragraph className="tw-mt-4 tw-text-center md:tw-text-left">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </Paragraph>
                </Col>
            </Row>

            <Row className="tw-items-center tw-mb-10" gutter={[20, 20]}>
                <Col sm={{ span: 24, order: 2 }} lg={{ span: 12, order: 2 }}>
                    <div className="tw-w-full tw-flex">
                        <img src={womanSitting} alt="" />
                    </div>
                </Col>
                <Col sm={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }}>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide tw-text-center md:tw-text-left">Rules and</h1>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide tw-text-center md:tw-text-left">Guidelines</h1>

                    <Paragraph className="tw-mt-4 tw-text-center md:tw-text-left">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </Paragraph>
                </Col>
            </Row>
        </AddBlurBg>

        <AddBlurBg size={700} position={["left", "-90%"]} className="tw-bg-darkPurple">
            <Row className="tw-items-center" gutter={[20, 20]}>
                <Col xs={24} lg={12}>
                    <div className="tw-w-full">
                        <img src={judging} alt="" />
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide tw-text-center md:tw-text-left">Judging Criteria</h1>
                    <h1 className="tw-font-semibold tw-mb-4 tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide tw-text-center md:tw-text-left">Key attributes</h1>

                    {criteriaAttributes.map((val, idx) =>
                        <Paragraph key={idx} className="tw-mb-5 tw-text-center md:tw-text-left">
                            <span className="tw-text-pinkRed tw-font-bold">{val.title}</span>: {val.body}
                        </Paragraph>)}
                    <div className="tw-flex">
                        <Button className="tw-mt-8 tw-mx-auto md:tw-m-0">Read More</Button>
                    </div>
                </Col>
            </Row>
        </AddBlurBg>
    </ComponentContainer>);
}


export default IntroductionToGetlinked;