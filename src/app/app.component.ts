import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormsModule } from '@angular/forms';
import { GigabytesToMegabytesPipe } from './pipes/gigabytes-to-megabytes.pipe';
import { MyDateService } from './myService/my-date.service';
import { UserdataService } from './myService/userdata.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NewComponentComponent, FormsModule, GigabytesToMegabytesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todayDate : any;
  public persondata = [
    {
      id:"",
      name:"",
      email:"",
      address: {
        city:"",
        zipcode:""
      }
    }
  ]
  constructor(private mydate: MyDateService, private userData: UserdataService) {}

  ngOnInit() {
    this.todayDate = this.mydate.showTodayDate();

    this.userData.getData().subscribe((data:any)=>{
      this.persondata = data;
      console.log(this.persondata)
    })
  }

  title = 'Welcome To Angular';
  Discription= 'This Text We Are Passing From app.component.ts File And we Are Rendering This From app.component.html File'

  months = ['January', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  numberOfMonths = this.months.length

  isAvailable = true

  // EVENT BINDING
  setTrue() {
    console.log("It is Set To Be True")
  }
  setFalse() {
    console.log("It is Set To Be False")
  }
  // EXTENDED EVENT BINDING

  alertClass: string = "alert-success"
  message: string = "This Is A Success Message"

  handleButtonClick(isTrue: boolean) {
    if(isTrue) {
      this.alertClass = 'alert-success'
      this.message = 'This Is A Success Message'
    } else {
      this.alertClass = 'alert-warning'
      this.message = 'This Is A Failure Message'
    }
  }

  isSwitchOn: boolean = false
  messages: string = "This Is A Warning Message"

  // FUNCTION TO HANDLE SWITCH TOGGLE
  handleSwitchToggle() {
    if(this.isSwitchOn) {
      this.messages = "This Is A Success Message"
    } else {
      this.messages = "This Is A Warning Message"
    }
  }

  // PIPE
  upperHeading = "This Is A Uppercase Heading"
  lowerHeading = "This Is A Lowercase Heading"

  // FEATURE SET
  firstFeature = {
    heading: 'Feature One',
    body: 'Input Decorators In Angular',
    linkText: 'Read More',
    link: 'https://github.com/Bhavadeepreddy/'
  }
  secondFeature = {
    heading: 'Second Feature',
    body: 'Input Decorators In Angular',
    linkText: 'Read More',
    link: 'https://github.com/Bhavadeepreddy/Angular-Project'
  }
  thirdFeature = {
    heading: 'Third Feature',
    body: 'Input Decorators In Angular',
    linkText: 'Read More',
    link: 'https://github.com/Bhavadeepreddy/Angular-Project/tree'
  }
  fourthFeature = {
    heading: 'Fourth Feature',
    body: 'Input Decorators In Angular',
    linkText: 'Read More',
    link: 'https://github.com/Bhavadeepreddy/Angular-Project/tree/Angular-Interpolation-Binding-Pipes'
  }

}
