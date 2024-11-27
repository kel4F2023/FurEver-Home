export default function MenuCard({ title, description, img, width = '380px', height = '140px', bgColor = '#ffffff', textColor = '#1e1e1e', descriptionColor = '#757575' }) {
    return (
        <div style={{ width, height, backgroundColor: `${bgColor}` }} className="p-6 rounded-[20px] shadow border border-[#d9d9d9] justify-start items-start gap-6 inline-flex">
            <div className="w-[100px] h-[100px] relative">
                {img && <img src={img} className="w-full h-full object-cover" />}
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    <div style={{ color: textColor }} className="self-stretch text-xl font-bold font-['Open Sans']">{title}</div>
                    <div style={{ color: descriptionColor }} className="self-stretch text-small font-semibold font-['Open Sans']">{description}</div>
                </div>
            </div>
        </div>
    );
}