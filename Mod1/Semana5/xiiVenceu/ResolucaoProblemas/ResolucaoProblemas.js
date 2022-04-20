/*
    PROBLEMA: um professor tem uma turma e precisa saber a média geral dos estudantes em uma determinada atividade.
    Crie uma função que permita que o professor coloque a quantidade de estudantes e a nota de cada um. Calcule a média da turma e mostre na tela
*/

/*
    ENTENDER:
        Quais são as informações de entrada?
            Quantidade de estudantes 
            nota de cada estudante 
        O que preciso retornar?
            A média da turma
        Como retornar?
            Colocando a resposta no HTML

    PLANEJAR:
        Quais ferramentas (métodos) eu tenho para usar?
        - function
        - prompt
        - for 
        - document.write
        - parse float
    
    DIVIDIR:
        - Definir pelo menos 4 etapas de desenvolvimento:

        - Criar uma função para executar o script:
            - criar uma function chamada calculaMediaTurma
        - Receber informações:
            - criar uma variavel, que vai receber o retorno do prompt que perguntará a quantidade de alunos
        - Processar informações:
            - Usando o for, enquanto o indice for menor que a quantidade de alunos, vou perguntar ao usuario a nota do aluno.
            - Definir uma variavel que vai receber a nota de cada aulo atravez do prompt
            - transformar cada nota digitada em um number com o parse float

        - Retornar informações:
            
*/
