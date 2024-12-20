import { useContext } from "react"
import { Scanner } from '@yudiel/react-qr-scanner';
import { IsModalOnContext, ModalIdContext } from "../App"

function QrScanner({ navBtn, currentSubject }) {

    const[isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const handleClick = () => {
        setIsModalOn(i => true)
        setModalId(i=> 1)
    }

    const recordAttendance = async () => {

    }

    const handleScan = (qrCode) => {
        const enrollments = currentSubject?.enrollments
        let qrFound = false

        enrollments?.map((enrollment, index) => {

            if(index < enrollments.length - 1) {
                if(qrCode === enrollment.qr_code) {
                    console.log('QR found')
                    qrFound = true
                    return
                }
                return
            }
            if(qrFound === false) {
                if(qrCode === enrollment.qr_code) {
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