import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Alert } from 'bootstrap';
import Table from 'react-bootstrap/Table';




export default function Formulario() {
  const [Nombre, SetNombre] = useState("");
  const [Apellido, SetApellido] = useState("");
  const [Contrasena, SetCon] = useState("");
  const [Email, SetEmail] = useState("");
  const [usuarios,setUsuarios] = useState([]);
  const [id,setId]=useState();
  const [editar,setEditar]=useState(false);



  const add = (e)=>{
    e.preventDefault();
    //secambia la ruta con la ip arrogada por la red o el 
    Axios.post("http://192.168.1.105:3001/create",{
      Nombre: Nombre,
      Apellido: Apellido,
      Email:Email,
      Contrasena:Contrasena
    }).then(()=>{
      limpiar();
      alert("USUARIO REGISTRADO");
    })
  };

  const Eliminar = (id) => {
    if (window.confirm("¿Está seguro de eliminar")) {
      Axios.delete(`http://192.168.1.105:3001/delete/${id}`).then(() => {
        const FTabla = usuarios.filter((KKS) => KKS.id !== id);
        setUsuarios(FTabla);
      });
    }
  };
  const update= (e)=>{
    e.preventDefault();
    Axios.put("http://192.168.1.105:3001/update",
      {
      id:id,
      Nombre:Nombre,
      Apellido:Apellido,
      Email:Email,
      Contrasena:Contrasena
    }).then((response)=>{
      getUsuarios();
      limpiar();
      alert(response.data);
    })
  }
  const limpiar =()=>{
    setEditar(false);
    SetNombre('');
    SetApellido('');
    SetEmail('');
    SetCon('');
    setId('');
  }
  const editarUsuario = (KKS)=>{
      setEditar(true);
      setId(KKS.id);
      SetNombre(KKS.Nombre);
      SetApellido(KKS.Apellido);
      SetCon(KKS.Contrasena);
      SetEmail(KKS.Emaill);
  }
  const getUsuarios = () =>{
    Axios.get("http://192.168.1.105:3001/usuarios").then((Response)=>{
      setUsuarios(Response.data);
    })
  }

  return (
    <>
    <Form>
      <Form.Group className="mb-3" x>
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={Email}  placeholder="Enter email" 
        onChange={(event)=>{
          SetEmail(event.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contrasena</Form.Label>
        <Form.Control 
        value={Contrasena}
        type="password" placeholder="Password" 
        onChange={(event)=>{
          SetCon(event.target.value)
        }}
        />
        <Row>
          <div>
            <br>
            </br>
          </div>
        <Col>
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
          value={Nombre}
          placeholder="Nombre" 
          onChange={(event)=>{
            SetNombre(event.target.value)
          }}/>
        </Col>
        <Col>
          <Form.Label>Apellido</Form.Label>
          <Form.Control 
          value={Apellido}
          placeholder="Apellido" 
          onChange={(event)=>{

            SetApellido(event.target.value)
          }}/>
        </Col>
        
      </Row>
          <div>
            <br>
            </br>
          </div>
      <Row>
        {
          editar?
          <div>
          
          <Button variant="dark" type="submit"
              onClick={update}>
              actualizr
          </Button>

          <Button variant="dark" type="submit"
              onClick={limpiar}>
              Cancelar
          </Button>
         
         </div>
        
        :
        <Button variant="dark" type="submit"
        onClick={add}>
          Guardar
        </Button>
        }
      </Row>
      </Form.Group>
        
    </Form>

       <Button variant="dark" type="submit"
        onClick={getUsuarios}>
          Listar
        </Button>
        
      <Table striped bordered hover>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Accion</th>
            <th>Accion</th>
            <th>Accion</th>
            
          </tr>
        </thead>
        <tbody>
          {usuarios.map((KKS)=>(
          <tr key={KKS.id}>
            <td>{KKS.Nombre}</td>
            <td> {KKS.Apellido}</td>
            <td> {KKS.Contrasena}</td>
            <td> {KKS.Emaill}</td>
            <td> <Button variant="info" onClick={
              
              ()=>{
                
              editarUsuario(KKS);
            }}>Editar</Button>{'  '}
            <Button variant="danger"
            onClick={
              
              ()=>{
                
              Eliminar(KKS.id);
            }}
            >Eliminar</Button></td>
          </tr>
          ))}
        </tbody>
      </Table>


        
    </>
  )
}

