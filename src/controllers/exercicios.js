import Service from "../services/exercicios.js"

class Controller {

    Somar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Somar(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({ erro: error.message })
        }
    }

    Subtrair(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Subtrair(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({ erro: error.message })
        }
    }

    Multiplicar(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Multiplicar(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({ erro: error.message })
        }
    }

    Dividir(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Dividir(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({ erro: error.message })
        }
    }

    Potencia(req, res) {
        try {
            const { num1, num2 } = req.body
            const resultado = Service.Potencia(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({ erro: error.message })
        }
    }

    Raiz(req, res) {
        try {
            const { num1 } = req.body
            const resultado = Service.Raiz(num1)

            res.status(200).send({ resultado })
        } catch (error) {
            res.status(500).send({ erro: error.message })
        }
    }

}

export default new Controller()