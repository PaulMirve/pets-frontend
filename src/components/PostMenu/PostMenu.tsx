import React, { useState } from 'react'
import IconCreateOutline from '../../svg/IconCreateOutline'
import IconElipsisVertical from '../../svg/IconElipsisVertical'
import IconTrashOutline from '../../svg/IconTrashOutline'
import Post from '../../types/Post'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from '../EditModal/EditModal'
import Menu from '../Menu/Menu'

interface Props {
    post: Post
}

const PostMenu = ({ post }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    return (
        <div className={`post-menu`}>
            <IconElipsisVertical onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen &&
                <Menu className="post-menu__menu" open={isMenuOpen}>
                    <div onClick={() => setEditModalOpen(true)} className="post-menu__menu-item">
                        <IconCreateOutline /> Edit
                    </div>
                    <div onClick={() => setDeleteModalOpen(true)} className="post-menu__menu-item">
                        <IconTrashOutline /> Delete
                    </div>
                </Menu>}

            {editModalOpen && <EditModal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} description={post.description} onCancel={() => setEditModalOpen(false)} onConfirm={() => { }} />}
            {deleteModalOpen && <DeleteModal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} onCancel={() => setDeleteModalOpen(false)} onConfirm={() => { }} />}
        </div>
    )
}

export default PostMenu
