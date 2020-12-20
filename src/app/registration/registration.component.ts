import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../assignment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

registrationForm: FormGroup
msg:any;
showmsg=false;
image1:any
uploadedFiles:Array<File>;
createForm=function(){
  this.registrationForm=this.fb.group({
    fname: [null,[Validators.compose([
      Validators.required,Validators.minLength(4)
    ])]],
    lname:[null,[Validators.compose([
      Validators.required,Validators.minLength(4)
    ])]],
    mobile:[null,[
       Validators.required
    ]],
    email:[null,[
       Validators.required
    ]],
    username:[null,[Validators.compose([
      Validators.required,Validators.minLength(6)
    ])]],
    psw:[null,[Validators.compose([
      Validators.required,Validators.minLength(6)
    ])]],
    location:[null,[
       Validators.required
    ]],
    designation:[null,[
      Validators.required
    ]],
    about:[null,[
      Validators.required
    ]],
    image:[null,[
      Validators.required
    ]],
    
  })
}
uploadProf=function(event){
  if(event.target.files.length>0){
      const file = event.target.files[0];
      this.image = file
      console.log(this.image)
  }
}

  registersubmit=function(rt){
   console.log(rt);
    const formData  = new FormData();
       formData.append('file',this.image);
       this.sr.upload(formData).subscribe(u=>console.log(u)) 
         this.sr.register(rt).subscribe(a=>{console.log(a.msg)
            if(a.msg){
          this.showmsg=true;
          this.r.navigateByUrl("/gallery");
           }
        }) 
       }

  constructor(private fb:FormBuilder, private sr:AssignmentService, private r:Router) { 
    this.createForm();
  }

  goLogin = function(){
    this.r.navigateByUrl("/login");
  }

}
