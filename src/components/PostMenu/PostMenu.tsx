import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import IconCreateOutline from '../../svg/IconCreateOutline'
import IconElipsisVertical from '../../svg/IconElipsisVertical'
import IconTrashOutline from '../../svg/IconTrashOutline'
import Post from '../../types/Post'
import User from '../../types/User'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from '../EditModal/EditModal'
import Menu from '../Menu/Menu'

interface Props {
    post: Post,
    description: string,
    onEditConfirm: (value: string) => void,
    onPostDelete: () => void,
    color?: "light" | "dark"
}

const PostMenu = ({ color, onPostDelete, onEditConfirm, post, description }: Props) => {
    let user: User | null = useAppSelector(state => state.user ? state.user as User : null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    if (user && user.username === post.user.username) {
        return (
            <div className={`post-menu`}>
                <IconElipsisVertical onClick={() => setIsMenuOpen(!isMenuOpen)} />
                {isMenuOpen &&
                    <Menu color={color} className="post-menu__menu" open={isMenuOpen}>
                        <div onClick={() => setEditModalOpen(true)} className="post-menu__menu-item">
                            <IconCreateOutline /> Edit
                        </div>
                        <div onClick={() => setDeleteModalOpen(true)} className="post-menu__menu-item">
                            <IconTrashOutline /> Delete
                        </div>
                    </Menu>}

                {editModalOpen && <EditModal post={post} isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} description={description} onCancel={() => setEditModalOpen(false)} onConfirm={onEditConfirm} />}
                {deleteModalOpen && <DeleteModal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} onCancel={() => setDeleteModalOpen(false)} onConfirm={onPostDelete} />}
            </div>
        )
    } else {
        return <></>
    }

}

export default PostMenu
