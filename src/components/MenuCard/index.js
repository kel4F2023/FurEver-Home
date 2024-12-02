export default function MenuCard({ title, description, img, bgColor = '#ffffff', textColor = '#1e1e1e', descriptionColor = '#757575' }) {
    return (
        <div 
            style={{ backgroundColor: `${bgColor}` }} 
            className="p-3 rounded-[20px] shadow border border-[#d9d9d9] flex justify-start items-center gap-6"
        >
            <div className="flex-none w-[120px] h-min-[100px] relative rounded-2xl overflow-hidden">
                {img && <img src={img} className="w-full h-full object-cover" />}
            </div>
            <div className="flex-grow flex-col justify-start items-start gap-4">
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div style={{ color: textColor }} className="text-xl font-semibold font-['Open Sans']">{title}</div>
                    <div style={{ color: descriptionColor }} className="text-small font-['Open Sans']">{description}</div>
                </div>
            </div>
        </div>
    );
}