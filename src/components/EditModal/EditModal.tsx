import React, { useState } from 'react'
import api from '../../api/api';
import Post from '../../types/Post';
import Button from '../Button/Button'
import TextArea from '../Form/TextArea'
import Modal from '../Modal/Modal';

interface Props {
    onCancel: () => void,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    onConfirm: (value: string) => void,
    post: Post
}

const EditModal = ({ post, onClose, isOpen, description, onCancel, onConfirm }: Props) => {
    const [value, setValue] = useState<string>(description);

    const onConfirmButtonClicked = () => {
        onConfirm(value);
        onClose();
        api.put(`/api/posts/c/${post.public_id}`, { description: value }, {
            headers: {
                "Authorization": localStorage.getItem('user')
            }
        });
    }
    return (
        <Modal size="sm" visible={isOpen} onClose={onClose} >
            <div className={`edit-modal`}>
                <TextArea fullwidth value={value} onChange={(e) => setValue(e.target.value)} />
                <div className="edit-modal__actions">
                    <Button type="small" onClick={onCancel}>Cancel</Button>
                    <Button type="small" onClick={onConfirmButtonClicked}>Confirm</Button>
                </div>
            </div>
        </Modal>
    )
}

export default EditModal
