import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.css'
})
export class ChatroomComponent {

  ourId: string = 'sender2'

  registeredBases = [
    "41154041-7217-4e4b-8d0a-be28f65a9a2c",
    "2750ffee-22d1-4433-803a-c415c0babec0",
    "f928dfbd-21d5-44bb-ac9c-981d2c66d858",
    "7979bf18-335a-409c-af75-4fa683d2107c",
    "7d5b14cf-0ba8-4ff9-91ca-f9e8e14502f0",
    "2bb6e088-0f41-4071-a090-91a0303810c7",
    "071c2f41-301a-440c-a318-37f1da4d7d0e",
    "d456cef4-f721-4fcf-9521-b3551ba46be9"
  ]

  messages: Message[] = [
    { message: "msg1", sender: "sender1"},
    { message: "msg2", sender: "sender2"},
    { message: "msg3", sender: "sender1"},
    { message: "msg4", sender: "sender2"},
    { message: "msg5", sender: "sender1"},
    { message: "msg6", sender: "sender2"},
    { message: "msg7", sender: "sender1"},
    { message: "msg8", sender: "sender2"},
    { message: "msg9", sender: "sender1"},
    { message: "msg10", sender: "sender2"},
    { message: "msg11", sender: "sender1"},
    { message: "msg12", sender: "sender2"},
    { message: "msg13", sender: "sender1"},
    { message: "msg14", sender: "sender2"},
    { message: "msg15", sender: "sender1"},
    { message: "msg16", sender: "sender2"}

  ]

  sendMessage(){}

  ngAfterViewInit() {
    const chatContainer = document.querySelector('.msgSection');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

}

export class Message {
  message: string
  sender: string

  constructor(){
    this.message = ""
    this.sender = ""
  }
}
