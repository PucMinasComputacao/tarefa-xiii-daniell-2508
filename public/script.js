const BASE_URL = "http://localhost:3000";
const container = document.getElementById("cards-container");
const message = document.getElementById("message");
const searchInput = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");

async function fetchItems(query = "") {
  showMessage("Carregando filmes...");
  try {
    const response = await fetch(`${BASE_URL}/filmes`);
    const filmes = await response.json();

    if (query === "") return filmes;

    return filmes.filter(f =>
      f.titulo.toLowerCase().includes(query.toLowerCase()) ||
      f.categoria.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    showMessage("Erro ao carregar filmes. Verifique se o JSON Server está rodando.");
    return [];
  }
}

function createCard(filme) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-3 mb-4";

  col.innerHTML = `
    <div class="card h-100 shadow">
      <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}" style="height:350px; object-fit:cover;">
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 class="mb-2">${filme.titulo}</h5>
          <p class="mb-1"><strong>Ano:</strong> ${filme.ano}</p>
          <p class="mb-1"><strong>Nota:</strong> ⭐ ${filme.nota}</p>
          <p class="mb-1"><strong>Categoria:</strong> ${filme.categoria}</p>
          <p class="text-muted small">${filme.descricaoCurta}</p>
        </div>
        <a href="details.html?id=${filme.id}" class="btn btn-danger mt-2">Ver detalhes</a>
      </div>
    </div>
  `;

  return col;
}

function renderCards(filmes) {
  if (!container) return;
  container.innerHTML = "";

  if (filmes.length === 0) {
    showMessage("Nenhum filme encontrado.");
    return;
  }

  showMessage("");
  filmes.forEach(filme => container.appendChild(createCard(filme)));
}

function showMessage(text) {
  if (message) message.textContent = text;
}

async function init() {
  if (container) {
    const filmes = await fetchItems();
    renderCards(filmes);
  }
}

if (btnSearch && searchInput) {
  btnSearch.addEventListener("click", async () => {
    const query = searchInput.value;
    const filmes = await fetchItems(query);
    renderCards(filmes);
  });

  searchInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      const filmes = await fetchItems(searchInput.value);
      renderCards(filmes);
    }
  });
}

init();