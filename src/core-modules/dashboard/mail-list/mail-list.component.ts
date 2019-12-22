import { Component, OnInit } from "@angular/core";
import {
  faSearch,
  faSync,
  faEye,
  faExclamation,
  faTrash,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-mail-list",
  templateUrl: "./mail-list.component.html",
  styleUrls: ["./mail-list.component.scss"]
})
export class MailListComponent implements OnInit {
  faIcons = {
    faSearch,
    faSync,
    faEye,
    faExclamation,
    faTrash,
    faArrowLeft,
    faArrowRight
  };


  mockData = [
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: false, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: false, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    },
    {
      senderid:'tamils@gmail.com',sender_name:'Tamil',recipient:'mk13@gmail.com',receiver_name:'Raj',cc_id:'',bcc_id:'',subject:'Application for job', msg_body:'Applying for job', sent_at: 'Thu 24, 2019', read: true, starred: false
    }
  ]
  constructor() {}

  ngOnInit() {}
}
