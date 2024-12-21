import { useContext } from "react"
import { EnrollmentDetailsContext } from "./FacultySubjectModal"

function Student({ student, enrollment }) {

    const [enrollmentDetails, setEnrollmentDetails] = useContext(EnrollmentDetailsContext)

    const handleClick = (enrollment) => {
        console.log('clicked')
        setEnrollmentDetails(s => enrollment)
    }

    return (
        <>
            <div onClick={() => handleClick(enrollment)} className="w-full h-14 shadow rounded-md flex justify-between mb-2 cursor-pointer"> 
                <div className="w-9/12 flex justify-start items-center">
                    <span className="p-2 text-lg truncate">{student?.name}</span>
                </div>
                <div className="flex grow justify-center items-center">
                    <span className="p-2 text-lg truncate">{student?.year}</span>
                </div>
            </div>
        </>
    )
}

export default Student