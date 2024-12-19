
function AttendanceLog({ attendance }) {
    return (
        <div className="w-full h-1/6 flex items-center">
            <div className="grow">
                <span className="text-lg font-semibold">{attendance.date} 10:30</span>
            </div>
            <form className="w-6/12 flex">
                <label className="w-1/2 flex justify-center">
                    <input type="radio" name="attendance" className="peer sr-only" />
                    <div htmlFor="present1" className="w-4 h-4 mt-1 rounded-full bg-lightgray border-lightpurple border-2 peer-checked:bg-lightpurple"></div>
                </label>
                <label className="w-1/2 flex justify-center">
                    <input type="radio" name="attendance" className="peer sr-only" />
                    <div htmlFor="absent2" className="w-4 h-4 mt-1 rounded-full bg-lightgray border-lightpurple border-2 peer-checked:bg-lightpurple"></div>
                </label>
            </form>
        </div>
    )
}

export default AttendanceLog