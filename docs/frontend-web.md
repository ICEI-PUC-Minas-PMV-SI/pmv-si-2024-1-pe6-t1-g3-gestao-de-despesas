# Front-end Web
<!-- [Inclua uma breve descrição do projeto e seus objetivos.]

O projeto visa simplificar e facilitar a divisão de despesas entre amigos, colegas de quarto, familiares e grupos em geral. Os usuários podem rastrear facilmente quem pagou determinada despesa e quem deve a quem, eliminando a necessidade de realizar cálculos complexos. <br/>

A aplicação permite que os usuários criem grupos para compartilhar despesas, como viagens, refeições, aluguel e outras despesas compartilhadas. Além disso,o cálculo é feito automaticamente quanto cada pessoa deve, com base nas despesas registradas e quantidade de pessoas integrantes no grupo. <br/>

Diante disso, a aplicação possui os seguintes objetivos:  <br/>

**Cadastro de despesas:** <br/>
Permitir que os usuários criem novas despesas, especificando detalhes como o valor, a descrição e a data da despesa.
Associar cada despesa a um grupo específico para facilitar a divisão entre os membros.<br/>
**Divisão de despesas:** <br/>
Calcular automaticamente a divisão das despesas entre os membros do grupo.
Permitir que os usuários visualizem quanto cada membro deve pagar ou receber em relação a uma despesa específica.<br/>
**Controle de despesas pagas:** <br/>
Registrar quando um usuário paga uma despesa.
Atualizar automaticamente o saldo de cada usuário no grupo com base nas despesas pagas e na divisão das despesas.<br/>
**Gerenciamento de usuários e grupos:** <br/>
Permitir a criação e a gestão de grupos de usuários.
Facilitar a adição e a remoção de membros de um grupo pelo proprietário.<br/>
**Recursos de autenticação e autorização:** <br/>
Garantir que apenas usuários autorizados possam acessar e manipular dados de despesas e grupos.
Implementar autenticação para proteger as informações sensíveis dos usuários.<br/>
**Notificações e lembretes:** <br/>
Enviar notificações aos usuários sobre novas despesas, alterações na divisão das despesas ou despesas pendentes de pagamento.<br/> -->

**Nome do Projeto**: Gestão de Despesas<br/>
<br/>
**Descrição**:<br/>
Gestão de Despesas é uma aplicação de front-end web projetada para simplificar e facilitar a divisão de despesas entre pessoas e grupos. A plataforma elimina a necessidade de cálculos manuais ao permitir que os usuários rastreiem facilmente quem pagou determinada despesa e quem deve a quem dentro de um grupo.<br/>
<br/>
**Recursos Principais**:
<br/>
<br/>
**Gerenciamento de Grupos**: Os usuários podem criar grupos para compartilhar despesas, como viagens, refeições, aluguel e outras despesas compartilhadas. Cada grupo possui um nome, uma descrição opcional e membros que participam das despesas compartilhadas.<br/>
<br/>
**Registro de Despesas**: Os usuários podem registrar despesas dentro de um grupo, especificando o valor da despesa, o pagador e os participantes que compartilham dessa despesa. Eles também podem adicionar uma descrição para facilitar a identificação da transação.<br/>
<br/>
**Cálculo Automático**: Com base nas despesas registradas, a quantidade de pessoas integrantes no grupo e quem já quitou a dívida, a aplicação realiza automaticamente o cálculo sobre quanto cada pessoa deve ou está devendo.<br/>
<br/>
**Visualização Transparente**: Os usuários têm acesso a uma visualização transparente das despesas do grupo, incluindo quem pagou o quê, quem deve a quem e o saldo atual de cada membro do grupo. Isso permite uma compreensão clara das finanças compartilhadas.<br/>
<br/>
**Histórico de Transações**: Um histórico detalhado de todas as transações realizadas dentro do grupo é mantido, permitindo que os usuários consultem registros passados e acompanhem o histórico de pagamentos.<br/>
<br/>
**Segurança e Privacidade**: A plataforma prioriza a segurança e a privacidade dos dados dos usuários, garantindo que as informações financeiras estejam protegidas e acessíveis apenas para os membros autorizados de cada grupo.<br/>
<br/>
**Objetivo**:<br/>
O objetivo principal do Gestão de Despesas é simplificar e agilizar o processo de divisão de despesas, tornando-o transparente, justo e livre de estresse para todos os envolvidos. Ao automatizar os cálculos e fornecer uma interface intuitiva para rastrear e gerenciar despesas compartilhadas, a aplicação visa promover uma colaboração financeira mais harmoniosa entre amigos, colegas de quarto, familiares e grupos em geral.<br/>
<br/>
## Tecnologias Utilizadas
<!-- [Lista das tecnologias principais que serão utilizadas no projeto.]

