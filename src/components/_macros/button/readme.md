#Componente | Button#

###Descrição do funcionamento:###

config - Objeto - Referente a configuração do componente.
mgAll - Inteiro - Definir margin do componente. (4 lados)
mgSides - Inteiro - Definir margin sides do componente. (left e right)
mgBoth - Inteiro - Definir margin both do componente. (top e bottom)
mgTop - Inteiro - Definir margin top do componente.
mgBottom - Inteiro - Definir margin bottom do componente.
mgLeft - Inteiro - Definir margin left do componente.
mgRight - Inteiro - Definir margin right do componente.
padAll - Inteiro - Definir padding do componente. (4 lados)
padSides - Inteiro - Definir padding sides do componente. (left e right)
padBoth - Inteiro - Definir padding both do componente. (top e bottom)
padTop - Inteiro - Definir padding top do componente.
padBottom - Inteiro - Definir padding bottom do componente.
padLeft - Inteiro - Definir padding left do componente.
padRight - Inteiro - Definir padding right do componente.
horizontalAlign - String - Definir o alinhamento horizontal do componente. (left, middle, right, between, around)
verticalAlign - String - Definir o alinhamento vertical do componente. (top, middle, baseline, bottom)
columnAlign - Boolean - Definir alinhamento em coluna caso verdadeiro. (true)
textColor - String - Inserir cor para o texto. (Paleta de cores abaixo)
textBold - Boolean - Inserir negrito no texto.
textUppercase - Boolean - Definir que todas letras sejam maiusculas.
rowAlign - Boolean - Definir o alinhamento como row.
columnAlign - Boolean - Definir o alinhamento em colunas.

data - Array de Objeto - Referente aos Textos das Listas
href - Definir o link que será visitado ao clicar no button.
type - String - Definir o tipo do button Link. (default, outline, link)
mgAllItem - Inteiro - Definir margin do item do componente. (4 lados)
mgSidesItem - Inteiro - Definir margin sides do item do componente. (left e right)
mgBothItem - Inteiro - Definir margin both do item do componente. (top e bottom)
mgTopItem - Inteiro - Definir margin top do item do componente.
mgBottomItem - Inteiro - Definir margin bottom do item do componente.
mgLeftItem - Inteiro - Definir margin left do item do componente.
mgRightItem - Inteiro - Definir margin right do item do componente.
padAllItem - Inteiro - Definir padding do item do componente. (4 lados)
padSidesItem - Inteiro - Definir padding sides do item do componente. (left e right)
padBothItem - Inteiro - Definir padding both do item do componente. (top e bottom)
padTopItem - Inteiro - Definir padding top do item do componente.
padBottomItem - Inteiro - Definir padding bottom do item do componente.
padLeftItem - Inteiro - Definir padding left do item do componente.
padRightItem - Inteiro - Definir padding right do item do componente.
bgColor - String - Inserir cor ao fundo do texto. (Paleta de cores abaixo).
textColor - String - Inserir cor do texto. (Paleta de cores abaixo).
textUppercase - Boolean - Deixar todo o texto em MAIÚSCULAS.
textBold - Boolean - Definir negrito no Texto.
openModal - String - Inserir o nome do modal a ser aberto.
close - Boolean - Definir modal aberto ou fechado.
text - Inserir os textos da lista um abaixo do outro.
textSize - String - Definir tamanho do button. (tamanho de fontes abaixo)

##Tamanho de fontes:##
Default: 16px
tiny: 12px
small: 14px
medium: 20px
large: 35px

##Paleta de Cores:##

  'primary': #093ec0
  'secundary': #069ed2
  'gray': #808080
  'gray-light': #f2f2f2
  'danger': #f05767
  'white': #fff
  'black': #000
  'success': #00d817
  'green': #00c257
  'warning': #febc13
  'shadow': rgba(0, 0, 0, .35)
  'chart-green': #00c35f
  'chart-yellow': #ffbd00
  'chart-blue': #009fd3

##Exemplo de chamada do componente:##

{{
  button(
    config = {
      verticalAlign: 'middle',
      horizontalAlign: 'between',
      mgAll: 20
    },
    data = [
      {
        type: 'link',
        text: 'Esqueci minha senha',
        href: '#'
      },
      {
        padBothItem: 15,
        padSidesItem: 60,
        text: 'Entrar',
        textBold: true,
        href: '#'
      },
      {
        padBothItem: 15,
        padSidesItem: 40,
        type: 'outline',
        text: 'Fechar',
        href: '#'
      },
      {
        padBothItem: 15,
        padSidesItem: 40,
        text: 'Pesquisar',
        href: '#'
      }
    ]
  )
}}
