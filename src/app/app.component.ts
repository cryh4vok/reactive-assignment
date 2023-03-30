import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenUsernames = ['test'];
  genders = ['Male', 'Female'];
  statuses = ['Stable', 'Critical', 'Finished'];
  // nameIsForbidden = false;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.email, Validators.required]),
      projectStatus: new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

  //! Custom validator
  // forbiddenNames(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
  //     return { nameIsForbidden: true };
  //   }
  //   return null;
  // }

  //! Async validator
  // forbiddenName(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test') {
  //         resolve({ nameIsForbidden: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }
}
