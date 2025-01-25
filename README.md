# Desafio IEL

Este repositório contém as soluções para o [Desafio IEl](https://github.com/devronier/desafio-iel).

## Estrutura do Repositório

- **Desafios/**: Contém os arquivos de resolução dos desafios de lógica.
  - `desafio-1/mediaPonderada`: Este desafio consiste em criar uma função que calcula a média ponderada de um aluno. Cada nota possui um peso diferente, e o objetivo é implementar a fórmula do cálculo corretamente.
  - `desafio-2/Agenda`: O desafio consiste em criar uma função para verificar se um horário de reunião está disponível. Cada professor possui horários disponíveis nos períodos da manhã (8h às 12h) e tarde (13h às 17h). Um aluno ou responsável pode selecionar um horário dentro desses intervalos. O sistema deve validar se o horário desejado está disponível ou se já está ocupado.
  - `desafio-3/GerenciamentoDeRecados`: O desafio consiste em organizar uma lista de recados enviados entre pais e professores. Cada recado possui uma data e uma prioridade (importante ou regular). O sistema deve ordenar os recados de forma que os recados com a prioridade "importante" apareçam primeiro. Além disso, os recados devem ser organizados em ordem crescente de data.

## Como Executar

### Desafios
1. Instale o [Node.js](https://nodejs.org).
2. Navegue até a pasta `Desafios`.
3. Execute o código com o comando:
```bash
    node Desafios/desafio-1/mediaPonderada.js
    ....

