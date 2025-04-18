import React from 'react'

const JoinComunity = () => {
    return (
        <>
            <div className="bg-[#2563eb] py-20">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-center font-semibold text-white text-3xl">
                        Ready to join the community?
                    </h1>
                    <p className="text-center text-white text-sm">
                        Start connecting with developers today
                    </p>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="text-blue-600 bg-white px-6 py-2 font-semibold rounded-lg hover:shadow transition duration-300">
                    Create Free Account

                    </button>
                </div>
            </div>
        </>
    )
}

export default JoinComunity
