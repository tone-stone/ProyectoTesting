import { describe, it } from "mocha";
import { assert, expect } from "chai";

import { eliminarUsuarioAdministrador } from "../controladores/funcionesAdministrador.js";

import { administradorPrueba } from "../Schemas/administrador.js";
import { liderPrueba } from "../Schemas/lider.js";
import { usuarioEliminar } from "../Schemas/usuarioEliminar.js";

describe("5.	Como administrador, necesito eliminar usuarios del sistema", () => {
  it("a.	Usuario eliminado correctamente", () => {
    const usuario = administradorPrueba;
    const resultado = eliminarUsuarioAdministrador(usuario, usuarioEliminar);
    expect(resultado).to.equal(true);
  });

  it("b.	Error al intentar eliminar sin tener Rol Administrador", () => {
    const usuario = liderPrueba;
    assert.throws(
      () => eliminarUsuarioAdministrador(usuario, usuarioEliminar),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("c.	Error, Usuario no existe en el sistema", () => {
    const usuario = administradorPrueba;
    const usuarioAEliminar = {
      id: null,
      nombre: "prueba",
      password: "prueba",
      rol: "empleado",
    };
    assert.throws(
      () => eliminarUsuarioAdministrador(usuario, usuarioAEliminar),
      Error,
      "Usuario no existe"
    );
  });
});
