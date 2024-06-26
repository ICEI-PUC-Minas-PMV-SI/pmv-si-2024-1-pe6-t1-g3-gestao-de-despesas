# Front-end Móvel

<!-- [Inclua uma breve descrição do projeto e seus objetivos.] -->
Descrição do Projeto:<br/>
<br/>O projeto "Gestão de Despesas" é um aplicativo desenvolvido para simplificar a gestão financeira compartilhada em diversas situações e em qualquer lugar a partir do dispositivo móvel. Ele visa eliminar as dificuldades comuns na divisão de despesas, proporcionando uma plataforma intuitiva e eficiente para registro e gerenciamento das despesas compartilhadas. O objetivo é promover uma experiência mais harmoniosa para todos os envolvidos, independentemente de seus perfis e habilidades tecnológicas.<br/>

Objetivos:<br/>

* Facilitar a divisão justa de despesas entre amigos e grupos.<br/>
* Oferecer uma interface intuitiva e acessível.<br/>
* Promover transparência e clareza na gestão das despesas.<br/>

## Tecnologias Utilizadas
<!--[Lista das tecnologias principais que serão utilizadas no projeto.]-->

Front-end:
<br/>
* React Native. <br/>
* React Native Paper.


Back-end:
<br/>
* Node.js (para API RESTful).<br/>


## Arquitetura

<!-- [Descrição da arquitetura das aplicação móvel, incluindo os componentes e suas interações.]  -->

Descrição da Arquitetura:
<br/>

A arquitetura de software apresenta duas camadas principais: front-end e back-end. No front-end, o aplicativo móvel é construído com o framework React Native. Os usuários interagem com o aplicativo em seus dispositivos móveis, tanto  iOS quanto Android, e essas interações são gerenciadas pelo framework.

No back-end, uma API RESTful serve como repositório, processando requisições HTTP originadas pelo front-end para executar operações CRUD no banco de dados. A API utilizada é aquela desenvolvida pelo grupo durante a segunda etapa do projeto. A comunicação entre o front-end e o back-end ocorre pela internet. O React Native envia requisições para a API REST, que processa essas requisições e retorna respostas conforme necessário, atualizando a interface do usuário.

Essa arquitetura facilita uma interação dinâmica entre o aplicativo móvel e o servidor, essencial para aplicativos que precisam acessar e manipular dados em tempo real..<br/>


Componentes e suas Interações:<br/>

* Aplicativo Móvel: Interface do usuário, registro de despesas, quitação de despesas, visualização de histórico.<br/>
* API RESTful: Interage com o front-end para enviar e receber dados.<br/>

![Arquitetura Web](img/Arq.Mobile.jpg)


## Modelagem da Aplicação
<!-- [Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.] -->

**Entidades**:<br/>
**1 - Users**: Informações cadastrais do usuário.<br/>
**2 - Friends**: Usuários associados a um grupo de amigos.<br/>
**3 - Groups**: Registro de dados relacionados ao grupo de despesas. <br/>
**4 - Expenses**: Registro de despesas e valores associados ao grupo.<br/>
**5 - Payments**: Registro de pagamentos por integrante do grupo.<br/>

![Modelagem da aplicação](img/Modelagem.jpg)


## Projeto da Interface
<!-- [Descreva o projeto da interface móvel da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.] -->

**Interface Web da Aplicação**:<br/>

**Tela de Login**:<br/>
Esta tela apresenta campos de entrada para o e-mail do usuário e senha para que seja realizado o login na aplicação mobile.<br/>

**Tela de Cadastro de Despesa**:<br/>
Ao selecionar, os usuários podem cadastrar despesas nesta janela. Campos são fornecidos para especificar o valor da despesa, descrição da despesa, data e grupo.<br/>

**Tela de Nova Despesa**:<br/>
Ao selecionar um grupo específico, os usuários podem adicionar novas despesas nesta janela. Campos são fornecidos para especificar o valor da despesa, descrição da despesa, data e grupo.
Os usuários têm a opção de salvar a despesa e continuar adicionando mais, ou finalizar e retornar ao painel principal.<br/>

**Tela de Quitação de Despesa**:<br/>
Quando uma despesa é liquidada por um membro, esta tela permite que eles registrem o pagamento.
O usuário seleciona a despesa a ser quitada e modifica seu status. 
Após a confirmação, o saldo é atualizado automaticamente para refletir o pagamento.<br/>

### Wireframes
<!-- [Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.] -->

Abaixo temos a apresentação dos wireframes da aplicação Gestão de Despesas Mobile. Aqui, oferecemos um vislumbre do design e da estrutura da plataforma de gestão de despesas compartilhadas:<br/>

