import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/Botão - Fechar.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'

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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechat Modal" />
      </button>

      <Container>
        <h2>Cadastrar Nova Transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
