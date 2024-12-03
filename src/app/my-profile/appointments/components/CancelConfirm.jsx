"use client";

export default function CancelConfirm({ cancelCancelHandler, confimCancelHandler }) {
    return (
        <div className="w-[276px] bg-white shadow rounded-[15px] p-4 relative flex flex-col items-center justify-center">
            <div className="w-full h-[42px] text-center">
                <span className="font-sans font-normal">You confirmed</span>
                <span className="font-sans font-semibold"> canceling </span>
                <span className="font-sans font-normal">your video session with</span>
                <span className="font-sans font-semibold"> Lucas on Nov 16, 2024, at 9:40 AM.</span>
            </div>
            <div className="flex justify-evenly w-full mt-10">
                <div className="pl-4 pr-5 py-1 justify-center items-center gap-3 inline-flex bg-white border border-primaryBlue rounded-lg">
                    <button onClick={cancelCancelHandler} className="text-center text-[#00a9ff] text-normal font-semibold font-['Open Sans']">Back</button>
                </div>
                <div className="pl-4 pr-5 py-1 justify-center items-center gap-3 inline-flex bg-[#00A9FF] rounded-lg">
                    <button onClick={confimCancelHandler} className="text-center text-white text-normal font-semibold font-['Open Sans']">Yes</button>
                </div>
            </div>
        </div>
    );
}

