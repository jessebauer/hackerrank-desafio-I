# **Desafios HackerRank**

Estão aqui solucionados os principais desafios que solucionei no HackerRank, sendo eles:

## **Crazy Lock Box**

Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

Durante alguns testes de rotina foi descoberto um bug na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

 **Input Format**

A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

**Constraints**
```
S ≤ 10^3 N ≤ 10^5
```
**Output Format**
```
Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.
```
## **Find Younger Into Adults**

Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).

**Input Format**
```
A entrada é um array com as idades das pessoas que tentam participar.
```
**Constraints**
```
A lista contém de 1 a 1000 itens
```
**Output Format**
```
Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém puder participar, imprima na tela a mensagem CRESCA E APARECA.
```
Sample Input 0

```
12 18 27
```
**Sample Output 0**
```
18
```
## **Max Distance**

Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico, em especial com o quanto as pessoas precisam andar dentro da sala. Também é comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega, caminhando a distância. Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas precisem andar o mínimo possível. Para tal, ela precisa primeiro rever a posição atual e determinar qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega. Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso. Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.

**Input Format**
```
Neste problema a entranda é um único string que você deve tratar adequadamente para obter as informações que você precisa em variáveis separadas.

A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos. Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i-ésimo funcionário.
```
**Constraints**
```
2 ≤ N ≤ 10^3 -1000 ≤ X, Y ≤ 1000
```
**Output Format**
```
Imprima um único número, a resposta para o problema.
```
## **Zero or One**

Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou NINGUEM, caso ninguém tenha sido sorteado(a).

**Input Format**

A entrada será sempre um vetor de objetos chamado jogadores, em que cada objeto é uma pessoa, com o seguinte formato:
```
{
    nome: "Herbert",
    jogada: 0 //será sempre 0 ou 1
}
```
**Constraints**
```
Pode-se assumir que sempre haverá pelo menos 3 pessoas jogando, ou seja, a entrada será sempre um vetor com pelo menos 3 itens. Você não precisa fazer nenhum código para checar isso.
```
**Output Format**
```
Imprima na tela o nome do jogador que foi sorteado.
