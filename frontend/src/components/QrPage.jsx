import { useContext } from "react"
import QRCode from "react-qr-code"
import { IsModalOnContext, ModalIdContext } from "../App"

function QrPage({ navBtn, currentSubject }) {

    const[isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const handleClick = () => {
        setIsModalOn(i => true)
        setModalId(i=> 1)
    }

    return (
        <div className={((navBtn == 1 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-3">
                <span className="text-2xl font-semibold">QR Code</span>
            </div>
            <div className="w-full py-3 bg-white rounded-xl shadow flex justify-center items-center">
                <QRCode value={currentSubject?.enrollments[0].qr_code ?? 'No Current Class'} style={{ height: "95%", width: "95%" }} />
            </div>
            <div onClick={() => handleClick()} className="w-full bg-white mt-5 p-5 rounded-md flex justify-between shadow cursor-pointer">
                <span className="text-xl">{`${currentSubject?.name ?? 'No classes currently scheduled.'} ${currentSubject?.code ?? ''}`}</span>
                <span className="text-xl text-gray">{currentSubject?.schedules[0].time.slice(0,-3) ?? ''}</span>
            </div>
        </div>
    )
}

export default QrPage