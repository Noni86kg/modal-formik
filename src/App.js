import Button from "./components/button/Button";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { addModal } from "./redux/actions/modalActions";
import Form from "./components/form/Form";

function App() {
  const dispatch = useDispatch();
  const openModal = (e) => {
    const { name } = e.target;
    switch (name) {
      case "form":
        dispatch(addModal(<Form />));
        break;
      case "text":
        return <div>ab</div>;
        break;
      case "primaryText":
        return <div>ac</div>;
        break;
      case "succesText":
        return <div>as</div>;
        break;
      case "errorText":
        return <div>ae</div>;
        break;
      case "warningText":
        return <div>aq</div>;
        break;
    }
  };

  return (
    <main className="main">
      <div className="main--grid">
        <Button theme="primary" name={"form"} handleOnClick={openModal}>
          Form
        </Button>
        <Button theme="primary" name={"text"} handleOnClick={openModal}>
          Text
        </Button>
        <Button theme="primary" name={"primaryText"} handleOnClick={openModal}>
          Primary Text
        </Button>
        <Button theme="primary" name={"succesText"} handleOnClick={openModal}>
          Succes Text
        </Button>
        <Button theme="primary" name={"errorText"} handleOnClick={openModal}>
          Error Text
        </Button>
        <Button theme="primary" name={"warningText"} handleOnClick={openModal}>
          Warning Text
        </Button>
      </div>
    </main>
  );
}

export default App;
