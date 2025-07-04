import { useState } from "react";
import ButtonClick from "./components/ButtonClick";
import InputName from "./components/InputName";
import ToggleState from "./components/ToggleState";
import MouseHover from "./components/MouseHover";
import SubmitForm from "./components/SubmitForm";
import KeyPress from "./components/KeyPress";
import DoubleBlick from "./components/DoubleBlick";
import Select from "./components/Select";
import CheckBox from "./components/CheckBox";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const [state, setState] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("apple");
  const [lastKey, setLastKey] = useState("");
  const [lastDoubleClick, setLastDoubleClick] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [search, setSearch] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  const handleToggleState = () => {
    setState(!state);
  };
  const handleMouseLeave = () => {
    setIsHovered(true);
  };
  const handleMouseEnter = () => {
    setIsHovered(false);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKey(e.key);
  };

  const handleDoubleClick = () => {
    setLastDoubleClick("Double Clicked");
    setTimeout(() => {
      setLastDoubleClick("");
    }, 2000);
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const handleChangeCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`You submitted: ${valueSubmit}`);
    setValueSubmit("");
  };

  const handleChangeValueSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSubmit(e.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 h-screen ">
        <ButtonClick onClick={handleClick} count={count} />
        <InputName
          handleChangeInput={handleChangeInput}
          valueInput={valueInput}
        />
        <ToggleState handleToggleState={handleToggleState} state={state} />
        <MouseHover
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          isHovered={isHovered}
        />
        <SubmitForm
          handleSubmit={handleSubmit}
          valueSubmit={valueSubmit}
          handleChangeValueSubmit={handleChangeValueSubmit}
        />
        <KeyPress handleKeyDown={handleKeyDown} lastKey={lastKey} />
        <DoubleBlick
          handleDoubleClick={handleDoubleClick}
          lastDoubleClick={lastDoubleClick}
        />
        <Select handleChangeSelect={handleChangeSelect} selected={selected} />
        <CheckBox
          handleChangeCheckbox={handleChangeCheckbox}
          checkbox={checkbox}
        />
        <SearchFilter
          handleChangeSearch={handleChangeSearch}
          search={search}
          items={items}
        />
      </div>
    </>
  );
}

export default App;
