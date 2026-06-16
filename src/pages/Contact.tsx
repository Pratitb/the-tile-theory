import { MdMarkEmailUnread } from "react-icons/md"
import Banner from "../components/banner"
import { FaPhoneAlt } from "react-icons/fa"
import Input from "../components/Input"
import Textarea from "../components/Textarea"
import Button from "../components/button"
import Tabs from "../components/tabs"
import { contactTabs } from "../utils/data"
import { useTileStore } from "../store/useTileStore"

const Contact = () => {
    const { updateActiveForm, activeForm } = useTileStore()
    const setActiveForm = (desc: string) => {
        updateActiveForm(desc)
    }
    return (
        <>
            <Banner text1="contact" />
            <div className="flex flex-col md:flex-row gap-4">
                {/* LEFT SIDE **************************/}
                <div className="flex-1">
                    <Tabs tabs={contactTabs} getTabFn={setActiveForm} activeTab={activeForm} />
                    {/* FORMS */}
                    <div className="mt-6">
                        <form className="flex flex-col gap-4 rounded-lg bg-card px-4 py-8">
                            <p className="text-themeNavy text-2xl capitalize font-semibold">query form</p>
                            <Input inpId="fullName" getLabel="full name" toggleAutoComp="off" />
                            <Input inpId="email" getLabel="email" />
                            <Textarea areaType="message" />
                            <Button btnName="submit query form" />
                        </form>
                    </div>
                </div>
                {/* CONTACT CARDS ************************/}
                <div className="flex flex-col flex-1 gap-3">
                    <img src="logo.png" className="hidden md:flex rounded-lg" alt="" />
                    <div className="flex flex-col gap-2 text-themeNavy">
                        {/* CARD *************************/}
                        <div className="flex gap-4 bg-card rounded-lg p-4">
                            <MdMarkEmailUnread className="text-themeGold text-xl" />
                            <div>
                                <p className="capitalize">email</p>
                                <a href="mailto:thetiletheory@outlook.com" className="font-semibold">thetiletheory@outlook.com</a>
                            </div>
                        </div>
                        {/* CARD **************************/}
                        <div className="flex gap-4 bg-card rounded-lg p-4">
                            <FaPhoneAlt className="text-themeGold text-xl" />
                            <div>
                                <p className="capitalize">phone</p>
                                <a href="tel:+91-9876543210" className="font-semibold">+91-9876543210</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact