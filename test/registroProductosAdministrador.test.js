import { describe, it } from "mocha";
import { assert, expect } from "chai";
import { adminCrearProducto } from "../controladores/funcionesAdministrador.js";
import { administradorPrueba } from "../Schemas/administrador.js";
import { empleadoPrueba } from "../Schemas/empleado.js";

describe("8.	Como Administrador, necesito poder dar de alta usuarios", () => {
  it("a.	Producto creado correctamente", () => {
    const usuario = administradorPrueba;
    const nuevoProducto = {
      nombre: "Producto nuevo",
      cantidad: 99,
      receta: true,
      sucursal: "sucursal nueva",
    };

    const resultado = adminCrearProducto(usuario, nuevoProducto);

    expect(resultado).to.be.true;
  });

  it("b.	Error si producto esta duplicado", () => {
    const usuario = administradorPrueba;
    const nuevoProducto = {
      nombre: "Producto prueba",
      receta: true,
      sucursal: "sucursalPrueba",
    };

    assert.throws(
      () => adminCrearProducto(usuario, nuevoProducto),
      Error,
      "Error producto duplicado"
    );
  });

  it("c.	Error al intentar crear sin tener Rol Administrador", () => {
    const usuario = empleadoPrueba;
    const nuevoProducto = {
      nombre: "Producto nuevo",
      cantidad: 99,
      sucursal: "sucursal nueva",
    };

    assert.throws(
      () => adminCrearProducto(usuario, nuevoProducto),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("d.	Error parámetros incorrectos (nombre, sucursal, receta)", () => {
    const usuario = administradorPrueba;
    const nuevoProducto = {
      nombre: "",
      cantidad: "",
      sucursal: "",
      receta: "",
    };

    assert.throws(
      () => adminCrearProducto(usuario, nuevoProducto),
      Error,
      "Nombre de producto, sucursal, estado de receta vacia"
    );
  });

  it("e.	Error por Usuario sin parametros suficientes", () => {
    const usuario = administradorPrueba;
    const nuevoProducto = {};

    assert.throws(
      () => adminCrearProducto(usuario, nuevoProducto),
      Error,
      "Faltan parametros"
    );
  });
});
