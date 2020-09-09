import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  templateUrl: './mycards.component.html',
  styleUrls: ['./mycards.component.css']
})
export class MycardsComponent implements OnInit {
  name = 'Angular';
  
  myForm: FormGroup;
  personForm: FormGroup;
  cardTypeList: any = ['Visa', 'Mastercard' , 'Discover']

  constructor(private fb:FormBuilder) {

    this.personForm = this.fb.group({
      myForm: ''
    })

    // this.myForm = this.fb.group({
    //   name: [''],
    //   cards: this.fb.array([]),
    //   quantities: this.fb.array([]) ,
    //   wallets: this.fb.group({
    //     walletname: [''],
    //     cards2: this.fb.array([])
    //   })
    // });
    this.myForm = this.fb.group({
      name: [''],
      wallets: this.fb.array([])
    })
  }
  
  cards() : FormArray {
    //console.log(this.myForm.get("cards") as FormArray);
    //let ta = this.myForm.get("wallets.controls.cards") as FormArray;
    console.log("TA");
    //ta = ta.controls;
    console.log(this.myForm.get('wallets')['controls']);
    //this.myForm.get('wallet').get('cards');
    return this.myForm.get('wallets')['controls'] as FormArray
  }
  cards2() : FormArray {
    return this.myForm.get("wallets.cards") as FormArray
  }
  quantities() : FormArray {
    return this.myForm.get("quantities") as FormArray
  }
  wallets() : FormArray { 
    //console.log(this.myForm.get("wallets") as FormArray);
    return this.myForm.get("wallets") as FormArray
  } 
  newWallet(): FormGroup {
    return this.fb.group({
      walletname: '',
      cards: this.fb.array([])
    })
  }  
  newCard(): FormGroup {
    return this.fb.group({
      cardname: '',
      amount: ''
    })
  }
  addWallet() {
    this.wallets().push(this.newWallet());
  } 
  addCard(myForm) {
    
    console.log("in add card");
    console.log(myForm);
    myForm.push(this.newCard());
  } 

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
  
  newCard2(): FormGroup {
    return this.fb.group({
      name2: '',
      amount2: '',
    })
  }
  
  addCard2() {
    this.cards2().push(this.newCard2());
  } 
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
  removeCard2(i:number) {
    this.cards2().removeAt(i);
  }
  removeCard(i:number) {
    this.cards().removeAt(i);
  }
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.myForm.value);
  }


  ngOnInit(): void {
    
  }
  

}
