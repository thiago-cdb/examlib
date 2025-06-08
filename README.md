# Etapas do Projeto Web - ExamLib

## 1. Planejar o modelo básico (duas colunas, três colunas, fixo, fluido, etc)
 Modelo com layout de uma coluna centralizada, navbar fixa no topo, conteúdo fluido com Bootstrap (`container`).

---

## 2. Planejar e implementar a paleta de cores
 Fundo cinza escuro, texto branco, links em azul primário do Bootstrap. Navbar transparente com contraste adequado.

---

## 3. Planejar e implementar as fontes a serem utilizadas
 Fonte "Anton" definida e aplicada em todo o site via Google Fonts.

---

## 4. Definir e utilizar, se for o caso, um framework CSS (Bootstrap, por exemplo)
 Bootstrap incluído via CDN. Utilizado em toda a estrutura de layout e responsividade.

---

## 5. Criar um HTML base como resultado dos itens anteriores incluindo o CSS
 Criados partials `header`, `navbar` e `footer`, com layout padronizado e reutilizável em todas as páginas via EJS.

---

## 6. Criar um diagrama de árvore invertida com as rotas que serão necessárias
 ![diagrama de rotas](/public/images/diagrama.svg)


---

## 7. Criar o projeto com Visual Studio ou IDE preferida
 Projeto criado com `express-generator`, usando Visual Studio Code. Estrutura base (`routes`, `views`, `public`) funcionando.

---

## 8. Criar a infraestrutura básica com Node.js, Express e rotas
 Todas as rotas estão definidas e funcionais (`/`, `/about`, `/contacts`, `/donate`). Rota `/users` removida.

---

## 9. Implantar templates (EJS, Pug, etc)
 EJS utilizado como template engine. Todas as views usam layout comum com partials.

---

## 10. Utilizar templates com partials
 Partials `header`, `navbar` e `footer` incluídos nas páginas. Facilitam manutenção e reaproveitamento.


#