import { Col, Row } from "antd";
import ComponentContainer from "../../components/ComponentContainer";
import NavBar from "../../components/Navbar";
import Paragraph from "../../components/Paragraph";
import twitter from "../../assets/images/landingPage/icons/twitter.svg"
import facebook from "../../assets/images/landingPage/icons/facebook.svg"
import instagram from "../../assets/images/landingPage/icons/instagram.svg"
import linkedin from "../../assets/images/landingPage/icons/linkedin.svg"
import Button from "../../components/Button";
import styled from "styled-components";
import bground from "../../assets/images/bg/ContactPage.png"
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup"
import axios from "axios";
import { toast } from "react-toastify";

const initialValues = {
    email: "",
    phone_number: "",
    first_name: "",
    message: ""
}

const validationSchema = yup.object({
    first_name: yup.string().required("First Name cannot be blank"),
    phone_number: yup.number().typeError("Enter valid number").required("Phone Number cannot be blank"),
    email: yup.string().email("Email is invalid").required("Email cannot be blank"),
    message: yup.string().required("Message cannot be blank"),
})


const Contact = () => {
    return (<Container className="!tw-bg-darkPurple tw-overflow-x-hidden">
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

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={async (val, formikOps) => {
                                const payload = {
                                    ...val,
                                }

                                try {
                                    await axios.post(`https://backend.getlinked.ai/hackathon/contact-form`, payload, {
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })
                                    toast.success("Submitted successfully")
                                    formikOps.resetForm()
                                } catch (error: any) {
                                    if (error.response.data) {
                                        const errorArray = Object.entries(error.response.data)[0]
                                        const errorArrayValue: any = errorArray[1]
                                        toast.error(errorArrayValue?.length > 0 ? errorArrayValue[0] : "An error occured, Please check your values")
                                    } else {
                                        toast.error("An error occured, Please check your values")
                                    }
                                }
                            }}
                        >
                            {({ values, handleChange, handleBlur, isSubmitting }) =>
                                <Form className="tw-flex tw-flex-col tw-space-y-10">
                                    <div className="tw-relative">
                                        <input
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            name="first_name"
                                            value={values.first_name}
                                            placeholder="First Name"
                                            type="text"
                                            className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                        <ErrorMessage name="first_name" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                    </div>

                                    <div className="tw-relative">
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone_number}
                                            name="phone_number"
                                            placeholder="Phone Number"
                                            type="text"
                                            className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                        <ErrorMessage name="phone_number" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                    </div>

                                    <div className="tw-relative">
                                        <input
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            name="email"
                                            value={values.email}
                                            placeholder="Mail"
                                            type="text"
                                            className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                        <ErrorMessage name="email" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                    </div>

                                    <div className="tw-relative">
                                        <textarea
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            name="message"
                                            placeholder="Message"
                                            rows={5}
                                            value={values.message}
                                            className="tw-text-white placeholder:tw-text-white tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white"/>
                                        <ErrorMessage name="message" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                    </div>

                                    <Button disabled={isSubmitting} type="submit" className="tw-w-full">
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </Button>
                                </Form>
                            }
                        </Formik>

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
    </Container>);
}

const Container = styled.div`
    background-image: url(${bground});
    background-size: cover;
`

export default Contact;