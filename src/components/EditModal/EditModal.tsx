import React, { useState } from 'react'
import Button from '../Button/Button'
import TextArea from '../Form/TextArea'
import Modal from '../Modal/Modal';

interface Props {
    onCancel: () => void,
    onConfirm: () => void,
    description: string,
    isOpen: boolean,
    onClose: () => void
}

const EditModal = ({ onClose, isOpen, description, onCancel, onConfirm }: Props) => {
    const [value, setValue] = useState<string>(description);
    return (
        <Modal size="sm" visible={isOpen} onClose={onClose} >
            <div className={`edit-modal`}>
                <TextArea fullwidth value={value} onChange={(e) => setValue(e.target.value)} />
                <div className="edit-modal__actions">
                    <Button type="small" onClick={onCancel}>Cancel</Button>
                    <Button type="small" onClick={onConfirm}>Confirm</Button>
                </div>
            </div>
        </Modal>
    )
}

export default EditModal
