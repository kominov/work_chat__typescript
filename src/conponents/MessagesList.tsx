import React from 'react'
import { TimeOfAdded } from './TimeOfAdded/TimeOfAdded'
import { IWorkMessage } from '../constans/const'
import s from './MessagesList.module.css'
interface Props {
    messages: IWorkMessage[]
    delHandler: (id: string) => void
}

export const MessagesList: React.FC<Props> = ({ messages, delHandler }) => {

    return (<>
        <ul>
            {messages.map(message => {



                return (
                    <div className={s.post} key={message.id}>
                        <div className={s.container}>
                            <div style={{ flexDirection: message.name === "Ваш будущий работник Михаил" ? 'row' : 'row-reverse' }} className={s.post__inner}>
                                <img className={s.user__pick} src={message.userPic} alt="userpic" />
                                <div style={{marginRight:message.name === "Ваш будущий работник Михаил"?'0':'20px'}} className={s.post__roll}>
                                    <div className={s.post__header}>
                                        <div className={s.user__name}>{message.name}</div>
                                        <div className={s.del__msg} onClick={event => delHandler(message.id)}>Удалить</div>
                                    </div>
                                    <div className={s.post}>{message.message}</div>
                                    <div className={s.post__date}><TimeOfAdded timeOfAdded={message.timeOfAdded} /> </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </ul>

    </>)
}