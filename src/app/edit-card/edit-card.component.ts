import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../assignment.service';
import {Router} from '@angular/router';
import { LocalStorageService} from 'angular-web-storage';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent  {
cardid:any
cardData:any
editForm: FormGroup
  constructor(private fb:FormBuilder, private sr:AssignmentService,private ar:ActivatedRoute, private r:Router, private st:LocalStorageService) {
    this.createForm();
   
     this.sr.editdata(this.ar.snapshot.params.id).subscribe(u=>{
      
      this.editForm=this.fb.group({
        fname:[u[0].fname,[Validators.compose([Validators.required,Validators.minLength(4)])]],
        lname:[u[0].lname,[Validators.compose([Validators.required,Validators.minLength(4)])]],
        mobile:[u[0].mobile,[Validators.required]],
        email:[u[0].email,[Validators.required]],
        username:[u[0].username,[Validators.compose([Validators.required,Validators.minLength(6)])]],
        psw:[u[0].password,[Validators.compose([Validators.required,Validators.minLength(6)])]],
        location:[u[0].Location,[Validators.required]],
        designation:[u[0].bussiness_name,[Validators.required]],
        about:[u[0].bussiness_dec,[Validators.required]],
        image:[null,[Validators.required]],
      })
    }) 
    
   }
   createForm=function(){
    this.editForm=this.fb.group({
      fname:[null,[Validators.compose([Validators.required,Validators.minLength(4)])]],
      lname:[null,[Validators.compose([Validators.required,Validators.minLength(4)])]],
      mobile:[null,[Validators.required]],
      email:[null,[Validators.required]],
      username:[null,[Validators.compose([Validators.required,Validators.minLength(6)])]],
      psw:[null,[Validators.compose([Validators.required,Validators.minLength(6)])]],
      location:[null,[Validators.required]],
      designation:[null,[Validators.required]],
      about:[null,[Validators.required]],
      image:[null,[Validators.required]],
    })
  }

 uploadProf=function(event){
  if(event.target.files.length>0){
      const file = event.target.files[0];
      this.image = file
      console.log(this.image)
    }
  }
  update = function(ut){
   
    //     const formData  = new FormData();
    //      formData.append('file',this.image);
    //        this.sr.updateData(ut).subscribe(a=>{console.log(a.msg)
    //          this.sr.upload(formData).subscribe(u=>console.log(u.msg)) 
    //           if(a.msg){
    //           console.log(a.msg)
    //         //this.r.navigateByUrl("/dashboard");
    //        }
    //     }) 
    }
}

