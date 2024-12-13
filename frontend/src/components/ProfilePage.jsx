import { useContext } from "react"
import CourseAndYear from "./CourseAndYear"
import { SelectedNavBtnContext, TokenContext, UserContext } from "../App"

function ProfilePage({ navBtn, userRole, user }) {

    const [token, setToken] = useContext(TokenContext)
    const [contextUser, setContextUser] = useContext(UserContext)

    const [selectedNavBtn, setSelectedNavBtn] = useContext(SelectedNavBtnContext)

    const handleLogout = async (e) => {
        e.preventDefault()
        
        const res = await fetch("/api/logout", {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        
        const data = await res.json()

        console.log(data)

        if(res.ok) {
            setToken(t => null)
            setContextUser(u => null)
            setSelectedNavBtn(s => 1)
            // console.log(selectedNavBtn)
            localStorage.removeItem('token')
        }
    }

    return (
        <div className={((navBtn == 3 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-1">
                <span className="text-2xl font-semibold">Personal Information</span>
            </div>
            <div className="w-full bg-white flex flex-col items-center mt-3 pb-10 rounded-lg">
                <div className="w-full flex flex-col items-center relative mt-3">
                    <div className="w-11/12 p-4 border-b-2 border-lightgray border-opacity-75 flex justify-center">
                        <span className="text-xl">{user?.name}</span>
                    </div>
                    <div className="px-2 absolute bg-white bottom-[-0.50rem]">
                        <span className="text-gray">Full Name</span>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center relative mt-3">
                    <div className="w-11/12 p-4 border-b-2 border-lightgray border-opacity-75 flex justify-center">
                        <span className="text-xl">{user?.email}</span>
                    </div>
                    <div className="px-2 absolute bg-white bottom-[-0.50rem]">
                        <span className="text-gray">Email Address</span>
                    </div>
                </div>
                <CourseAndYear userRole={userRole} user={user}/>
                <form onSubmit={(e) => handleLogout(e)} className="w-full flex justify-center mt-12">
                    <button className="text-white text-lg bg-purple p-4 px-8 rounded-lg">Logout</button>
                </form>
            </div>
        </div>
    )
}

export default ProfilePage