const puppeteer = require("puppeteer");
const fs = require("fs");

async function produtos_netshoes(url) {
  const navegador = await puppeteer.launch({ headless: true });
  const pagina = await navegador.newPage();

  await pagina.setUserAgent("Mozilla/5.0");
  await pagina.goto(url, { waitUntil: "networkidle2" });
  await pagina.waitForSelector(".features--description", { timeout: 10000 });

  const dados_produto = await pagina.evaluate(() => {
    const descricao_produto =
      document.querySelector(".features--description")?.innerText.trim() || "";

    const container_nome = Array.from(
      document.querySelectorAll(".features--attributes li")
    ).find((li) => li.innerText.includes("Nome:"));
    const titulo_produto = container_nome
      ? container_nome.innerText.replace("Nome:", "").trim()
      : "";

    const container_genero = Array.from(
      document.querySelectorAll(".features--attributes li")
    ).find((li) => li.innerText.includes("Gênero:"));
    const genero_produto = container_genero
      ? container_genero.innerText.replace("Gênero:", "").trim()
      : "";

    const container_indicacao = Array.from(
      document.querySelectorAll(".features--attributes li")
    ).find((li) => li.innerText.includes("Indicado para:"));
    const indicacao_produto = container_indicacao
      ? container_indicacao.innerText.replace("Indicado para:", "").trim()
      : "";

    const preco_produto =
      document.querySelector(".saleInCents-value")?.innerText.trim() || "";

    const media_avaliacao =
      document
        .querySelector(".reviews-header__rating__big-number")
        ?.innerText.trim() || "";

    const marca = document.querySelector(".brand-link")?.innerText.trim() || "";

    const cor = document.querySelector(".label--color")?.innerText.trim() || "";

    const link_imagem =
      Array.from(document.querySelectorAll('link[rel="preload"][as="image"]'))
        .map((link) => link.getAttribute("href"))
        .find((href) => href.includes("zoom1")) || "";

    const imagem = link_imagem
      .replace(
        /^https?:\/\/static\.netshoes\.com\.brhttps?:\/\/static\.netshoes\.com\.br/,
        "https://static.netshoes.com.br"
      )
      .split("?")[0];

    return {
      titulo_produto,
      preco_produto,
      marca,
      cor,
      indicacao_produto,
      genero_produto,
      media_avaliacao,
      imagem,
      descricao_produto,
    };
  });

  fs.writeFileSync(
    "resultado.json",
    JSON.stringify(dados_produto, null, 2),
    "utf-8"
  );

  await pagina.screenshot({ path: "screenshot.png", fullPage: true });

  await navegador.close();
  console.log(dados_produto);
}

const url =
  "https://www.netshoes.com.br/p/camisa-juventus-third-2425-sn-torcedor-adidas-masculina-azul-FB9-8458-008-03";
produtos_netshoes(url);
