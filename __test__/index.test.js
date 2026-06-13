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
        const result = Service.Somar(undefined, 10);
        expect(result).toBe("Envie todos os campos!");
    })
    it("CT11 - Chamar a função somar sem o segundo parâmetro retornar 'Envie todos os campos!'.", () => {
        const result = Service.Somar(10, undefined);
        expect(result).toBe("Envie todos os campos!");
    })
    it("CT12 - Chamar a função somar sem os dois parâmetro retornar 'Envie todos os campos!'.", () => {
        const result = Service.Somar(undefined, undefined);
        expect(result).toBe("Envie todos os campos!");
    })


})



describe("Testes para Função Subtrair", () => {

    it("CT13 - Chamar a função subtrair, e enviar como primeiro parametro 10, como segundo parametro 5 e retornar 5", () => {
        const result = Service.Subtrair(10, 5);
        expect(result).toBe(5);
    });

    it("CT14 - Chamar a função subtrair, e enviar como primeiro parametro -5, como segundo parametro 10 e retornar -15", () => {
        const result = Service.Subtrair(-5, 10);
        expect(result).toBe(-15);
    });

    it("CT15 - Chamar a função subtrair, e enviar como primeiro parametro 10, como segundo parametro -5 e retornar 15", () => {
        const result = Service.Subtrair(10, -5);
        expect(result).toBe(15);
    });

    it("CT16 - Chamar a função subtrair, e enviar como primeiro parametro -10, como segundo parametro -5 e retornar -5", () => {
        const result = Service.Subtrair(-10, -5);
        expect(result).toBe(-5);
    });

    it("CT17 - Chamar a função subtrair com valor inválido", () => {
        const result = Service.Subtrair("a", 1);
        expect(result).toBe("Enviar somente Números");
    });

    it("CT18 - Chamar a função subtrair sem parâmetros", () => {
        const result = Service.Subtrair(undefined, undefined);
        expect(result).toBe("Envie todos os campos!");
    });

});

describe("Testes para Função Multiplicar", () => {

    it("CT19 - Chamar a função multiplicar, e enviar como primeiro parametro 2, como segundo parametro 5 e retornar 10", () => {
        const result = Service.Multiplicar(2, 5);
        expect(result).toBe(10);
    });

    it("CT20 - Chamar a função multiplicar, e enviar como primeiro parametro -2, como segundo parametro 5 e retornar -10", () => {
        const result = Service.Multiplicar(-2, 5);
        expect(result).toBe(-10);
    });

    it("CT21 - Chamar a função multiplicar, e enviar como primeiro parametro 2, como segundo parametro -5 e retornar -10", () => {
        const result = Service.Multiplicar(2, -5);
        expect(result).toBe(-10);
    });

    it("CT22 - Chamar a função multiplicar, e enviar como primeiro parametro -2, como segundo parametro -5 e retornar 10", () => {
        const result = Service.Multiplicar(-2, -5);
        expect(result).toBe(10);
    });

    it("CT23 - Chamar a função multiplicar por zero", () => {
        const result = Service.Multiplicar(10, 0);
        expect(result).toBe(0);
    });

    it("CT24 - Chamar a função multiplicar com valor inválido", () => {
        const result = Service.Multiplicar("a", 1);
        expect(result).toBe("Enviar somente Números");
    });

    it("CT25 - Chamar a função multiplicar sem parâmetros", () => {
        const result = Service.Multiplicar(undefined, undefined);
        expect(result).toBe("Envie todos os campos!");
    });

});

describe("Testes para Função Dividir", () => {

    it("CT26 - Chamar a função dividir, e enviar como primeiro parametro 10, como segundo parametro 2 e retornar 5", () => {
        const result = Service.Dividir(10, 2);
        expect(result).toBe(5);
    });

    it("CT27 - Chamar a função dividir, e enviar como primeiro parametro -10, como segundo parametro 2 e retornar -5", () => {
        const result = Service.Dividir(-10, 2);
        expect(result).toBe(-5);
    });

    it("CT28 - Chamar a função dividir, e enviar como primeiro parametro 10, como segundo parametro -2 e retornar -5", () => {
        const result = Service.Dividir(10, -2);
        expect(result).toBe(-5);
    });

    it("CT29 - Chamar a função dividir, e enviar como primeiro parametro -10, como segundo parametro -2 e retornar 5", () => {
        const result = Service.Dividir(-10, -2);
        expect(result).toBe(5);
    });

    it("CT30 - Chamar a função dividir por zero", () => {
        const result = Service.Dividir(10, 0);
        expect(result).toBe("Não é possível dividir por zero");
    });

    it("CT31 - Chamar a função dividir com valor inválido", () => {
        const result = Service.Dividir("a", 2);
        expect(result).toBe("Enviar somente Números");
    });

    it("CT32 - Chamar a função dividir sem parâmetros", () => {
        const result = Service.Dividir(undefined, undefined);
        expect(result).toBe("Envie todos os campos!");
    });

});

describe("Testes para Função Potencia", () => {

    it("CT49 - Chamar a função potencia, e enviar como primeiro parametro 2, como segundo parametro 3", () => {
        const result = Service.Potencia(2, 3);
        expect(result).toBe(8);
    });

    it("CT50 - Chamar a função potencia, e enviar como primeiro parametro -2, como segundo parametro 3", () => {
        const result = Service.Potencia(-2, 3);
        expect(result).toBe(-8);
    });

    it("CT51 - Chamar a função potencia, e enviar como primeiro parametro 5, como segundo parametro 0", () => {
        const result = Service.Potencia(5, 0);
        expect(result).toBe(1);
    });

    it("CT52 - Chamar a função potencia, e enviar como primeiro parametro 0, como segundo parametro 5", () => {
        const result = Service.Potencia(0, 5);
        expect(result).toBe(0);
    });

    it("CT53 - Chamar a função potencia com valor inválido", () => {
        const result = Service.Potencia("a", 2);
        expect(result).toBe("Enviar somente Números");
    });

    it("CT54 - Chamar a função potencia sem parâmetros", () => {
        const result = Service.Potencia(undefined, undefined);
        expect(result).toBe("Envie todos os campos!");
    });

});

describe("Testes para Função Raiz", () => {

    it("CT55 - Chamar a função raiz, e enviar como parametro 25", () => {
        const result = Service.Raiz(25);
        expect(result).toBe(5);
    });

    it("CT56 - Chamar a função raiz, e enviar como parametro 0", () => {
        const result = Service.Raiz(0);
        expect(result).toBe(0);
    });

    it("CT57 - Chamar a função raiz, e enviar como parametro 2", () => {
        const result = Service.Raiz(2);
        expect(result).toBeCloseTo(1.41421356, 8);
    });

    it("CT58 - Chamar a função raiz, e enviar como parametro -4", () => {
        const result = Service.Raiz(-4);
        expect(result).toBe("Não é possível calcular raiz real de número negativo");
    });

    it("CT59 - Chamar a função raiz com valor inválido", () => {
        const result = Service.Raiz("a");
        expect(result).toBe("Enviar somente Números");
    });

    it("CT60 - Chamar a função raiz sem parâmetro", () => {
        const result = Service.Raiz(undefined);
        expect(result).toBe("Envie todos os campos!");
    });

});

