programa {
    funcao inicio() {
      inteiro raio
      real area, pi=3.14,perimetro
      escreva("Informe o comprimento do raio da circuferência: ")
      leia(raio)
      area = pi *(raio*raio)
      escreva("A área dessa circuferência é "+area+"\n")
      perimetro=2*pi*raio
      escreva("E o seu perímetro é "+perimetro)
    }
  }