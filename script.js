// establishing what an object would look like from this class blueprint
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add = function(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  };
  deleteAt = function(index) {
    this.contacts.splice(index, 1);
  };
}

let melsBook = new AddressBook();
melsBook.add("Glenda", "grice@gmail.com", "313.969.8258", "mother");
melsBook.add("Wally", "walterjrice@gmail.com", "313.268.0385", "father");
melsBook.add("Jessica", "jlr@msu.edu", "313.618.9150", "sister");
melsBook.add("Bailey", "brice@msu.edu", "313.670.2921", "sister");
console.log(melsBook);
// delete glenda
// melsBook.deleteAt(0);


// for each loop
// making the print function
function print(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
}
// using the print function
print(melsBook);
