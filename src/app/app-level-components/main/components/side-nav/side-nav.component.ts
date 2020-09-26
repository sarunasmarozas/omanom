import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onToggle() {
    const button = document.getElementById('toggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('experts--header');

    button.classList.toggle('active');
    nav.classList.toggle('active');
    header.classList.toggle('active');
  }
}
