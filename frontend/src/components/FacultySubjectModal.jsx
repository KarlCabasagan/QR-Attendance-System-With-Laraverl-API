import { createContext, useState } from "react"
import SubjectStudentDetails from "./SubjectStudentDetails"

export const StudentDetailsContext = createContext(null)

function FacultySubjectModal({ modalId }) {

    const [studentDetails, setStudentDetails] = useState(null)

    const handleClick = () => {
        setStudentDetails(s => s = {name: 'John Karl Harley Cabasagan', course: 'BSIT', year: 3})
    }

    return (
        <StudentDetailsContext.Provider value={[studentDetails, setStudentDetails]}>
            <div className={((modalId == 3)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
                <SubjectStudentDetails studentDetails={studentDetails} />
                
                <div className="w-11/12 h-3/6 max-h-full bg-white rounded-lg flex flex-col items-center justify-center z-50">
                    <div className="w-11/12 h-5/6 flex flex-col justify-start items-center relative border-t-2 border-lightgray">
                        <div className="bg-white px-2 absolute top-[-1.10rem]">
                            <span className="text-xl font-light">ITF101 18888</span>
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
                            <div onClick={() => handleClick()} className="w-full h-14 shadow rounded-md flex justify-between mb-2 cursor-pointer"> 
                                <div className="w-9/12 flex justify-start items-center">
                                    <span className="p-2 text-lg truncate">John Karl Harley A. Cabasagan</span>
                                </div>
                                <div className="flex grow justify-center items-center">
                                    <span className="p-2 text-lg font-semibold">3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StudentDetailsContext.Provider>
    )
}

export default FacultySubjectModal