import Banner from "../components/banner"
import OurStory from "../components/ourStory"
import Pillars from "../components/pillars"
import { aboutBanner, aboutBanner2, ourStory, ourStory2, ourStory3 } from "../utils/data"

const About = () => {
    return (
        <div>
            <Banner text2={aboutBanner} text3={aboutBanner2} />
            <OurStory head="our story" content={ourStory} content2={ourStory2} content3={ourStory3} />
            <Pillars />
        </div>
    )
}

export default About