import { useContext } from "react"
import TodaySubjectModal from "./components/TodaySubjectModal"
import { IsModalOnContext, ModalIdContext } from "./App"
import StudentSubjectModal from "./components/StudentSubjectModal"
import FacultySubjectModal from "./components/FacultySubjectModal"

function ModalOverlay({ isModalOn, modalId, user, nextSubjects, currentSubject, subject }) {

    const [isModalOnContext, setIsModalOnContext] = useContext(IsModalOnContext)
    const [modalIdContext, setModalIdContext] = useContext(ModalIdContext)

    const handleClick = () => {
        setIsModalOnContext(i => false)
        setModalIdContext(i => false)
    }

    return (
        <div className={(isModalOn ? "block" : "hidden") + " w-full h-full absolute"}>
            <div onClick={() => handleClick()} className="w-full h-full absolute z-40 bg-gray opacity-30"></div>
            <TodaySubjectModal modalId={modalId} nextSubjects={nextSubjects} currentSubject={currentSubject} />
            <StudentSubjectModal modalId={modalId} subject={subject} />
            <FacultySubjectModal modalId={modalId} user={user} subject={subject} />
        </div>
    )
}

export default ModalOverlay