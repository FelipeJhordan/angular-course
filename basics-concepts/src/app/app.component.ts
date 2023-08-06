import { Component } from "@angular/core"



@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]

})
export class AppComponent {
  name = "Luis"

  imgUrl = "https://animefire.net/img/avatar/small_50.gif"


  getName(): string {
    return this.name
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl =( e.target as HTMLInputElement).value
  }

  logImage(event: string) {
    console.log(event)
  }
}