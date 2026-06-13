import { describe, it, expect } from '@jest/globals';
import Service from '../src/services/exercicios.js';

describe("Testes para Função Somar", () => {

    it("CT01 - Chamar a função somar, e enviar como primeiro parametro 2, como segundo parametro 95 e retornar 97", () => {
        const result = Service.Somar(2, 95);
        expect(result).toBe(97);
    })
    it("CT02 -  Chamar a função somar, e enviar como primeiro parametro -5, como segundo parametro 10 e retornar 5", () => {
        const result = Service.Somar(-5, 10);
        expect(result).toBe(5);
    })

    it("C03 - Chamar a função somar, e enviar como primeiro parametro 10, como segundo parametro -5 e retornar 5", () => {
        const result = Service.Somar(10, -5);
        expect(result).toBe(5);
    })

    it("CT04 - Chamar a função somar, e enviar como primeiro parametro -5, como segundo parametro -10 e retornar -15", () => {
        const result = Service.Somar(-10, -5);
        expect(result).toBe(-15);
    })
    it("CT05 - Chamar a função somar, e enviar como primeiro parametro 0.5, como segundo parametro 1.7 e retornar 2.2", () => {
        const result = Service.Somar(0.5, 1.7);
        expect(result).toBe(2.2);
    })
    it("CT06 -Chamar a função somar, e enviar como primeiro parametro 'a', como segundo parametro 1 retorna 'Enviar Somente números'.", () => {
        const result = Service.Somar("a", 1);
        expect(result).toBe("Enviar somente Números");
    })
    it("CT07 -Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 'a' retorna 'Enviar Somente números'.", () => {
        const result = Service.Somar(1, "a");
        expect(result).toBe("Enviar somente Números");
    })

    it("CT08 - Chamar a função somar, e enviar como primeiro parametro 0, como segundo parametro 1 retorna 1", () => {
        const result = Service.Somar(0, 1);
        expect(result).toBe(1);
    })
    it("CT09 - Chamar a função somar, e enviar como primeiro parametro 1, como segundo parametro 0 retorna 1", () => {
        const result = Service.Somar(1, 0);
        expect(result).toBe(1);
    })
    it("CT10 - Chamar a função somar sem o primeiro parâmetro retornar 'Envie todos os campos!'.", () => {
        const result = Service.Somar("", 10);
        expect(result).toBe("Envie todos os campos!");
        it("CT11 - Chamar a função somar sem o segundo parâmetro retornar 'Envie todos os campos!'.", () => {
            const result = Service.Somar(10, "");
            expect(result).toBe("Envie todos os campos!");
        })
        it("CT12 - Chamar a função somar sem os dois parâmetro retornar 'Envie todos os campos!'.", () => {
            const result = Service.Somar("", "");
            expect(result).toBe("Envie todos os campos!");
        })


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
            const result = Service.Dividir(2, 2)
            expect(result).toBe(1);
        })

    })

    describe("Testes para função Mult", () => {

        it("Deve multiplicar dois numeros positivos, 2 e 2, retornar 4", () => {
            const result = Service.Multiplicar(2, 2);
            expect(result).toBe(4);
        })

    })