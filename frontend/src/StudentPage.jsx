import ProfilePage from "./components/ProfilePage"
import QrPage from "./components/QrPage"
import StudentSubjectPage from "./components/StudentSubjectPage"

function StudentPage({ navBtn }) {
    return (
        <>
            <QrPage navBtn={navBtn} />
            <StudentSubjectPage navBtn={navBtn} />
            <ProfilePage navBtn={navBtn} />
        </>
    )
}

export default StudentPage