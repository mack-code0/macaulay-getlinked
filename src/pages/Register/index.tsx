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
import ReactSelect from "react-select";
import selectStyle from "./components/selectStyle";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup"
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import successfulRegistration from "../../assets/images/successfulRegistration.png"


const initialValues = {
    email: "",
    phone_number: "",
    team_name: "",
    group_size: { value: "", label: "" },
    project_topic: "",
    category: { value: "", label: "" },
    privacy_poclicy_accepted: "",
}

const validationSchema = yup.object({
    team_name: yup.string().required("Team Name cannot be blank"),
    phone_number: yup.number().typeError("Enter valid number").required("Phone Number cannot be blank"),
    email: yup.string().email("Email is invalid").required("Email cannot be blank"),
    project_topic: yup.string().required("Project Topic cannot be blank"),
    category: yup.object({
        value: yup.string().required("Category cannot be blank")
    }),
    group_size: yup.object({
        value: yup.string().required("Group Size cannot be blank"),
    }),
    privacy_poclicy_accepted: yup.string().required("Accept Privacy policy")
})

const Register = () => {
    const [successfullyRegistered, setSuccessfullyRegistered] = useState(false)
    const [categoriesState, setCategoriesState] = useState({
        data: [] as { id: number, name: string }[] | [],
        loading: true,
    })

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(`https://backend.getlinked.ai/hackathon/categories-list`)
            setCategoriesState(prev => ({ ...prev, data: data }))
        } catch (error: any) {

        } finally {
            setCategoriesState(prev => ({ ...prev, loading: false }))
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    return (<div className="!tw-bg-contactBg tw-bg-cover tw-overflow-x-hidden">
        <NavBar />
        {successfullyRegistered
            && <div className="tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center tw-backdrop-blur-sm tw-bg-black tw-bg-opacity-70 tw-z-50">
                <div className="tw-border tw-border-violet tw-p-8 tw-rounded-lg tw-shadow-lg tw-text-center tw-flex tw-flex-col tw-items-center">
                    <div>
                        <img className="tw-object-scale-down" src={successfulRegistration} alt="" />
                    </div>
                    <h1 className="md:tw-text-3xl tw-text-2xl tw-text-[#fff] tw-font-bold tw-mb-4 tw-w-full md:tw-w-3/4 tw-mx-auto">
                        Congratulations
                        you have successfully Registered!
                    </h1>
                    <Paragraph className="tw-text-sm md:tw-text-lg tw-w-full md:tw-w-3/4 tw-mx-auto tw-mb-5">
                        Yes, it was easy and you did it!
                        check your mail box for next step
                    </Paragraph>
                    <Button onClick={() => window.location.reload()} className="tw-w-full">Back</Button>
                </div>
            </div>}
        <ComponentContainer className="lg:tw-py-[150px] tw-py-[100px] !tw-bg-[transparent]">
            <Row className="tw-items-center" gutter={[20, 20]}>
                <Col xs={24} lg={10}>
                    <img src={registerMan} alt="" />
                </Col>
                <Col xs={24} lg={14}>
                    <div className="lg:tw-p-10 lg:tw-bg-[#e9e9e911] tw-rounded-lg">
                        <h1 className="!tw-font-[300] tw-mb-5 tw-font-clashDisplay tw-text-violet tw-text-xl tw-tracking-wide">
                            Register
                        </h1>

                        <Paragraph className="tw-font-[400] tw-leading-tight tw-my-5">
                            Be part of this movement!<span className="tw-border-b tw-border-dashed tw-ml-2 tw-text-xl tw-border-violet">🚶‍♂️🚶‍♀️</span>
                        </Paragraph>

                        <Paragraph className="tw-uppercase tw-font-[600] !tw-text-[1.3rem] tw-leading-tight tw-my-5">
                            CREATE YOUR ACCOUNT
                        </Paragraph>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={async (val) => {
                                const payload = {
                                    ...val,
                                    group_size: val.group_size.value,
                                    category: val.category.value,
                                    privacy_poclicy_accepted: val.privacy_poclicy_accepted === "true"
                                }
                                try {
                                    await axios.post(`https://backend.getlinked.ai/hackathon/registration`, payload, {
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })
                                    setSuccessfullyRegistered(true)
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
                            {({ values, handleChange, handleBlur, setFieldValue, isSubmitting }) =>
                                <Form className="tw-flex tw-flex-col tw-space-y-7">
                                    <div className="tw-flex tw-flex-col lg:tw-flex-row tw-space-y-6 lg:tw-space-y-0 lg:tw-space-x-6">
                                        <div className="tw-w-full lg:tw-w-1/2 tw-w-full tw-relative">
                                            <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                                Team's Name
                                            </Paragraph>
                                            <input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.team_name}
                                                name="team_name"
                                                placeholder="Enter the name of your group"
                                                type="text"
                                                className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                            <ErrorMessage name="team_name" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                        </div>

                                        <div className="tw-w-full lg:tw-w-1/2 tw-w-full tw-relative">
                                            <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                                Phone
                                            </Paragraph>
                                            <input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone_number}
                                                name="phone_number"
                                                placeholder="Enter your phone number"
                                                type="text"
                                                className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                            <ErrorMessage name="phone_number" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                        </div>
                                    </div>

                                    <div className="tw-flex tw-flex-col lg:tw-flex-row tw-space-y-6 lg:tw-space-y-0 lg:tw-space-x-6">
                                        <div className="tw-w-full lg:tw-w-1/2 tw-w-full tw-relative">
                                            <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                                Email
                                            </Paragraph>
                                            <input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                name="email"
                                                placeholder="Enter your email address"
                                                type="text"
                                                className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                            <ErrorMessage name="email" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                        </div>

                                        <div className="tw-w-full lg:tw-w-1/2 tw-w-full tw-relative">
                                            <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                                Project Topic
                                            </Paragraph>
                                            <input
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.project_topic}
                                                name="project_topic"
                                                placeholder="What is your group project topic"
                                                type="text"
                                                className="tw-text-white placeholder:tw-text-white/[0.5] tw-rounded-md tw-p-3 tw-w-full tw-bg-[#e9e9e911] tw-outline-none tw-border tw-border-white" />
                                            <ErrorMessage name="project_topic" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                        </div>
                                    </div>

                                    <div className="tw-flex tw-flex-col lg:tw-flex-row tw-space-y-6 lg:tw-space-y-0 lg:tw-space-x-6">
                                        <div className="tw-w-full lg:tw-w-1/2 tw-w-full tw-relative">
                                            <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                                Category
                                            </Paragraph>
                                            <ReactSelect
                                                isLoading={categoriesState.loading}
                                                styles={selectStyle}
                                                placeholder="Select your category"
                                                value={values.category}
                                                name="category"
                                                onChange={(val) => setFieldValue("category", val)}
                                                onBlur={handleBlur}
                                                options={categoriesState.data.map((category) => ({ value: category.id, label: category.name }))}
                                            />
                                            <ErrorMessage name="category.value" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                        </div>

                                        <div className="tw-w-full lg:tw-w-1/2 tw-w-full tw-relative">
                                            <Paragraph className="tw-font-[400] tw-leading-tight tw-mb-2">
                                                Group Size
                                            </Paragraph>
                                            <ReactSelect
                                                value={values.group_size}
                                                onChange={(val) => setFieldValue("group_size", val)}
                                                options={Array.from({ length: 10 }).map((_, idx: number) => ({ value: idx + 1, label: idx + 1 }))}
                                                styles={selectStyle}
                                                name="group_size"
                                                onBlur={handleBlur}
                                                placeholder="Select"
                                            />
                                            <ErrorMessage name="group_size.value" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                        </div>
                                    </div>


                                    <div>
                                        <Paragraph className="tw-text-pinkRed tw-italic tw-text-xs tw-mb-3">Please review your registration details before submitting</Paragraph>
                                        <div className="tw-relative">
                                            <ErrorMessage name="privacy_poclicy_accepted" render={(msg) => <small className="tw-text-xs tw-absolute -tw-bottom-4 tw-left-0 tw-w-full tw-text-red-500 tw-whitespace-nowrap">{msg}</small>} />
                                            <Checkbox
                                                checked={values.privacy_poclicy_accepted === "true"}
                                                onChange={(e) => setFieldValue("privacy_poclicy_accepted", e.target.checked ? "true" : "")}
                                                color="#ffffff21"
                                                styles={{
                                                    input: { background: "none" }
                                                }}
                                                label={<Paragraph className="!tw-mt-[-5.9px]">
                                                    I agreed with the event terms and conditions  and privacy policy
                                                </Paragraph>}
                                            />
                                        </div>
                                    </div>

                                    <Button disabled={isSubmitting} type="submit" className="tw-w-full">
                                        {isSubmitting ? "Submitting..." : "Register Now"}
                                    </Button>
                                </Form>}
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
    </div>);
}

export default Register;