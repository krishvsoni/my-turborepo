export default function Todo(props) {
  const handleLabel = function (e) {
    e.preventDefault();
    let clickedEl = e.target.closest('label');

    if (!clickedEl) return;

    const sibling = clickedEl.firstElementChild;
    sibling.checked = !sibling.checked;
  };

  const todoItems = props.todoItems.map((todo, i) => {
    return (
      <li key={todo.id} id={todo.id} className="new relative rounded-2xl bg-cta">
        <label htmlFor={`todo--${i}`} className="flex w-full cursor-pointer items-center justify-start rounded-2xl p-5" onClick={handleLabel}>
          <input id={`todo--${i}`} type="checkbox" className="mr-4 border-2 border-white" />
          <p className="text-base text-white">{todo.todo}</p>
          <i className={`fa-solid fa-trash absolute right-3 text-text`} onClick={(e) => props.handleDelete(e, todo.id)}></i>
        </label>
      </li>
    );
  });

  return (
    <section className="todo--section">
      <h4 className="mt-8 mb-5 text-sm font-bold uppercase text-cta">Today's Task</h4>

      <ul className="todo--container flex flex-col-reverse gap-3">{todoItems}</ul>
    </section>
  );
}
