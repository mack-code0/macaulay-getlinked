import ComponentContainer from "../../../components/ComponentContainer";
import { Row, Col } from "antd"
import Paragraph from "../../../components/Paragraph";
import { FaPlus } from "react-icons/fa"
import frequentlyAskedQuestion from "../../../assets/images/landingPage/hero/frequentlyAskedQuestion.png"


export const questionArray: { answer: string, question: string }[] = [
    {
        answer: "",
        question: "Can I work on a project I started before the hackathon?"
    },
    {
        answer: "",
        question: "What happens if I need help during the hackathon?"
    },
    {
        answer: "",
        question: "What happens if I don't have an idea for a project?"
    },
    {
        answer: "",
        question: "Can I join a team or do I have to come with one?"
    },
    {
        answer: "",
        question: "What happens after the hackathon ends"
    },
    {
        answer: "",
        question: "Can I work on a project I started before the hackathon?"
    },
]
const FrequentlyAskedQuestions = () => {
    return (<ComponentContainer id="faqs" className="tw-py-[90px]">
        {/* <AddBlurBg className="tw-bg-darkPurple"> */}
            <Row className="tw-items-center" gutter={[20, 20]}>
                <Col xs={24} lg={12}>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide">Frequently Asked</h1>
                    <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-violet tw-text-2xl tw-tracking-wide">Questions</h1>

                    <Paragraph className="tw-mt-4">
                        We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0
                    </Paragraph>

                    <div className="tw-mt-10">
                        {questionArray.map((question, idx) =>
                            <div key={idx} className="tw-flex tw-items-center tw-cursor-pointer tw-w-full tw-border-b tw-border-violet tw-py-5">
                                <Paragraph>{question.question}</Paragraph>
                                <FaPlus className="tw-text-violet tw-ml-auto" />
                            </div>)}
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <div className="tw-w-full">
                        <img src={frequentlyAskedQuestion} alt="" />
                    </div>
                </Col>
            </Row>
        {/* </AddBlurBg> */}
    </ComponentContainer>);
}

export default FrequentlyAskedQuestions;