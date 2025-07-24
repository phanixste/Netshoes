# Netshoes
O objetivo desse código é construir um web scraper que acesse a página de produto do site da Netshoes e extraia informações como título, preço, imagem e descrição. Para realizar a tarefa, utilizei o puppeteer, uma biblioteca Node.js que permite controlar o navegador de forma automatizada. Com ela, o script abre a página do produto, aguarda o carregamento e captura os dados por meio de seletores css. Mais do que simplesmente raspar nome e preço, a ideia foi criar uma coleta estruturada, capaz de gerar dados úteis e reutilizáveis para análise, categorização ou integração com outros sistemas. Além dos dados essenciais, optei por extrair outras informações relevantes, como: 

- Marca: identifica o fabricante do produto e é relevante para quem busca por qualidade ou afinidade com uma marca específica.

- Cor: informa a cor principal do item ou o conjunto de cores contidas no produto, um dado importante para preferência visual ou preocupação com manchas (no caso de perfumes por exemplo). 

- Gênero: sugere para qual público o produto é destinado (masculino, feminino, unissex).

- Indicação de uso: descreve o tipo de atividade ou contexto em que o produto é mais indicado (casual, treino, corrida, dia a dia) útil para orientar a decisão de uma possível compra.

- Avaliação média: mostra a nota média atribuída pelos consumidores, assim, dando uma ideia da satisfação de quem já comprou.

Com isso, testando diversos produtos de segmentos distintos tais como do setor de beleza, saúde, suplementos, produtos de vestuários de diferentes tamanhos e vendedores, observei que todos esses campos são pontos em comum, ou seja, esses dados estarão presentes dentro da estrutura html do site independente do seu tipo. Dessa forma, foi criado um scraper escalável e ao mesmo tempo genérico que pode ser aplicado a qualquer item da loja. Entretando, a avaliação média dos clientes irá depender se o produto já foi avaliado por pelo menos um cliente. A ideia foi ir além do básico e mostrar o que eu entendi com relação a estruturar uma coleta inteligente. Assim, esses dados podem ser úteis, por exemplo, para montar filtros por categoria, agrupar produtos similares ou até analisar a percepção de qualidade com base nas avaliações e também automatizar coleta de catálogo para análises futuras. Assim, tem potencial para ser usado por ferramentas de BI, plataformas de recomendação e dashboards.

Para rodar o código é necessário clonar o repositório e isso é feito da seguinte maneira: 
- Indo ao prompt de comando do seu computador
- Utilizar o comando cd para navegar até o diretório desejado
- Executar o comando git clone
- E depois o comando git clone https://github.com/phanixste/Netshoes.git
- Ou apenas baixar/copiar o código através do github e exucutar na IDE de sua escolha.

Depois de clonado ou baixado o código, para rodar o projeto é simples basta ter o Node.js instalado e executar os comandos a seguir:
npm install puppeteer (caso seja necessário)
node index.js

Caso não tenha o Node.js na máquina é necessário seguir os seguintes passos: 
- Ir até o site https://nodejs.org/en e baixar de acordo com sistema operacional da sua máquina
- Executar o instalador e aceitar os termos de uso
- Ao término da instalação executar os comandos node -v e npm -v no seu terminal.
