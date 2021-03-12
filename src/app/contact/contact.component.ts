import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContactComponent } from '../dialog-contact/dialog-contact.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  //contact = new Contact();
  clicked: boolean;
  messageSent = false;
  submitted = false;
  addressForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  endpoint: string;
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
  ) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.endpoint = 'https://dan-mercurean.developerakademie.com/send_mail.php';
  }
  /**
   * Send email with contact-form-data and reset form, if form is filled correctly
   * @param formDirective
   */
  // send email to server
  async sendMail() {
  
    try {
      const formData = new FormData();
      formData.append('name', this.addressForm.controls['name'].value);
      formData.append('message', this.addressForm.controls['message'].value);
      formData.append('email', this.addressForm.controls['email'].value);
      //console.log(formData);
      let url = 'https://dan-mercurean.developerakademie.com/send_mail.php';
      let response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: formData, // body data type must match "Content-Type" header
      });
      this.openDialog(true);
      this.router.navigate(['/contact'])
      this.addressForm.reset();
    } catch (error) {
      console.error(error);
      this.openDialog(false);
    }
  }
  openDialog(messageSent) {
    this.messageSent = messageSent;
    this.dialog.open(DialogContactComponent, {
      data: {
        messageSent: messageSent,
      },
    });
  }

  onSubmit(myForm: NgForm) {
   
    console.log(myForm.value);
    console.log(myForm.valid);

    //showProgressBar

    //You may also want to check the response. But again, let's keep it simple.
    if (myForm.valid) {
      this.http.post(this.endpoint, myForm.value)
        .subscribe(
          (response) => {
            console.log(response);
          
            //this.submitComplete = true;
            myForm.reset();
          },
          (error) => {
            console.error(error);
          
            //this.submitComplete = true;
          }
        );
    }
  }
 
}
function subscribe(arg0: (success: any) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}