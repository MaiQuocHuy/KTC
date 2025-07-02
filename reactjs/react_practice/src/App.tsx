import "./App.css";
import ButtonIconGroup from "./pages/ButtonIconGroup";
import CardItemInfo from "./pages/CardIemInfo";
import CardItem from "./pages/CardItem";
import InputIcon from "./pages/InputIcon";
import TempatureItem from "./pages/TempatureItem";

function App() {
  return (
    <>
      <div>
        <ButtonIconGroup />
        <InputIcon />
        <CardItem />
        <CardItemInfo />
        <TempatureItem />
      </div>
    </>
  );
}

export default App;
