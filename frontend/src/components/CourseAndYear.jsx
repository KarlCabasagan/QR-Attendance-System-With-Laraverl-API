
function CourseAndYear({ userRole }) {
    return (
        <div className={((userRole == 1) ? "block" : "hidden") + " w-full"}>
            <div className="w-full flex flex-col items-center relative mt-3">
                <div className="w-11/12 p-4 border-b-2 border-lightgray border-opacity-75 flex justify-center">
                    <span className="text-xl">BSIT</span>
                </div>
                <div className="px-2 absolute bg-white bottom-[-0.50rem]">
                    <span className="text-gray">Course</span>
                </div>
            </div>
            <div className="w-full flex flex-col items-center relative mt-3">
                <div className="w-11/12 p-4 border-b-2 border-lightgray border-opacity-75 flex justify-center">
                    <span className="text-xl">3rd Year</span>
                </div>
                <div className="px-2 absolute bg-white bottom-[-0.50rem]">
                    <span className="text-gray">Year Level</span>
                </div>
            </div>
        </div>
    )
}

export default CourseAndYear