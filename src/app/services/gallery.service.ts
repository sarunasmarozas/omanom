import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

// import { addGalleryItems } from "../../environments";

export interface GalleryItem {
  imgUrl: { type: String; required: true };
  title: { type: String; required: true };
  description: { type: String; required: true };
  location: String;
  dateCompleted: Date;
}

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  addGalleryCard() {
    const httpHeaders: HttpHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    const reqParams: HttpParams = new HttpParams()
      .set("imgUrl", "https://s2.dmcdn.net/v/9tMzf1LMPov3RiNCr/x1080")
      .set("title", "sharis new success!")
      .set("description", "sharis is getting very successful indeed!");

    return this.http.post("http://localhost:5000/api/gallery-items/add", {
      headers: httpHeaders,
      params: reqParams
    });
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    console.log("getGallerycard");
    const reqHeaders: HttpHeaders = new HttpHeaders()
      .set("Access-Control-Allow-Origin", "*")
      .set("Content-type", "application/json; charset=utf-8");

    return this.http.get<GalleryItem[]>(
      "http://localhost:5000/api/gallery-items",
      {
        headers: reqHeaders
      }
    );
  }
}
