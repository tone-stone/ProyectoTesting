import { describe, it } from "mocha";
import { assert, expect } from "chai";

import { eliminarProductoAdministrador } from "../controlador/funcionesAdministrador.js";

import { administradorPrueba } from "../Schemas/administrador.js";
import { productoPrueba } from "../Schemas/producto.js";
import { liderPrueba } from "../Schemas/lider.js";

describe("10.	Como administrador, necesito eliminar productos del sistema", () => {
  it("a.	Producto eliminado correctamente", () => {
    const usuario = administradorPrueba;
    const resultado = eliminarProductoAdministrador(usuario, productoPrueba);
    expect(resultado).to.equal(true);
  });

  it("b.	Error al intentar eliminar sin tener Rol Administrador", () => {
    const usuario = liderPrueba;
    assert.throws(
      () => eliminarProductoAdministrador(usuario, productoPrueba),
      Error,
      "Su rol no cuenta con el permiso necesario"
    );
  });

  it("c.	Error, no existe el Producto en el sistema", () => {
    const usuario = administradorPrueba;
    const producto = {
      id: null,
      nombre: "prueba",
      precio: 100,
      cantidad: 10,
      sucursal: "sucursal nueva",
    };
    assert.throws(
      () => eliminarProductoAdministrador(usuario, producto),
      Error,
      "Producto no existe"
    );
  });
});
