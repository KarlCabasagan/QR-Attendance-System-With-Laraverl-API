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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [userRole, setUserRole] = useState(2)

  const [selectedNavBtn, setSelectedNavBtn] = useState(1)
  
  //Modals States
  const [isModalOn, setIsModalOn] = useState(false)
  const [modalId, setModalId] = useState(1)

  return (
    <IsModalOnContext.Provider value={[isModalOn, setIsModalOn]}>
      <ModalIdContext.Provider value={[modalId, setModalId]}>
        <SelectedNavBtnContext.Provider value={[selectedNavBtn, setSelectedNavBtn]}>
          <div className="w-screen h-screen max-w-[460px] flex flex-col items-center md:max-w-[460px] bg-[#E5E4E2] relative">
            <ModalOverlay isModalOn={isModalOn} modalId={modalId} />
            <Authentication isLoggedIn={isLoggedIn} />
            <Dashboard userRole={userRole} navBtn={selectedNavBtn} />
          </div>
        </SelectedNavBtnContext.Provider>
      </ModalIdContext.Provider>
    </IsModalOnContext.Provider>
  )
}

export default App
