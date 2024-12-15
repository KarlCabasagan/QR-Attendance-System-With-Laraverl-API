import FacultySubjectPage from "./components/FacultySubjectPage"
import ProfilePage from "./components/ProfilePage"
import QrScanner from "./components/QrScanner"

function FacultyPage({ navBtn, userRole, user, userSubjects, subjectsToday }) {
    return (
        <>
            <QrScanner navBtn={navBtn} user={user} subjectsToday={subjectsToday} />
            <FacultySubjectPage navBtn={navBtn} user={user} userSubjects={userSubjects} />
            <ProfilePage navBtn={navBtn} userRole={userRole} user={user} />
        </>
    )
}

export default FacultyPage