
function TodaySubjectModal({ modalId, nextSubjects, currentSubject }) {
    return (
        <div className={((modalId == 1)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
            <div className="w-11/12 h-auto bg-white flex flex-col items-center rounded-lg z-50">
                <div className='w-11/12 h-auto flex mt-4'>
                    <div className='w-1/2 flex flex-col'>
                        <span className='font-light ml-1 mb-1'>Subject</span>
                        <span className='text-lg'>{`${currentSubject?.name ?? ''} ${currentSubject?.code ?? ''}`}</span>
                    </div>
                    <div className='w-1/2 flex flex-col items-end'>
                        <span className='font-light ml-1 mb-1'>Time</span>
                        <span className='text-lg'>{`${currentSubject?.schedules[0].time.slice(0,-3) ?? ''} - ${currentSubject?.schedules[0].end.slice(0,-3) ?? ''}`}</span>
                    </div>
                    </div>
                    <div className='w-11/12 h-full pb-4 mt-6 border-t-2 border-lightgray relative flex flex-col items-center'>
                    <div className='bg-white absolute px-2 top-[-0.90rem]'>
                        <span>Next Subjects</span>
                    </div>
                    <div className='w-full max-h-48 flex mt-8 overflow-auto scrollbar-none'>
                        <div className='w-1/2 flex flex-col'>
                            <span className='font-light ml-1 mb-1'>Subject</span>
                            {nextSubjects?.map(nextSubject => {
                                return <span key={nextSubject.id} className='text-lg mb-4'>{nextSubject.name}</span>
                            })}
                        </div>
                        <div className='w-1/2 flex flex-col items-end'>
                            <span className='font-light ml-1 mb-1'>Time</span>
                            {nextSubjects?.map(nextSubject => {
                               return <span key={nextSubject.id} className='text-lg mb-4'>{`${nextSubject.schedules[0].time.slice(0, -3)} - ${nextSubject.schedules[0].end.slice(0, -3)}`}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaySubjectModal