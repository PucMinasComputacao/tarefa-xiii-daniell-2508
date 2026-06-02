# 🎬 CineVerse

**Nome:** Daniell Cardoso  
**Matrícula:** 917809  
**Curso:** Engenharia de Software  
**Projeto:** TP1 Web

---

## 📁 Estrutura do db.json

### Coleções

| Coleção | Descrição |
|---|---|
| `filmes` | Coleção principal com todos os filmes do catálogo |
| `categorias` | Lista de categorias disponíveis para os filmes |
| `avaliacoes` | Avaliações feitas por usuários para cada filme |
| `favoritos` | Lista de filmes marcados como favoritos |

### Exemplo de item (filmes)

```json
{
  "id": 1,
  "titulo": "Matrix",
  "descricaoCurta": "Um hacker descobre que a realidade é uma simulação.",
  "descricaoCompleta": "Thomas Anderson, um programador que vive uma dupla vida como hacker, descobre que o mundo em que vive é uma simulação chamada Matrix, controlada por máquinas.",
  "imagem": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  "categoria": "Ficção Científica",
  "nota": 8.7,
  "ano": 1999,
  "diretor": "Lana e Lilly Wachowski",
  "duracao": "2h16min",
  "tags": ["ação", "ficção científica", "cyberpunk", "clássico"],
  "destaque": true
}
```

---

## 🖥️ Página Principal (Home)

![Home](images/home.png)

---

## 🎬 Página de Detalhes

![Detalhes](images/detalhes.png)