import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'chatroom', component: ChatroomComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