* **Tela de Login**<br/>
![Wireframes](img/Login.png)<br/>

* **Tela de Cadastro de Despesa**<br/>
![Wireframes](img/CadastrarDespesas.png)<br/>

* **Tela de Nova Despesa**<br/>
![Wireframes](img/NovasDespesas.png)<br/>

* **Tela de Quitação de Despesa**<br/>
![Wireframes](img/QuitarDespesas.png)<br/>

### Design Visual
<!-- [Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.] -->

Para a página Login escolhemos uma logo na cor Verde com elementos visuais que transmita a ideia de desesas, contas a serem pagas e gerenciadas. Na parte superior e inferior foi utilizada a cor Roxa, codígo Hex: 6200EE. A fonte utilizada foi Segoe UI <br/>

![Wireframes](img/Login_Icone.png)<br/>

Utilizamos cores sólidas, no backgroud foi escolhida a cor branca cujo código Hex é FFFFFF. Na parte superior e inferior foi utilizada a cor Roxa, codígo Hex: 6200EE <br/>

![Wireframes](img/barra_superior.png)<br/>

Por fim, utilizamos o ícone de "Calculator" para remeter o usuário para a página de Despesas, o ícone "dollar" para Quitar as depesas. O ícone add foi utilizado caso o uso queira adicionar novas despesas. <br/>

![Wireframes](img/barra_icones.png)<br/>

### Layout Responsivo
<!-- [Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.] -->

 A adaptação da interface para diferentes tamanhos de tela e dispositivos é essencial para garantir uma experiência de usuário consistente e acessível em todos os contextos. Para o Gestão de Despesas, foi implementada uma abordagem responsiva de design, que se ajusta dinamicamente para se adequar a diferentes dispositivos míveis, como tablets e smartphones. Seguem algumas considerações e técnicas aplicadas:<br/>

**Layout Flexível**: O layout da aplicação será construído com base em grades flexíveis e fluidas, permitindo que os elementos se reorganizem e redimensionem conforme o tamanho da tela. Isso garante que a disposição dos elementos se adapte de forma natural a qualquer dispositivo.<br/>

**ícones Responsivas**: Os ícones na aplicação serão configurados como responsivos, ajustando automaticamente seu tamanho e resolução de acordo com as características do dispositivo. Isso ajuda a reduzir o tempo de carregamento e melhora o desempenho em dispositivos móveis.<br/>

**Navegação Simplificada**:A navegação será simplificada e otimizada para toque.<br/>

**Testes em Diferentes Dispositivos**: Faremos testes extensivos da aplicação em uma variedade de dispositivos e tamanhos de tela para garantir que a experiência do usuário seja consistente e sem problemas em todos os casos.<br/>

Ao implementar essas técnicas de design responsivo, irá oferecer uma experiência de usuário intuitiva e eficaz, independentemente do dispositivo utilizado para acessá-la. Isso é fundamental para alcançar uma ampla base de usuários e garantir a satisfação do cliente em todas as interações com a aplicação.<br/>


### Interações do Usuário

<!--[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]-->

Na interface da Gestão de Despesas, priorizamos interações simples e eficientes para proporcionar uma experiência fluida. Seguem algumas das principais interações:<br/>

**Transições Suaves**: As transições entre páginas são suaves para manter a navegação fluida.<br/>
**Respostas de Formulário**: Feedback imediato é dado ao enviar formulários, usando pop-ups ou ícones para comunicar sucesso ou falha.<br/>
**Scroll Suave**: Animamos a rolagem para uma transição suave entre seções, melhorando a experiência de navegação.<br/>

<br/>Essas interações são implementadas de forma aprimorar a usabilidade, sem sobrecarregar o usuário com excesso de animações ou feedbacks visuais.<br/>


## Fluxo de Dados

<!-- [Diagrama ou descrição do fluxo de dados na aplicação.] -->

O diagrama abaixo ilustra a entrada e saída de dados entre os usuários na aplicação. <br/>

![Modelagem da aplicação](img/FluxoDados.jpg)

<br/>

## Requisitos Funcionais

<!-- [Liste os principais requisitos funcionais da aplicação.] -->

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve garantir que apenas membros autorizados tenham acesso aos grupos de despesas.   | ALTA |
|RF-002| Os próprietários devem ser capazes de registrar despesas, indicando o valor, a descrição e a data. | ALTA |
|RF-003| Os usuários devem ter acesso a um histórico detalhado de todas as transações do grupo. | ALTA |
|RF-004| A aplicação deve calcular automaticamente como dividir as despesas entre os membros do grupo. | ALTA |

