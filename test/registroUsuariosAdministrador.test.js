import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { adminCrearUsuario } from "../controladores/funcionesAdministrador.js";
import { administradorPrueba } from "../Schemas/administrador.js";
import { empleadoPrueba } from "../Schemas/empleado.js";

describe("3.	Como Administrador, necesito poder dar de alta usuarios", () => {
  it("a.	Usuario creado correctamente", () => {
    const usuario = administradorPrueba;
    const nuevoUsuario = {
      nombre: "Nuevo Usuario",
      password: "new",
      email: "nuevousuario@gmal.com",
      rol: "empleado",
    };
    const resultado = adminCrearUsuario(usuario, nuevoUsuario);

    expect(resultado).to.be.true;
  });

  it("b.	Error si usuario esta duplicado", () => {
    const usuario = administradorPrueba;
    const nuevoUsuario = {
      nombre: "prueba",
      password: "prueba",
    };

    assert.throws(
      () => adminCrearUsuario(usuario, nuevoUsuario),
      Error,
      "Error usuario duplicado"
    );
  });

  it("c.	Error al intentar crear sin tener Rol Administrador", () => {
    const usuario = empleadoPrueba;
    const nuevoUsuario = {
      nombre: "Nuevo Usuario",
      password: "nuevousuario",
    };

    assert.throws(
      () => adminCrearUsuario(usuario, nuevoUsuario),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("d.	Error parámetros incorrectos.", () => {
    const usuario = administradorPrueba;
    const nuevoUsuario = {
      nombre: "",
      password: "",
      rol: "",
    };

    assert.throws(
      () => adminCrearUsuario(usuario, nuevoUsuario),
      Error,
      "Nombre de usuario o contraseña vacia"
    );
  });
  
  it("e.	Error por Usuario sin parametros suficientes", () => {
    const usuario = administradorPrueba;
    const nuevoUsuario = {};

    assert.throws(
      () => adminCrearUsuario(usuario, nuevoUsuario),
      Error,
      "Faltan parametros"
    );
  });
});
