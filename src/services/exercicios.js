class Service {
    Somar(num1, num2) {
        if(isNaN(num1)){
            throw new Error("Informar somente números")
        }
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        return num1 * num2;
    }

    Dividir(num1, num2) {
        return num1 / num2;
    }
}

export default new Service()