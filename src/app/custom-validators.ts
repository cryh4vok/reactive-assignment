import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  //
  //!Custom validator
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  //! Async validator
  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test1') {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
