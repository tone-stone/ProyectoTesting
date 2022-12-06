import { describe, it } from "mocha";
import { expect } from "chai";
import { administradorPrueba } from "../Schemas/administrador.js";
import { liderPrueba } from "../Schemas/lider.js";
import { empleadoPrueba } from "../Schemas/empleado.js";
import controlRoles from "../controladores/controlRoles.js";

describe("2.	Como Sistema, necesito un control de usuarios por roles, para limitar las opciones a utilizar. ", () => {
  it("a.	El rol usuario es Administrador", () => {
    const usuario = administradorPrueba;
    const resultado = controlRoles(usuario.rol);
    expect(resultado).to.equal(0);
  });

  it("b.	El rol usuario es Lider", () => {
    const usuario = liderPrueba;
    const resultado = controlRoles(usuario.rol);
    expect(resultado).to.equal(1);
  });

  it("c.	El rol usuario es Empleado", () => {
    const usuario = empleadoPrueba;
    const resultado = controlRoles(usuario.rol);
    expect(resultado).to.equal(2);
  });

  it("d.	Error cuando el rol de usuario no existe", () => {
    const usuario = undefined;
    const resultado = controlRoles(usuario?.rol);
    expect(resultado).to.equal(null);
  });
});
