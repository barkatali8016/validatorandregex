import { AbstractControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function validatePassword(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+"#')(,-./])[A-Za-z\d@$!%*?&+"#')(,-./]{8,}$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function validateAlphanumeric(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  if (/[^a-zA-Z0-9\s]/.test(val)) {
    return { isValidated: true };
  }
  return null;
}
export function validateCharacters(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  if (/[^[a-zA-Z ]*$]/.test(val)) {
    return { isValidated: true };
  }
  return null;
}

//its not working please use isValidateCharactersOnly
export function isValidateCharacters(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  if (/[^a-zA-Z *$]/.test(val)) {
    return { isValidated: true };
  }
  return null;
}
//Alphabets only with no Special Characters
export function isValidateCharactersOnly(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  if (/[^a-zA-Z ]/.test(val)) {
    return { isValidated: true };
  }
  return null;
}
export function isNumeric(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  if (/[^0-9]/.test(val)) {
    return { isValidated: true };
  }
  return null;
}
export function isNumericCommaSeparated(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  if (/[^0-9,]/.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function validatePAN(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function validateEmail(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isNumericOnly(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter = /^(0|[0-9][0-9]*)$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isNumericOnlyWithoutZero(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter = /^[1-9]\d*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isNumericTwoDecimal(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  // var filter = /^(?:\d*\.\d{1,2})$/;
  var filter = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isNumericTwoDecimalWithZero(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  // var filter = /^(?:\d*\.\d{1,2})$/;
  var filter = /^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}
export function isNumericThreeDecimalWithZero(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  // var filter = /^(?:\d*\.\d{1,2})$/;
  var filter = /^\s*(?=.*[0-9])\d*(?:\.\d{1,3})?\s*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isNumericTFourDecimal(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  // var filter = /^(?:\d*\.\d{1,2})$/;
  var filter = /^\s*(?=.*[1-9])\d*(?:\.\d{1,4})?\s*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isNumericGreaterZero(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter = /^[1-9]\d*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function isSelectedChar(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter = /^[^<>'"]+$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}

export function removeSpaces(control: AbstractControl) {
  if (control && control.value && !control.value.replace(/\s/g, "").length) {
    control.setValue("");
  }
  return null;
}

export function isFileValid(control: AbstractControl) {
  if (
    control.value == "" ||
    control.value == null ||
    control.value == "delete"
  ) {
    return { isValidated: true };
  }
  return null;
}

export function checkDate(control: AbstractControl) {
  if (control.value == "" || control.value == null) {
    return null;
  } else {
    return { isValidated: true };
  }
}

export function validatePin(control: AbstractControl) {
  if (control.value == "" || control.value == null) return null;
  let val = control.value ? control.value : window.event;
  var filter = /^799[0-9].*$/;
  if (!filter.test(val)) {
    return { isValidated: true };
  }
  return null;
}
