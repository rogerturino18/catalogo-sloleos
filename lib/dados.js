/* ===== Dados do catálogo SL Óleos — edite aqui e os três formatos se atualizam ===== */
const WHATSAPP = "551436261777"; // DDI + DDD + número, só dígitos

const CDN = "https://files.cdn-files-a.com/uploads/9395824/";
const CDN2 = "https://images.cdn-files-a.com/uploads/9395824/";
const LOGO = "img/logo-h.png";            // logo horizontal, texto grafite (fundos claros)
const LOGO_BRANCO = "img/logo-h-branco.png"; // logo horizontal, texto branco (fundos escuros)
const LOGO_V_BRANCO = "img/logo-v-branco.png";
const CAPA = "img/bomba-bp3.jpg";

/* Grafismo da marca: onda amarela + verde (Manual de Identidade, p. 12) */
const GRAFISMO = '<svg class="grafismo" viewBox="0 0 600 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30 C120 0 230 8 330 30 S520 52 600 0 C540 40 450 56 330 40 S110 22 0 30Z" fill="#dad106"/><path d="M0 50 C120 26 230 36 330 54 S520 72 600 28 C540 64 450 76 330 62 S110 44 0 50Z" fill="#018837"/></svg>';
const VIDEO_FABRICA = "https://cdn-media.f-static.net/uploads/9395824/normal_667ecd2385512.mp4";

/* etapa: preparo | prensagem | planta  (usada na Linha de processo) */
const PRODUTOS = [
  {id:"alimentador", m:"ALM", etapa:"preparo", cat:"Preparo", nome:"Alimentador para moinho laminador", cap:"100 – 500 ton/dia", img:"img/alimentador-v2.jpg", cena:true, novo:true,
   desc:"Alimenta os moinhos laminadores no processamento de canola, soja e outras oleaginosas, com alimentação eficiente e maior controle do processo. Para canola, tem sistema anti-fuga de grãos, que reduz perdas na operação.",
   ficha:[["Capacidade","100 a 500 ton/dia"],["Sementes","Canola, soja e outras oleaginosas"],["Destaque","Sistema anti-fuga de grãos (canola)"]]},
  {id:"cv3608", m:"CV3608", etapa:"preparo", cat:"Preparo", nome:"Cozinhador CV3608", cap:"1.100 ton/dia", img:"img/a/eq-cozinhador-cv3608.jpg", cena:true, novo:true,
   desc:"Cozinhador vertical de 8 pisos para o cozimento de canola e o condicionamento térmico da soja no preparo para a extração por solvente.",
   ficha:[["Tipo","Cozinhador vertical"],["Dimensões","Ø 3.600 mm × 8 pisos"],["Capacidade","1.100 ton/dia (canola)"],["Aplicação","Cozimento de canola e condicionamento térmico de soja para extração por solvente"],["Peso","70 ton"]]},
  {id:"secador", m:"SR", etapa:"preparo", cat:"Preparo", nome:"Secador rotativo", img:"img/a/eq-secador-rotativo.jpg", cena:true,
   desc:"Secador rotativo para o preparo de oleaginosas. Dimensionado pela engenharia conforme a semente e a capacidade da planta.",
   ficha:[["Tipo","Secador rotativo"],["Capacidade","Sob consulta"],["Projeto","Sob medida"]]},
  {id:"lc15", m:"LC15", etapa:"prensagem", cat:"Prensa", nome:"Prensa LC15 Simples", img:"img/a/eq-prensa-lc15.jpg", cena:true,
   desc:"Prensa contínua para extração mecânica de óleos vegetais. Consulte a configuração ideal para a sua semente.",
   ficha:[["Tipo","Prensa contínua"],["Capacidade","Sob consulta"]]},
  {id:"bp3", m:"BP3", etapa:"refino", cat:"Bomba", nome:"Bomba BP3", img:"img/bomba-bp3.jpg", cena:true, novo:true,
   desc:"Bomba robusta para o recalque de óleos vegetais em alta pressão. Indicada principalmente para refinarias de óleo, onde confiabilidade, resistência e eficiência mantêm o processo em funcionamento.",
   ficha:[["Tipo","Bomba de alta pressão, 3 pistões"],["Fluido","Óleos vegetais"],["Aplicação","Refinarias de óleos vegetais"]]},
  {id:"psl300", m:"PSL 300", etapa:"planta", cat:"Instalação", nome:"Instalação PSL 300", cap:"600 – 1.000 kg/h", img:"img/a/psl300-v2.jpg",
   desc:"Instalação de extração mecânica para sementes ricas em óleo, entregando um produto de alto valor agregado.",
   ficha:[["Tipo","Extração mecânica"],["Capacidade","600 a 1.000 kg/h"],["Aplicação","Sementes oleaginosas"]]},
  {id:"psl600", m:"PSL 600", etapa:"planta", cat:"Instalação", nome:"Instalação PSL 600", img:CDN+"2000_66d7676e50970.jpg",
   desc:"Instalação de extração mecânica de maior porte, configurada pela engenharia conforme a semente e o volume do cliente.",
   ficha:[["Tipo","Extração mecânica"],["Capacidade","Sob consulta"],["Projeto","Sob medida"]]},
  {id:"linhaca", m:"LN 1000", etapa:"planta", cat:"Instalação", nome:"Linha para linhaça", cap:"1.000 kg/h", img:CDN+"2000_66d768e1f1429.jpg",
   desc:"Instalação de extração mecânica dedicada à extração de óleo de sementes de linhaça.",
   ficha:[["Tipo","Extração mecânica"],["Capacidade","1.000 kg/h"],["Semente","Linhaça"]]},
  {id:"pte100", m:"PTE-100", etapa:"prensagem", cat:"Prensa", nome:"Prensa PTE-100", cap:"até 2.500 kg/h", img:CDN+"2000_67c5b13285221.jpg",
   desc:"Prensa para soja extrusada, amendoim, gergelim, cártamo, girassol e outras sementes.",
   ficha:[["Tipo","Prensa contínua"],["Capacidade","até 2.500 kg/h"],["Sementes","Soja extrusada, amendoim, gergelim, cártamo, girassol"]]},
  {id:"pt30", m:"PT30", etapa:"prensagem", cat:"Prensa", nome:"Prensa PT30", img:"img/a/obra-prensa.jpg",
   desc:"Eixo com helicoides que conduz o material por volumes cada vez menores, gerando a pressão para retirar o óleo. O óleo passa por barras de prensagem com aberturas variadas e segue para limpeza.",
   ficha:[["Tipo","Prensa de helicoide"],["Capacidade","Sob consulta"],["Saída do óleo","Barras de prensagem"]]},
  {id:"pt30e", m:"PT30E", etapa:"prensagem", cat:"Prensa", nome:"Prensa expeller PT30E", img:CDN+"2000_667ee617bfcb4.png",
   desc:"Prensa expeller de alta pressão para extração mecânica de óleo.",
   ficha:[["Tipo","Expeller"],["Pressão","Alta"],["Capacidade","Sob consulta"]]},
  {id:"pe250", m:"PE250", etapa:"prensagem", cat:"Prensa", nome:"Prensa PE250", img:CDN+"2000_667ee617d1b46.png",
   desc:"Prensa para extração mecânica de óleos vegetais. Consulte a configuração ideal para a sua semente.",
   ficha:[["Tipo","Prensa"],["Capacidade","Sob consulta"]]},
  {id:"pt2", m:"PT2", etapa:"prensagem", cat:"Prensa", nome:"Prensa PT2", img:CDN+"2000_667ee6178b30d.png",
   desc:"Prensa para extração mecânica de óleos vegetais. Consulte a configuração ideal para a sua semente.",
   ficha:[["Tipo","Prensa"],["Capacidade","Sob consulta"]]},
  {id:"moinho", m:"ML", etapa:"preparo", cat:"Preparo", nome:"Moinho laminador", img:CDN+"2000_667ee6180ca28.png",
   desc:"Laminação das sementes no preparo para a prensagem.",
   ficha:[["Etapa","Preparo da semente"],["Função","Laminação"],["Capacidade","Sob consulta"]]},
  {id:"slc10", m:"SLC10", etapa:"preparo", cat:"Equipamento", nome:"SLC10", img:CDN+"2000_667ee617e259f.png",
   desc:"Equipamento da linha SL Óleos. Fale com a engenharia para especificações.",
   ficha:[["Capacidade","Sob consulta"]]}
];

const PECAS = {
  id:"pecas", m:"REPOSIÇÃO", nome:"Peças de reposição",
  desc:"Helicoides, barras de prensagem e componentes de desgaste para prensas de extração.",
  maquinas:[["Masiero","PE100 · PP4"],["Masiero","PE25"],["Piratininga","R158"],["Óleo de palma","diversos"]],
  fotos:[["img/a/eq-helicoides-v2.jpg","Helicoides"],["img/pecas/eixo-helicoides.jpg","Eixo com helicoides"],["img/pecas/barras.jpg","Barras de prensagem"],
    ["img/a/eq-helicoide.jpg","Helicoide"],["img/pecas/bucha-bipartida.jpg","Mancal bipartido"],["img/pecas/rotor.jpg","Rotor"],
    ["img/pecas/pontas.jpg","Pontas cônicas"],["img/a/eq-cesto.jpg","Barras do cesto"],["img/pecas/componentes-internos.jpg","Pás e raspadores"]]
};

const EMPRESA = {
  tel:"(14) 3626-1777", telLink:"tel:+551436261777",
  emails:[["Comercial","comercial@sloleos.com.br"],["Engenharia","engenharia@sloleos.com.br"],["Geral","sloleos@sloleos.com.br"]],
  endereco:"Rua Francisco José Caseiro, 190 · Jaú/SP",
  mapa:"https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Jos%C3%A9+Caseiro%2C+190%2C+Ja%C3%BA+-+SP",
  insta:"https://www.instagram.com/sl_oleos", linkedin:"https://www.linkedin.com/company/sl-%C3%B3leos/",
  paises:["Brasil","Argentina","Honduras","Peru","Portugal"],
  numeros:[["+30","anos em metalurgia"],["+10","anos em óleos vegetais"],["7","plantas de extração"],["5","países atendidos"]],
  frase:"A gota representa a indústria. A folha representa o cliente. A SL Óleos é quem conecta os dois."
};

/* Galeria por categoria: [arquivo, legenda]. Fotos em img/a (grande) e img/t (miniatura) */
const GALERIA = {
  obras:[["obra-vista-externa","Planta de extração entregue"],["obra-equipe","Equipe em obra"],["obra-noturna","Planta em operação"],["obra-preparacao","Preparação da semente"],
    ["obra-linha-prensas","Linha de prensagem"],["obra-laminador","Laminação"],["obra-tratamento-oleo","Tratamento do óleo"],["obra-pko","Extração de óleo de palmiste (PKO)"],
    ["obra-iberol","Montagem em Portugal"],["obra-icamento","Montagem com guindaste"],["obra-er22160","Planta industrial"],["obra-torre","Instalação de processo"],
    ["obra-prensa","Prensa instalada"],["obra-estrutura","Estruturas e plataformas"],["obra-tanque","Tanques e silos"],["obra-predio","Unidade de extração"],["obra-galpao","Unidade industrial"],["obra-interior","Sala de processo"]],
  fabrica:[["fabrica-galpao","Fábrica em Jaú/SP"],["fabrica-producao","Linha de produção"],["fabrica-caldeiraria","Caldeiraria"],["fabrica-solda","Soldagem"],
    ["fabrica-usinagem","Usinagem"],["fabrica-tampos","Tampos e chapas"],["fabrica-vaso","Equipamento de grande porte"],["fabrica-transporte","Transporte de equipamento"],["fabrica-icamento","Içamento"]],
  equipamentos:[["eq-prensa-azul","Prensa de grande porte"],["eq-prensa-azul-2","Prensa com unidade hidráulica"],["eq-prensa-sl-tecnologia-v2","Prensa SL Tecnologia"],["eq-prensa-aberta","Prensa com cesto aberto"],
    ["eq-prensa-cesto","Cesto da prensa"],["eq-rosca","Eixo de helicoides"],["eq-bomba-3-pistoes-v2","Bomba de 3 pistões"],
    ["eq-valvulas-rotativas","Válvulas rotativas"],["eq-pecas-usinadas","Peças usinadas"],["esp-processo-inox","Processo em inox"],["esp-tanques-inox","Tanques em inox"]]
};
const foto = n => "img/a/" + n + ".jpg";
const mini = n => "img/t/" + n + ".jpg";

