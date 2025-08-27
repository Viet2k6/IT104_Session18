import './TaskManager.css';

type ConfirmModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

function ConfirmModal({ message, onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>Xác nhận</button>
          <button className="cancel-btn" onClick={onCancel}>Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
