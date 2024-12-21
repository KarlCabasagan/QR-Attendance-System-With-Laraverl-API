import { useContext, useEffect, useState } from "react"
import { EnrollmentDetailsContext } from "./FacultySubjectModal"
import AttendanceLog from "./AttendanceLog"
import { CurrentSubjectContext, IsModalOnContext, ModalIdContext, NextSubjectsContext, TokenContext, UserSubjectsContext } from "../App"

function SubjectStudentDetails({ user, subject, enrollment }) {
    const [isModalOnContext, setIsModalOnContext] = useContext(IsModalOnContext)
    const [modalIdContext, setModalIdContext] = useContext(ModalIdContext)

    const [enrollmentDetailsContext, setEnrollmentDetailsContext] = useContext(EnrollmentDetailsContext)
    const [viewAttendance, setViewAttendance] = useState(false)

    const [token, setToken] = useContext(TokenContext)

    const [nextSubjects, setNextSubjects] = useContext(NextSubjectsContext)
    const [currentSubject, setCurrentSubject] = useContext(CurrentSubjectContext)
    const [userSubjects, setUserSubjects] = useContext(UserSubjectsContext)

    const [isPresent, setIsPresent] = useState((enrollment?.attendances[0].time ? true : false) ?? '')

    const handleOverlayClick = () => {
        setEnrollmentDetailsContext(s => null)
        setIsModalOnContext(i => false)
        setModalIdContext(i => false)
    }

    const getUserSubjects = async (id) => {
        if (!user?.id) {
          return
        }
        const res = await fetch(`/api/subjects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        const data = await res.json()
        
        
          setCurrentSubject(c => data[0])
          setNextSubjects(s => data[1])
          setUserSubjects(u => data[2])
      }

    useEffect(() => {
        enrollmentDetailsContext ?? getUserSubjects(subject?.id)
    }, [enrollmentDetailsContext])

    const RecordData = async (pa, id) => {
        const content = {
            status: pa
        }

        const res = await fetch(`/api/attendances/${id}`, {
            method: 'put',
            body: JSON.stringify(content),
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    const handleClick = (tf, id) => {
        if(tf) {
            setIsPresent(i => true)
            RecordData('present', id)
        } else {
            setIsPresent(i => false)
            RecordData('absent', id)
        }
    }

    useEffect(() => {
        // console.log(enrollment?.attendances[0].time)
        // setIsPresent(i => enrollment?.attendances[0].time ? true : false)
        // getUpdatedData(enrollment?.attendances[0].id)
        setIsPresent(enrollmentDetailsContext?.attendances[0].time ?? false)
    }, [enrollment])

    // useEffect(() => {
        
    // }, [isPresent])

    return (
        <div className={(enrollment ? "block": "hidden") + " w-full h-full absolute flex justify-center items-center"}>
            <div onClick={() => handleOverlayClick()} className="w-full h-full absolute z-[60] bg-gray opacity-40"></div>

            <div className="w-11/12 h-full rounded-lg flex flex-col justify-center items-center absolute transition-all">
                <div className={(viewAttendance ? "rounded-t-lg" : "rounded-lg") + " w-full h-2/6 z-[70] bg-white flex justify-center items-center"}>
                    <div className="w-11/12 h-5/6 flex flex-col">
                        <div className="w-full h-2/4 border-b-2 border-lightgray">
                            <div className="w-full h-1/2 flex flex-col justify-center relative">
                                <div className="">
                                    <span className="px-1 font-light">Name</span>
                                </div>
                                <span className="text-lg px-1 font-semibold truncate">{enrollment?.user?.name}</span>
                            </div>
                            <div className="w-full h-1/2 flex items-center">
                                <div className="grow">
                                    <div>
                                        <span className="px-1 font-light">Course</span>
                                    </div>
                                    <span className="text-lg px-1 font-semibold truncate">{enrollment?.user?.course}</span>
                                </div>
                                <div className="grow">
                                    <div>
                                        <span className="px-1 font-light">Year</span>
                                    </div>
                                    <span className="text-lg px-1 truncate font-semibold">{enrollment?.user?.year}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-2/4 flex items-center">
                            <div className="w-1/2 h-full flex flex-col justify-between">
                                <div className="grow flex items-center">
                                    <div>
                                        <div>
                                            <span className="px-1 font-light">Subject</span>
                                        </div>
                                        <span className="text-lg px-1 truncate font-semibold">{subject?.name}</span>
                                    </div>
                                </div>
                                <div className="grow flex items-center">
                                    <div>
                                        <div>
                                            <span className="px-1 font-light">Subject Code</span>
                                        </div>
                                        <span className="text-lg px-1 font-semibold truncate">{subject?.code}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 h-full flex flex-col">
                                <form className="w-full h-3/5 flex">
                                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center">
                                            <div>
                                                <label htmlFor="present" className="text-lg">Present</label>
                                            </div>
                                            <div>
                                                <div onClick={async () => handleClick(true, await enrollmentDetailsContext?.attendances[0].id)} className={(isPresent ? "bg-lightpurple" : "bg-white") + " w-4 h-4 border-2 mt-1 border-lightpurple rounded-full"}></div>
                                                {/* <input onChange={(e) => handleOnChange(e)} checked={enrollment?.attendances[0].time ? true : false} type="radio" value={true} name="status" className="peer sr-only" />
                                                <div className="w-4 h-4 mt-1 rounded-full bg-lightgray border-lightpurple border-2 peer-checked:bg-lightpurple"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center">
                                            <div>
                                                <label htmlFor="absent" className="text-lg">Absent</label>
                                            </div>
                                            <div>
                                                <div onClick={async () => handleClick(false, await enrollmentDetailsContext?.attendances[0].id)} className={(isPresent ? "bg-white" : "bg-lightpurple") + " w-4 h-4 border-2 mt-1 border-lightpurple rounded-full"}></div>
                                                {/* <input onChange={(e) => handleOnChange(e)} type="radio" value={false} name="status" className="peer sr-only" />
                                                <div className="w-4 h-4 mt-1 rounded-full bg-lightgray border-lightpurple border-2 peer-checked:bg-lightpurple"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="w-full h-2/5 flex justify-center items-center">
                                    <div onClick={() => setViewAttendance(v => !v)} className="cursor-pointer">
                                        <span className={(viewAttendance ? "underline text-purple" : "text-lightpurple") + " text-lg font-bold"}>Show Attendance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(viewAttendance ? "h-2/6 opacity-100" : "opacity-0 h-0") + " w-full z-[65] bg-lightgray flex justify-center items-center transition-all rounded-b-lg"}>
                    <div className="w-11/12 h-5/6 flex flex-col ">
                        <div className="w-full h-1/6 flex items-center border-b-2 border-gray">
                            <div className="grow">
                                <span className="text-lg">Date</span>
                            </div>
                            <div className="w-6/12 flex">
                                <div className="w-1/2 flex justify-center items-center">
                                    <span className="text-lg">Present</span>
                                </div>
                                <div className="w-1/2 flex justify-center items-center">
                                    <span className="text-lg">Absent</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full overflow-auto scrollbar-thin">
                            {enrollment?.attendances?.map((attendance, index) => {
                                if(index !== 0) {
                                    return (<AttendanceLog key={attendance.id} attendance={attendance} />)
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectStudentDetails