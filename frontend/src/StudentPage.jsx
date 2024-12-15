import ProfilePage from "./components/ProfilePage"
import QrPage from "./components/QrPage"
import StudentSubjectPage from "./components/StudentSubjectPage"

function StudentPage({ navBtn, userRole, user, userSubjects, currentSubject }) {
    return (
        <>
            <QrPage navBtn={navBtn} currentSubject={currentSubject} />
            <StudentSubjectPage navBtn={navBtn} userSubjects={userSubjects} />
            <ProfilePage navBtn={navBtn} userRole={userRole} user={user} />
        </>
    )
}

export default StudentPage