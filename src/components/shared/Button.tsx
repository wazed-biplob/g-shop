const Button = ({ classNames, text }: any) => {
  return (
    <>
      <button
        className={`${classNames} border rounded-[64px] py-[4px] px-[28px] text-white bg-slate-600`}
      >
        <span className="font-[600px] text-[26px]">{text}</span>
      </button>
    </>
  );
};

export default Button;
