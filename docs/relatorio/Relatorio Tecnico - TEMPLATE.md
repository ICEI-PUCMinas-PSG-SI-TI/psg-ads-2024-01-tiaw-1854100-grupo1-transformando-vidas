# Informações do Projeto
`TÍTULO DO PROJETO`  

EducaWeb - Transformando vidas através da educação e tecnologia.

`CURSO` 

Análise e Desenvolvimento de Sistemas - PUC Minas São Gabriel

## Participantes

> Os membros do grupo são:
> - Augusto Gomes Costa Galery
> - Karine Mikaelle Dias Pereira
> - Maria Luiza Ribeiro Ruas
> - Murilo Cardoso Alencar
> - Samuel Estevão Carvalho da Silva
> - Samuel Maia de Oliveira

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas](#personas)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
- [Projeto da Solução](#projeto-da-solução)
  - [Wireframes](#wireframes)
  - [Mapa de navegação](#mapa-de-navegação)
- [Conclusões](#avaliação-da-aplicação)
  
# Introdução

## Problema

Pessoas de baixa renda, principalmente jovens-adultos sem nenhum tipo de experiência, não conseguem se aplicar nas vagas disponíveis no mercado de trabalho. Entendemos que isso acontece por principalmente dois motivos:
- Falta de conhecimento técnico necessário para conseguir as melhores vagas.
- Dificuldade em achar as vagas em que a pessoa se encaixa.

## Objetivos

O objetivo do EducaWeb é, através da educação, capacitar pessoas de baixa renda a entrar no mercado de trabalho, tornando-as mais competitivas para entrar nas vagas mais concorridas e melhores empregos. Assim, melhorando a qualidade de vida dessas pessoas, além de dar oportunidade a pessoas em situação de vulnerabilidade, a encontrar sentido nos estudos. 
Além disso, entendemos que o NetWorking é essencial no mercado atual, por isso, também existe o objetivo de gerar uma conexão entre os alunos e empresas parceiras. O projeto também tem o objetivo de atrair professores voluntários para ministrar aulas, gravá-las e disponibilizar no nosso repositório de cursos.

> Objetivos específicos:
> - Proporcionar a jovens de lares abusivos, um novo sentido de vida através da educação
> - Proporcionar a pessoas em condições financeiras precárias, oportunidades para mudança de vida

## Público-Alvo

O público-alvo do projeto é, principalmente, jovens de baixa renda que procuram um direcionamento para sua vida profissional. Pessoas que, muitas vezes, não tem sequer uma oportunidade para obter algum diferencial em relação às demais pessoas, pois não tem condições financeiras de investir em si mesmos. 

Presumimos que o público-alvo não tem experiência ou contato prévio com tecnologia.

# Especificações do Projeto

Ferramentas utilizadas no projeto:
- HTML - Linguagem de marcação usada para definir estruturas da aplicação;
- CSS - Folhas de estilização usadas para promover a melhor experiência do usuário;
- JavaScript - Linguagem de programação usada para promover a interatividade do usuário com a aplicação;
- Json-Server - API Fake, utilizada para simular o back-end da aplicação, simulando persistência de dados e recebendo requisições;
- Axios - Cliente http usado para realizar requisições para o Json-Server, substituindo o uso do Fetch API;
- Git - Ferramenta de versionamento do código e atualizações em nuvem;
- Figma - Aplicação web usada para fazer o protótipo do design do site;
- Miro - Ferramenta para planejamento geral do projeto.

## Personas

Personas do projeto:

> Persona 1:
> - Nome: João Lucas da Silva
> - Idade: 41
> - Hobby: Se dedicar à sua família
> - Trabalho: Desempregado
> - Personalidade: Dedicado e comprometido com seus objetivos e trabalha diligentemente para alcançá-los.
> - Sonha em experimentar diferentes campos de trabalho para descobrir seus interesses e melhorar a condição de vida da sua família
> - Objetos e lugares: Ele utiliza o celular principalmente para comunicação, já que o modelo que possui não é dos mais avançados e lanhouse.
> - Objetivos chave: Buscar conhecimento para desenvolver, criar e manter sistemas computacionais.

> Persona 2:
> - Nome: Giovana Vieira
> - Idade: 19
> - Hobby: Desenhar/Criar
> - Trabalho: Caixa
> - Personalidade: Uma pessoa divertida, alegre e positiva, é espontânea e gosta de aproveitar o momento sem se preocupar muito com o futuro.
> - Sonhos: Realização pessoal, desejando ter estabilidade financeira e planeja construir uma carreira bem-sucedida na área da tecnologia.
> - Objetos e lugares: Trabalhando como caixa, ela adquiriu conhecimento sobre sistemas de compra, incluindo como as transações ocorrem e como são armazenadas. Essa experiência a tornou mais eficaz em seu trabalho.
> - Giovana Vieira procura novas vagas de emprego, e entender mais de sistemas, como SQL e armazenamento de
dados.

> Persona 3:
> - Nome: Nathan Lopes
> - Idade: 18
> - Hobby: Jogar futebol
> - Trabalho: Auxiliar do treinador do time infantil da comunidade
> - Personalidade: Sempre alegre, disposto a sonhar alto e a trabalhar duro para conquistar seus sonhos
> - Sonhos: Aprender tecnologia para desenvolver sua própria loja online de materiais esportivos
> - Objetos e lugares: Ele usa seu celular para seu trabalho, anotando o perfil dos garotos do time, estratégias para serem usadas e tornar o time da comunidade conhecido nas redes sociais e atrair patrocinadores.
> - Objetivos chave: Nathan deseja adquirir habilidades básicas de desenvolvimento web para criar e gerenciar seu próprio site de e-commerce. Ele precisa do nosso projeto porque não tem condições de pagar cursos caros ou faculdade.
 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:
- Eu como aluno do site, quero/preciso registrar meus cursos em progresso para não perdê-los
- Eu como professor voluntário, quero/preciso criar novos cursos e subir vários vídeos em cada um deles para que os alunos possam assisti-los
- Eu como empresa parceira, quero/preciso subir novas vagas que estou oferecendo para contratar novos funcionários
- Eu como aluno do site, preciso de subir candidatura às vagas disponíveis, para poder ser considerado para o trabalho
- Eu como empresa parceira, preciso de uma tela de chat ao vivo para me comunicar com os meus candidatos e, eventualmente, marcar entrevistas
- Eu como aluno/professor/empresa preciso de editar meus dados para corrigir dados incorretos e/ou ultrapassados
- Eu como aluno do site, preciso de validação de conclusão do curso para receber uma certificação

## Requisitos

A tabela que segue apresenta os requisitos funcionais do projeto. 

### Requisitos Funcionais

> ID          Descrição                                     Prioridade
>- RF-001      Permitir criar cursos                         ALTA
>- RF-002      Visualizar perfil de outros usuários          MÉDIA
>- RF-003      Seguir perfil de outros usuários              MÉDIA
>- RF-004      Subir novas vagas                             ALTA
>- RF-005      Enviar/receber mensagens                      MÉDIA
>- RF-006      Enviar candidatura                            ALTA
>- RF-007      Visualizar meus cursos e vagas                ALTA
>- RF-008      Demonstrar interesse em áreas específicas     MÉDIA
>- RF-009      Realizar doações                              MÉDIA


|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

# Projeto da Solução

Tecnologias/Ferramentas:
- Bootstrap (Framework de css)
- Figma (Wireframe)
- Miro (Mapa de stakeholders, personas, etc.)
- Git (Versionamento de código)
- JavaScript (Linguagem de programação front-end)
- Visual Studio Code (Ambiente de desenvolvimento)

## Wireframes

https://www.figma.com/file/3up1CgMyA9ULuVXgcwUaMM/Grupo-1-TIAW---P%C3%A1ginas-e-Mapa-de-Navega%C3%A7%C3%A3o?type=design&node-id=0%3A1&mode=design&t=3LTqT9k6XM6vom15-1


## Mapa de navegação

https://www.figma.com/file/3up1CgMyA9ULuVXgcwUaMM/Grupo-1-TIAW---P%C3%A1ginas-e-Mapa-de-Navega%C3%A7%C3%A3o?type=design&node-id=0%3A1&mode=design&t=3LTqT9k6XM6vom15-1

# Conclusões

O projeto foi criado, inicialmente, com o objetivo de fornecer uma plataforma acessível para que pessoas de baixa renda possam aprender algo novo, assim tentarem se tornar mais competitivas no mercado de trabalho. Acreditamos que esse objetivo foi alcançado neste projeto, além de oferecer uma interface própria para professores voluntários postarem seus cursos, também oferece o local correto onde os alunos irão assistir os cursos. Outro objetivo era o de cadastro de vagas e candidatura à essas vagas por parte dos alunos, também foi alcançado com sucesso.

Alguns outros objetivos ficam para frente, como por exemplo, possibilitar a troca de mensagens entre os usuários. As principais dificuldades foram:
- Integrar o trabalho que estava sendo feito separadamente: Usando o git, e aprendendo juntos os comandos via terminal, foi fácil contornar esse problema.
- A ideia inicial do projeto estava abstrata e conflitante entre alguns alunos: Decidindo juntos de forma definitiva o caminho que seguiríamos foi crucial para resolver este problema.
