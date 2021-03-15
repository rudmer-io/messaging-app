import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() messageOpened: EventEmitter<any> = new EventEmitter();
  searchText: string;
  conversations = [
    {
      name: 'Discrete Events',
      time: '10:20 PM',
      latestMessage: 'Hi this is a test.',
      read: true,
      messages: [
        { id: 1, body: 'Hola como estas', time: '10:20 PM', me: true },
        { id: 2, body: 'Hola mundo', time: '10:20 PM', me: false },
        { id: 3, body: 'Nice!!', time: '10:20 PM', me: true },
        { id: 4, body: 'Excelent.', time: '10:20 PM', me: false },
      ],
    },
    {
      name: 'Rudmer',
      time: '10:22 PM',
      latestMessage: 'Buenos días',
      read: true,
      messages: [
        { id: 1, body: 'Hola como estas', time: '10:20 PM', me: true },
        { id: 2, body: 'Hola mundo', time: '10:20 PM', me: false },
        { id: 3, body: 'Nice!!', time: '10:20 PM', me: true },
        { id: 4, body: 'Excelent.', time: '10:20 PM', me: false },
      ],
    },
    {
      name: 'Yatzimar',
      time: '10:25 PM',
      latestMessage: 'Hi this is a test.',
      read: true,
      messages: [
        { id: 1, body: 'Hola como estas', time: '10:20 PM', me: true },
        { id: 2, body: 'Hola mundo', time: '10:20 PM', me: false },
        { id: 3, body: 'Nice!!', time: '10:20 PM', me: true },
        { id: 4, body: 'Excelent.', time: '10:20 PM', me: false },
      ],
    },
    {
      name: 'Mamá',
      time: '10:30 PM',
      latestMessage: 'Hi this is a test.',
      read: true,
      messages: [
        { id: 1, body: 'Hola como estas', time: '10:20 PM', me: true },
        { id: 2, body: 'Hola mundo', time: '10:20 PM', me: false },
        { id: 3, body: 'Nice!!', time: '10:20 PM', me: true },
        { id: 4, body: 'Excelent.', time: '10:20 PM', me: false },
      ],
    },
    {
      name: 'Carolina',
      time: '10:31 PM',
      latestMessage: 'Hi this is a test.',
      read: false,
      messages: [
        { id: 1, body: 'Hola como estas', time: '10:20 PM', me: true },
        { id: 2, body: 'Hola mundo', time: '10:20 PM', me: false },
        { id: 3, body: 'Nice!!', time: '10:20 PM', me: true },
        { id: 4, body: 'Excelent.', time: '10:20 PM', me: false },
      ],
    },
    {
      name: 'Andrés',
      time: '10:40 PM',
      latestMessage: 'Hi this is a test.',
      read: false,
      messages: [
        { id: 1, body: 'Hola como estas', time: '10:20 PM', me: true },
        { id: 2, body: 'Hola mundo', time: '10:20 PM', me: false },
        { id: 3, body: 'Nice!!', time: '10:20 PM', me: true },
        { id: 4, body: 'Excelent.', time: '10:20 PM', me: false },
      ],
    },
  ];

  get filteredConversations(){
    return this.conversations.filter((conversation) =>{
        return conversation.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase()) || 
        conversation.latestMessage
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
