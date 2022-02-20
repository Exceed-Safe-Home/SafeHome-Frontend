import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./PopupAlert.css";

function PopUpAlert(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="alert-header">ATTENTION FIRE HAZARD DETECTED</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="font-pop">
          Don't worry! we've sent your registered address to the nearest fire
          station!
        </p>
        <p className="font-pop">
          Your registered address is as following: {props.details.house_no}
          {props.details.village_no} {props.details.lane} {props.details.road} {" "}
          {props.details.sub_district} {props.details.district} 
          {props.details.province}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpAlert;
