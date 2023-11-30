import React from 'react';

const SuccessAlert = () => {
    return (
        <section className={` bg-[#E6FEDB] border border-[#52C41A] rounded box-shadow flex gap-8 items-center p-4`}>
            <span className={`material-symbols-outlined rounded-full text-[60px] w-20 aspect-square flex items-center justify-center bg-[#84db59] text-[#52C41A] `} >
                check
            </span>
            <div>
                <h2 className={`text-gray-100 text-xl font-medium mb-1`}>Your booking is reserved successfully!</h2>
                <p className={`text-secondary-400 text-sm`} >We’ll send you a confirmation email with all detail information and including payment information within 24 hours.</p>
            </div>
        </section>
    );
};

export default SuccessAlert;