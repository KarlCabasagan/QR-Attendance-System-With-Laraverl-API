import { useState } from "react"
import LoginForm from "./components/LoginForm"
import RegistrationForm from "./components/RegistrationForm"

function Authentication({ isLoggedIn }) {
    
    const [isLoginPage, setIsLoginPage] = useState(true)

    return (
        <div className={(isLoggedIn ? "hidden" : "flex") + " w-full h-full flex-col items-center"}>
            <div className="h-1/3 w-10/12 flex items-center">
                <img className="w-full" src="/logo-full.png" alt="" />
            </div>
            <div className="h-2/3 w-11/12 flex items-center justify-center flex-col">
                <LoginForm isLoginPage={isLoginPage} />
                <RegistrationForm isLoginPage={isLoginPage} />
                <div className="w-10/12 mt-12 border-t-[1px] border-black flex items-center justify-center relative pb-20">
                    <div className="bg-[#E5E4E2] absolute top-[-1rem]">
                        <span className="p-3 text-lg text-gray">or</span>
                    </div>
                    <span onClick={() => setIsLoginPage(i => !i)} className="m-4 text-lg text-[#9747FF] cursor-pointer">Create an account</span>
                </div>
            </div>
        </div>
    )
}

export default Authentication