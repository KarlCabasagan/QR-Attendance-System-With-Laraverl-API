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

export const SelectedSubjectContext = createContext(null)

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false)
  const [userRole, setUserRole] = useState(user?.role ? user.role_id : null)

  const [nextSubjects, setNextSubjects] = useState(null)
  const [currentSubject, setCurrentSubject] = useState(null)
  const [userSubjects, setUserSubjects] = useState(null)

  const [selectedSubject, setSelectedSubject] = useState(null)

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

  const getUserSubjects = async () => {
    const res = await fetch(`/api/subjects/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    const data = await res.json()
    
    
      setCurrentSubject(c => data[0])
      setNextSubjects(s => data[1])
      setUserSubjects(u => data[2])
  }

  useEffect(() => {
    getUser()
  }, [token])

  useEffect(() => {
    setIsLoggedIn(user?.id ? true : false)
    setUserRole(user?.id ? user.role_id : null)

    getUserSubjects();
  }, [user])

  return (
    <SelectedSubjectContext.Provider value={[selectedSubject, setSelectedSubject]}>
      <UserContext.Provider value={[user, setUser]}>
        <TokenContext.Provider value={[token, setToken]}>
          <IsModalOnContext.Provider value={[isModalOn, setIsModalOn]}>
            <ModalIdContext.Provider value={[modalId, setModalId]}>
              <SelectedNavBtnContext.Provider value={[selectedNavBtn, setSelectedNavBtn]}>
                <div className="w-screen h-screen max-w-[460px] flex flex-col items-center md:max-w-[460px] bg-[#E5E4E2] relative">
                  <ModalOverlay isModalOn={isModalOn} modalId={modalId} user={user} nextSubjects={nextSubjects} currentSubject={currentSubject} subject={selectedSubject} />
                  <Authentication isLoggedIn={isLoggedIn} />
                  <Dashboard userRole={userRole} navBtn={selectedNavBtn} isLoggedIn={isLoggedIn} user={user} userSubjects={userSubjects} currentSubject={currentSubject} />
                </div>
              </SelectedNavBtnContext.Provider>
            </ModalIdContext.Provider>
          </IsModalOnContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </SelectedSubjectContext.Provider>
  )
}

export default App
