import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

// import { addGalleryItems } from "../../environments";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  addGalleryCard() {
    console.log("addGalleryCard");

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

  getGallerycard() {
    console.log("getGallerycard");
    return this.http.get("http://localhost:4200/api/gallery-items");
  }
}
