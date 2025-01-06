import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { ViewChildComponentComponent } from './view-child-component/view-child-component.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },

    {
        path: 'message',
        component:MessageComponent
    },
    {
        path: 'sendmessage',
        component:SendmessageComponent
    },
    {
        path : 'viewChildComponent',
        component: ViewChildComponentComponent
    }
];
