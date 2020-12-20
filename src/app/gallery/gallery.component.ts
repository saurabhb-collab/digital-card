import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../assignment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent  {
urls=[];
uploadedFiles:Array<File>;
galleryForm: FormGroup
  constructor(private fb:FormBuilder,private sr:AssignmentService, private r:Router) {
    this.createForm();
   }
  createForm=function(){
    this.galleryForm=this.fb.group({
     
      image:[null,[
        Validators.required
      ]],
      
    })
  }
  uploadimages(event) {
    this.uploadedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                   reader.onload = (event:any) => {
                  this.urls.push(event.target.result); 
                }
                  reader.readAsDataURL(event.target.files[i]);
             }
           }
         }
         removeimage(index : number){
          this.urls.splice(index,1);
       }
        photoSubmit = function(e){
          const formData = new FormData();
          for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("photos", this.uploadedFiles[i], this.uploadedFiles[i].name);
         }
         console.log(formData)
                this.sr.multiupload(formData).subscribe(u=>console.log(u))
                this.r.navigateByUrl("/login");
          

     }
}
