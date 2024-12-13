import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Authentication from './Authentication'
import Dashboard from './Dashboard'
import ModalOverlay from './ModalOverlay'

//Modal Contexts
export const IsModalOnContext = createContext(false)
export const ModalIdContext = createContext(1)

export const SelectedNavBtnContext = createContext(1)

export const TokenContext = createContext(null)
export const UserContext = createContext(null)

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false)
  const [userRole, setUserRole] = useState(user?.role ? user.role_id : null)

  const [selectedNavBtn, setSelectedNavBtn] = useState(1)
  
  //Modals States
  const [isModalOn, setIsModalOn] = useState(false)
  const [modalId, setModalId] = useState(1)

  const getUser = async () => {
    const res = await fetch('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const data = await res.json()
    
    setUser(u => data)
  }

  useEffect(() => {
    getUser()
  }, [token])

  useEffect(() => {
    setIsLoggedIn(user?.id ? true : false)
    setUserRole(user?.id ? user.role_id : null)
  }, [user])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <TokenContext.Provider value={[token, setToken]}>
        <IsModalOnContext.Provider value={[isModalOn, setIsModalOn]}>
          <ModalIdContext.Provider value={[modalId, setModalId]}>
            <SelectedNavBtnContext.Provider value={[selectedNavBtn, setSelectedNavBtn]}>
              <div className="w-screen h-screen max-w-[460px] flex flex-col items-center md:max-w-[460px] bg-[#E5E4E2] relative">
                <ModalOverlay isModalOn={isModalOn} modalId={modalId} />
                <Authentication isLoggedIn={isLoggedIn} />
                <Dashboard userRole={userRole} navBtn={selectedNavBtn} isLoggedIn={isLoggedIn} user={user} />
              </div>
            </SelectedNavBtnContext.Provider>
          </ModalIdContext.Provider>
        </IsModalOnContext.Provider>
      </TokenContext.Provider>
    </UserContext.Provider>
  )
}

export default App
