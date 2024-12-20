
function SubjectSchedule({ schedule }) {
    return (
        <div className="flex flex-col justify-start grow">
            <span className="font-light mb-1">{schedule?.day}</span>
            <span className="text-lg font-semibold">{`${schedule?.time?.slice(0, -3)} - ${schedule?.end?.slice(0, -3)}`}</span>
        </div>
    )
}
export default SubjectSchedule