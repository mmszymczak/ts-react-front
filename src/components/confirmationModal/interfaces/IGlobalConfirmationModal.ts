export interface IGlobalConfirmationModal {
  title?: string;
  message?: string;
  okLabel?: string;
  cancelLabel?: string;
  onOk?: () => void;
  onCancel?: () => void;
}
