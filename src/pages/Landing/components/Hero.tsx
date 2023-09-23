import styled from "styled-components";
import ComponentContainer from "../../../components/ComponentContainer";
import lensFlare from "../../../assets/images/landingPage/hero/Purple-Lens-Flare.png"
import lensFlare2 from "../../../assets/images/landingPage/hero/Purple-Lens-Flare-2.png"
import heroBoy from "../../../assets/images/landingPage/hero/heroBoy.png"
import starBubble from "../../../assets/images/landingPage/hero/starBubble.png"
import metrix from "../../../assets/images/landingPage/hero/metrix.png"
import stroke1 from "../../../assets/images/landingPage/hero/stroke1.svg"
import star from "../../../assets/images/landingPage/hero/star.svg"
import chainEmoji from "../../../assets/images/landingPage/hero/chainEmoji.svg"
import fireEmoji from "../../../assets/images/landingPage/hero/fireEmoji.svg"
import bulb from "../../../assets/images/landingPage/hero/bulb.svg"
import Button from "../../../components/Button";
import Paragraph from "../../../components/Paragraph";
import { useEffect, useState } from "react";
import moment from "moment";

const Hero = () => {
    const [elapsedTime, setElapsedTime] = useState(moment.duration(0));

    useEffect(() => {
        const startTime = moment(); // Set your start time here

        const intervalId = setInterval(() => {
            const currentTime = moment();
            const elapsedDuration = moment.duration(currentTime.diff(startTime));
            setElapsedTime(elapsedDuration);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (<Container className="tw-w-full tw-pt-[100px]">
        <div className="tw-flex tw-justify-end md:tw-max-w-min tw-ml-auto tw-relative">
            <img src={star} className="tw-absolute -tw-left-[150%] -tw-bottom-10" alt="" />
            <h1 className="tw-text-white tw-text-sm md:tw-text-xl tw-font-bold tw-italic md:tw-whitespace-nowrap">Igniting a Revolution in HR Innovation</h1>
            <img src={stroke1} className="tw-absolute -tw-bottom-[10px] tw-w-[160px]" alt="" />
        </div>
        <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-mt-[58px] ">
            <div className="tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-mt-10">
                <div className="tw-flex md:tw-max-w-min tw-relative">
                    <h1 className="tw-whitespace-nowrap tw-font-extrabold !tw-font-clashDisplay tw-text-3xl lg:tw-text-6xl tw-text-white">getlinked Tech</h1>
                    <img src={bulb} className="tw-absolute tw-right-[19px] -tw-top-[40px] tw-w-[35px]" alt="" />
                </div>
                <div className="tw-flex tw-flex-col tw-items-center">
                    <div className="tw-flex !tw-items-center">
                        <h1 className="tw-font-extrabold tw-flex !tw-items-center !tw-font-clashDisplay tw-text-3xl lg:tw-text-6xl tw-text-white">Hackathon <span className="tw-text-violet">1.0</span> <img src={chainEmoji} alt="Chain" className="tw-w-[30px] tw-w-h-auto md:tw-w-[65px]" />
                            <img src={fireEmoji} alt="Fire" className="tw-w-[20px] tw-w-h-auto md:tw-w-[40px]" /></h1>
                    </div>
                    <Paragraph className="md:tw-w-[70%] tw-text-center md:tw-text-left tw-mt-3">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</Paragraph>
                    <Button className="!tw-mt-8">Register</Button>
                    <div className="tw-mt-16 tw-flex tw-space-x-4 tw-text-white">
                        <p className="tw-text-5xl tw-font-unicaOne">{elapsedTime.hours().toString().padStart(2, '0')}<small className="tw-text-xs tw-font-unicaOne">H</small></p>
                        <p className="tw-text-5xl tw-font-unicaOne">{elapsedTime.minutes().toString().padStart(2, '0')}<small className="tw-text-xs tw-font-unicaOne">M</small></p>
                        <p className="tw-text-5xl tw-font-unicaOne">{elapsedTime.seconds().toString().padStart(2, '0')}<small className="tw-text-xs tw-font-unicaOne">s</small></p>
                    </div>
                </div>
            </div>
            <div className="tw-w-1/2 tw-relative">
                <img src={heroBoy} style={{ mixBlendMode: "luminosity" }} className="tw-w-full" alt="" />
                <img src={starBubble} style={{ mixBlendMode: "hard-light" }} className="tw-w-[90%] tw-absolute tw-top-0 tw-right-[75px]" alt="" />
            </div>
        </div>
    </Container>);
}

const Container = styled(ComponentContainer)`
    background-image: url(${lensFlare}), url(${metrix}), url(${lensFlare2});
    background-repeat: no-repeat;
    background-blend-mode: hard-light, hard-light;
    background-size: contain, cover;
    background-position: left, center, right;
`

export default Hero;