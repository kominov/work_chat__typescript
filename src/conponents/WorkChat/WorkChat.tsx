import React, { useEffect, useRef } from 'react'
import { MessagesList } from '../MessagesList';
import WorkChatMessages from '../../store/workMessages'

import { observer } from 'mobx-react-lite';
import { reaction, runInAction } from 'mobx';

export const WorkChat: React.FC = observer(() => {

    //загружаем и забираем стор в локалСторедж
    reaction(() => JSON.stringify(WorkChatMessages.workMessage),
        json => { localStorage.setItem('workChat', json); })
    runInAction(() => {
        let json = localStorage.getItem('workChat');
        if (json) Object.assign(WorkChatMessages.workMessage, JSON.parse(json));
    })
    //обрабатываем прокрутку скорлла к началу ввода сообщений
    const handleClick = () => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'auto',
                block: 'start',
            })
        }
    };
    useEffect(() => {
        handleClick();
    })
    //забираем сообщение по Enter из инпута
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        ref.current!.scrollIntoView({ behavior: 'smooth', block: 'end' })
        if (event.key === "Enter" && ref.current) {
            addHandler(ref.current.value);
            ref.current.value = "";
            window.scroll(0, 100);

        }
    }
     //добавляем сообщение в стор
    const addHandler = (message: string) => {
        WorkChatMessages.addMessage(message)
    }
    //удаляем сообщение
    const delHandler = (id: string) => {
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