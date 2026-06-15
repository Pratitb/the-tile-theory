import Banner from "../components/banner"
import OurStory from "../components/ourStory"
import Pillars from "../components/pillars"

const About = () => {
    return (
        <div>
            <Banner text1="about" />
            <OurStory head="our story" content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi, sint maiores tenetur quos illum voluptatem quibusdam. Aliquam officia ex molestias quisquam atque consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi, sint maiores tenetur quos illum voluptatem quibusdam. Aliquam officia ex molestias quisquam atque consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat corrupti temporibus eos consectetur vitae eligendi, sint maiores tenetur quos illum voluptatem quibusdam. Aliquam officia ex molestias quisquam atque consequuntur.'} />
            <Pillars />
        </div>
    )
}

export default About