A API REST de gestão de despesas é desenvolvida na linguagem C# e o framework ASP.NET Core. <br/>

IDE: Visual Studio; Visual Studio Code <br/>
Banco de dados: SQL Server <br/>
Documentação da API: Swagger <br/>
Consumo dos dados da API via AJX <br/>
Desenvolvimento Web: HTML, CSS, JavaScript, Jquery e Bootstrap -->

**API REST em ASP.NET Core (C#)**: A API de gestão de despesas é desenvolvida na linguagem C# utilizando o framework ASP.NET Core, que oferece uma plataforma robusta e escalável para a criação de APIs RESTful.<br/>

**IDEs**: Para o desenvolvimento da API e do front-end, são utilizadas as IDEs Visual Studio e Visual Studio Code, ambas oferecendo ferramentas avançadas de desenvolvimento, depuração e integração para agilizar o processo de desenvolvimento.<br/>

**Banco de Dados SQL Server**: O SQL Server foi utilizado como o banco de dados principal para armazenar todas as informações relacionadas às despesas, grupos e usuários. Sua robustez, desempenho e recursos de segurança são fundamentais para garantir a integridade e confiabilidade dos dados.<br/>

**Documentação da API com Swagger**: A documentação da API é gerada e mantida utilizando o Swagger, uma ferramenta que facilita a criação de documentação interativa para APIs RESTful. Isso permite que os desenvolvedores e usuários compreendam facilmente como utilizar os endpoints da API.<br/>

**Consumo de Dados via AJAX**: Para consumir os dados da API de forma assíncrona e dinâmica, o AJAX (Asynchronous JavaScript and XML) é utilizado. Isso permite que o front-end atualize os dados da interface sem a necessidade de recarregar a página, proporcionando uma experiência de usuário mais fluida.<br/>

**Desenvolvimento Web com HTML, CSS, JavaScript, jQuery e Bootstrap**: O front-end da aplicação é desenvolvido utilizando tecnologias web padrão, como HTML para estruturação, CSS para estilização, JavaScript para interatividade, jQuery para simplificar o código JavaScript e Bootstrap para o desenvolvimento de uma interface responsiva e visualmente atraente. Essas tecnologias combinadas garantem uma experiência de usuário moderna e intuitiva.<br/>

## Arquitetura

<!--[Descrição da arquitetura das aplicação web, incluindo os componentes e suas interações.]-->

A arquitetura Web foi composta da seguinte maneira: <br/>

**HTML**: Define a estrutura e o conteúdo da página web. <br/>
**CSS**: Estiliza e define a aparência visual dos elementos HTML. <br/>
**JavaScript (incluindo jQuery)**: <br/>
Manipula elementos HTML para fornecer interatividade e dinamismo à página. <br/>
Responde a eventos do usuário, como cliques em botões e envio de formulários. <br/>
Realiza validações de formulários e outras tarefas de processamento no lado do cliente. <br/>
**Bootstrap**: Fornece componentes e estilos pré-construídos para criar uma interface de usuário responsiva e visualmente atraente.<br/>
**Interação com a API AJAX**: <br/>
Realiza solicitações assíncronas para o back-end, obtendo ou enviando dados sem recarregar a página inteira. <br/>
Atualiza dinamicamente o conteúdo da página conforme necessário, oferecendo uma experiência de usuário fluida e responsiva. <br/>

![Arquitetura Web](img/ArquiteturaWeb.jpg)

## Modelagem da Aplicação
<!--[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]-->

**Entidades**:<br/>
**1 - Users**: Informações cadastrais do usuário.<br/>
**2 - Friends**: Usuários associados a um grupo de amigos.<br/>
**3 - Groups**: Registro de dados relacionados ao grupo de despesas. <br/>
**4 - Expenses**: Registro de despesas e valores associados ao grupo.<br/>
**5 - Payments**: Registro de pagamentos por integrante do grupo.<br/>

![Modelagem da aplicação](img/Modelagem.jpg)

## Projeto da Interface Web
<!-- [Descreva o projeto da interface Web da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.] -->

**Interface Web da Aplicação**:<br/>

**Tela de Acesso**:<br/>
Esta tela apresenta campos de entrada para o nome de usuário e senha. Os usuários podem fazer login em suas contas existentes ou serem redirecionados para a tela de cadasto. Recursos adicionais incluem links para redefinir senha e navegação fácil para a tela de cadastro.<br/>

**Tela de Cadastro de Novo Usuário**:<br/>
Aqui, os novos usuários podem se registrar fornecendo informações básicas como nome, telefone, endereço de e-mail e senha. A validação de entrada garante a precisão das informações inseridas. Após o registro bem-sucedido, os usuários são direcionados automaticamente para a tela principal.<br/>

**Tela Principal**:<br/>
Este é o hub central da aplicação, onde os usuários podem ver uma visão geral de todos os grupos dos quais fazem parte.
Um layout intuitivo exibe informações sobre despesas.
Os usuários podem acessar facilmente funcionalidades adicionais, como criar novos grupos, adicionar e quitar despesas.<br/>

**Tela de Adição de Despesa**:<br/>
Ao selecionar um grupo específico, os usuários podem adicionar novas despesas nesta janela. Campos são fornecidos para especificar o valor da despesa, descrição da despesa, data e grupo.
Os usuários têm a opção de salvar a despesa e continuar adicionando mais, ou finalizar e retornar ao painel principal.<br/>

**Tela de Quitação de Despesa**:<br/>
Quando uma despesa é liquidada por um membro, esta tela permite que eles registrem o pagamento.
O usuário seleciona a despesa a ser quitada e modifica seu status. 
Após a confirmação, o saldo é atualizado automaticamente para refletir o pagamento.<br/>

**Tela de Criação de Novo Grupo**:<br/>
Os usuários podem criar novos grupos nesta janela, fornecendo um nome para o grupo.
A funcionalidade de adicionar membros ao grupo também estará disponível.
Uma vez criado, o grupo estará pronto para compartilhar despesas.<br/>

**Tela de Inclusão de Amigo**:<br/>
Esta janela permite que os usuários adicionem novos amigos aos grupos existentes.
Os usuários podem pesquisar por endereço de e-mail para localizar e adicionar amigos.
A inclusão de amigos facilita a divisão de despesas e promove uma colaboração financeira mais ampla.
Cada tela é projetada com foco na usabilidade, apresentando uma interface intuitiva e responsiva para simplificar o processo de gerenciamento de despesas compartilhadas.<br/>

### Wireframes
<!-- [Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.] -->

Abaixo temos a apresentação dos wireframes da aplicação Gestão de Despesas. Aqui, oferecemos um vislumbre do design e da estrutura da plataforma de gestão de despesas compartilhadas:<br/>

[Incluir telas do Wireframe]<br/>

### Design Visual
<!-- [Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.]-->

Nesta etapa, vamos explorar os aspectos chave do design, incluindo cores, tipografia e layout. Detalhando o design visual da Gestão de Despesas e descobrindo como ele melhora a experiência do usuário. <br/>

[Incluir telas da aplicação Web]<br/>

### Layout Responsivo
 <!--[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]-->

 A adaptação da interface para diferentes tamanhos de tela e dispositivos é essencial para garantir uma experiência de usuário consistente e acessível em todos os contextos. Para o Gestão de Despesas, foi implementada uma abordagem responsiva de design, que se ajusta dinamicamente para se adequar a diferentes dispositivos, como desktops, laptops, tablets e smartphones. Seguem algumas considerações e técnicas aplicadas:<br/>

**Layout Flexível**: O layout da aplicação será construído com base em grades flexíveis e fluidas, permitindo que os elementos se reorganizem e redimensionem conforme o tamanho da tela. Isso garante que a disposição dos elementos se adapte de forma natural a qualquer dispositivo.<br/>

**Imagens Responsivas**: As imagens na aplicação serão configuradas como responsivas, ajustando automaticamente seu tamanho e resolução de acordo com as características do dispositivo. Isso ajuda a reduzir o tempo de carregamento e melhora o desempenho em dispositivos móveis.<br/>

**Navegação Simplificada**: Para dispositivos móveis, a navegação será simplificada e otimizada para toque.<br/>

**Testes em Diferentes Dispositivos**: Faremos testes extensivos da aplicação em uma variedade de dispositivos e tamanhos de tela para garantir que a experiência do usuário seja consistente e sem problemas em todos os casos.<br/>

Ao implementar essas técnicas de design responsivo, irá oferecer uma experiência de usuário intuitiva e eficaz, independentemente do dispositivo utilizado para acessá-la. Isso é fundamental para alcançar uma ampla base de usuários e garantir a satisfação do cliente em todas as interações com a aplicação.<br/>

### Interações do Usuário
<!--[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]-->

Na interface da Gestão de Despesas, priorizamos interações simples e eficientes para proporcionar uma experiência fluida. Seguem algumas das principais interações:<br/>

**Transições Suaves**: As transições entre páginas são suaves para manter a navegação fluida.<br/>
**Feedback Visual**: Botões e links mudam de cor ou tamanho para indicar interatividade, fornecendo feedback visual instantâneo.<br/>
**Respostas de Formulário**: Feedback imediato é dado ao enviar formulários, usando pop-ups ou ícones para comunicar sucesso ou falha.<br/>
**Scroll Suave**: Animamos a rolagem para uma transição suave entre seções, melhorando a experiência de navegação.<br/>
**Visualização de Detalhes**: Utilizamos transições suaves para revelar ou ocultar informações detalhadas, mantendo a experiência coesa.
<br/>
Essas interações são implementadas de forma aprimorar a usabilidade, sem sobrecarregar o usuário com excesso de animações ou feedbacks visuais.<br/>

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

O diagrama abaixo ilustra a entrada e saída de dados entre os usuários na aplicação.

![Modelagem da aplicação](img/FluxoDados.jpg)

<br/>

## Requisitos Funcionais

<!--[Liste os principais requisitos funcionais da aplicação.]-->

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Os usuários podem criar grupos para gerenciar despesas. | ALTA |
|RF-002| Deve ser possível adicionar membros aos grupos.  | ALTA |
|RF-003| Os criadores dos grupos têm a capacidade de editar as configurações do grupo. | ALTA |
|RF-004| A aplicação deve garantir que apenas membros autorizados tenham acesso aos grupos de despesas.   | ALTA |
|RF-005| Os próprietários devem ser capazes de registrar despesas, indicando o valor, a descrição e a data. | ALTA |
|RF-006| A aplicação deve calcular automaticamente como dividir as despesas entre os membros do grupo. | ALTA |
|RF-008| Os usuários devem ser capazes de se cadastrar na aplicação. | MÉDIA |

## Requisitos Não Funcionais

<!--[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]-->

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deverá respeitar às restrições impostas pela LGPD. (SEGURANÇA)| ALTA |
|RNF-002| A aplicação deve garantir a segurança dos dados do usuário. (SEGURANÇA) |  ALTA |
|RNF-003| A aplicação deve ser compatível com os principais navegadores web e sistemas operacionais móveis. (AMBIENTE) | ALTA | 
|RNF-004| A aplicação deve lidar eficientemente com um grande volume de requisições. (CONFIABILIDADE)  |  ALTA | 
|RNF-005| A aplicação deve ser capaz de lidar com um aumento no número de usuários e requisições sem degradação significativa do desempenho. (CONFIABILIDADE) | ALTA | 
|RNF-006| A interface do usuário deve ser intuitiva e fácil de usar, mesmo para usuários iniciantes. (USABILIDADE) |  ALTA | 
|RNF-007| A aplicação deve ter um tempo de resposta aceitável para garantir uma experiência do usuário fluida. (CONFIABILIDADE) | MÉDIA | 
|RNF-009| O sistema deverá fazer uso de design responsivo nas interfaces gráficas.(USABILIDADE) | MÉDIA | 
|RNF-010| O sistema deve estar disponível 99,99% do tempo.(DISPONIBILIDADE) |  MÉDIA | 


## Considerações de Segurança

<!--[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]-->

Autenticação e autorização da API através do token JWT. <br/>
Senhas: Armazenamento de senha via banco de dados.

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
