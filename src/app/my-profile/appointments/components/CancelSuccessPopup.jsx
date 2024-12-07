"use client";

export default function CancelSuccessPopup({ closeCancelSuccessPopup }) {
    return (
        <div className="w-[276px] bg-white rounded-lg shadow-lg p-6 max-w-md">
            <p className="mb-6 font-sans font-semibold">You successfully canceled the appointment!</p>
            <div className="flex justify-end space-x-4">
                <button
                    onClick={closeCancelSuccessPopup}
                    className="w-20 px-4 py-1 bg-[#00A9FF] text-white text-normal font-regular font-['Open Sans'] rounded-lg justify-center items-center gap-2 flex shadow-lg"
                >
                    OK
                </button>
            </div>
        </div>
    );
}