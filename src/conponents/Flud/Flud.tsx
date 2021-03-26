import React, { useRef } from 'react'
import FludMsg from '../../store/flud'
import { observer } from 'mobx-react-lite';
import { MessagesList } from '../MessagesList';
import { reaction, runInAction } from 'mobx';


export const Flud: React.FC = observer(() => {


    reaction(() => JSON.stringify(FludMsg.flud),
        json => { localStorage.setItem('flud', json); })
    runInAction(() => {
        let json = localStorage.getItem('flud');
        if (json) Object.assign(FludMsg.flud, JSON.parse(json));
    })


    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && ref.current) {
            addHandler(ref.current.value);
            ref.current!.value = "";
        }
    }
    const addHandler = (message: string) => {
        FludMsg.addMessage(message)
    }
    const delHandler = (id: string) => {
        FludMsg.delMessage(id)
    }
    return (<>
        <div className="col s10">
            <div className="messeges">
                <MessagesList messages={FludMsg.flud} delHandler={delHandler} />
                <input ref={ref} placeholder="Введите сообщение" onKeyPress={keyPressHandler} type="text" />
            </div>
        </div>

    </>)
})