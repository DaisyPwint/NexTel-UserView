
const HotelLocation = () => {
    return (
        <div className={`flex md:flex-row flex-col gap-8 items-center p-4 bg-secondary-100 shadow-lg border-[0.3px] border-secondary-200`}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d339.48697471506443!2d96.0855763478315!3d21.94709444916762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU2JzQ5LjYiTiA5NsKwMDUnMDcuNCJF!5e0!3m2!1sen!2smm!4v1699939523020!5m2!1sen!2smm"
                allowFullScreen loading="lazy" className={`w-full lg:max-w-[168px] md:h-[124px] rounded-sm `}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className={`font-medium text-left pl-0`}>
                <h3 className={`text-gray-100 text-xl mb-3`}>My Location</h3>
                <p className={`text-gray-50`}>78th Street & Sagaing Lan Kwal Street, Chan Mya Thar Si Township, Mandalay, Myanmar    </p>
            </div>
        </div>
    );
};

export default HotelLocation;
