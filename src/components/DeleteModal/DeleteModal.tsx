import React from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

interface Props {
    onCancel: () => void,
    onConfirm: () => void,
    isOpen: boolean,
    onClose: () => void
}

const DeleteModal = ({ isOpen, onClose, onCancel, onConfirm }: Props) => {
    return (
        <Modal size="sm" visible={isOpen} onClose={onClose} >
            <div className="delete-modal">
                <h2>Are you sure about delete this post?</h2>
                <div className="delete-modal__actions">
                    <Button type="small" onClick={onCancel}>Cancel</Button>
                    <Button type="small" onClick={onConfirm}>Confirm</Button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal
