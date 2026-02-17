import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/contact';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {
  idContact: number | undefined;
  contact: Contact | undefined;
  private routerSub!: Subscription;
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // snapshot method
    this.idContact = this.route.snapshot.params['id'];    
    this.contact = this.contactService.getContactById(this.idContact!);
    console.log(this.contact);
    
    // observable method
    // this.routerSub = this.route.params.subscribe(params => {
    //   const id = params['id'];
    //   if (id) { // check if id is not null or undefined
    //     this.idContact = +id; // Convertir en nombre
    //   }
    //   this.contact = this.contactService.getContactById(this.idContact!);
    //   console.log("contact ", this.contact?.name);
    // });
    
  }

  goToContacts(){
    this.router.navigate(['/contacts']);
  }

  

}
