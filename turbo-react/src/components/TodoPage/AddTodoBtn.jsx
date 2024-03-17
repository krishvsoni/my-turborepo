export default function AddTodoBtn(props) {
  return (
    <div className="todobtn fixed bottom-5 right-3 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-cta" onClick={props.handleClick}>
      <i className="fa-solid fa-plus fa-xl text-white"></i>
    </div>
  );
}
