import Button from "./components/button/Button";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { addModal } from "./redux/actions/modalActions";
import Form from "./components/form/Form";
import Info from "./components/info/Info";
import { abstractText } from "./Utility";

function App() {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state);
  const numOfModals = modals.length;

  const openInfo = ({ title, theme, additionalButton, text }) => {
    return dispatch(
      addModal(
        <Info title={title} theme={theme} additionalButton={additionalButton}>
          {text ? text : abstractText}
        </Info>
      )
    );
  };

  const openModal = (e) => {
    const { name } = e.target;

    switch (name) {
      case "form":
        dispatch(addModal(<Form />));
        break;
      case "text":
        openInfo({ title: "Text" });
        break;
      case "primaryText":
        openInfo({ title: "Primary Text", theme: "primary" });
        break;
      case "succesText":
        openInfo({ title: "Succes Text", theme: "succes" });
        break;
      case "errorText":
        openInfo({ title: "Error Text", theme: "error" });
        break;
      case "warningText":
        openInfo({ title: "Warning Text", theme: "warning" });
        break;
      case "multiModal":
        openInfo({
          title: "Multi Modal",
          theme: "primary",
          additionalButton: {
            name: "primaryText",
            onClick: () => {
              openInfo({ title: "New Info", text: "Text of new info" });
            },
            children: "Open New Info",
          },
        });
        break;
    }
  };

  return (
    <main className="main">
      <h1 className="heading">
        Number of open {numOfModals < 2 ? "modal" : "modals"} {numOfModals}
      </h1>
      <div className="main--grid">
        <Button theme="primary" name={"form"} onClick={openModal}>
          Form
        </Button>
        <Button theme="primary" name={"primaryText"} onClick={openModal}>
          Primary Text
        </Button>
        <Button theme="primary" name={"succesText"} onClick={openModal}>
          Succes Text
        </Button>
        <Button theme="primary" name={"errorText"} onClick={openModal}>
          Error Text
        </Button>
        <Button theme="primary" name={"warningText"} onClick={openModal}>
          Warning Text
        </Button>
        <Button theme="primary" name={"multiModal"} onClick={openModal}>
          Multi Modal
        </Button>
      </div>
    </main>
  );
}

export default App;
