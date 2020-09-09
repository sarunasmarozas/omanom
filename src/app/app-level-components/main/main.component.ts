import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  cards = [
    {
      imageUrl: "../../../assets/images/pexels-1.jpg",
      title: "Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-2.jpg",
      title: "Another test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-3.jpg",
      title: "One test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-1.jpg",
      title: "Two test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-2.jpg",
      title: "No test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-3.jpg",
      title: "Five six",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-1.jpg",
      title: "Seven",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-2.jpg",
      title: "Eight nine",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-3.jpg",
      title: "Ten eleven",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-1.jpg",
      title: "Twelve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-2.jpg",
      title: "Thirteen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
    {
      imageUrl: "../../../assets/images/pexels-3.jpg",
      title: "Fourteen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam dolorem dicta eum itaque officiis inventore fugiat nesciunt, veniam vel?",
    },
  ];

  atLeastMd: boolean;

  constructor() {
    this.atLeastMd = window.innerWidth >= 768;
  }

  ngOnInit() {}
}
