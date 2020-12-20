import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {AssignmentService} from '../assignment.service'; 
import{ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-card-maker',
  templateUrl: './card-maker.component.html',
  styleUrls: ['./card-maker.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardMakerComponent  {
    fname:any 
    lname:any
    mobile:any
    email:any
    location:any
    designation:any
    about:any
    prof_pic:any

    coinwallet: string[] = ['Personal','Photos'];
    selectedwallet = this.coinwallet[0];
  constructor(private sr: AssignmentService,private ar:ActivatedRoute,private r:Router) {
     this.sr.getcardinfo(this.ar.snapshot.params.id).subscribe(u=>{
         console.log(u)
        this.fname = u[0].fname;
        this.lname = u[0].lname;
        this.mobile = u[0].mobile;
        this.email = u[0].email;
        this.location = u[0].Location;
        this.designation = u[0].bussiness_name;
        this.about = u[0].bussiness_dec;
        this.prof_pic = u[0].profile_pic;
      }) 
   }
  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }


}
