import { Injectable } from '@angular/core';
import { CONTACTS } from '../shared/contacts';
import { Contact } from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = CONTACTS
  constructor() { }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  deleteContactById(id: number): void{
    // this.contacts = this.contacts.filter(contact => contact.id !== id);
    let index = this.contacts.findIndex(contact => contact.id === id);
    if(index !== -1){
      this.contacts.splice(index, 1);
    }
  }
}
