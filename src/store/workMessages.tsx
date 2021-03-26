import { makeAutoObservable } from "mobx"
import msgJSON from '../workChat.json'

 class WorkChatMessages {

    workMessage = msgJSON.messages.map(msg => ({
        id: msg.id,
        name: msg.name,
        message: msg.message,
        userPic: msg.userPic,
        timeOfAdded: Date.now(),
    }))
    constructor() {
        makeAutoObservable(this)
    }

    addMessage(message: string) {
        this.workMessage = [...this.workMessage, {
            id: Date.now().toString(), name: 'Ваш будущий работник Михаил', message: message,
            userPic: 'https://sun1-15.userapi.com/s/v1/ig2/6chUEVtI-0SII-R3ij2LN-ZvLlwV9f2PKNw813co4uSenSI8NuYL_Zsxj4j4DBK-Ta7wM5rLQopYZwAcHohgvqZR.jpg?size=50x0&quality=96&crop=0,70,1729,1729&ava=1',
            timeOfAdded: Date.now()
        }]
    }

    delMessage(id: string) {
        this.workMessage = this.workMessage.filter(msg => msg.id !== id)
    }
}
export default new WorkChatMessages()