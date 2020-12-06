import { Component, OnInit } from "@angular/core";

enum MenuItems {
  pagrindinis = 'pagrindinis',
  apie = 'apie',
  paslaugos = 'paslaugos',
  projektai = 'projektai',
  kontaktai = 'kontaktai',
}

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  button: HTMLElement;
  nav: HTMLElement;
  header: HTMLElement;
  menuItems = MenuItems;

  constructor() {}

  ngOnInit() {
    this.button = document.getElementById('toggle');
    this.nav = document.getElementById('nav');
    this.header = document.getElementById('experts--header');
  }

  onToggle() {
    this.button.classList.toggle('active');
    this.nav.classList.toggle('active');
    this.header.classList.toggle('active');
  }

  scrollDownTo(name: string) {
    this.onToggle();
    setTimeout(() => {
      if (name === this.menuItems.pagrindinis) {
        window.scrollTo({
          top: 0,
        });
      } else if (name === this.menuItems.apie) {
        window.scrollTo({
          top: document.body.scrollHeight / 3.6,
          behavior: 'smooth',
        });
      } else if (name === this.menuItems.projektai) {
        window.scrollTo({
          top: document.body.scrollHeight / 2,
          behavior: 'smooth',
        });
      } else if (name === this.menuItems.kontaktai) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 500);
  }
}
