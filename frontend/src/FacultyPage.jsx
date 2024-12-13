import FacultySubjectPage from "./components/FacultySubjectPage"
import ProfilePage from "./components/ProfilePage"
import QrScanner from "./components/QrScanner"

function FacultyPage({ navBtn, userRole, user }) {
    return (
        <>
            <QrScanner navBtn={navBtn} user={user} />
            <FacultySubjectPage navBtn={navBtn} user={user} />
            <ProfilePage navBtn={navBtn} userRole={userRole} user={user} />
        </>
    )
}

export default FacultyPage