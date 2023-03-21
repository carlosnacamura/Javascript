programa {
    funcao inicio() {
    cadeia nome1,nome2,nome3
    inteiro idade1,idade2,idade3
    real media
      escreva("Informe o nome da 1° pessoa: ")
      leia(nome1)
      escreva("Infome sua idade: ")
      leia(idade1)
      escreva("Informe o nome da 2° pessoa: ")
      leia(nome2)
      escreva("Infome sua idade: ")
      leia(idade2)
      escreva("Informe o nome da 3° pessoa: ")
      leia(nome3)
      escreva("Infome sua idade: ")
      leia(idade3)
      se((idade1>idade2) e (idade1>idade3)){
        escreva("A maior idade é "+idade1+"\n")
      }senao se(idade2>idade3){
        escreva("A maior idade é "+idade2+"\n")
      }senao{
        escreva("A maior idade é "+idade3+"\n")
      }
      se((idade1<idade2) e (idade1<idade3)){
        escreva("O nome da pessoa mais jovem é "+nome1+"\n")
      }senao se(idade2<idade3){
        escreva("O nome da pessoa mais jovem é "+nome2+"\n")
      }senao {
        escreva("O nome da pessoa mais jovem é "+nome3+"\n")
      }
      media= idade1+idade2+idade3/3
      escreva("A média das idades é "+media)
  }