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

    const handleScan = (qrCode) => {
        const enrollments = currentSubject.enrollments

        enrollments.map(enrollment => {
            if(qrCode == enrollment.qr_code) {
                //make a function that sends the qrcode to the api
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