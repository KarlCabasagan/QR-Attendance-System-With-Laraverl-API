import { useContext } from "react"
import { Scanner } from '@yudiel/react-qr-scanner';
import { CurrentSubjectContext, IsModalOnContext, ModalIdContext, NextSubjectsContext, TokenContext, UserSubjectsContext } from "../App"

function QrScanner({ navBtn, user, currentSubject }) {

    const [isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const [token, setToken] = useContext(TokenContext)

    const [nextSubjects, setNextSubjects] = useContext(NextSubjectsContext)
    const [currentSubjectContext, setCurrentSubjectContext] = useContext(CurrentSubjectContext)
    const [userSubjects, setUserSubjects] = useContext(UserSubjectsContext)

    const handleClick = () => {
        setIsModalOn(i => true)
        setModalId(i=> 1)
    }

    const getUserSubjects = async (id) => {
        if (!user?.id) {
          return
        }
        const res = await fetch(`/api/subjects/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        const data = await res.json()
        
        
          setCurrentSubjectContext(c => data[0])
          setNextSubjects(s => data[1])
          setUserSubjects(u => data[2])
      }

    const recordAttendance = async (id) => {
        const res = await fetch(`/api/attendance/${id}`, {
            method: 'put',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }

    const handleScan = async (qrCode) => {
        const enrollments = await currentSubject?.enrollments
        let qrFound = false
        console.log(`Scanned: ${qrCode} : ${enrollments[0].qr_code}`)
        enrollments?.map((enrollment, index) => {
            if(index < enrollments.length - 1) {
                if(qrCode === enrollment.qr_code) {
                    recordAttendance(enrollment.id)
                    console.log('QR found')
                    qrFound = true
                    getUserSubjects(user?.id)
                    return
                }
                return
            }
            if(qrFound === false) {
                if(qrCode === enrollment.qr_code) {
                    recordAttendance(enrollment.id)
                    getUserSubjects(user?.id)
                    console.log('QR found')
                    return
                } else {
                    alert('QR Code not Found')
                    return
                }
            } else {
                qrFound = false
                return
            }
        })
    }


    return (
        <div className={((navBtn == 1 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-3">
                <span className="text-2xl font-semibold">QR Code Scanner</span>
            </div>
            <div className="w-full bg-white rounded-xl shadow-md flex justify-center items-center">
                <Scanner onScan={(result) => handleScan(result[0].rawValue)} styles={{ video: {borderRadius: '0.75rem'}}} components={{finder: false}} />
            </div>
            <div onClick={() => handleClick()} className="w-full bg-white mt-5 p-5 rounded-md flex justify-between shadow cursor-pointer">
                <span className="text-xl">{`${currentSubject?.name ?? 'No classes currently scheduled.'} ${currentSubject?.code ?? ''}`}</span>
                <span className="text-xl text-gray">{currentSubject?.schedules[0].time.slice(0,-3) ?? ''}</span>
            </div>
        </div>
    )
}

export default QrScanner