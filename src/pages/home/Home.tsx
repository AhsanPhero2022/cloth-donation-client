import Header from "../navbar/Header";
import ClothesPost from "./ClothesPost";
import { Gallery } from "./Gallery";
import Summary from "./homeAllSection/Summary";
import DonateNow from "./homeAllSection/extraSection/DonateNow";
import LetCreate from "./homeAllSection/extraSection/LetCreate";
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div>
            <Header/>
            <ClothesPost/>
            <Gallery/>
            <Testimonials/>
            <LetCreate/>
            <DonateNow/>
            <Summary/>
        </div>
    );
};

export default Home;