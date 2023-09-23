import NavBar from "../../components/Navbar";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Hero from "./components/Hero";
import IntroductionToGetlinked from "./components/IntroductionToGetlinked";
import PartnersAndSponsors from "./components/PartnersAndSponsors";
import PrizesAndRewards from "./components/PizesAndRewards";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Timeline from "./components/Timeline";

const Landing = () => {
    return (<div className="tw-overflow-x-hidden">
        <NavBar />
        <Hero />
        <IntroductionToGetlinked />
        <FrequentlyAskedQuestions />
        <Timeline />
        <PrizesAndRewards />
        <PartnersAndSponsors />
        <PrivacyPolicy />
        <Footer />
    </div>);
}

export default Landing;