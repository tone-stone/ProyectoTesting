import { describe, it } from "mocha";
import { assert, expect } from "chai";

import { eliminarSucursalAdministrador } from "../controladores/funcionesAdministrador.js";

import { administradorPrueba } from "../Schemas/administrador.js";
import { sucursalPrueba } from "../Schemas/sucursal.js";
import { liderPrueba } from "../Schemas/lider.js";

describe("13.	Como administrador, necesito eliminar sucursales del sistema", () => {
  it("a.	Sucursal eliminada correctamente", () => {
    const usuario = administradorPrueba;
    const resultado = eliminarSucursalAdministrador(usuario, sucursalPrueba);
    expect(resultado).to.equal(true);
  });

  it("b.	Error al intentar eliminar sin tener Rol Administrador", () => {
    const usuario = liderPrueba;
    assert.throws(
      () => eliminarSucursalAdministrador(usuario, sucursalPrueba),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("c.	Error, Sucursal no existe en el sistema", () => {
    const usuario = administradorPrueba;
    const sucursal = {
      id: null,
      nombre: "Sucursal prueba",
      direccion: "Direccion Sucursal prueba",
    };
    assert.throws(
      () => eliminarSucursalAdministrador(usuario, sucursal),
      Error,
      "Sucursal no existe"
    );
  });
});
