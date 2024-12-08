import { useContext } from "react"
import { IsModalOnContext, ModalIdContext } from "../App"

function FacultySubjectPage({ navBtn }) {

    const[isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const handleSubjectClick = () => {
        setIsModalOn(i => true)
        setModalId(i=> 3)
    }

    return(
        <div className={((navBtn == 2 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-1">
                <span className="text-2xl font-semibold">My Subjects</span>
            </div>
            <div className="w-full h-[35rem] overflow-auto scrollbar-none">
                <div onClick={() => handleSubjectClick()} className="w-full bg-white mt-5 p-5 rounded-md flex shadow cursor-pointer">
                    <span className="text-xl">ITF-101 188888</span>
                </div>
                <div onClick={() => handleSubjectClick()} className="w-full bg-white mt-5 p-5 rounded-md flex shadow cursor-pointer">
                    <span className="text-xl">ITF-101 188888</span>
                </div>
                <div onClick={() => handleSubjectClick()} className="w-full bg-white mt-5 p-5 rounded-md flex shadow cursor-pointer">
                    <span className="text-xl">ITF-101 188888</span>
                </div>
                <div onClick={() => handleSubjectClick()} className="w-full bg-white mt-5 p-5 rounded-md flex shadow cursor-pointer">
                    <span className="text-xl">ITF-101 188888</span>
                </div>
            </div>
        </div>
    )
}

export default FacultySubjectPage