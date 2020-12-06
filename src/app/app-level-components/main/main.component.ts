import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  cards = [
    {
      imageUrl: "../../../assets/images/card/namas-1.jpg",
      title: "Namas #1",
      description:
        "Aprasymas #1",
    },
    {
      imageUrl: "../../../assets/images/card/namas-2.jpg",
      title: "Namas #2",
      description:
        "Aprasymas #2",
    },
    {
      imageUrl: "../../../assets/images/card/namas-3.jpg",
      title: "Namas #3",
      description:
        "Aprasymas #3",
    },
    {
      imageUrl: "../../../assets/images/card/namas-4.jpg",
      title: "Namas #4",
      description:
        "Aprasymas #4",
    },
    {
      imageUrl: "../../../assets/images/card/namas-5.jpg",
      title: "Namas #5",
      description:
        "Aprasymas #5",
    },
    {
      imageUrl: "../../../assets/images/card/namas-6.jpg",
      title: "Namas #6",
      description:
        "Aprasymas #6",
    },
    {
      imageUrl: "../../../assets/images/card/namas-7.jpg",
      title: "Namas #7",
      description:
        "Aprasymas #7",
    },
    {
      imageUrl: "../../../assets/images/card/namas-8.jpg",
      title: "Namas #8",
      description:
        "Aprasymas #8",
    },
    {
      imageUrl: "../../../assets/images/card/namas-9.jpg",
      title: "Namas #9",
      description:
        "Aprasymas #9",
    },
    {
      imageUrl: "../../../assets/images/card/namas-10.jpg",
      title: "Namas #10",
      description:
        "Aprasymas #10",
    },
    {
      imageUrl: "../../../assets/images/card/namas-11.jpg",
      title: "Namas #11",
      description:
        "Aprasymas #11",
    },
    {
      imageUrl: "../../../assets/images/card/namas-12.jpg",
      title: "Namas #12",
      description:
        "Aprasymas #12",
    },
  ];

  atLeastMd: boolean;

  constructor() {
    this.atLeastMd = window.innerWidth >= 768;
  }

  ngOnInit() {}
}
