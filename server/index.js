const express = require("express");
const app= express();
const mysql=require("mysql");
const cors = require ('cors');




app.use(cors());
app.use(express.json());
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'pwa'
});
app.post('/create',(req,res)=>{
    const Nombre=req.body.Nombre;
    const Apellido=req.body.Apellido;
    const Email=req.body.Email;
    const Contrasena=req.body.Contrasena;
    db.query('INSERT INTO formul(Nombre, Apellido, Emaill, Contrasena) VALUES (?,?,?,?)', [Nombre,Apellido,Email,Contrasena],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Usuario registrado')
        }
    }
    
    )
});
app.put('/update',(req,res)=>{
    const id=req.body.id;
    const Nombre=req.body.Nombre;
    const Apellido=req.body.Apellido;
    const Email=req.body.Email;
    const Contrasena=req.body.Contrasena;
    db.query('UPDATE formul SET nombre=?, contrasena=?, emaill=?,apellido=? WHERE id=?',
    [Nombre,Contrasena,Email,Apellido,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Usuario actualizado');
        }
    })
})
app.delete('/delete/:id',(req,res)=>{

    


    const id = req.params.id;

    console.log(id);
    db.query('DELETE FROM formul WHERE id = ?',
    id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Usuario eliminado');
        }
    }
    )
});
app.get('/usuarios',(req,res)=>{
    db.query('SELECT * FROM formul',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
});
app.listen(3001, ()=>{
    console.log("Corriendo En el puerto 3001");



});