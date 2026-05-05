const dscc = window.dscc;

function draw(data) {
  const container = document.body;
  container.innerHTML = "";

  const rows = data.tables.DEFAULT;

  rows.forEach(row => {
    const nome = row.nome_de_guerra;
    const nomeCompleto = row.nome_completo;
    const setor = row.Setor;
    const graduacao = row.Graduacao;
    const img = row.Img_HTML;
    const pontuacao = row.pontuacao;
    const ranking = row.ranking;
    const assid = row.Perc_Assiduidade;

    const card = document.createElement("div");

    card.style.cssText = `
      border:1px solid #ccc;
      margin:6px;
      padding:10px;
      display:flex;
      align-items:center;
      gap:10px;
      background:#fff;
    `;

    card.innerHTML = `
      <img src="${img}" style="width:50px;height:50px;">
      <div>
        <div><b>#${ranking} - ${nome}</b></div>
        <div>${nomeCompleto}</div>
        <div>${setor} • ${graduacao}</div>
        <div>Pontuação: ${pontuacao}</div>
        <div>Assiduidade: ${assid}%</div>
      </div>
    `;

    container.appendChild(card);
  });
}

dscc.subscribeToData(draw, { transform: dscc.tableTransform });
