import { useContext, useEffect, useState } from "react"
import Header from "./components/Header"
import { IsModalOnContext } from "./App"
import QrPage from "./components/QrPage"
import StudentSubjectPage from "./components/StudentSubjectPage"
import ProfilePage from "./components/ProfilePage"
import StudentPage from "./StudentPage"
import FacultyPage from "./FacultyPage"

function Dashboard({ userRole, navBtn }) {

    const[isModalOn, setIsModalOn] = useContext(IsModalOnContext)

    const [dayName, setDayName] = useState('')


    useEffect(() => {
        const today = new Date()
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayIndex = today.getDay()

        setDayName(dayNames[dayIndex])
    }, [])

    return (
        <div className="w-11/12 flex flex-col items-center relative">
            <Header dayName={dayName} navBtn={navBtn} />
            <div className="w-full flex flex-col items-center mt-64">
                {(userRole == 1 ) ? <StudentPage navBtn={navBtn} userRole={userRole} /> : <FacultyPage navBtn={navBtn} userRole={userRole} /> }
            </div>
        </div>
    )
}

export default Dashboard