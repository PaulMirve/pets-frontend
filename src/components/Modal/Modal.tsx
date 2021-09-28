import React, { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    visible: boolean,
    onClose: () => void
}

const Modal: React.FC<IProps> = ({ className = "", children, visible, onClose }) => {

    return (
        <div id="modal" className={`modal ${visible && 'modal--visible'} ${className}`} onClick={onClose}>
            <div id="modal-content" onClick={(e) => e.stopPropagation()} className="modal__content">
                {children}
            </div>
        </div>
    )

}

export default Modal
