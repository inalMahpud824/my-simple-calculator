export default function Button(props) {
  const { children, style = "", type='number' } = props;
  if(type === 'number') {
    return (
      <div className={`flex bg-slate-100 justify-center items-center rounded-md p-5 ${style}`}>{children}</div>
    )
  }
  else{
    return (
      <div
        className={`flex justify-center items-center rounded-md p-5 bg-[#FC980C] text-white ${style}`}
      >
        {children}
      </div>
    );
  }
}
