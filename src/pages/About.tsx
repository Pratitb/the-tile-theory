import Banner from "../components/banner"
import OurStory from "../components/ourStory"
import Pillars from "../components/pillars"
import { ourStory, ourStory2, ourStory3 } from "../utils/data"

const About = () => {
    return (
        <div>
            <Banner text1="about" />
            <OurStory head="our story" content={ourStory} content2={ourStory2} content3={ourStory3} />
            <Pillars />
        </div>
    )
}

export default About