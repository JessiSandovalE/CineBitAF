import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Usuarios } from "src/modulo/usuario.module";
import { UserService } from "src/app/Servicios/usuarios.service";
import { Router } from "@angular/router";

@Component({
  selector: "registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  people = { nombre: "", correo: "", password: "" };
  usuario: any;
  local = { nombre: "" };

  constructor(
    private builder: FormBuilder,
    private usuariosservice: UserService,
    private router: Router
  ) {}

  registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  ValidarUsuario(email, contrasena) {
    console.log(email);
    console.log(contrasena);

    this.usuariosservice
      .getUsuario(email)
      .then(result => {
        // this.productData = result;
        this.usuario = result;
        //console.log(result);
        console.log(this.usuario);
        this.CompararPasswords(contrasena, this.usuario[0]);
        //this.router.navigate(['/product-details/'+result._id]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  CompararPasswords(ingresado, leido) {
    console.log(ingresado, leido);

    localStorage.setItem("nombreUsuarioLogeado", leido.nombre);
    localStorage.setItem("correoUsuarioLogeado", leido.correo);

    if (ingresado == leido.password) {
      if (leido.role == "regular") {
        alert("Es un usuario regular");
        this.router.navigate(["/contenido"]);
      }
      if (leido.role == "admin") {
        alert("Es un Administrador");
        this.router.navigate(["/perfilAdmin"]);
      }
    } else {
      alert("Usuario o contraseña incorrecto, login failed");
    }
  }

  enviar(registerForm) {
    console.log(registerForm.name);
    this.people.nombre = registerForm.name;
    this.people.correo = registerForm.email;
    this.people.password = registerForm.password;
    console.log(this.people);
    this.usuariosservice.crearUsuarios(this.people).subscribe(response => {
      alert("Se creo el registro correctamente.");
    });
  }

  ngOnInit() {
    this.local.nombre = localStorage.getItem("nombreUsuarioLogeado");
  }
}
