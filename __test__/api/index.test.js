import app from '../../src/index'
import request from 'supertest'
import { describe, it, expect } from '@jest/globals';

describe("Teste da API - Endpoint somar - POST /api/somar",() =>{
    it("CT01 - dois numeros positivos ", async ()=>{
        const body = {num1 : 1, num2: 2}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(3)
    })
    it("CT02 - dois numeros um negativo e um positivos ", async ()=>{
        const body = {num1 : -5, num2: 10}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })
    it("CT03 - dois numeros um positivos e um negativo ", async ()=>{
        const body = {num1 : 10, num2: -5}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })
    it("CT04 - dois numeros negativos ", async ()=>{
        const body = {num1 : -10, num2: -5}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-15)
    })
    it("CT05 - dois numeros fracionados ", async ()=>{
        const body = {num1 : 0.5, num2: 1.7}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(2.2)
    })
    it("CT06 - Uma letra e um numero ", async ()=>{
        const body = {num1 : "a", num2: 5}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Enviar somente Números")
    })
    it("CT07 -  Um numero e uma letra", async ()=>{
        const body = {num1 : 5, num2: "a"}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Enviar somente Números")
    })
    
    it("CT08 - dois numeros e o 1º é 0 ", async ()=>{
        const body = {num1 : 0, num2: 1}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(1)
    })
    it("CT09 - dois numeros e o 2º é 0 ", async ()=>{
        const body = {num1 : 1, num2: 0}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(1)
    })
    it("CT10 - Primeiro parametro vazio ", async ()=>{
        const body = {num1 : undefined, num2: 5}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Envie todos os campos!")
    })
    it("CT11 - Segundo parametro vazio ", async ()=>{
        const body = {num1 : 5, num2: undefined}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Envie todos os campos!")
    })
    it("CT12 - Dois parametros vazios ", async ()=>{
        const body = {num1 : undefined, num2: undefined}
        const response = await request(app).post("/api/somar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Envie todos os campos!")
    })
})

describe("Teste da API - Endpoint subtrair - POST /api/subtrair",() =>{
    it("CT13 - dois numeros positivos ", async ()=>{
        const body = {num1 : 10, num2: 5}
        const response = await request(app).post("/api/subtrair").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })
    it("CT14 - Um numero negativo e um positivo ", async ()=>{
        const body = {num1 : -5, num2: 10}
        const response = await request(app).post("/api/subtrair").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-15)
    })
    it("CT15 - Um numero positivo e um negativo ", async ()=>{
        const body = {num1 : 10, num2: -5}
        const response = await request(app).post("/api/subtrair").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(15)
    })
    it("CT16 - Dois numeros negativos ", async ()=>{
        const body = {num1 : -10, num2: -5}
        const response = await request(app).post("/api/subtrair").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-5)
    })
    it("CT17 - Com valor inválido ", async ()=>{
    const body = {num1 : "a", num2: 5}
        const response = await request(app).post("/api/subtrair").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Enviar somente Números")
    })
    it("CT18 - Sem valor no parametro ", async ()=>{
    const body = {num1 : undefined, num2: 5}
        const response = await request(app).post("/api/subtrair").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Envie todos os campos!")
    })
})

describe("Teste da API - Endpoint multiplicar - POST /api/multiplicar",() =>{
    it("CT19 - dois numeros positivos ", async ()=>{
        const body = {num1 : 2, num2: 5}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(10)
    })
    it("CT20 - Um numero negativo e um positivo ", async ()=>{
        const body = {num1 : -2, num2: 5}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-10)
    })
    it("CT21 - Um numero positivo e um negativo ", async ()=>{
        const body = {num1 : 5, num2: -5}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-25)
    })
    it("CT22 - Dois numeros negativos ", async ()=>{
        const body = {num1 : -5, num2: -5}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(25)
    })
    it("CT23 - Multilpicar por 0 ", async ()=>{
        const body = {num1 : 5, num2: 0}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(0)
    })
    it("CT24 - Valor inválido ", async ()=>{
        const body = {num1 : 5, num2: "a"}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Enviar somente Números")
    })
    it("CT25 - Parametros em valor ", async ()=>{
        const body = {num1 : undefined, num2: 5}
        const response = await request(app).post("/api/multiplicar").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Envie todos os campos!")
    })
})

describe("Teste da API - Endpoint dividir - POST /api/dividir",() =>{
    it("CT26 - dois numeros positivos ", async ()=>{
        const body = {num1 : 10, num2: 2}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })
    it("CT27 - Um numero negativo e um positivo ", async ()=>{
        const body = {num1 : -10, num2: 2}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-5)
    })
    it("CT28 - Um numero positivo e um positivo ", async ()=>{
        const body = {num1 : 10, num2: -2}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-5)
    })
    it("CT29 - Dois numeros negativos ", async ()=>{
        const body = {num1 : -10, num2: -2}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(5)
    })
    it("CT30 - Dividir por zero ", async ()=>{
        const body = {num1 : 10, num2: 0}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Não é possível dividir por zero")
    })
    it("CT31 - Valor inválido ", async ()=>{
        const body = {num1 : 10, num2: "a"}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Enviar somente Números")
    })
    it("CT32 - Parametro sem valor ", async ()=>{
        const body = {num1 : 10, num2: undefined}
        const response = await request(app).post("/api/dividir").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe("Envie todos os campos!")
    })
})

describe("Teste da API - Endpoint potencia - POST /api/potencia",() =>{
    it("CT33 - dois numeros positivos ", async ()=>{
        const body = {num1 : 2, num2: 3}
        const response = await request(app).post("/api/potencia").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(8)
    })
    it("CT34 - Um numero negativo e um numero positivo ", async ()=>{
        const body = {num1 : -2, num2: 3}
        const response = await request(app).post("/api/potencia").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(-8)
    })
    it("CT35 - Segundo parametro zero ", async ()=>{
        const body = {num1 : 5, num2: 0}
        const response = await request(app).post("/api/potencia").send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body.resultado).toBe(1)
    })
})