## Requisitos Não Funcionais

<!-- [Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.] -->

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deverá respeitar às restrições impostas pela LGPD. (SEGURANÇA)| ALTA |
|RNF-002| A aplicação deve garantir a segurança dos dados do usuário. (SEGURANÇA) |  ALTA |
|RNF-003| A aplicação deve ser capaz de lidar com um aumento no número de usuários e requisições sem degradação significativa do desempenho. (CONFIABILIDADE) | ALTA | 
|RNF-004| A interface do usuário deve ser intuitiva e fácil de usar, mesmo para usuários iniciantes. (USABILIDADE) |  ALTA | 
|RNF-005| A aplicação deve ter um tempo de resposta aceitável para garantir uma experiência do usuário fluida. (CONFIABILIDADE) | MÉDIA | 
|RNF-006| O sistema deverá fazer uso de design responsivo nas interfaces gráficas.(USABILIDADE) | MÉDIA | 
|RNF-07| O sistema deve ser responsivo para rodar em um dispositivos móvel.(DISPONIBILIDADE) | MÉDIA | 

## Considerações de Segurança

<!-- [Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.] -->

Autenticação: Autenticação e autorização da API através do token JWT. <br/>
Senhas: Armazenamento de senha via banco de dados. <br/>
Autorização: Controle de acesso baseado em papéis. <br/>
Prevenção de Ataques: Proteção contra ataques comuns (SQL Injection, XSS) <br/>

## Implantação

<!-- [Instruções para implantar a aplicação distribuída em um ambiente de produção.] -->

<!-- 1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção. -->

1. Requisitos de Hardware e Software:
* Servidores com Node.js instalado.
* Banco de dados Microsoft SQL Server.
* Infraestrutura de nuvem.

<!-- 2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado. -->
   
2. Plataforma de Hospedagem:
* Provedor de nuvem: Render.
   
<!-- 3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente. -->

3. Configuração do Ambiente de Implantação:

* Instalação de dependências (Node.js, banco de dados).
* Configuração de variáveis de ambiente (chaves de API, credenciais de banco de dados).

<!-- 4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.-->

4. Deploy da Aplicação:

* Seguir as instruções da plataforma de hospedagem.
* Configuração de servidores, DNS e balanceamento de carga.

<!-- 5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.-->

5. Testes:

* Testes de funcionalidade para garantir que a aplicação esteja funcionando corretamente.
* Testes de desempenho e segurança.

## Testes

<!-- [Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste. -->

Seguem abaixo os testes de usabilidade considerando os requisitos especificados neste documento, assim como a utilização da aplicação integrada com a API:

**1- Página de login**:<br/>

![Modelagem da aplicação](img/app_pagina_login.PNG)
<br/>

**2- Home**: Ao fazer login, usuário é direcionado para página home que contém a lista de despesas. <br/>

![Modelagem da aplicação](img/app_pagina_home.PNG)
<br/>

**3- Editar Despesa**: Tela de edição de despesa. <br/>

![Modelagem da aplicação](img/app_pagina_edit_despesa.PNG)
<br/>

**4- Cadastrar despesa**: Tela para adicionar uma nova despesa. <br/>

![Modelagem da aplicação](img/app_pagina_adicionar_despesa.PNG)
<br/>

**5- Despesa cadastrada**: Home exibindo a nova despesa cadastrada. <br/>

![Modelagem da aplicação](img/app_pagina_lista_despesa_cadastrada.PNG)
<br/>

**6- Quitar despesa**: Tela contendo as informações para quitação de despesa. <br/>

![Modelagem da aplicação](img/app_pagina_quitar_despesa.PNG)
<br/>

**7- Despesa Quitada**: Tela exibindo a despesa quitada. <br/>

![Modelagem da aplicação](img/app_pagina_despesa_quitada.PNG)
<br/>

**8- Lista despesa quitada**: Tela Home exibindo a lista de despesas com a despesa quitada. <br/>

![Modelagem da aplicação](img/app_pagina_lista_despesa_quitada.PNG)
<br/>

**9- Excluir despesa**: Tela de edição com opção de exclusão de despesa. <br/>

![Modelagem da aplicação](img/app_pagina_excluir_despesa.PNG)
<br/>

**10- Despesa Excluída**: Tela Home contendo a despesa excluída. <br/>

![Modelagem da aplicação](img/app_pagina_lista_despesa_excluida.PNG)
<br/>




<!-- # Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho. -->
