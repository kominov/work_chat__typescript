import React, { useRef } from 'react'
import { MessagesList } from '../MessagesList';
import WorkChatMessages from '../../store/workMessages'

import { observer } from 'mobx-react-lite';
import { reaction, runInAction } from 'mobx';

export const WorkChat: React.FC = observer(() => {
   

    reaction(()=>JSON.stringify(WorkChatMessages.workMessage),
    json=>{localStorage.setItem('workChat',json);})
    runInAction(()=>{
        let json = localStorage.getItem('workChat');
        if(json) Object.assign(WorkChatMessages.workMessage, JSON.parse(json));
    })
    
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && ref.current) {
            addHandler(ref.current.value);
            ref.current!.value = "";
        }
    }
    const addHandler = (message: string) => {
        WorkChatMessages.addMessage(message)
    }
    const delHandler=(id:string)=>{
        WorkChatMessages.delMessage(id)
    }
    return (<>
        <div className="col s10">
            <div className="messeges">
                <MessagesList messages={WorkChatMessages.workMessage} delHandler={delHandler} />
                <input ref={ref} placeholder="Введите сообщение" onKeyPress={keyPressHandler} type="text" />
            </div>
        </div>

    </>)
})