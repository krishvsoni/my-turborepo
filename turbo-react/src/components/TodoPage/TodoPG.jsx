import { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodoBtn from './AddTodoBtn';

export default function TodoPG(props) {
  const [counter, setCounter] = useState({
    business: 0,
    personal: 0,
    shopping: 0,
  });

  const [width, setWidth] = useState({
    business: 0,
    personal: 0,
    shopping: 0,
  });

  useEffect(() => {
    const businessTasks = props.todo.filter((todo) => todo.category === 'Business');
    const personalTasks = props.todo.filter((todo) => todo.category === 'Personal');
    const shoppingTasks = props.todo.filter((todo) => todo.category === 'Shopping');

    setCounter({
      business: businessTasks.length,
      personal: personalTasks.length,
      shopping: shoppingTasks.length,
    });

    const totalTasks = props.todo.length;

    setWidth({
      business: (businessTasks.length / totalTasks) * 100 || 0,
      personal: (personalTasks.length / totalTasks) * 100 || 0,
      shopping: (shoppingTasks.length / totalTasks) * 100 || 0,
    });
  }, [props.todo]);

  return (
    <section className="todo--page h-full w-full bg-white py-[64px] px-[32px]">
      <header className="header--icons__section">
        <nav className="mb-8 flex items-center justify-between">
          <div className="burger cursor-pointer" onClick={props.handleNav}>
            <div className="line1 my-[3px] h-[3px] w-[25px] bg-cta"></div>
            <div className="line2 my-[3px] h-[3px] w-[25px] bg-cta"></div>
          </div>

          <div className="search-notification">
            <i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer px-6 text-cta"></i>
            <i className="fa-regular fa-bell fa-lg cursor-pointer text-cta"></i>
          </div>
        </nav>

        <h2 className="text-3xl font-bold text-cta md:text-6xl">What's Krish </h2>
        <p className="text-gray my-[32px] text-base font-medium uppercase text-cta">Categories</p>

        <section className="todo-categories--section">
          <div className="business--sect w-[180px] cursor-pointer rounded-md bg-cta py-[20px] px-[12px]">
            <p className="text-sm text-white">{counter.business} Tasks</p>
            <h4 className="py-2 text-xl font-medium text-white">Business</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div className="inner-div h-full rounded bg-text" style={{ width: `${width.business}%` }}></div>
            </div>
          </div>

          <div className="personal--sect w-[180px] cursor-pointer rounded-md bg-cta py-[20px] px-[12px]">
            <p className="text-sm text-white">{counter.personal} Tasks</p>
            <h4 className="py-2 text-xl font-medium text-white">Personal</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div className="inner-div h-full rounded bg-text" style={{ width: `${width.personal}%` }}></div>
            </div>
          </div>

          <div className="shopping--sect w-[180px] cursor-pointer rounded-md bg-cta py-[20px] px-[12px]">
            <p className="text-sm text-white">{counter.shopping} Tasks</p>
            <h4 className="py-2 text-sm font-medium text-white">Groceries / Shopping</h4>
            <div className="h-[4px] w-full rounded bg-[#d6d3d3]">
              <div className="inner-div h-full w-[40%] rounded bg-text" style={{ width: `${width.shopping}%` }}></div>
            </div>
          </div>
        </section>
      </header>

      <Todo todoItems={props.todoItems} handleDelete={props.handleDelete} />
      <AddTodoBtn handleClick={props.handleClick} />
    </section>
  );
}
