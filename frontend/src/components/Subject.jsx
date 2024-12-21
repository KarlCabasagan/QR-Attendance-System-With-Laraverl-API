import { useContext, useEffect } from "react"
import { IsModalOnContext, ModalIdContext, SelectedSubjectContext } from "../App"

function Subject({ subject }) {
    const [isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const [selectedSubject, setSelectedSubject] = useContext(SelectedSubjectContext)

    const handleClick = (subject) => {
        setIsModalOn(i => true)
        setModalId(i => 2)
        setSelectedSubject(s => subject)
    }

    return (
        <div onClick={() => handleClick(subject)} key={subject?.id} className="w-full bg-white mt-5 p-5 rounded-md flex justify-between shadow cursor-pointer">
            <span className="text-xl">{subject?.name} {subject?.code}</span>
            <div className="w-1/2 flex justify-end">
                {subject?.schedules?.map((schedule, index) => (
                    (index < subject.schedules.length - 1) ? <span key={schedule.id} className="truncate">{`${schedule.day.slice(0, 3)},`}&nbsp;</span> : <span key={schedule.id} className="truncate">{`${schedule.day.slice(0, 3)}`}</span>
                ))}
            </div>
        </div>
    )
}

export default Subject