import { Component, OnInit } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  webRequestService = new WebRequestService(this.http) ;
  messages : String[] = [];
  users : String[] = []

  constructor(private  http : HttpClient) { }

  ngOnInit(): void {
    this.webRequestService.fetchChat(this.users,this.messages);
    console.log(this.users);
  }

}
