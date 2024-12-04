
function ProfilePage({ navBtn }) {
    return (
        <div className={((navBtn == 3 ? "flex" : "hidden")) +" w-full flex-col items-center"}>
            <div className="mb-1">
                <span className="text-2xl font-semibold">Personal Information</span>
            </div>
            <div className="w-full bg-white flex flex-col items-center mt-3 pb-10">
                <div className="w-full flex flex-col items-center relative mt-3">
                    <div className="w-11/12 p-4 border-b-2 border-lightgray border-opacity-75 flex justify-center">
                        <span className="text-xl">John Karl Harley Cabasagan</span>
                    </div>
                    <div className="px-2 absolute bg-white bottom-[-0.50rem]">
                        <span className="text-gray">Full Name</span>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center relative mt-3">
                    <div className="w-11/12 p-4 border-b-2 border-lightgray border-opacity-75 flex justify-center">
                        <span className="text-xl">karlcabasagan.202200008@gmail.com</span>
                    </div>
                    <div className="px-2 absolute bg-white bottom-[-0.50rem]">
                        <span className="text-gray">Email Address</span>
                    </div>
                </div>
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
                <div className="w-full flex justify-center mt-12">
                    <button className="text-white text-lg bg-purple p-5 px-8 rounded-lg">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage