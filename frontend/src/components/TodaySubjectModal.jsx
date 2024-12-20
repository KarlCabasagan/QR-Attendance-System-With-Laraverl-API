import { useEffect } from "react"

function TodaySubjectModal({ modalId, nextSubjects, currentSubject }) {
    
    const hasSubjectToday = () => {
        if (currentSubject) {
            return true
        } else {
            if (nextSubjects?.length) {
                return true
            } else {
                return false
            }
        }
    }

    // useEffect(() => {
    //     console.log(hasSubjectToday())
    // })

    return (
        <div className={((modalId == 1)? "flex" : "hidden") + " w-full h-full relative justify-center items-center"}>
            <div className="w-11/12 h-auto bg-white flex flex-col items-center rounded-lg z-50">
                <div className={(currentSubject?.name ? 'flex' : 'hidden') + ' w-11/12 h-auto py-6'}>
                    <div className='w-1/2 flex flex-col'>
                        <span className='font-light ml-1 mb-1'>Subject</span>
                        <span className='text-lg'>{`${currentSubject?.name ?? ''} ${currentSubject?.code ?? ''}`}</span>
                    </div>
                    <div className='w-1/2 flex flex-col items-end'>
                        <span className='font-light mr-1 mb-1'>Time</span>
                        <span className='text-lg'>{`${currentSubject?.schedules[0].time.slice(0,-3) ?? ''} - ${currentSubject?.schedules[0].end?.slice(0,-3) ?? ''}`}</span>
                    </div>
                </div>
                <div className={(nextSubjects?.length ? 'flex' : 'hidden') + ' w-11/12 h-full border-t-2 border-lightgray relative flex-col items-center'}>
                    <div className='bg-white absolute px-2 top-[-0.90rem] rounded shadow-sm'>
                        <span>Next Subjects</span>
                    </div>
                    <div className='w-full max-h-48 flex my-6 overflow-auto scrollbar-none'>
                        <div className='w-1/2 flex flex-col'>
                            <span className='font-light ml-1'>Subject</span>
                            {nextSubjects?.map(nextSubject => {
                                return <span key={nextSubject.id} className='text-lg mt-4'>{`${nextSubject.name} ${nextSubject.code}`}</span> 
                            })}
                        </div>
                        <div className='w-1/2 flex flex-col items-end'>
                            <span className='font-light mr-1'>Time</span>
                            {nextSubjects?.map(nextSubject => {
                               return <span key={nextSubject.id} className='text-lg mt-4'>{`${nextSubject.schedules[0].time.slice(0, -3)} - ${nextSubject.schedules[0].end?.slice(0, -3) ?? 'None'}`}</span>
                            })}
                        </div>
                    </div>
                </div>
                <div className={(hasSubjectToday() ? 'hidden' : 'flex') +" flex-col items-center justify-center p-6"}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#4d4d4d"><path d="M40-200v-590h66.67v396h342v-312.67H770q61.88 0 105.94 44.07Q920-618.54 920-556.67V-200h-66.67v-127.33H106.67V-200H40Zm233.33-246q-46.66 0-78.66-32t-32-78.67q0-46.66 32-78.66t78.66-32q46.67 0 78.67 32t32 78.66Q384-510 352-478t-78.67 32Zm242 52h338v-162.67q0-34.37-24.48-58.85Q804.38-640 770-640H515.33v246Zm-242-118.67q18.34 0 31.17-12.83 12.83-12.83 12.83-31.17 0-18.33-12.83-31.16-12.83-12.84-31.17-12.84-18.33 0-31.16 12.84-12.84 12.83-12.84 31.16 0 18.34 12.84 31.17 12.83 12.83 31.16 12.83Zm0-44Zm242-83.33v246-246Z"/></svg>
                    <span className="text-xl font-semibold text-gray text-center p-3">There are no classes scheduled for today</span>
                </div>
            </div>
        </div>
    )
}

export default TodaySubjectModal