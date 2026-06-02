const BASE_URL = "http://localhost:3000";

async function fetchFilme(id) {
  try {
    const response = await fetch(`${BASE_URL}/filmes/${id}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
}

function renderDetalhes(filme) {
  const container = document.getElementById("detalhes-container");

  container.innerHTML = `
    <div class="row align-items-start mb-5">
      <div class="col-md-4 mb-4 mb-md-0">
        <img src="${filme.imagem}" class="img-fluid rounded shadow" alt="${filme.titulo}">
      </div>
      <div class="col-md-8">
        <h1 class="mb-3">${filme.titulo}</h1>
        <p class="lead">${filme.descricaoCompleta}</p>
        <hr>
        <p><strong>🎬 Diretor:</strong> ${filme.diretor}</p>
        <p><strong>🎭 Categoria:</strong> ${filme.categoria}</p>
        <p><strong>📅 Ano:</strong> ${filme.ano}</p>
        <p><strong>⏱️ Duração:</strong> ${filme.duracao}</p>
        <p><strong>⭐ Nota:</strong> ${filme.nota}</p>
        <div class="mt-3">
          <strong>🏷️ Tags:</strong>
          <div class="mt-2">
            ${filme.tags.map(tag => `<span class="badge bg-danger me-1">${tag}</span>`).join("")}
          </div>
        </div>
        <a href="index.html" class="btn btn-outline-danger mt-4">← Voltar ao catálogo</a>
      </div>
    </div>
  `;
}

async function init() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const container = document.getElementById("detalhes-container");

  if (!id) {
    container.innerHTML = `<div class="alert alert-warning">Nenhum filme selecionado. <a href="index.html">Voltar ao catálogo</a></div>`;
    return;
  }

  const filme = await fetchFilme(id);

  if (!filme) {
    container.innerHTML = `<div class="alert alert-danger">Filme não encontrado. <a href="index.html">Voltar ao catálogo</a></div>`;
    return;
  }

  renderDetalhes(filme);
}

init();