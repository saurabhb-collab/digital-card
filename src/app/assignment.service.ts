import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

url:any="http://localhost:5000";

  constructor(private http:HttpClient) { }

  register=function(data):any{
   console.log(data);
   return this.http.post(this.url+"/register",data)
  }

  upload=function(up):any{
    console.log(up);
    return this.http.post(this.url+"/upload",up)
   }
   multiupload=function(mp):any{
    console.log(mp);
    return this.http.post(this.url+"/multipalupload",mp)
   }
   
  editdata=function(cid):any{
    console.log(cid);
    return this.http.get(this.url+"/editdata/"+cid)
   }
  
   updateData=function(id,ut):any{
     return this.http.put(this.url+"/updatedata/"+id,ut)
   }

 

  login=function(logdata):any{
    console.log(logdata);
    return this.http.post(this.url+"/login",logdata)
  }

  getuser=function():any{
    return this.http.get(this.url+"/getuser");
  }
  getcardinfo=function(id):any{
    return this.http.get(this.url+"/getCardInfo/"+id);
  }

  deleteRow=function(dr):any{
    console.log(dr)
    return this.http.post(this.url+"/deleteRow",dr)
  }
}
