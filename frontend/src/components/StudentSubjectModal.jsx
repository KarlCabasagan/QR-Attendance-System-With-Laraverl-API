
function StudentSubjectModal({ modalId}) {
    return (
        <div className={((modalId == 2)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
            <div className="w-11/12 h-2/6 max-h-full bg-white rounded-lg flex flex-col items-center justify-center z-50">
                <div className="w-11/12 h-5/6 flex flex-col justify-start">
                    <div className="w-full h-1/3 px-1 flex justify-between items-center border-b-2 border-lightgray">
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Subject</span>
                            <span className="text-lg">IPT 101</span>
                        </div>
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Code</span>
                            <span className="text-lg">52300</span>
                        </div>
                    </div>
                    <div className="w-full h-1/3 px-1 flex justify-between items-center border-b-2 border-lightgray">
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Friday</span>
                            <span className="text-lg">1:30PM - 4:30PM</span>
                        </div>
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Saturday</span>
                            <span className="text-lg">7:30AM - 9:30PM</span>
                        </div>
                    </div>
                    <div className="w-full h-1/3 px-1 flex justify-between items-center">
                        <div className="flex flex-col justify-start grow">
                            <span className="font-light mb-1">Instructor</span>
                            <span className="text-lg">Ryan Balisi</span>
                        </div>
                        <div className="flex flex-col items-end grow">
                            <span className="font-light mb-1">Email</span>
                            <span className="text-lg">ryanbalisi@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSubjectModal