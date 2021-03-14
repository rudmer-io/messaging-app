import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  convesations = [
    {name: "Discrete Events", time: "10:20 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Rudmer", time: "10:22 PM", latestMessage: "Buenos días", read: true},
    {name: "Yatzimar", time: "10:25 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Mamá", time: "10:30 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Carolina", time: "10:31 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Andrés", time: "10:40 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Marcos", time: "10:45 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Antonio", time: "10:50 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Andreina", time: "10:51 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Andreina", time: "10:51 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Gerard", time: "11:05 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Neymar", time: "10:30 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Ana", time: "10:31 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Enzo", time: "10:40 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Eric", time: "10:45 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Eva", time: "10:50 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Hugo", time: "10:51 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Iván", time: "10:51 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Juan", time: "10:25 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Leo", time: "10:30 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Raúl", time: "10:31 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Sara", time: "10:40 PM", latestMessage: "Hi this is a test.", read: true},
    {name: "Héctor", time: "10:45 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Ulises", time: "10:50 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Zeus", time: "10:51 PM", latestMessage: "Hi this is a test.", read: false},
    {name: "Elena", time: "10:51 PM", latestMessage: "Hi this is a test.", read: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
