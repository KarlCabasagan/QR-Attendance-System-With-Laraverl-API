import { useContext, useEffect, useState } from "react"
import { SelectedNavBtnContext } from "../App"

function Header({ dayName, navBtn }) {

    const [selectedNavBtn, setSelectedNavBtn] = useContext(SelectedNavBtnContext)

    const handleClick = (navBtn) => {
        setSelectedNavBtn(s => navBtn)
    }

    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const today = new Date()
        const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        }

        const formattedDate = today.toLocaleDateString('en-US', options)

        setCurrentDate(formattedDate)
    }, [])

    return (
        <div className="w-full flex flex-col items-center absolute">
            <div className="w-full h-20 flex justify-between items-center overflow-auto">
                <div>
                    <span className="text-xl">{dayName}</span>
                </div>
                <div>
                    <span className="text-xl">{currentDate}</span>
                </div>
            </div>
            <div className="w-full flex justify-evenly mt-5">
                <div className="grow flex justify-center items-center">
                    <div onClick={() => handleClick(1)} className={((navBtn == 1) ? "bg-lightpurple w-10/12" : "bg-white w-9/12") + " transition-all rounded-lg flex justify-center items-center shadow-md cursor-pointer"}>
                        <svg className={((navBtn == 1) ? "fill-white" : "fill-black") + " w-full"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M520-139.23v-76.16h76.15v76.16H520Zm-76.15-76.16v-188.46H520v188.46h-76.15Zm300.76-127.69V-480h76.16v136.92h-76.16ZM668.46-480v-76.15h76.15V-480h-76.15Zm-453.07 76.15V-480h76.15v76.15h-76.15ZM139.23-480v-76.15h76.16V-480h-76.16ZM480-744.61v-76.16h76.15v76.16H480ZM186.92-640H320v-133.08H186.92V-640Zm-47.69 47.69v-228.46h228.46v228.46H139.23Zm47.69 405.39h136.16V-320H186.92v133.08Zm-47.69 47.69v-228.46h231.54v228.46H139.23ZM640-640h133.08v-133.08H640V-640Zm-47.69 47.69v-228.46h228.46v228.46H592.31Zm76.15 453.08v-127.7h-76.15v-76.15h152.3v127.69h76.16v76.16H668.46ZM520-403.85V-480h148.46v76.15H520Zm-152.31 0V-480h-76.15v-76.15H520V-480h-76.15v76.15h-76.16Zm36.16-188.46v-152.3H480v76.15h76.15v76.15h-152.3Zm-178.08-86.54v-55.38h55.38v55.38h-55.38Zm2.69 450.39v-55.39h55.39v55.39h-55.39Zm450.39-450.39v-55.38h55.38v55.38h-55.38Z"/></svg>
                    </div>
                </div>
                <div className="grow flex justify-center items-center">
                    <div onClick={() => handleClick(2)} className={((navBtn == 2) ? "bg-lightpurple w-10/12" : "bg-white w-9/12") + " transition-all rounded-lg flex justify-center items-center shadow-md cursor-pointer"}>
                        <svg className={((navBtn == 2) ? "fill-white" : "fill-black") + " w-full"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M293.08-597.69v-60H820v60H293.08Zm0 147.69v-60H820v60H293.08Zm0 147.69v-60H820v60H293.08ZM172.31-595.38q-13.73 0-23.02-9.4t-9.29-23.3q0-13.56 9.29-22.74 9.29-9.18 23.02-9.18t23.02 9.18q9.29 9.18 9.29 22.74 0 13.9-9.29 23.3t-23.02 9.4Zm0 147.3q-13.73 0-23.02-9.18Q140-466.43 140-480q0-14.31 9.29-23.5t23.02-9.19q13.73 0 23.02 9.19t9.29 23.5q0 13.57-9.29 22.74-9.29 9.18-23.02 9.18Zm0 148.08q-13.73 0-23.02-9.4T140-332.69q0-13.57 9.29-22.75t23.02-9.18q13.73 0 23.02 9.18t9.29 22.75q0 13.89-9.29 23.29-9.29 9.4-23.02 9.4Z"/></svg>
                    </div>
                </div>
                <div className="grow flex justify-center items-center">
                    <div onClick={() => handleClick(3)} className={((navBtn == 3) ? "bg-lightpurple w-10/12" : "bg-white w-9/12") + " transition-all rounded-lg flex justify-center items-center shadow-md cursor-pointer"}>
                        <svg className={((navBtn == 3) ? "fill-white" : "fill-black") + " w-full"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M480-492.31q-57.75 0-98.87-41.12Q340-574.56 340-632.31q0-57.75 41.13-98.87 41.12-41.13 98.87-41.13 57.75 0 98.87 41.13Q620-690.06 620-632.31q0 57.75-41.13 98.88-41.12 41.12-98.87 41.12ZM180-187.69v-88.93q0-29.38 15.96-54.42 15.96-25.04 42.66-38.5 59.3-29.07 119.65-43.61 60.35-14.54 121.73-14.54t121.73 14.54q60.35 14.54 119.65 43.61 26.7 13.46 42.66 38.5Q780-306 780-276.62v88.93H180Zm60-60h480v-28.93q0-12.15-7.04-22.5-7.04-10.34-19.11-16.88-51.7-25.46-105.42-38.58Q534.7-367.69 480-367.69q-54.7 0-108.43 13.11-53.72 13.12-105.42 38.58-12.07 6.54-19.11 16.88-7.04 10.35-7.04 22.5v28.93Zm240-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.62Z"/></svg>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Header