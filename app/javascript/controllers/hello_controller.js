import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "firstInput", "secondInput", "button", "firstOutput", "secondOutput", "thirdOutput", "fourthOutput" ]

  connect() {
    this.clickListener = this.clicked_manually.bind(this)
    this.keyupListener = this.keyedup_manually.bind(this)
    this.buttonTarget.addEventListener("click", this.clickListener)
    this.secondInputTarget.addEventListener("keyup", this.keyupListener)
  }

  clicked(){
    this.firstOutputTarget.textContent = `The value on the input is: ${this.firstInputTarget.value}`
  }

  keyedup(){
    this.secondOutputTarget.textContent = `The value on the input is: ${this.firstInputTarget.value}`
  }

  // these method are added to the button via connect(), not on the HTML
  clicked_manually(){
    //for some reason, this doesnt work and I had to make a workaroud 🤷‍♂️ 
    // this.thirdOutputTarget.textContent = `The value on the input is: ${this.secondtInputTarget.value}`
    var content = this.secondInputTarget.value
    this.thirdOutputTarget.textContent = `The value on the input is: ${content}`
  }
  keyedup_manually(){
    this.fourthOutputTarget.textContent = `The value on the input is: ${this.secondInputTarget.value}`
  }

}
