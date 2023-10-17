import { useState } from "react";

function Todo(props) {
  const [show, setShow] = useState(1);
  const [popUp, setPopup] = useState(-1);
  function Delete() {
    setShow(-1);
  }
  function PopUp() {
    setPopup(1);
  }
  function ConfirmDel() {
    setPopup(-1);
    Delete();
  }
  function CancelDel() {
    setPopup(-1);
  }
  return (
    <>
      <div>
        {show === 1 && (
          <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
              <button className="btn" onClick={PopUp}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {popUp === 1 && (
          <div className="modal">
            <p> Verify </p>
            <button className="btn" onClick={CancelDel}>
              No
            </button>
            <button className="btn" onClick={ConfirmDel}>
              Yes
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
