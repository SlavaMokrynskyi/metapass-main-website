import { ModalProps } from "@/types/types"
import "./modal.css"
import WalletConnect from "../WalletConnect/WalletConnect"
const Modal : React.FC<ModalProps> = ({active,setActive,children}) =>{

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;