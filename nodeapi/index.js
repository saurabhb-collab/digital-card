var express=require('express');
var sql=require('mysql');
var cors=require('cors');
var bodyparser=require('body-parser');
var multer = require('multer');
var app=express();


constring={
    host: 'localhost',
    user: 'root',
    password:'umbrella',
    database:'aim'
}

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

// File upload settings  
  const PATH = '../src/assets';

 let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, PATH);
    },
     filename: (req, file, cb) => {
      cb(null, `profile_${file.originalname}`)
     }
   });
   //for gallery images
   let storage1 = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, PATH);
    },
     filename: (req, file, cb) => {
      cb(null, `gallery_${file.originalname}`)
     }

   });
      let Multiupload = multer({storage: storage1});
      let Singleupload = multer({storage: storage});
  
    app.post('/upload',Singleupload.single('file'),function (req,res) {
          var file = req.file
          console.log(file.filename);
          addfile(file.filename)
          
       });

       app.post('/register',function(req,res){
        var d=req.body;
         console.log(d);
          var con=sql.createConnection(constring);
           addfile = function(fn,fn1){
            var myfilename = fn;
             con.query('INSERT INTO `card_details`(`fname`, `lname`, `mobile`, `email`, `username`,`password`,`Location`,`bussiness_name`,`bussiness_dec`,`profile_pic`) VALUES("'+d.fname+'","'+d.lname+'","'+d.mobile+'","'+d.email+'","'+d.username+'","'+d.psw+'","'+d.location+'","'+d.designation+'","'+d.about+'","'+myfilename+'")',function(err,result){
              if(err) throw err;
               res.send({"msg":"Registration Successful"}); 
               
             });
            }
          });
       app.post('/multipalupload',Multiupload.array('photos'),function (req,res) {
           var files = req.files;
           for(var i = 0; i < req.files.length; i++){
            let fileName = req.files[i].filename;
            //console.log(fileName)
               var con=sql.createConnection(constring);
              con.query("select MAX(cid) as cid from card_details",function(err,result1){
                if(err) throw err;
                 if (result1.length > 0){
                    console.log(result1[0].cid);
                     var cid = result1[0].cid;
                      con.query('INSERT INTO `gallery`(`cid`,`photo`) VALUES("'+cid+'","'+fileName+'")',function(err,result){
                       if(err) throw err;
                       console.log(result);
                     });
                   }
                 });
              }
              res.send({"msg":"Gallery uploeded"}); 
          });

      //File upload Setting End

app.post("/login", function(req,res){
 var d=req.body;
   console.log(d);
     var con=sql.createConnection(constring);
       con.query("select * from card_details where username='"+d.uname+"' and password='"+d.psw+"'", function(err,result){
     if(err) throw err;
      if(result.length>0){
         res.send({'successmsg':'Login Successfully'})
      }
       console.log(result);
     })
    })

app.get("/getuser",function(req,res){
   var con=sql.createConnection(constring);
    con.query("select * from card_details", function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    })

})
app.get("/editdata/:id",function(req,res){
    var id = req.params.id
    console.log(id);
    var con=sql.createConnection(constring);
     con.query("select * from card_details where cid ="+id, function(err,result){
         if(err) throw err;
         console.log(result);
         res.send(result);
     })
 
 })
 app.get("/getCardInfo/:id",function(req,res){
  var id = req.params.id
  var con=sql.createConnection(constring);
   con.query("select * from card_details where cid ="+id, function(err,result){
       if(err) throw err;
       console.log(result);
       res.send(result);
   })
 })

 app.put("/updatedata/:id",function(req,res){
    var id = req.params.id
    console.log(id)
    var d=req.body;
    console.log(d);
    addfile = function(fn,fn1){
        var myfilename = fn;
       
    var con=sql.createConnection(constring);
    //  con.query("update card_details set `fname`='"+d.fname+"',`fname`='"+d.lname+"',`mobile`='"+d.mobile+"',`email`='"+d.email+"',`username`='"+d.username+"',`password`='"+d.psw+"',`Location`='"+d.location+"',`bussiness_name`='"+d.designation+"',`bussiness_dec`='"+d.about+"',`profile_pic`='"+myfilename+"'  where cid ="+id, function(err,result){
    //      if(err) throw err;
    //      console.log(result);
    //      res.send(result);
    //  })
    }
 })


// app.post("/deleteRow",function(req,res){
//     var d=req.body;
//     //console.log(d);
//     var con=sql.createConnection(constring);
//     con.query("delete from tab where uid="+d.uid+"",function(err,result){
//         if(err)throw err; 
//           res.send({"deletesuccess":"Successfully Deleted"});
         
//         console.log(result);
//     })
// })

app.listen(5000,function(){
    console.log('Connected');
})