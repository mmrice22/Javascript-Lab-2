// establishing what an object would look like from this class blueprint
class Contact {
  //  properties
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

// addressbook class
class AddressBook {
  //   properties
  constructor() {
    this.contacts = [];
  }
  //   methods
  add = function(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  };
  deleteAt = function(index) {
    this.contacts.splice(index, 1);
  };
}

// instnce an AddressBook Object
let melsBook = new AddressBook();

// add contacts to the address book instance
melsBook.add("Glenda", "grice@gmail.com", "313.969.8258", "mother");
melsBook.add("Wally", "walterjrice@gmail.com", "313.268.0385", "father");
melsBook.add("Jessica", "jlr@msu.edu", "313.618.9150", "sister");
melsBook.add("Bailey", "brice@msu.edu", "313.670.2921", "sister");
console.log(melsBook);
// delete glenda
// melsBook.deleteAt(0);

// for each loop shuffling through all elements in the array
// making the print function
function print(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
}
// using the print function
print(melsBook);
