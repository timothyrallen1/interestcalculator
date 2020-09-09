import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import {Person } from '../person';
import {Card } from '../card';
import {Wallet } from '../wallet';

@Component({
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css']
})
export class MyinputComponent implements OnInit {
  
  angForm = new FormGroup({
    people: new FormArray([
      new FormControl(''),    
    ]),
    cards: new FormArray([
      new FormControl(''),
    ])
  });
  
get cards(): FormArray {
    return this.angForm.get('cards') as FormArray;
} 
get people(): FormArray {
  return this.angForm.get('people') as FormArray;
} 
addPersonField() { 
  this.people.push(new FormControl('')); 
}
addNameField() { 
  this.cards.push(new FormControl('')); 
}
deletePersonField(index: number) {
  if (this.people.length !== 1) { 
    this.people.removeAt(index); 
  }
}
deleteNameField(index: number) {
  if (this.cards.length !== 1) { 
    this.cards.removeAt(index); 
  }
}
onFormSubmit(): void {
  console.log(this.angForm);
  // for(let i = 0; i < this.cards.length; i++) {
  //   console.log(this.cards.at(i).value);
  // } 
}



  personForm = new FormGroup({
    name: new FormControl(''),
    numberOfWallets: new FormControl(''),
  });
  cardForm = new FormGroup({
    cardName: new FormControl(''),
    cardAmount: new FormControl(''),
  });
  
  public persons: Person[];
  //public cards: Card[];
  public wallets: Wallet[];

  constructor(private fb: FormBuilder) {
    this.persons = [];
    //this.cards = [];
    this.wallets= [];
    
   }
  
  ngOnInit(): void {
  }
  addPerson(personForm){
    let newPerson = new Person();
    console.log(newPerson);
    newPerson.name = personForm.value.name;
    newPerson.walletCount = personForm.value.numberOfWallets;
    newPerson.wallet = [];
    for(var i = 0; i < newPerson.walletCount; i++){
          newPerson.wallet.push(new Wallet());
    }
    this.persons.push(newPerson);
    console.log("person");
    console.log(this.persons);
  }
  addWallet(){
    this.wallets.push(new Wallet());
    console.log(this.wallets);
  }
  saveCard(wallet, card, person){
    let newCard = new Card();
    console.log("wallet");
    console.log(wallet);
    newCard.cardType = card.value.cardName;
    newCard.cardAmount = card.value.cardAmount;
    wallet.card = [];
    wallet.card.push(newCard);
    console.log(wallet);
    console.log(person);
  }
  addCard(wallet){
    console.log("add card");
    console.log(wallet);
    wallet.card.push(new Card());
  }
}
