import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared";

@Component({
  selector: "app-lobby",
  templateUrl: "./lobby.component.html",
  styleUrls: ["./lobby.component.scss"]
})
export class LobbyComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
}
