import { useState } from "react"

function LoginForm({ isLoginPage }) {
    const [visible, setVisible] = useState(false)

    return (
        <form action="#" className={(isLoginPage ? "flex" : "hidden" ) + " w-3/4 flex-col justify-center"}>
            <div className="w-full border-b-[3px] border-purple flex justify-center mb-7">
                <input type="email" name="email" placeholder="Email" className="w-[100%] bg-transparent p-2 pb-1 text-xl focus:outline-none"/>
            </div>
            <div className="w-full border-b-[3px] border-purple flex justify-center mb-7">
                <input type={visible ? "text" : "password"} name="password" placeholder="Password" className="grow bg-transparent p-2 pb-1 text-xl focus:outline-none"/>
                <span onClick={() => setVisible(v => !v)} className="flex items-center w-8">
                    {visible ? <img src="/icons/visibility-off-icon.svg" alt="Hello" className="mt-2" /> : <img src="/icons/visibility-icon.svg" alt="Hello" className="mt-2" />}
                </span>
            </div>
            <div className="w-full flex justify-center mt-3">
                <button className="w-2/3 bg-purple p-3 text-white text-xl rounded-lg">Login</button>
            </div>
        </form>
    )
}

export default LoginForm