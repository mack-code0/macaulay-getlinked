import ComponentContainer from "../../../components/ComponentContainer";
import Paragraph from "../../../components/Paragraph";
import liberty1 from "../../../assets/images/landingPage/partners/LibertyPay.png"
import liberty2 from "../../../assets/images/landingPage/partners/LibertyWhite.png"
import winwise from "../../../assets/images/landingPage/partners/Winwise.png"
import wisper from "../../../assets/images/landingPage/partners/wisper.png"
import paybox from "../../../assets/images/landingPage/partners/Paybox.png"
import vizual from "../../../assets/images/landingPage/partners/Vizual Plus.png"

const PartnersAndSponsors = () => {
    return (
        <ComponentContainer className="tw-py-[90px]">
            <h1 className="tw-font-semibold tw-font-clashDisplay tw-text-white tw-text-2xl tw-tracking-wide tw-text-center">Partners and Sponsors</h1>
            <Paragraph className="tw-text-center tw-mb-[50px] lg:tw-w-[27%] tw-mx-auto">
                Getlinked Hackathon 1.0 is honored to have the
                following major companies as its partners and
                sponsors
            </Paragraph>
            <div className="tw-border tw-border-violet tw-p-10 md:tw-p-20 tw-rounded-lg">
                <div className="tw-flex">
                    <div className={`
                tw-h-[150px]
                tw-w-1/3 tw-relative
                `}>
                        <div className="tw-w-[80%] tw-h-full tw-border-b-[2px] tw-border-violet tw-mx-auto tw-flex tw-items-center">
                            <img src={liberty2} className="tw-object-scale-down tw-h-auto tw-w-full" alt="" />
                        </div>
                    </div>
                    <div className={`
                tw-h-[150px]
                tw-w-1/3 tw-relative
                after:tw-content-['*'] after:tw-h-[80%] after:tw-w-[2px] after:tw-bg-violet after:tw-absolute 
                after:tw-top-1/2 after:tw-transform after:-tw-translate-y-1/2 after:tw-right-0
                before:tw-content-['*'] before:tw-h-[80%] before:tw-w-[2px] before:tw-bg-violet before:tw-absolute 
                before:tw-top-1/2 before:tw-transform before:-tw-translate-y-1/2 before:tw-left-0 
                `}>
                        <div className="tw-w-[80%] tw-h-full tw-border-b-[2px] tw-border-violet tw-mx-auto tw-flex tw-items-center">
                            <img src={liberty1} className="tw-object-scale-down tw-h-auto tw-w-full" alt="" />
                        </div>
                    </div>
                    <div className={`
                tw-h-[150px]
                tw-w-1/3 tw-relative
                `}>
                        <div className="tw-w-[80%] tw-h-full tw-border-b-[2px] tw-border-violet tw-mx-auto tw-flex tw-items-center">
                            <img src={winwise} className="tw-object-scale-down tw-h-auto tw-w-full" alt="" />
                        </div>
                    </div>
                </div>
                <div className="tw-flex">
                    <div className={`
                tw-h-[150px]
                tw-w-1/3 tw-relative
                `}>
                        <div className="tw-w-[80%] tw-h-full tw-mx-auto tw-flex tw-items-center">
                            <img src={wisper} className="tw-object-scale-down tw-h-auto tw-w-full" alt="" />
                        </div>
                    </div>
                    <div className={`
                tw-h-[150px]
                tw-w-1/3 tw-relative
                after:tw-content-['*'] after:tw-h-[80%] after:tw-w-[2px] after:tw-bg-violet after:tw-absolute 
                after:tw-top-1/2 after:tw-transform after:-tw-translate-y-1/2 after:tw-right-0
                before:tw-content-['*'] before:tw-h-[80%] before:tw-w-[2px] before:tw-bg-violet before:tw-absolute 
                before:tw-top-1/2 before:tw-transform before:-tw-translate-y-1/2 before:tw-left-0 
                `}>
                        <div className="tw-w-[80%] tw-h-full tw-mx-auto tw-flex tw-items-center">
                            <img src={paybox} className="tw-object-scale-down tw-h-auto tw-w-full" alt="" />
                        </div>
                    </div>
                    <div className={`
                tw-h-[150px]
                tw-w-1/3 tw-relative
                `}>
                        <div className="tw-w-[80%] tw-h-full tw-mx-auto tw-flex tw-items-center">
                            <img src={vizual} className="tw-object-scale-down tw-h-auto tw-w-full" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </ComponentContainer>
    );
}

export default PartnersAndSponsors;