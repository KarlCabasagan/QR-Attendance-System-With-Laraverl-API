import { useContext, useState } from "react"
import { TokenContext } from "../App"

function LoginForm({ isLoginPage }) {

    const [token, setToken] = useContext(TokenContext)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(formData),
        })

        const data = await res.json()

        if(res.ok) {
            localStorage.setItem('token', data.token)
            setToken(t => data.token)

        } else {
            if(data.errors.email) {
                alert(data.errors.email)
                return
            }
            if(data.errors.password) {
                alert(data.errors.password)
                return
            }
        }

        setFormData(f => f = {...f, password: ''})
    }

    const [visible, setVisible] = useState(false)

    return (
        <form onSubmit={(e) => handleLogin(e)} className={(isLoginPage ? "flex" : "hidden" ) + " w-3/4 flex-col justify-center"}>
            <div className="w-full border-b-[3px] border-purple flex justify-center mb-7">
                <input onChange={(e) => {setFormData(f => f = {...f, email: e.target.value})}} value={formData.email} type="email" name="email" placeholder="Email" className="w-[100%] bg-transparent p-2 pb-1 text-xl focus:outline-none"/>
            </div>
            <div className="w-full border-b-[3px] border-purple flex justify-center mb-7">
                <input onChange={(e) => {setFormData(f => f = {...f, password: e.target.value})}} value={formData.password} type={visible ? "text" : "password"} name="password" placeholder="Password" className="grow bg-transparent p-2 pb-1 text-xl focus:outline-none"/>
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