import Paragraph from "../../../components/Paragraph";

const Timeline = () => {
    return (<div className="tw-bg-darkPurple tw-pb-40">
        <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide tw-text-center">TImeline</h1>
        <Paragraph className="tw-text-center tw-mb-[50px] lg:tw-w-[27%] tw-mx-auto">Here is the breakdown of the time we anticipate
            using for the upcoming event.</Paragraph>
        <div className="tw-h-auto tw-w-full tw-flex tw-justify-center tw-items-center">
            <div className="tw-max-w-7xl tw-mx-auto tw-w-full tw-grid tw-grid-cols-5 lg:tw-grid-cols-9 lg:tw-gap-y-0 tw-gap-y-5 -tw-gap-x-[100px] tw-px-2">
                {/* <!-- Row 1 --> */}
                <div className="tw-order-2 lg:tw-order-1 tw-col-span-4 tw-w-full lg:tw-h-[130px]">
                    <div className="tw-w-full tw-h-full lg:tw-pt-10 tw-pt-0 tw-p-2 lg:tw-pl-4 tw-flex tw-flex-col lg:tw-justify-center tw-justify-start">
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet lg:tw-text-right">Hackathon Announcement</h1>
                        <Paragraph className="lg:tw-text-right">
                            The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register
                        </Paragraph>
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-hidden tw-text-sm tw-text-violet tw-mt-auto tw-mb-[11px]">November 18, 2023</h1>
                    </div>
                </div>
                <div className="tw-order-1 lg:tw-order-2 tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center lg:tw-items-center tw-items-end">
                    <div className="lg:tw-h-full tw-min-h-[130px] tw-w-[3px] tw-bg-violet"></div>
                    <div className="tw-absolute lg:tw-w-[55px] tw-w-[50px] lg:tw-h-[55px] tw-h-[50px] tw-font-bold tw-rounded-full tw-bg-primary3 tw-z-10 tw-border tw-border-[8px] tw-border-darkPurple tw-text-white tw-flex tw-items-center tw-justify-center">
                        1
                    </div>
                </div>
                <div className="tw-order-0 lg:tw-order-3 tw-col-span-4 tw-hidden lg:tw-flex tw-items-center tw-w-full lg:tw-h-[130px]">
                    <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet">November 18, 2023</h1>
                </div>

                {/* <!-- Row 2 --> */}
                <div className="tw-order-0 lg:tw-order-4 tw-col-span-4 tw-hidden lg:tw-flex tw-items-center tw-justify-end tw-w-full lg:tw-h-[130px]">
                    <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet">November 18, 2023</h1>
                </div>
                <div className="tw-order-3 lg:tw-order-5 tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center lg:tw-items-center tw-items-end">
                    <div className="lg:tw-h-full tw-min-h-[130px] tw-w-[3px] tw-bg-violet"></div>
                    <div className="tw-absolute lg:tw-w-[55px] tw-w-[50px] lg:tw-h-[55px] tw-h-[50px] tw-font-bold tw-rounded-full tw-bg-primary3 tw-z-10 tw-border tw-border-[8px] tw-border-darkPurple tw-text-white tw-flex tw-items-center tw-justify-center">
                        2
                    </div>
                </div>
                <div className="tw-order-4 lg:tw-order-6 tw-col-span-4 tw-w-full lg:tw-h-[130px]">
                    <div className="tw-w-full tw-h-full lg:tw-pt-10 tw-pt-0 tw-p-2 lg:tw-pl-4 tw-flex tw-flex-col lg:tw-justify-center tw-justify-start">
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet lg:tw-text-left">Teams Registration begins</h1>
                        <Paragraph className="lg:tw-text-left">
                            Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to register
                        </Paragraph>
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-hidden tw-text-sm tw-text-violet tw-mt-auto tw-mb-[11px]">November 18, 2023</h1>
                    </div>
                </div>

                {/* <!-- Row 3 --> */}
                <div className="tw-order-6 lg:tw-order-7 tw-col-span-4 tw-w-full lg:tw-h-[130px]">
                    <div className="tw-w-full tw-h-full lg:tw-pt-10 tw-pt-0 tw-p-2 lg:tw-pl-4 tw-flex tw-flex-col lg:tw-justify-center tw-justify-start">
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet lg:tw-text-right">Teams Registration ends</h1>
                        <Paragraph className="lg:tw-text-right">
                            Interested Participants are no longer Allowed to
                            register
                        </Paragraph>
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-hidden tw-text-sm tw-text-violet tw-mt-auto tw-mb-[11px]">November 18, 2023</h1>
                    </div>
                </div>
                <div className="tw-order-5 lg:tw-order-8 tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center lg:tw-items-center tw-items-end">
                    <div className="lg:tw-h-full tw-min-h-[130px] tw-w-[3px] tw-bg-violet"></div>
                    <div className="tw-absolute lg:tw-w-[55px] tw-w-[50px] lg:tw-h-[55px] tw-h-[50px] tw-font-bold tw-rounded-full tw-bg-primary3 tw-z-10 tw-border tw-border-[8px] tw-border-darkPurple tw-text-white tw-flex tw-items-center tw-justify-center">
                        3
                    </div>
                </div>
                <div className="tw-order-0 lg:tw-order-9 tw-col-span-4 tw-hidden lg:tw-flex tw-items-center tw-w-full lg:tw-h-[130px]">
                    <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet">November 18, 2023</h1>
                </div>

                {/* <!-- Row 4 --> */}
                <div className="tw-order-0 lg:tw-order-10 tw-col-span-4 tw-hidden lg:tw-flex tw-items-center tw-justify-end tw-w-full lg:tw-h-[130px]">
                    <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet">November 18, 2023</h1>
                </div>
                <div className="tw-order-7 lg:tw-order-11 tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center lg:tw-items-center tw-items-end">
                    <div className="lg:tw-h-full tw-min-h-[130px] tw-w-[3px] tw-bg-violet"></div>
                    <div className="tw-absolute lg:tw-w-[55px] tw-w-[50px] lg:tw-h-[55px] tw-h-[50px] tw-font-bold tw-rounded-full tw-bg-primary3 tw-z-10 tw-border tw-border-[8px] tw-border-darkPurple tw-text-white tw-flex tw-items-center tw-justify-center">
                        4
                    </div>
                </div>
                <div className="tw-order-8 lg:tw-order-12 tw-col-span-4 tw-w-full lg:tw-h-[130px]">
                    <div className="tw-w-full tw-h-full lg:tw-pt-10 tw-pt-0 tw-p-2 lg:tw-pl-4 tw-flex tw-flex-col lg:tw-justify-center tw-justify-start">
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet lg:tw-text-left">Announcement of the accepted teams and ideas</h1>
                        <Paragraph className="lg:tw-text-left">
                            All teams whom idea has been accepted into getlinked tech
                            hackathon 1.0 2023 are formally announced
                        </Paragraph>
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-hidden tw-text-sm tw-text-violet tw-mt-auto tw-mb-[11px]">November 18, 2023</h1>
                    </div>
                </div>

                {/* <!-- Row 5 --> */}
                <div className="tw-order-10 lg:tw-order-13 tw-col-span-4 tw-w-full lg:tw-h-[130px]">
                    <div className="tw-w-full tw-h-full lg:tw-pt-10 tw-pt-0 tw-p-2 lg:tw-pl-4 tw-flex tw-flex-col lg:tw-justify-center tw-justify-start">
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet lg:tw-text-right">Getlinked Hackathon 1.0 Offically Begins</h1>
                        <Paragraph className="lg:tw-text-right">
                            Accepted teams can now proceed to build their
                            ground breaking skill driven solutions
                        </Paragraph>
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-hidden tw-text-sm tw-text-violet tw-mt-auto tw-mb-[11px]">November 18, 2023</h1>
                    </div>
                </div>
                <div className="tw-order-9 lg:tw-order-14 tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center lg:tw-items-center tw-items-end">
                    <div className="lg:tw-h-full tw-min-h-[130px] tw-w-[3px] tw-bg-violet"></div>
                    <div className="tw-absolute lg:tw-w-[55px] tw-w-[50px] lg:tw-h-[55px] tw-h-[50px] tw-font-bold tw-rounded-full tw-bg-primary3 tw-z-10 tw-border tw-border-[8px] tw-border-darkPurple tw-text-white tw-flex tw-items-center tw-justify-center">
                        5
                    </div>
                </div>
                <div className="tw-order-0 lg:tw-order-15 tw-col-span-4 tw-hidden lg:tw-flex tw-items-center tw-w-full lg:tw-h-[130px]">
                    <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet">November 18, 2023</h1>
                </div>

                {/* <!-- Row 6 --> */}
                <div className="tw-order-0 lg:tw-order-16 tw-col-span-4 tw-hidden lg:tw-flex tw-items-center tw-justify-end tw-w-full lg:tw-h-[130px]">
                    <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet">November 18, 2023</h1>
                </div>
                <div className="tw-order-11 lg:tw-order-17 tw-relative tw-col-span-1 tw-w-full tw-h-full tw-flex tw-justify-center lg:tw-items-center tw-items-end">
                    <div className="lg:tw-h-full tw-min-h-[130px] tw-w-[3px] tw-bg-violet"></div>
                    <div className="tw-absolute lg:tw-w-[55px] tw-w-[50px] lg:tw-h-[55px] tw-h-[50px] tw-font-bold tw-rounded-full tw-bg-primary3 tw-z-10 tw-border tw-border-[8px] tw-border-darkPurple tw-text-white tw-flex tw-items-center tw-justify-center">
                        6
                    </div>
                </div>
                <div className="tw-order-12 lg:tw-order-17 tw-col-span-4 tw-w-full lg:tw-h-[130px]">
                    <div className="tw-w-full tw-h-full lg:tw-pt-10 tw-pt-0 tw-p-2 lg:tw-pl-4 tw-flex tw-flex-col lg:tw-justify-center tw-justify-start">
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-text-xl tw-text-sm tw-text-violet lg:tw-text-left">Demo Day</h1>
                        <Paragraph className="lg:tw-text-left">
                            Teams get the opportunity to pitch their projects to judges.
                            The winner of the hackathon will also be announced on
                            this day
                        </Paragraph>
                        <h1 className="tw-font-bold tw-font-montserrat lg:tw-hidden tw-text-sm tw-text-violet tw-mt-auto tw-mb-[11px]">November 18, 2023</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Timeline;