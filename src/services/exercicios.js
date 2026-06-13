class Service {

    Somar(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }

        if (isNaN(num1) || isNaN(num2)) {
            return "Enviar somente Números";
        }

        return num1 + num2;
    }

    Subtrair(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }

        if (isNaN(num1) || isNaN(num2)) {
            return "Enviar somente Números";
        }

        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }

        if (isNaN(num1) || isNaN(num2)) {
            return "Enviar somente Números";
        }

        return num1 * num2;
    }

    Dividir(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }

        if (isNaN(num1) || isNaN(num2)) {
            return "Enviar somente Números";
        }

        if (num2 == 0) {
            return "Não é possível dividir por zero";
        }

        return num1 / num2;
    }

    Potencia(num1, num2) {
        if (num1 === undefined || num2 === undefined) {
            return "Envie todos os campos!";
        }

        if (isNaN(num1) || isNaN(num2)) {
            return "Enviar somente Números";
        }

        return num1 ** num2;
    }

    Raiz(num1) {
        if (num1 === undefined) {
            return "Envie todos os campos!";
        }

        if (isNaN(num1)) {
            return "Enviar somente Números";
        }

        if (num1 < 0) {
            return "Não é possível calcular raiz real de número negativo";
        }

        return Math.sqrt(num1);
    }
}

export default new Service()