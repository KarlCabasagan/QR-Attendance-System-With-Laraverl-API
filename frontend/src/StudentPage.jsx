import ProfilePage from "./components/ProfilePage"
import QrPage from "./components/QrPage"
import StudentSubjectPage from "./components/StudentSubjectPage"

function StudentPage({ navBtn, userRole }) {
    return (
        <>
            <QrPage navBtn={navBtn} />
            <StudentSubjectPage navBtn={navBtn} />
            <ProfilePage navBtn={navBtn} userRole={userRole} />
        </>
    )
}

export default StudentPage