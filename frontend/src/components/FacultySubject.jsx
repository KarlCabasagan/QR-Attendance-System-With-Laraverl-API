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
        <div onClick={() => handleSubjectClick()} className="w-full bg-white mt-5 p-5 rounded-md flex justify-between items-center shadow cursor-pointer">
            <span className="text-xl">{`${userSubject.name} ${userSubject.code}`}</span>
            <div className="w-1/2 flex justify-end">
                {userSubject?.schedules?.map((schedule, index) => (
                    (index < userSubject.schedules.length - 1) ? <span key={schedule.id} className="truncate">{`${schedule.day.slice(0, 3)},`}&nbsp;</span> : <span key={schedule.id} className="truncate">{`${schedule.day.slice(0, 3)}`}</span>
                ))}
            </div>
        </div>
    )
}

export default FacultySubject