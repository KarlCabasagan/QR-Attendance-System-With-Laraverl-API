
function AttendanceLog({ attendance }) {

    const handleOnChange = () => {

    }

    return (
        <div className="w-full h-1/6 flex items-center">
            <div className="w-1/2 flex justify-between items-center">
                <span className="text-lg font-semibold">{attendance?.date}</span>
                <span className="grow text-lg font-thin truncate ml-4">{attendance?.time?.slice(0, -3)}</span>
            </div>
            <form className="w-6/12 flex">
                <label className="w-1/2 flex justify-center">
                    <input onChange={handleOnChange} checked={attendance?.time ? true : false} type="radio" name="attendance" className="peer sr-only" />
                    <div htmlFor="present1" className="w-4 h-4 mt-1 rounded-full bg-lightgray border-lightpurple border-2 peer-checked:bg-lightpurple"></div>
                </label>
                <label className="w-1/2 flex justify-center">
                    <input onChange={handleOnChange} checked={attendance?.time ? false : true} type="radio" name="attendance" className="peer sr-only" />
                    <div htmlFor="absent2" className="w-4 h-4 mt-1 rounded-full bg-lightgray border-lightpurple border-2 peer-checked:bg-lightpurple"></div>
                </label>
            </form>
        </div>
    )
}

export default AttendanceLog