#Componente | Title#

###Descrição do funcionamento:###

config - Objeto - Referente a configuração do componente.
  mgAll - Inteiro - Definir espaçamento do margin do componente. (4 lados)
  mgBoth - Inteiro - Definir espaçamento do margin both do componente. (top e bottom)
  mgSides - Inteiro - Definir espaçamento do margin sides do componente. (left e right)
  mgTop - Inteiro - Definir espaçamento do margin top do componente.
  mgBottom - Inteiro - Definir espaçamento do margin bottom do componente.
  mgLeft - Inteiro - Definir espaçamento do margin left do componente
  mgRight - Inteiro - Definir espaçamento do margin right do componente.
  padAll - Inteiro - Definir espaçamento do padding do componente. (4 lados)
  padBoth - Inteiro - Definir espaçamento do padding both do componente. (top e bottom)
  padSides - Inteiro - Definir espaçamento do padding sides do componente. (left e right)
  padTop - Inteiro - Definir espaçamento do padding top do componente.
  padBottom - Inteiro - Definir espaçamento do padding bottom do componente.
  padLeft - Inteiro - Definir espaçamento do padding left do componente.
  padRight - Inteiro - Definir espaçamento do padding right do componente.
  textColor - String - Definir cor do título do componente (paleta de cores abaixo).
  textSize - String - Definir tamanho do button. (tamanho de fontes abaixo)
  textBold - Boolean - Definir se o texto possuirá todas as letras MAIÚSCULAS.
  uppercase - Boolean - Definir se o título irá possuir text-transform: uppercase (Todas as letras MAIÚSCULAS).
  border - Boolean - Definir se o título irá possuir border-bottom.

data - Objeto - lista de informações referente ao componente.
  title - String - Inserir o título do componente.


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
  title(
    config = {
      border: true,
      uppercase: false,
      padBottom: 10
    },
    data = {
      title: 'Title'
    }
  )
}}
