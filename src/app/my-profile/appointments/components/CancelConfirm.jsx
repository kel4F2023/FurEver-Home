"use client";

export default function CancelConfirm({ cancelCancelHandler, confimCancelHandler }) {
    return (
        <div className="w-[276px] h-[130px] relative bg-white shadow">
            <div className="w-[209px] h-[42px] left-[33px] top-[16px] absolute text-center">
                <span className="paragraph">You confirmed</span>
                <span className="paragraph"> canceling </span>
                <span className="paragraph">your video session with</span>
                <span className="paragraph"> Lucas on Nov 16, 2024, at 9:40 AM.</span>
            </div>
            <div className="w-11 h-[21px] p-3 left-[67px] top-[92px] absolute bg-[#b1b1b1] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 inline-flex">
                <button onClick={cancelCancelHandler} className="paragraph text-[#2c2c2c] leading-none tracking-wide">Back</button>
            </div>
            <div className="w-11 h-[21px] p-3 left-[152px] top-[92px] absolute bg-[#2c2c2c] rounded-lg border border-[#2c2c2c] justify-center items-center gap-2 inline-flex">
                <button onClick={confimCancelHandler} className="paragraph text-neutral-100 leading-none tracking-wide">Yes</button>
            </div>
        </div>
    );
}