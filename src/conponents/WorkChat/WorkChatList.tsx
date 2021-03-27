import React from 'react'
import { TimeOfAdded } from '../TimeOfAdded/TimeOfAdded'
import { IWorkMessage } from './../../const'
import s from './WorkChatList.module.css'
interface Props {
    messages: IWorkMessage[]
}

export const WorkChatList: React.FC<Props> = ({ messages }) => {
    return (<>
        <ul>
            {messages.map(message => {


                return (
                    <div className={s.post} key={message.id} >
                        <div className={s.container}>
                            <div className={s.post__inner}>
                                <div className={s.post__header}>
                                    <img className={s.user__pick} src={message.userPic} alt="userpic" />
                                    <div className={s.post__roll}>
                                        <div className={s.user__name}>{message.name}</div>
                                        <div className={s.post__date}><TimeOfAdded timeOfAdded={message.timeOfAdded} /> </div>
                                    </div>
                                </div>
                                <div className={s.post__content}>
                                    <div className={s.post}>{message.message}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </ul>

    </>)
}