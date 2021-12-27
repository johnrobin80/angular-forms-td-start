// import { Component, ElementRef } from "@angular/core";
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "teacher";
  answer = "";
  genders = ["male", "female"];
  user = {
    userName: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };

  suggestUserName() {
    const suggestedName = "Superuser";
    alert(suggestedName);
    // this.signupForm.setValue({
    //   userData: { username: suggestedName, email: "" },
    //   secret: "pet",
    //   gender: "male",
    //   questionAnswer: "",
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: ElementRef) {
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    // alert(this.signupForm.submitted);
    console.log(this.signupForm);
    this.user.userName = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
