  //Function to validate the details of the contacts
  //takes in two parameter viz. 'number' and 'parameter'
  //1 to validate the first and last name, 2 to validate city and state name, 3 to validate email, 4 to validate zip code
  //5 to validate phone number
  function RegexpValidation(number, parameter) {
    let name = RegExp("^[A-Z]{1}[a-z]{2,15}$");
    let address = RegExp("^[A-Z]{1}[a-z]{4,}$")
    let email = RegExp(
      "[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$"
    );
    let zip = RegExp("^[1-9]{1}([0-9]*[ ]?[0-9]+){5,6}$");
    let phoneNumber = RegExp("^[8,9]{1}[0-9]{9}$");
    //console.log('regex validation: '+ parameter +' '+ number);
    switch (number) {
      case 1:
        if (name.test(parameter)) return true;
        else
          throw "Invalid First/ Last name. Should have first letter capital and be of min 3 letters";
      case 2:
        if (address.test(parameter)) return true;
        else throw "City/State invalid. Should have atleast 4 letters";
      case 3:
        if (email.test(parameter)) return true;
        else throw "Email entered is invalid";
      case 4:
        if (zip.test(parameter)) return true;
        else throw "Zip code entered is invalid";
      case 5:
        if (phoneNumber.test(parameter)) return true;
        else throw "Mobile number entered is invalid";
    }
  }
class contacts {
  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.city = params[2];
    this.state = params[3];
    this.zip = params[4];
    this.phoneNumber = params[5];
    this.email = params[6];
  }
  //getter and setter methods
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (RegexpValidation(1, firstName)) this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (RegexpValidation(1, lastName)) this._lastName = lastName;
  }
  get city() {
    return this._city;
  }
  set city(city) {
    if (RegexpValidation(2, city)) this._city = city;
  }
  get state() {
    return this._state;
  }
  set state(state) {
    if (RegexpValidation(2, state)) this._state = state;
  }
  get email() {
    return this._email;
  }
  set email(email) {
    if (RegexpValidation(3, email)) this._email = email;
  }
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    if (RegexpValidation(4, zip)) this._zip = zip;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    if (RegexpValidation(5, phoneNumber)) this._phoneNumber = phoneNumber;
  }
}
let contact = new contacts(
  "Prajval",
  "Chauhan",
  "Saharanpur",
  "Uttrakhand",
  "247342",
  "9876543210",
  "abc.de@vwx.yza.in"
);
let AddressBookArray = new Array();
AddressBookArray.push({
    Name: contact.firstName +' '+ contact. lastName,
    City: contact.city,
    State: contact.state,
    ZIP: contact.zip,
    PhoneNumber: contact.phoneNumber,
    Email: contact.email,
    toString() {
        return '\n -------------------------------------\n'+'Name => '+this.Name+'\nCity => '+this.City + '\nState => '+this.State
                +'\nZIP => '+this.ZIP+'\nPhone Number => '+this.PhoneNumber+'\nEmail => '+this.Email+'\n -------------------------------------\n'
    }
});
console.log('Array:\n'+AddressBookArray);

