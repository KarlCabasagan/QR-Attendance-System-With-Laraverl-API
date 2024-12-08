import { useContext } from "react"
import { Scanner } from '@yudiel/react-qr-scanner';
import { IsModalOnContext, ModalIdContext } from "../App"

function QrScanner({ navBtn }) {

    const[isModalOn, setIsModalOn] = useContext(IsModalOnContext)
    const [modalId, setModalId] = useContext(ModalIdContext)

    const handleClick = () => {
        setIsModalOn(i => true)
        setModalId(i=> 1)
    }


    return (
        <div className={((navBtn == 1 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-3">
                <span className="text-2xl font-semibold">QR Code Scanner</span>
            </div>
            <div className="w-full bg-white rounded-xl shadow-md flex justify-center items-center">
                <Scanner onScan={(result) => console.log(result[0].rawValue)} styles={{ video: {borderRadius: '0.75rem'}}} components={{finder: false}} />
            </div>
            <div onClick={() => handleClick()} className="w-full bg-white mt-5 p-5 rounded-md flex justify-between shadow cursor-pointer">
                <span className="text-xl">ITF 101 188888</span>
                <span className="text-xl text-gray">7:30AM</span>
            </div>
        </div>
    )
}

export default QrScanner