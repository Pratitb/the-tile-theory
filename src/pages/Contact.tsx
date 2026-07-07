import { MdMarkEmailUnread } from "react-icons/md"
import Banner from "../components/banner"
import { FaPhoneAlt } from "react-icons/fa"
import Input from "../components/Input"
import Textarea from "../components/Textarea"
import Button from "../components/button"
import Tabs from "../components/tabs"
import { contactTabs, contDesc, contDesc2, formCategTabs, formIndoorPills, formOutdoorPills, formSlabPills, indoorThickness, kitchenThickness, outdoorThickness } from "../utils/data"
import { useTileStore } from "../store/useTileStore"
import { tabContVariants, tabVariants } from "../utils/types"
import { useRef } from "react"
import { FaLaptopCode } from "react-icons/fa6"
import ContactCard from "../components/contactCard"

const Contact = () => {
    const queryForm = useRef<HTMLFormElement | null>(null)
    const quotationForm = useRef(null)

    const { updateActiveForm, activeForm, updateFormTileLocation, formTileLocation, updateFormTileType, formTileType, updateFormTileThick, formTileThick } = useTileStore()
    const handleActiveForm = (desc: string) => {
        updateActiveForm(desc)
    }
    const handleFormCategType = (value: string) => {
        updateFormTileLocation(value)
    }
    const handleFormTileType = (value: string) => {
        updateFormTileType(value)
    }
    const handleFormTileThick = (value: string) => {
        updateFormTileThick(value)
    }

    return (
        <>
            <Banner text1="We would love to hear from you." />
            <div className="flex flex-col md:flex-row gap-4">
                {/* LEFT SIDE **************************/}
                <div className="flex flex-col w-full md:flex-1 min-w-0">
                    <div className="flex flex-col gap-4 text-secondaryText font-semibold mb-6">
                        <p className="">{contDesc}</p>
                        <p className="">{contDesc2}</p>
                    </div>
                    <Tabs tabs={contactTabs} getTabFn={handleActiveForm} activeTab={activeForm} tabVari={tabVariants?.primary} tabContVari={tabContVariants?.primary} />
                    {/* FORMS */}
                    <div className="mt-6">

                        {activeForm === 'query' && (
                            <form
                                ref={queryForm}
                                action="https://submit-form.com/CRLJM9yGG"
                                method="post"
                                className="flex flex-col gap-4 rounded-lg bg-card px-4 py-8"
                            >
                                <p className="text-themeNavy text-2xl capitalize font-semibold">query form</p>

                                <Input inpId="fullName" inpName="name" getLabel="full name" toggleAutoComp="off" />
                                <Input inpId="email" inpName="email" getLabel="email" toggleAutoComp="off" />
                                <Input inpId="contact" inpName="contact" getLabel="contact number" inpType="number" toggleAutoComp="off" />
                                <Textarea areaType="message" textAreaName="message" />


                                {/* Trigger the form reference programmatically from your <div> button wrapper */}
                                <Button
                                    btnType="submit"
                                    btnName="submit query form"
                                    getActionFn={() => queryForm.current && queryForm.current.requestSubmit()}
                                />
                            </form>
                        )}


                        {activeForm == 'quotation' && <form ref={quotationForm} action='https://submit-form.com/141Decj1m' method="post" className="flex flex-col gap-4 rounded-lg bg-card px-4 py-8">
                            <p className="text-themeNavy text-2xl capitalize font-semibold">quotation form</p>
                            <Input inpId="fullName" inpName="Name" getLabel="full name" toggleAutoComp="off" />
                            <Input inpId="email" inpName="Email" getLabel="email" toggleAutoComp="off" />
                            <Input inpId="contact" inpName="Contact" getLabel="contact number" inpType="number" toggleAutoComp="off" />

                            {/* hidden for tile data */}
                            <input type="hidden" name="Tile Location" value={formTileLocation || ''} />
                            <input type="hidden" name="Tile Type" value={formTileType || ''} />
                            <input type="hidden" name="Tile Thickness" value={formTileThick || ''} />

                            <Tabs tabs={formCategTabs} getTabFn={handleFormCategType} activeTab={formTileLocation} tabVari={tabVariants?.secondary} tabContVari={tabContVariants?.secondary} label="location of tile" />
                            <Tabs tabs={formTileLocation == 'indoor' ? formIndoorPills : formTileLocation == 'outdoor' ? formOutdoorPills : formSlabPills} getTabFn={handleFormTileType} activeTab={formTileType} tabVari={tabVariants?.secondary} tabContVari={tabContVariants?.secondary} label="tile type" />
                            <Tabs tabs={formTileLocation == 'indoor' ? indoorThickness : formTileLocation == 'outdoor' ? outdoorThickness : kitchenThickness} getTabFn={handleFormTileThick} activeTab={formTileThick} tabVari={tabVariants?.secondary} tabContVari={tabContVariants?.secondary} label="tile thickness" />
                            <Input inpId="length" inpName="Tile Length" getLabel="approx quantity (sq.meters)" inpType="number" toggleAutoComp="off" />
                            <Textarea areaType="message" textAreaName="Quotation Message" />
                            <Button btnType="submit" btnName="submit quotation form" getActionFn={() => queryForm.current && queryForm.current.requestSubmit()} />
                        </form>}
                    </div>
                </div>
                {/* RIGHT SIDE ************************/}
                <div className="flex flex-col md:flex-1 gap-3">
                    <img src="logo.png" className="hidden md:flex rounded-lg" alt="" />
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-themeNavy whitespace-nowrap">
                        {/* CARD *************************/}
                        <ContactCard icon={MdMarkEmailUnread} head="email" type="mail" value="thetiletheory@outlook.com" />
                        <ContactCard icon={FaPhoneAlt} head="phone" type="tel" value="+61 448 312 513" />
                        <ContactCard icon={FaLaptopCode} head="developed by:" type="link" value="https://pratitcodes.com" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact