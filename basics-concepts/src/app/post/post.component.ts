import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('img') postImg = ""
  @Output() imgSelected  = new EventEmitter<string>()


  constructor() {
    console.log("constructor() calle \t", this.postImg)
  }


  ngOnInit(): void {
    console.log("ngOnInit() called \t", this.postImg)
  }


  ngDoCheck(): void {
    console.log("ngDoCheck() called \t", this.postImg)

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() called \t", this.postImg)

  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit() called \t", this.postImg)

  }

  ngAfterContentChecked(): void {
    console.log("ngOnChanges() called \t", this.postImg)

  }

  ngAfterViewInit(): void {
    console.log("ngOnChanges() called \t", this.postImg)

  }

  ngAfterViewChecked(): void {
    console.log("ngOnChanges() called \t", this.postImg)

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() called \t", this.postImg)
  }
}
