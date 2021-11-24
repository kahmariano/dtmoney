import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      //isOpen abre modal
      onRequestClose={onRequestClose}
      //onRequestClose fecha modal
    >
      <h2>Cadastras Nova Transação</h2>
    </Modal>
  )
}
