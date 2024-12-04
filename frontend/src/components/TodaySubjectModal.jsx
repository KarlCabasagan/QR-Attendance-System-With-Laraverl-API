
function TodaySubjectModal({ modalId }) {
    return (
        <div className={((modalId == 1)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
            <div className="w-11/12 h-auto bg-white flex flex-col items-center rounded-lg z-50">
                <div className='w-11/12 h-auto flex mt-4'>
                    <div className='grow-0 flex flex-col'>
                        <span className='font-light ml-1 mb-1'>Subject</span>
                        <span className='text-lg'>ITF-101 18888</span>
                    </div>
                    <div className='grow'></div>
                    <div className='grow-0 flex flex-col'>
                        <span className='font-light ml-1 mb-1'>Time</span>
                        <span className='text-lg'>7:30AM - 10-30AM</span>
                    </div>
                    </div>
                    <div className='w-11/12 h-full pb-4 mt-4 border-t-2 border-lightgray relative flex flex-col items-center'>
                    <div className='bg-white absolute px-2 top-[-0.90rem]'>
                        <span>Next Subjects</span>
                    </div>
                    <div className='w-full max-h-48 flex mt-8 overflow-auto scrollbar-none'>
                        <div className='grow-0 flex flex-col'>
                        <span className='font-light ml-1 mb-1'>Subject</span>
                        <span className='text-lg mb-4'>ITF-101 18888</span>
                        <span className='text-lg mb-4'>ITF-101 18888</span>
                        <span className='text-lg mb-4'>ITF-101 18888</span>
                        <span className='text-lg mb-4'>ITF-101 18888</span>
                        <span className='text-lg mb-4'>ITF-101 18888</span>
                        {/* <div className="py-1"></div> */}
                        </div>
                        <div className='grow'></div>
                        <div className='grow-0 flex flex-col over'>
                        <span className='font-light ml-1 mb-1'>Time</span>
                        <span className='text-lg mb-4'>7:30AM - 10-30AM</span>
                        <span className='text-lg mb-4'>7:30AM - 10-30AM</span>
                        <span className='text-lg mb-4'>7:30AM - 10-30AM</span>
                        <span className='text-lg mb-4'>7:30AM - 10-30AM</span>
                        <span className='text-lg mb-4'>7:30AM - 10-30AM</span>
                        {/* <div className="py-1"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaySubjectModal