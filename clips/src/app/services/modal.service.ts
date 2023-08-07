import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: IModal[] = [

  ]

  private visible = false

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    })

    console.log(this.modals)
  }

  isModalVisible() {
    return true
  }

  toggleModal() {
    // this.visible = !this.visible
  }
}
