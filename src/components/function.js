export function validateEmail(email){
  let expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid =  expReg.test(email);
  return isValid
}

