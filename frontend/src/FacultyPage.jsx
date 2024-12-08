import FacultySubjectPage from "./components/FacultySubjectPage"
import ProfilePage from "./components/ProfilePage"
import QrScanner from "./components/QrScanner"

function FacultyPage({ navBtn, userRole }) {
    return (
        <>
            <QrScanner navBtn={navBtn} />
            <FacultySubjectPage navBtn={navBtn} />
            <ProfilePage navBtn={navBtn} userRole={userRole} />
        </>
    )
}

export default FacultyPage