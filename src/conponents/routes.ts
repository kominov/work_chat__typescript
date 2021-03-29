import { Flud } from './Flud/Flud';
import { FludRoute, WorkChatRoute } from './../constans/const';
import { WorkChat } from './WorkChat/WorkChat';
import { LoginRoute } from '../constans/const';
import { Login } from './Login/Login';

export const publicRoutes =[
    {
        path:LoginRoute,
        Component: Login
    }
]
export const privateRoutes=[
    {
        path:WorkChatRoute,
        Component: WorkChat
    },
    {
        path:FludRoute,
        Component: Flud
    }
]

