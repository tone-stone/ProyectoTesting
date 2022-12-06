import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { adminCrearSucursal } from "../controladores/funcionesAdministrador.js";
import { administradorPrueba } from "../Schemas/administrador.js";
import { empleadoPrueba } from "../Schemas/empleado.js";

describe("11.	Como Administrador, necesito poder dar de alta sucursales", () => {
  it("a.	Sucursal creada correctamente", () => {
    const usuario = administradorPrueba;
    const nuevaSucursal = {
      nombre: "Sucursal nueva",
      direccion: "Direccion Sucursal nueva",
    };

    const resultado = adminCrearSucursal(usuario, nuevaSucursal);

    expect(resultado).to.be.true;
  });

  it("b.	Error si Sucursal esta duplicada", () => {
    const usuario = administradorPrueba;
    const nuevaSucursal = {
      nombre: "Sucursal prueba",
      direccion: "Direccion Sucursal prueba",
    };

    assert.throws(
      () => adminCrearSucursal(usuario, nuevaSucursal),
      Error,
      "Error sucursal duplicada"
    );
  });

  it("c.	Error al intentar crear sin tener Rol ", () => {
    const usuario = empleadoPrueba;
    const nuevaSucursal = {
      nombre: "Sucursal nueva",
      direccion: "Direccion Sucursal nueva",
    };

    assert.throws(
      () => adminCrearSucursal(usuario, nuevaSucursal),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("d.	Error parámetros incorrectos (nombre, dirección)", () => {
    const usuario = administradorPrueba;
    const nuevaSucursal = {
      nombre: "",
      direccion: "",
    };

    assert.throws(
      () => adminCrearSucursal(usuario, nuevaSucursal),
      Error,
      "Nombre de sucursal o direccion estan vacia"
    );
  });

  it("e.	Error por Sucursal sin parámetros suficientes", () => {
    const usuario = administradorPrueba;
    const nuevaSucursal = {};

    assert.throws(
      () => adminCrearSucursal(usuario, nuevaSucursal),
      Error,
      "Faltan parametros"
    );
  });
});
