import { Component } from "@angular/core"



@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]

})
export class AppComponent {
  name = "felipe jhordan"

  images = [
    "https://animefire.net/img/avatar/small_50.gif",
    "https://animefire.net/img/avatar/small_50.gif",
    "https://animefire.net/img/avatar/small_50.gif",
    "https://animefire.net/img/avatar/small_50.gif"
  ]

  imgUrl = "https://animefire.net/img/avatar/small_50.gif"
  currentDate = new Date()

  cost = 2000 

  temperature = 25.3

  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  blueClass = false
  fontSize = 32


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