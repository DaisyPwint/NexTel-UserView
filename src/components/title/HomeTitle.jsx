const HomeTitle = ({ text }) => {
  return (
    <div className="text-center relative">
      <p className="md:text-[48px] text-[30px] text-primary font-serif uppercase">{text}</p>
      <p className="md:text-[50px] text-[27px] leading-[60px] bottom-[-3px] text-secondary-100 font-serif absolute -z-10 font-outline-1 uppercase left-[10%] top-0 custom-shadow opacity-[30%]">{text}</p>
    </div>
  );
}

export default HomeTitle;
