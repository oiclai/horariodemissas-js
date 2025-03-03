# ToDo List

- [X] Limpar código. Etapa I tá na branch 'hdm-etapaI-vitejs'.

- [X] Implementar NextJS para usar React

- [X] Configurar o Supabase: Criar um banco de dados no Supabase
    - [X] definir as tabelas (por exemplo, uma tabela "missas" com colunas como id, zona, dia_da_semana, local, horario e turno).

- [X] Conectar o Next.js ao Supabase: Instalar o SDK do Supabase no projeto e configurar a conexão.

- [ ] Fazer requisições assíncronas: Criar funções para buscar, inserir e atualizar os dados do Supabase diretamente no Next.js. (fetch/axios)*

- [ ] Combinar Expressoes Regulares 
 ( 
    da p usar na filtragem qunto a colocarem um horario e ele trazer as missas com os turnos:
    if (turno === "Manhã") {
    regex = "^(0[5-9]|1[0-1]):[0-5]\\d$" (05:00 ate 11:59)
    } ai puxa do db as missas da Manhã
 )

- [ ] Combinar componentes ReactJS

### Requisitos crus

- [ ] Regexp;

- [ ] Requisição Assíncrona;

- [ ] Back-end com DBaaS (Supabase);

- [ ] Componentes ReactJS;

- [ ] Gerencia de estado entre Componentes; -> da p usar na barra de pesquisa tb p filtragem mais interativa

#### observações ⚠
- public/index.html: as configurações globais do HTML
- src/App.js: comp principal onde começa a editar o layout e a logica da sua page
- p conectar SUPABASE com o front: URL do projeto + anon_key