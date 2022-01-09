import { Component, OnInit } from '@angular/core';
import {
  ServersService,
  ServerStatusModel,
} from 'src/app/services/servers.service';

@Component({
  selector: 'app-server-change-status',
  templateUrl: './server-change-status.component.html',
  styleUrls: ['./server-change-status.component.css'],
})
export class ServerChangeStatusComponent implements OnInit {
  servers: ServerStatusModel[];
  serverCounter: number;
  constructor(private serversService: ServersService) {
    this.servers = this.serversService.servers;
    this.serverCounter = 0;
    this.serversService.subject.subscribe((status) => {
      if (status) this.serverCounter++;
      else this.serverCounter--;
    });
  }

  ngOnInit(): void {}
}
