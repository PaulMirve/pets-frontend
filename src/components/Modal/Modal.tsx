import React, { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    visible: boolean,
    onClose: () => void,
    size?: "lg" | "md" | "sm"
}

const Modal: React.FC<IProps> = ({ size, className = "", children, visible, onClose }) => {
    const getSize = () => {
        switch (size) {
            case "sm":
                return "modal__content--sm";
            case "md":
                return "modal__content--md";
            default:
                return "";
        }
    }
    return (
        <div id="modal" className={`modal ${visible && 'modal--visible'} ${className}`} onClick={onClose}>
            <div id="modal-content" onClick={(e) => e.stopPropagation()} className={`modal__content ${getSize()}`}>
                {children}
            </div>
        </div>
    )

}

export default Modal
