import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')
//a documentaçao pede pra fazer por causa de acessibilidade

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        //isOpen abre modal
        onRequestClose={handleCloseNewTransactionModal}
        //onRequestClose fecha modal
      >
        <h2>Cadastras Nova Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  )
}
