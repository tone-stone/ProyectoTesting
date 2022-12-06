import { describe, it } from "mocha";
import { assert, expect } from "chai";
import registroUsuario from "../controladores/registroUsuario.js";

describe("1.	Como usuario, necesito iniciar sesión en el sistema con un nombre de usuario y contraseña", () => {
  it("a.	Si esta registrado", () => {
    const usuario = {
      nombre: "prueba",
      password: "prueba",
    };
    const resultado = registroUsuario(usuario);

    expect(resultado).to.be.true;
  });

  it("b.	Error cuando el nombre de usuario o la contraseña están vacíos", () => {
    const usuario = {
      nombre: "prueba",
      password: "",
    };
    assert.throws(
      () => registroUsuario(usuario),
      Error,
      "usuario o la contraseña están vacíos"
    );
  });

  it("c.	Error cuando el usuario es incorrecto", () => {
    const usuario = {
      nombre: "prueba1",
      password: "prueba",
    };
    const resultado = registroUsuario(usuario);
    expect(resultado).to.be.false;
  });

  it("d.	Error con Contraseña incorrecta", () => {
    const usuario = {
      nombre: "prueba",
      password: "prueba1",
    };
    const resultado = registroUsuario(usuario);
    expect(resultado).to.be.false;
  });
  
  it("e.	Error por Usuario sin parametros suficientes", () => {
    const usuario = {};

    const resultado = registroUsuario(usuario);

    expect(resultado).to.be.false;
  });
});
