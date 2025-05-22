import { ModalProps } from "@/types/types"
import "./message.css"
const Message : React.FC<ModalProps> = ({active,setActive,children}) =>{

    return(
        <div className={active ? "message active" : "message"} onClick={() => setActive(false)}>
            <div className="message_content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Message;