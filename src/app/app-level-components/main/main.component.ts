import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  cards = [
    {
      imageUrl: "../../../assets/images/pexels-1.jpg",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?"
    },
    {
      imageUrl: "../../../assets/images/pexels-2.jpg",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?"
    },
    {
      imageUrl: "../../../assets/images/pexels-3.jpg",
      title: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?"
    }
  ];

  atLeastMd: boolean;

  constructor() {
    this.atLeastMd = window.innerWidth >= 768;
  }

  ngOnInit() {
    console.log(this.atLeastMd);
  }
}
