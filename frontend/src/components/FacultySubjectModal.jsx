import { createContext, useEffect, useState } from "react"
import SubjectStudentDetails from "./SubjectStudentDetails"
import Student from "./Student"

export const EnrollmentDetailsContext = createContext(null)

function FacultySubjectModal({ modalId, user, subject }) {

    const [enrollmentDetails, setEnrollmentDetails] = useState(null)

    const handleClick = (enrollment) => {
        setEnrollmentDetails(s => enrollment)
    }

    // useEffect(() => {
    //     console.log(enrollmentDetails)
    // })

    return (
        <EnrollmentDetailsContext.Provider value={[enrollmentDetails, setEnrollmentDetails]}>
            <div className={((modalId == 3)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
                <SubjectStudentDetails user={user} subject={subject} enrollment={enrollmentDetails} />
                
                <div className="w-11/12 h-3/6 max-h-full bg-white rounded-lg flex flex-col items-center justify-center z-50">
                    <div className="w-11/12 h-5/6 flex flex-col justify-start items-center relative border-t-2 border-lightgray">
                        <div className="bg-white px-2 absolute top-[-1.10rem]">
                            <span className="text-xl font-light">{`${subject?.name} ${subject?.code}`}</span>
                        </div>
                        <div className="w-full flex mt-1">
                            <div className="w-1/2 flex justify-start">
                                <span className="ml-6">Name</span>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <span className="mr-6">Year</span>
                            </div>
                        </div>
                        <div className="w-full h-full mt-2 overflow-auto scrollbar-none">
                            {subject?.enrollments?.map(enrollment => (
                                <Student key={enrollment?.id} student={enrollment.user} enrollment={enrollment} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </EnrollmentDetailsContext.Provider>
    )
}

export default FacultySubjectModal