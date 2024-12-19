import { useEffect } from "react"
import SubjectSchedule from "./SubjectSchedule"

function StudentSubjectModal({ modalId, subject }) {

    return (
        <div className={((modalId == 2)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
            <div className="w-11/12 h-2/6 max-h-full bg-white rounded-lg flex flex-col items-center justify-center z-50">
                <div className="w-11/12 h-5/6 flex flex-col justify-start">
                    <div className="w-full h-1/3 px-1 flex justify-between items-center border-b-2 border-lightgray">
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Subject</span>
                            <span className="text-lg">{subject?.name}</span>
                        </div>
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Code</span>
                            <span className="text-lg">{subject?.code}</span>
                        </div>
                    </div>
                    <div className="w-full h-1/3 px-1 flex justify-between items-center border-b-2 border-lightgray">
                        {subject?.schedules?.map(schedule => (
                            <SubjectSchedule key={schedule.id} schedule={schedule}  />
                        ))}
                    </div>
                    <div className="w-full h-1/3 px-1 flex justify-between items-center overflow-x-auto scrollbar-thin">
                        <div className="w-1/2 flex flex-col justify-start grow">
                            <span className="font-light mb-1">Instructor</span>
                            <span className="w-11/12 text-lg truncate">{subject?.teacher?.name}</span>
                        </div>
                        <div className="w-1/2 flex flex-col items-start grow">
                            <span className="font-light mb-1">Email</span>
                            <span className="text-lg">{subject?.teacher?.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSubjectModal