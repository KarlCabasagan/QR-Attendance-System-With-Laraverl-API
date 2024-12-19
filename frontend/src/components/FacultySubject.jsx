import { useContext } from "react"
import { IsModalOnContext, ModalIdContext, SelectedSubjectContext } from "../App"

function FacultySubject({ user, userSubject }) {

    const[isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const [selectedSubject, setSelectedSubject] = useContext(SelectedSubjectContext)

    const handleSubjectClick = () => {
        setSelectedSubject(s => userSubject)
        setIsModalOn(i => true)
        setModalId(i=> 3)

    }

    return (
        <div onClick={() => handleSubjectClick()} className="w-full bg-white mt-5 p-5 rounded-md flex shadow cursor-pointer">
            <span className="text-xl">{`${userSubject.name} ${userSubject.code}`}</span>
        </div>
    )
}

export default FacultySubject