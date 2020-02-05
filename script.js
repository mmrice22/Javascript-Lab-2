// establishing what an object would look like from this class blueprint
class Contact {
  //  properties
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
  //  methods
  //   shorthand of writing a function
  toString() {
    // return a string of name and email property
    return `${this.name} <${this.email}>`;
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
  //   returns the contact based on the provided index
  getAt(index) {
    return this.contacts[index];
  }
  //   returns the contact with that name
  findContactByName(name) {
    // .FIND way
    // return this.contacts.find(contact => contact.name === name);
    // console.log(melsBook.findContactByName("Jessica"));
    // using a for of to find it
    for (let contact of this.contacts) {
      if (contact.name === name) {
        return contact;
      }
    }
    // using an array.filter to find it
    // this.contacts.filter(contact => {
    //   if (contact.name === name) {
    //     return contact;
    //   }
    // });
  }
  findContactsByRelation(relation) {
    let contactsToReturn = [];
    for (let contact of this.contacts) {
      if (contact.relation === relation) {
        return contact;
      }
    }
    return contactsToReturn;
  }
  //   returns an array of all contacts that include the given text anywhere in the name,email,phone, or relation
  searchContacts(text) {
    return this.contacts.filter(contact => {
      for (let property in contact) {
        if (contact[property].includes(text)) {
          return contact;
        }
      }
    });
  }
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
// function print(addressBookReference) {
//   addressBookReference.contacts.forEach(contact => {
//     console.log(contact);
//   });
// }
// using the print function
// print(melsBook);

// **
// EXTENDED CHALLENGES
//

// string showing only name and email of the entire contact
// for(let contact of melsBook.contacts) {
//     console.log(contact.toString());
// }

// calling on the method to find the entire contact by name
// console.log(melsBook.findContactByName("Jessica"));

// calling on the method to find contact by relation
// for of loop will stop at the first one --- finds first "sister" and breaks out of the loop
// for each will loop over ALL instances of "sister" ---- so Bailey would show up too
// console.log(melsBook.findContactsByRelation("sister"));

// calling on the contact that has that specific text (so moms phone number is the specific text)
// console.log(melsBook.searchContacts("313.969.8258"));

// ****PART TWO OF ADDRESS BOOK LAB*****
function display() {
let section = document.querySelector(".contact-container");
section.innerHTML = "";
let counter = 0;
for (let contact of melsBook.contacts) {
  let card = document.createElement("div");
  let name = document.createElement("p");
  name.innerText = `Name: ${contact.name}`;
  // card.append(name)
  // section.append(card);
  let email = document.createElement("p");
  email.innerText = `Email: ${contact.email}`;
  // card.append(email)
  // section.append(card);
  let phone = document.createElement("p");
  phone.innerText = `Phone: ${contact.phone}`;
  // card.append(phone)
  // section.append(card);
  let relation = document.createElement("p");
  relation.innerText = `Relation: ${contact.relation}`;
  // <i class="fas fa-trash"></i>
  let trash = document.createElement("i");
  trash.classList.add("fas", "fa-trash");
  counter++;
  card.append(name, email, phone, relation)
  section.append(card);
  card.setAttribute("class","cards");
  }
}
display();


let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
event.preventDefault();
const formData = new FormData(form);
// console.log(formData);
melsBook.add(formData.get("name"), formData.get("email"), formData.get("phone"), formData.get("relation"));
form.reset();
display();
});

