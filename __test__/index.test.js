import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';

describe("Testes para Função Somar", () => {

    it("CT01 - Deve somar dois numeros positivos 2 e 1, retornar 3", () => {
        const result = Service.Somar(2, 2);
        expect(result).toBe(4);
    })

    it("CT99 - Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar("a", -1);
        expect(result).toBe("Informe apenas números");
    })

    it("CT99 - Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2, -1);
        expect(result).toBe(-3);
    })

})

describe("Testes parar função Sub", () => {
    
    it("Deve subtrair dois numeros positivos, 2 e 1, retonar 1", () => {
        const result = Service.Subtrair(2, 1)
        expect(result).toBe(1);
    })

})

describe("Testes para a função Div", () => {

    it("Deve dividir dois numeros positivos, 2 e 2, retornar 1", () => {
        const result = Service.Dividir(2,2)
        expect(result).toBe(1);
    })

})

describe("Testes para função Mult", () => {

    it("Deve multiplicar dois numeros positivos, 2 e 2, retornar 4", () => {
        const result = Service.Multiplicar(2, 2);
        expect(result).toBe(4);
    })

})