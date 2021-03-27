import React, { useEffect, useRef } from 'react'
import FludMsg from '../../store/flud'
import { observer } from 'mobx-react-lite';
import { MessagesList } from '../MessagesList';
import { reaction, runInAction } from 'mobx';


export const Flud: React.FC = observer(() => {

    //загружаем и забираем стор в локалСторедж
    reaction(() => JSON.stringify(FludMsg.flud),
        json => { localStorage.setItem('flud', json); })
    runInAction(() => {
        let json = localStorage.getItem('flud');
        if (json) Object.assign(FludMsg.flud, JSON.parse(json));
    })
    //обрабатываем прокрутку скорлла к началу ввода сообщений
    const handlScroll = () => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'auto',
                block: 'start',
            })
        }
    };
    useEffect(() => {
        handlScroll();
    })
    //забираем сообщение по Enter из инпута
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && ref.current) {
            addHandler(ref.current.value);
            ref.current!.value = "";
        }
    }
    //добавляем сообщение в стор
    const addHandler = (message: string) => {
        FludMsg.addMessage(message)
    }
    //удаляем сообщение
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