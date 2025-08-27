import Increase from "./components/Increase";
import UserList from "./components/UserList";
import LoginForm from "./components/LoginForm";
import ColorPicker from "./components/ColorPicker";
import InputText from "./components/InputText";
import InputRadio from "./components/InputRadio";
import TaskManager from "./components/TaskManager/TaskManager";

function App() {
  return (
    <>
     <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Increase/>
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <UserList />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <LoginForm />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <ColorPicker />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <InputText />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <InputRadio />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <TaskManager />
      </div>
    </>
  );
}

export default App;
