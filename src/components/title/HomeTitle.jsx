const HomeTitle = ({ text }) => {
  return (
    <div className="text-center relative">
      <p className="text-[48px] text-primary font-serif uppercase">{text}</p>
      <p className="text-[60px] leading-[60px] bottom-[-3px] text-secondary-50 font-serif absolute -z-10 font-outline-1 uppercase">{text}</p>
    </div>
  );
}

export default HomeTitle;
