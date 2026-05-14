import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectedBeast({ show, handleClose, beast }) {
  if (!beast) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={beast.image_url}
          alt={beast.title}
          style={{ width: '100%' }}
        />

        <p>{beast.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;