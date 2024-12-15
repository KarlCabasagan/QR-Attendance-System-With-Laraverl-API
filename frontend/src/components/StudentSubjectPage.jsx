import { useEffect } from "react"
import Subject from "./Subject"

function StudentSubjectPage({ navBtn, userSubjects }) {

    return(
        <div className={((navBtn == 2 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-1">
                <span className="text-2xl font-semibold">My Subjects</span>
            </div>
            <div className="w-full h-[35rem] overflow-auto scrollbar-none">
                {userSubjects?.map(userSubject => (
                    <Subject key={userSubject.id} subject={userSubject} />
                ))}
            </div>
        </div>
    )
}

export default StudentSubjectPage