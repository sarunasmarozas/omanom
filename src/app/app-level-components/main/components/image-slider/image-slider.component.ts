import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { from, interval, timer, Subscription } from "rxjs";

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.scss"],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @ViewChild("target", { static: true }) target: ElementRef;

  images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg"];
  timer$ = timer(1000, 5000);
  subscription: any;
  random = Math.floor(Math.random() * 3);
  uri: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // TODO: fix this
    // this.subscription = this.timer$.subscribe(() => {
    //   this.uri = `url(../../../../../assets/images/${
    //     this.images[this.random]
    //   })`;

    //   console.log(this.uri);

    // });
        // setInterval(() => {
        //   this.uri = `url(../../../../../assets/images/${
        //     this.images[this.random]
        //   })`;

        //   console.log(this.uri);
    
        // }, 5000);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
