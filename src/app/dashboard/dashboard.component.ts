import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import {AssignmentService} from '../assignment.service';  
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
   
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  /*  Bootstrap Popup */
  popoverTitle = 'Confirm';
  popoverMessage = 'Are you sure you want to delete this item?';
  confirmClicked = false;
  cancelClicked = false;
  /*  Bootstrap Popup */

  getuser=""; 
  users="";
  searchText;
  errmsg:false;
  successmsg:false;


 constructor(private st:LocalStorageService, private sr: AssignmentService,private rt:Router){ 
   this.getuser=this.st.get("Username"); 
    this.sr.getuser().subscribe(u=>{this.users=u})  

  
  }
   deleteRow=function(e){
     this.sr.deleteRow(e).subscribe(e=>{
       if(e.deletesuccess){
         this.successmsg=true;        
       } 
        this.getuser=this.st.get("Username"); 
         this.sr.getuser().subscribe(u=>{
          this.users=u;
        })  
      })
     }
     logout = function(){
       this.st.remove("cid")
       this.st.remove("Username")
       this.rt.navigateByUrl("/login")
     }
     MakeCard = function(){
      this.rt.navigateByUrl("/Card")
     }
   }
