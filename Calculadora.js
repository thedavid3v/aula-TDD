// Definição da classe Calculadora
class Calculadora {
    // Campo privado para armazenar o resultado, utilizando # para tornar a variável privada
    #resultado;

    // Construtor da classe que inicializa o resultado como 0
    constructor() {
        this.#resultado = 0; // Inicia o valor do resultado como 0
    }

    // Método getter para acessar o valor de #resultado
    get resultado() {
        return this.#resultado; // Retorna o valor atual do campo privado #resultado
    }

    // Método setter para alterar o valor de #resultado
    set resultado(numero) {
        // Verifica se o valor passado é uma string
        if (typeof numero == 'string') {
            numero = numero - 0; // Tenta converter a string em número subtraindo 0 (truque comum em JavaScript)
        }

        // Verifica se a conversão falhou e o valor não é um número
        if (isNaN(numero)) {
            // Lança um erro se o valor não for um número válido
            throw new TypeError("O argumento deve ser um número válido");
        }

        // Atribui o valor convertido ao campo privado #resultado
        this.#resultado = numero;
    }

    // Método para somar um número ao resultado atual
    soma(numero) {
        // Verifica se o valor passado é uma string
        if (typeof numero == 'string') {
            numero = numero - 0; // Tenta converter a string em número subtraindo 0 (truque comum em JavaScript)
        }

        // Verifica se a conversão falhou e o valor não é um número
        if (isNaN(numero)) {
            // Lança um erro se o valor não for um número válido
            throw new TypeError("O argumento deve ser um número válido");
        }

        // Atualiza o resultado somando o número passado
        this.#resultado += numero;
    }
}

// Testes utilizando a biblioteca de testes Jest
describe("Funções de calculadora", () => {

    // Teste para garantir que uma nova instância de Calculadora é criada corretamente
    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora(); // Cria uma nova instância da classe Calculadora
        expect(calculadora).toBeDefined(); // Verifica se a calculadora foi criada
        expect(calculadora.resultado).toBeDefined(); // Verifica se o campo resultado existe
        expect(typeof calculadora.resultado).toBe("number"); // Verifica se o tipo de resultado é um número
        expect(calculadora.resultado).toBe(0); // Verifica se o valor inicial de resultado é 0
    });

    // Teste para verificar se o getter do resultado funciona corretamente
    test("Obtém resultado", () => {
        const calculadora = new Calculadora(); // Cria uma nova instância da classe Calculadora
        expect(calculadora.resultado).toBeDefined(); // Verifica se o campo resultado existe
        expect(typeof calculadora.resultado).toBe("number"); // Verifica se o tipo de resultado é um número
    });

    // Teste para verificar se o setter do resultado trata corretamente diferentes tipos de valores
    it('Atribui um novo valor à calculadora', () => {
        const calculadora = new Calculadora(); // Cria uma nova instância da classe Calculadora

        // Verifica se passar uma string não numérica ao setter lança um TypeError
        expect(() => calculadora.resultado = "texto").toThrow(TypeError);

        // Verifica se a mensagem de erro lançada está correta
        expect(() => calculadora.resultado = "texto").toThrow("O argumento deve ser um número válido");

        // Verifica se o valor de resultado ainda é 0 após tentar atribuir uma string inválida
        expect(calculadora.resultado).toBe(0);

        // Verifica se uma string numérica é convertida corretamente e atribuída ao resultado
        expect(() => calculadora.resultado = "5").not.toThrow(TypeError);

        // Verifica se o valor de resultado foi corretamente atualizado para 5
        expect(calculadora.resultado).toBe(5);
    });

    // Teste para verificar se o método de soma funciona corretamente
    it('Soma um número ao resultado', () => {
        const calculadora = new Calculadora(); // Cria uma nova instância da classe Calculadora

        // Teste de soma com números
        calculadora.soma(10);
        expect(calculadora.resultado).toBe(10); // Verifica se o resultado é 10 após a soma

        calculadora.soma(5);
        expect(calculadora.resultado).toBe(15); // Verifica se o resultado é 15 após a soma

        // Teste de soma com strings numéricas
        calculadora.soma("10");
        expect(calculadora.resultado).toBe(25); // Verifica se o resultado é 25 após a soma

        // Teste de soma com string não numérica
        expect(() => calculadora.soma("texto")).toThrow(TypeError);

        // Teste de soma com valor negativo
        calculadora.soma(-5);
        expect(calculadora.resultado).toBe(20); // Verifica se o resultado é 20 após a soma
    });

    // Teste para garantir que a soma apenas aceita um argumento
    it('Garante que soma aceita apenas um argumento', () => {
        const calculadora = new Calculadora();

        // Verifica se passar múltiplos argumentos lança um erro
        expect(() => calculadora.soma(10, 5)).toThrow(); // Dependendo da implementação, isso pode não lançar um erro diretamente
    });
});
