# Projeto LoopIn - Seu Diário de Aprendizado e 30 dias de Desafios

## 1. Introdução

O **LoopIn** é um aplicativo mobile pessoal desenvolvido para funcionar como um diário de aprendizado e um "hub" para o acompanhamento de hobbies e desafios. Com uma interface inspirada em um "mini-Twitter", o aplicativo permite ao usuário registrar insights diários, acompanhar seu progresso em desafios de 30 dias e refletir sobre sua jornada de desenvolvimento pessoal.

O nome "LoopIn" reflete a ideia de estar **dentro do ciclo contínuo de aprendizado e melhoria**, onde cada registro e desafio contribui para a sua evolução.

**Autor(a):** Mariana Letícia dos Santos Braga
**Data de Nascimento:** 27/07/2003
**Local de Nascimento:** Manaus - Amazonas

## 2. Conceito do Projeto

O LoopIn nasce da necessidade de estruturar o processo de aprendizado e a formação de hábitos. Ele oferece:
* **Feed Pessoal de Insights:** Um local para registrar pensamentos, descobertas e progressos diários, de forma concisa, como em uma rede social.
* **Desafios de 30 Dias Integrados:** Capacidade de criar e vincular posts a desafios específicos (ex: "30 Dias de Yoga", "Desafio Angular"). Isso cria um histórico coeso e visualizável do progresso em cada meta.
* **Motivação e Registro:** Ao documentar a jornada, o usuário pode visualizar sua evolução e manter-se motivado.

## 3. Funcionalidades Implementadas (Etapa Final)

As seguintes funcionalidades foram implementadas no protótipo final:

* **a) Autenticação e Cadastro de Usuários com Firebase:**
    * Sistema robusto de login e registro de usuários, utilizando o Firebase Authentication. Isso garante acesso personalizado e seguro ao aplicativo.
* **b) Criação e Gestão Básica de Desafios:**
    * Tela dedicada para criar novos desafios, onde o usuário pode definir um nome para sua meta de 30 dias. Os desafios são armazenados no Firebase Firestore.
* **c) Criação de Posts (Insights) com Vinculação a Desafios:**
    * Tela para o usuário registrar seus insights diários. É possível vincular cada post a um desafio ativo, conectando a reflexão ao progresso de uma meta específica. Os posts são armazenados no Firebase Firestore. (Atualmente, apenas texto é suportado; upload de imagens é uma funcionalidade futura).
* **d) Feed Básico de Insights:**
    * Exibição dos posts criados pelo usuário em um feed cronológico. Os posts podem exibir a qual desafio estão vinculados.
    * **(API Externa - Implementação Parcial/Placeholder):** Uma citação estática/exemplo é exibida no feed, simulando o consumo de uma API externa. A integração dinâmica completa da API [Mencionar a API escolhida, ex: Quotable API] está planejada para futuras iterações.
* **e) Tela de Apresentação Individual:**
    * Uma tela de "Sobre Mim / O Projeto" que apresenta a desenvolvedora (Mariana Letícia dos Santos Braga) e uma breve descrição do projeto LoopIn.

## 4. Tecnologias Utilizadas

* **Framework:** Ionic Framework (v7.x)
* **Linguagem/Framework:** Angular (v17.x ou a versão que você usou)
* **Backend como Serviço (BaaS):** Google Firebase
    * **Firebase Authentication:** Para gerenciamento de usuários (cadastro, login, logout).
    * **Firebase Firestore:** Para o banco de dados NoSQL (armazenamento de posts e desafios).
    * **(Planejado) Firebase Storage:** Para armazenamento de imagens.
* **Plataforma de Desenvolvimento Mobile:** Capacitor (para build Android)

## 5. Wireframes do Projeto

Os wireframes abaixo guiaram o desenvolvimento do layout e do fluxo do aplicativo, alinhados com o conceito de um feed pessoal e gerenciamento de desafios:

* **[Insira aqui a imagem do wireframe do Feed Principal]**
    * *Descrição:* Layout do feed de insights, mostrando a disposição dos posts e a interação com a API externa.
* **[Insira aqui a imagem do wireframe da Tela de Criação de Novo Post]**
    * *Descrição:* Interface para criar novos posts, com campos para texto e a opção de vincular a desafios.
* **(Opcional) [Insira aqui a imagem do wireframe da Tela de Detalhes de Desafio, se você tiver um]*
    * *Descrição:* Visualização do progresso em um desafio específico (se desenvolvida a tela de detalhes).

## 6. API Externa (Etapa 1 - Detalhes)

Para alimentar o feed com conteúdo externo e inspirador, a API escolhida foi a **[Nome da API, ex: Quotable API]**.

* **Link da Documentação:** [Link para a documentação da API, ex: `https://api.quotable.io/`]
* **Endpoint Principal:** `/quotes/random` ou `/quotes?limit=10&page=1` (conforme o que você planejou usar)
* **Critérios de Escolha:** Gratuita, fornece conteúdo em texto (citações inspiradoras), fácil de integrar (JSON simples, sem autenticação complexa) e relevante para um aplicativo de motivação/aprendizado.
* **Status Atual da Integração:** No momento, o aplicativo exibe uma citação estática como placeholder. A integração dinâmica para buscar citações da API em tempo real é um próximo passo a ser implementado.

## 7. Funcionalidades Futuras / Próximos Passos

Para enriquecer ainda mais a experiência do usuário, as seguintes funcionalidades estão planejadas para futuras iterações:

* **Upload de Imagens:** Permitir que o usuário anexe fotos aos seus posts, armazenando-as no Firebase Storage.
* **Métricas e Gráficos de Progresso:** Visualizações detalhadas do progresso dos desafios (barras de progresso, streaks, etc.).
* **Notificações de Lembrete:** Envio de notificações para lembrar o usuário de registrar seus insights diários ou de continuar um desafio.
* **Interação com Hashtags:** Tornar as hashtags clicáveis para filtrar posts por tópico.
* **Melhoria de UI/UX:** Refinamento do design visual e da experiência do usuário para um aplicativo mais polido e intuitivo.

## 8. Como Rodar o Projeto Localmente

Para clonar e rodar o projeto LoopIn em seu ambiente de desenvolvimento:

1.  **Clone o repositório (se conseguir subir para o GitHub depois da entrega):**
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    cd LoopIn
    ```
    *Se não conseguir o GitHub agora, indique para descompactar o ZIP e navegar até a pasta `LoopIn`.*
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(Se encontrar erros de `ERESOLVE`, tente `npm install --force` ou `npm install --legacy-peer-deps`)*
3.  **Configure o Firebase:**
    * Crie um projeto no Firebase Console.
    * Habilite Authentication (Email/Password) e Firestore Database.
    * Copie suas credenciais `firebaseConfig` e cole no arquivo `src/environments/environment.ts`.
4.  **Execute o aplicativo no navegador:**
    ```bash
    ionic serve
    ```

## 9. Geração do APK (Android)

Para gerar o arquivo APK para instalação em dispositivos Android:

1.  **Construa o projeto para produção:**
    ```bash
    ionic build --prod
    ```
2.  **Sincronize com a plataforma Android:**
    ```bash
    npx cap sync android
    ```
3.  **Abra o projeto no Android Studio:**
    ```bash
    npx cap open android
    ```
4.  **No Android Studio, vá em `Build` > `Generate Signed Bundle / APK...` e siga as instruções para gerar o `app-release.apk`.** (Será necessário criar uma keystore se for a primeira vez).

---