/* Sementes com foto (usadas na Linha de processo) */
const SEMENTES = [["Soja","semente-soja"],["Palma","semente-palma"],["Palmiste","semente-palmiste"],["Gergelim","semente-gergelim"],["Cártamo","semente-cartamo"],["Canola",null],["Girassol",null],["Amendoim",null],["Linhaça",null]];

/* ===== Lista de orçamento (compartilhada pelos três formatos) ===== */
const Orcamento = (() => {
  const KEY = "sl_orcamento";
  let itens = [];
  try { itens = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { itens = []; }
  const ouvintes = [];
  const salvar = () => { try { localStorage.setItem(KEY, JSON.stringify(itens)); } catch (e) {} ouvintes.forEach(f => f(itens)); };
  return {
    tem: id => itens.includes(id),
    alternar(id){ itens = itens.includes(id) ? itens.filter(x => x !== id) : [...itens, id]; salvar(); return itens.includes(id); },
    limpar(){ itens = []; salvar(); },
    lista: () => itens.slice(),
    ouvir(f){ ouvintes.push(f); f(itens); },
    link(){
      const nomes = itens.map(id => id === "pecas" ? "Peças de reposição (modelo da máquina: )" : (PRODUTOS.find(p => p.id === id) || {}).nome).filter(Boolean);
      const msg = nomes.length
        ? "Olá! Vi o catálogo da SL Óleos e gostaria de orçamento para:\n" + nomes.map(n => "• " + n).join("\n") + "\n\nSemente / capacidade desejada: "
        : "Olá! Vi o catálogo da SL Óleos e gostaria de mais informações.";
      return waLink(msg);
    }
  };
})();
function waLink(msg){ return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg); }

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z"/></svg>';

/* Barra flutuante "Orçamento (n)" — basta incluir <div id="orc-bar"></div> na página */
function montarBarraOrcamento(){
  const el = document.getElementById("orc-bar");
  if (!el) return;
  el.innerHTML = `<a class="orc-send" target="_blank" rel="noopener">${WA_ICON}<span class="orc-txt"></span></a><button class="orc-clear" type="button" aria-label="Limpar lista">×</button>`;
  const a = el.querySelector(".orc-send"), t = el.querySelector(".orc-txt"), c = el.querySelector(".orc-clear");
  c.onclick = () => Orcamento.limpar();
  const sync = itens => {
    a.href = Orcamento.link();
    t.textContent = itens.length ? `Enviar orçamento (${itens.length})` : "WhatsApp";
    el.classList.toggle("tem-itens", itens.length > 0);
    c.hidden = !itens.length;
    document.querySelectorAll("[data-orc]").forEach(b => {
      const on = itens.includes(b.dataset.orc);
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
      const l = b.querySelector(".lbl"); if (l) l.textContent = on ? "Na lista ✓" : "+ Orçamento";
    });
  };
  Orcamento.ouvir(sync);
  window.syncOrc = () => sync(Orcamento.lista());
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-orc]");
    if (b) { e.preventDefault(); e.stopPropagation(); Orcamento.alternar(b.dataset.orc); }
  });
}

/* Foto em tela cheia: qualquer elemento com data-zoom="caminho" abre a imagem inteira ao toque */
(function(){
  let box;
  function abrir(src, leg){
    if (!box){
      box = document.createElement("div"); box.className = "zoom"; box.setAttribute("role","dialog");
      box.innerHTML = '<button class="zoom-x" aria-label="Fechar">×</button><img alt=""><p></p>';
      document.body.appendChild(box);
      box.addEventListener("click", e => { if (e.target.tagName !== "IMG") box.classList.remove("on"); });
      addEventListener("keydown", e => { if (e.key === "Escape") box.classList.remove("on"); });
    }
    box.querySelector("img").src = src; box.querySelector("img").alt = leg || "";
    box.querySelector("p").textContent = leg || "";
    box.classList.add("on");
  }
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-zoom]");
    if (el) { e.preventDefault(); e.stopPropagation(); abrir(el.dataset.zoom, el.dataset.leg || el.alt); }
  }, true);
})();

/* Todas as máquinas usam o mesmo tratamento de foto: imagem inteira sobre fundo escuro desfocado (sem cartão branco) */
PRODUTOS.forEach(p => { p.cena = true; });
