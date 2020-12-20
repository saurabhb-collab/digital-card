import { Component, Inject, Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../assignment.service';
import {Router} from '@angular/router'; 
import { LocalStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl:'login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent {
   loginForm:FormGroup
   showmsg:false;
   errmsg:any;
   successmsg1:false;

  createFrom=function(){
     this.loginForm=this.fb.group({
      uname:[null,[Validators.required]],
      psw:[null,[Validators.required]]
    })
  }
  loginsubmit=function(logindata){
    let store =  this.st.set("Username", logindata.uname); 
      this.sr.login(logindata).subscribe(e=>{
        console.log(e.successmsg)
         if( e.successmsg && store != ''){
           this.rt.navigateByUrl("/dashboard")
       } else {
            this.errmsg = 'Login Fail'
            this.loginForm.reset();
         } 
       }); 
      }
 

  constructor(private fb: FormBuilder, private sr:AssignmentService, private rt:Router,   private st:LocalStorageService) { 
    this.createFrom();
  }
}
