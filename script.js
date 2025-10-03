/******************************************
  script.js - Droguería Corfam (completo)
******************************************/


/* ============================
   Datos: productos completos
   ============================ */
const PRODUCTS = [
  {id:1,name:'Amoxicilina 500mg',cat:'Antibióticos',desc:'Envase x 14 cáps',price:12000,img:'https://i.imgur.com/EYQY8sc.png'},
  {id:2,name:'Cetirizina 10mg',cat:'Antihistamínicos',desc:'Caja x 10 tab',price:9800,img:'https://i.imgur.com/y6tOXg0.png'},
  {id:3,name:'Ibuprofeno 400mg',cat:'Antiinflamatorios',desc:'Envase x 20 tab',price:8000,img:'https://i.imgur.com/v4I9Bft.png'},
  {id:4,name:'Pax Noche',cat:'Antigripales',desc:'Caja 6 sobres',price:9500,img:'https://i.imgur.com/SDPSfay.png'},
  {id:5,name:'Acetaminofén 500mg',cat:'Analgésicos',desc:'Caja x 20 tab',price:7000,img:'https://i.imgur.com/Rn8TF7E.png'},
  {id:6,name:'Loratadina 10mg',cat:'Antihistamínicos',desc:'Caja x10',price:7200,img:'https://i.imgur.com/PPmYEDy.png'},
  {id:7,name:'Dexibuprofeno 300mg (Taflax)',cat:'Antiinflamatorios',desc:'Envase x30',price:8500,img:'https://i.imgur.com/2fLaVqx.png'},
  {id:8,name:'Clindamicina 300mg',cat:'Antibióticos',desc:'Caja x16 cáps',price:15500,img:'https://i.imgur.com/veU9KJH.png'},
  {id:9,name:'Desodorante Rexona',cat:'Higiene personal',desc:'Roll-on 50ml',price:11000,img:'https://i.imgur.com/ngkTKUN.jpeg'},
  {id:10,name:'Condones Today',cat:'Cuidado sexual',desc:'Caja x3',price:9000,img:'https://i.imgur.com/GhX4KKA.png'},
  {id:11,name:'Pastillas Anticonceptivas Bellaface',cat:'Planificación',desc:'Caja x21',price:25000,img:'https://i.imgur.com/I3Ooged.png'},
  {id:12,name:'Pastilla del día después',cat:'Planificación',desc:'1 tableta',price:18000,img:'https://i.imgur.com/YNUNj5J.jpeg'},

  {id:13,name:'Crema dental Sensodyne',cat:'Higiene personal',desc:'Tubo 100ml',price:15800,img:'https://i.imgur.com/drBs5eM.png'},
  {id:14,name:'Jabón Dove Blanco x3',cat:'Higiene personal',desc:'Pack x3',price:29300,img:'https://i.imgur.com/QOatSUG.png'},
  {id:15,name:'Crema dental Cero Tradicional',cat:'Higiene personal',desc:'Tubo 90ml',price:29000,img:'https://i.imgur.com/Qm0pyGd.png'},
  {id:16,name:'Crema dental Colgate 75ml',cat:'Higiene personal',desc:'Tubo 75ml',price:11600,img:'https://i.imgur.com/QK8Vm0Z.png'},
  {id:17,name:'Jabón Protex Men',cat:'Higiene personal',desc:'Barra 100g',price:10600,img:'https://i.imgur.com/uPFe2vA.png'},
  {id:18,name:'Noxpirin Junior x24 sobres',cat:'Antigripales',desc:'Caja x24',price:3600,img:'https://i.imgur.com/goc9vlC.jpeg'},
  {id:19,name:'Noxpirin Granulado x24',cat:'Antigripales',desc:'Caja x24',price:2600,img:'https://i.imgur.com/goc9vlC.jpeg'},
  {id:20,name:'Bronquisol Flem Niños',cat:'Antigripales',desc:'Jarabe pediátrico',price:34600,img:'https://i.imgur.com/wX4PC9m.jpeg'},
  {id:21,name:'Mucosina Pediátrica 30ml',cat:'Antigripales',desc:'Gotas 30ml',price:41300,img:'https://i.imgur.com/HOarhmt.png'},
  {id:22,name:'Mieltertos Jarabe 240ml',cat:'Antigripales',desc:'Frasco 240ml',price:23900,img:'https://i.imgur.com/OAuOFdY.png'},

  // Antiespasmódicos
  {id:23,name:'Espasmobil x4',cat:'Antiespasmódicos',desc:'Paquete x4',price:12000,img:'https://i.imgur.com/vjqLAU3.png'},
  {id:24,name:'Duopas (caja x10)',cat:'Antiespasmódicos',desc:'Caja x10',price:47600,img:'https://i.imgur.com/Hfwtrpd.jpeg'},
  {id:25,name:'Duopas (unidad)',cat:'Antiespasmódicos',desc:'Unidad',price:5600,img:'https://i.imgur.com/Hfwtrpd.jpeg'},
  {id:26,name:'Buscapina Compuesta x10',cat:'Antiespasmódicos',desc:'Caja x10',price:20000,img:'https://i.imgur.com/imOqBJz.png'},
  {id:27,name:'Buscapina Gotas',cat:'Antiespasmódicos',desc:'Frasco gotas',price:38000,img:'https://i.imgur.com/3coyuZp.png'},
  {id:28,name:'Buscapina Ampolla',cat:'Antiespasmódicos',desc:'Ampolla',price:15000,img:'https://i.imgur.com/fppqClY.png'},
  {id:29,name:'Hioscina butilbromuro x10',cat:'Antiespasmódicos',desc:'Sobre x10',price:6500,img:'https://i.imgur.com/cZsaqgr.jpeg'},

  // Antiparasitarios
  {id:30,name:'Nitazoxanida',cat:'Antiparasitarios',desc:'Caja',price:27000,img:'https://i.imgur.com/gNrJHbL.png'},
  {id:31,name:'Tinidazol',cat:'Antiparasitarios',desc:'Caja',price:9800,img:'https://i.imgur.com/yLOa9cr.png'},
  {id:32,name:'Nitax',cat:'Antiparasitarios',desc:'Presentación',price:78000,img:'https://i.imgur.com/uCB56ku.jpeg'},
  {id:33,name:'Mebendazol',cat:'Antiparasitarios',desc:'Caja',price:12000,img:'https://i.imgur.com/01qoLPZ.png'},
  {id:34,name:'Albendazol',cat:'Antiparasitarios',desc:'Unidad',price:4700,img:'https://i.imgur.com/FkNKYub.png'},
  {id:35,name:'Metronidazol',cat:'Antiparasitarios',desc:'(Sólo bajo fórmula)',price:3500,img:'https://i.imgur.com/ks6f7XK.png'},

  // Antidiarreicos
  {id:36,name:'Pangestan',cat:'Antidiarreicos',desc:'Presentación',price:10400,img:'https://i.imgur.com/mRKPlhB.png'},
  {id:37,name:'Loperamida (x4)',cat:'Antidiarreicos',desc:'Paquete x4',price:3000,img:'https://i.imgur.com/eM9v37V.png'},
  {id:38,name:'Lomotil (x4)',cat:'Antidiarreicos',desc:'Paquete x4',price:8600,img:'https://i.imgur.com/obFw0Tg.jpeg'},
  {id:39,name:'Smecta',cat:'Antidiarreicos',desc:'Presentación',price:8000,img:'https://i.imgur.com/vihXced.jpeg'},
  {id:40,name:'Diosmectita',cat:'Antidiarreicos',desc:'Presentación',price:5000,img:'https://i.imgur.com/xgaRlZW.png'},
  {id:41,name:'Bic Baster',cat:'Antidiarreicos',desc:'Presentación',price:18000,img:'https://i.imgur.com/33lP8gP.jpeg'},
  {id:42,name:'Enterogermina (unidad)',cat:'Antidiarreicos',desc:'Unidad',price:8000,img:'https://i.imgur.com/0s8Z6AY.png'},
  {id:43,name:'Enterogermina (caja)',cat:'Antidiarreicos',desc:'Caja',price:70000,img:'https://i.imgur.com/0s8Z6AY.png'},

  // Antihistamínicos / varios
  {id:44,name:'Fexofenadina (tabletas)',cat:'Antihistamínicos',desc:'Tabletas',price:48000,img:'https://i.imgur.com/OkwUPQ5.jpeg'},
  {id:45,name:'Fexofenadina (jarabe)',cat:'Antihistamínicos',desc:'Jarabe',price:52000,img:'https://i.imgur.com/YkaGEEA.png'},
  {id:46,name:'Hidroxicina (caja)',cat:'Antihistamínicos',desc:'Caja',price:9800,img:'https://i.imgur.com/F2jQbKg.jpeg'},
  {id:47,name:'Prednisolona (30 tab)',cat:'Antihistamínicos',desc:'Caja x30',price:19800,img:'https://i.imgur.com/aFq5hzq.png'},

  // Corticoides
  {id:48,name:'Hidrocortisona',cat:'Corticoides',desc:'Presentación',price:6000,img:'https://i.imgur.com/9gJVT3Z.jpeg'},
  {id:49,name:'Betametasona',cat:'Corticoides',desc:'Presentación',price:15700,img:'https://i.imgur.com/QT4UzDb.png'},
  {id:50,name:'Desonida',cat:'Corticoides',desc:'Presentación',price:15600,img:'https://i.imgur.com/j06jRUs.png'},
  {id:51,name:'Dermaskin',cat:'Corticoides',desc:'Presentación',price:25000,img:'https://i.imgur.com/Zsj6hYI.png'},
  {id:52,name:'Baycuten',cat:'Corticoides',desc:'Presentación',price:36000,img:'https://i.imgur.com/SG7OJkI.png'},

  // OTC
  {id:53,name:'Aspirina efervescente',cat:'OTC',desc:'Paquete x2',price:2500,img:'https://i.imgur.com/I2uvWzw.png'},
  {id:54,name:'Sevedol',cat:'OTC',desc:'Paquete x2',price:4400,img:'https://i.imgur.com/X8u4iFx.png'},
  {id:55,name:'Ibuflash',cat:'OTC',desc:'Paquete x2',price:5900,img:'https://i.imgur.com/BjuTOmt.jpeg'},
  {id:56,name:'Migrinon',cat:'OTC',desc:'Paquete x5',price:7000,img:'https://i.imgur.com/2yy9MLr.png'},
  {id:57,name:'Neosaldina',cat:'OTC',desc:'Paquete x5',price:7500,img:'https://i.imgur.com/1duFRzj.png'},
  {id:58,name:'Buscapina Fem (unidad)',cat:'OTC',desc:'Unidad',price:2000,img:'https://i.imgur.com/f20jxWW.png'},
  {id:59,name:'Advil Ultra',cat:'OTC',desc:'Paquete x4',price:9600,img:'https://i.imgur.com/7blETAx.jpeg'},

  // Planificación
  {id:60,name:'Microgynon',cat:'Planificación',desc:'Caja',price:8500,img:'https://i.imgur.com/FIyIG25.png'},
  {id:61,name:'Ciclofem (ampolla)',cat:'Planificación',desc:'Ampolla',price:25000,img:'https://i.imgur.com/1ChYZxK.jpeg'},
  {id:62,name:'Depo-Provera',cat:'Planificación',desc:'Inyección',price:39600,img:'https://i.imgur.com/hBeOmH5.png'},
  {id:63,name:'Mesigyna',cat:'Planificación',desc:'Inyección',price:18000,img:'https://i.imgur.com/2HojU9K.png'}
];

/* ============================
   Estado guardado (localStorage)
   ============================ */
let cart = JSON.parse(localStorage.getItem('drogueria_cart') || '[]');
let reminders = JSON.parse(localStorage.getItem('drogueria_reminders') || '[]');

/* ================
   Util: Toast
   ================ */
function getToastContainer(){
  let t = document.getElementById('toastContainer');
  if(!t){
    t = document.createElement('div');
    t.id = 'toastContainer';
    t.className = 'toast-container';
    document.body.appendChild(t);
  }
  return t;
}
function showToast(msg, type='info', ms=3000){
  const c = getToastContainer();
  const el = document.createElement('div');
  el.className = 'toast ' + (type||'');
  el.innerText = msg;
  c.appendChild(el);
  setTimeout(()=>{ el.style.opacity = '0'; setTimeout(()=>el.remove(),400); }, ms);
}

/* =========================
   Navegación y utilidades
   ========================= */
function showSection(id){
  document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
  const el = document.getElementById(id);
  if(el) el.style.display = 'block';
  if(id === 'carrito') renderCart();
}
function goHome(){
  // Reset filtros y mostrar todos
  const searchEl = document.getElementById('search');
  const sortEl = document.getElementById('sort');
  if(searchEl) searchEl.value = '';
  if(sortEl) sortEl.value = 'default';
  renderProducts(PRODUCTS);
  showSection('inicio');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function updateMiniCount(){
  const count = cart.reduce((s,it) => s + (it.qty||1), 0);
  const mini = document.getElementById('miniCount');
  if(mini) mini.innerText = count;
}

/* =========================
   Render de productos
   ========================= */
function renderProducts(list = PRODUCTS){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <h3>${p.name}</h3>
      <p style="font-size:13px;color:var(--muted)">${p.desc} • <strong>${p.cat}</strong></p>
      <div class="price">$${p.price.toLocaleString('es-CO')}</div>
      <div class="row-actions">
        <button class="btn btn-add" data-id="${p.id}">Añadir</button>
        <button class="btn btn-info" data-id="${p.id}">Info</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // listeners
  document.querySelectorAll('.btn-add').forEach(b => {
    b.addEventListener('click', e => {
      const id = Number(e.currentTarget.dataset.id);
      addToCartById(id);
    });
  });
  document.querySelectorAll('.btn-info').forEach(b => {
    b.addEventListener('click', e => {
      const id = Number(e.currentTarget.dataset.id);
      showQuickInfo(id);
    });
  });
}

/* =========================
   Carrito y persistencia
   ========================= */
function addToCartById(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const existing = cart.find(c => c.id === id);
  if(existing) existing.qty++;
  else cart.push({ id: p.id, name: p.name, price: p.price, desc: p.desc, img: p.img, qty: 1 });
  localStorage.setItem('drogueria_cart', JSON.stringify(cart));
  renderCart();
  updateMiniCount();
  showToast(`${p.name} añadido al carrito`, 'success', 1800);
}
function renderCart(){
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if(!container || !totalEl) return;
  container.innerHTML = '';
  if(cart.length === 0){
    container.innerHTML = `<div style="background:#fff;padding:12px;border-radius:8px">Tu carrito está vacío</div>`;
    totalEl.innerText = '$0';
    updateMiniCount();
    return;
  }
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div style="font-size:13px;color:var(--muted)">${item.desc}</div>
      </div>
      <div style="text-align:right">
        <div>$${(item.price * item.qty).toLocaleString('es-CO')}</div>
        <div style="margin-top:6px;">
          <button class="muted" data-id="${item.id}" data-action="dec">-</button>
          <span style="padding:6px 10px;background:#f7f7f7;border-radius:8px;margin:0 8px;">${item.qty}</span>
          <button class="primary" data-id="${item.id}" data-action="inc">+</button>
          <button class="muted" data-id="${item.id}" data-action="del" style="margin-left:8px">Eliminar</button>
        </div>
      </div>
    `;
    container.appendChild(row);
  });
  totalEl.innerText = `$${total.toLocaleString('es-CO')}`;

  // attach handlers
  container.querySelectorAll('button[data-action]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = Number(e.currentTarget.dataset.id);
      const action = e.currentTarget.dataset.action;
      if(action === 'dec') changeQty(id, -1);
      if(action === 'inc') changeQty(id, +1);
      if(action === 'del') removeFromCart(id);
    });
  });

  updateMiniCount();
}
function changeQty(id, delta){
  const it = cart.find(x => x.id === id);
  if(!it) return;
  it.qty += delta;
  if(it.qty < 1) cart = cart.filter(x => x.id !== id);
  localStorage.setItem('drogueria_cart', JSON.stringify(cart));
  renderCart();
  updateMiniCount();
}
function removeFromCart(id){
  cart = cart.filter(x => x.id !== id);
  localStorage.setItem('drogueria_cart', JSON.stringify(cart));
  renderCart();
  updateMiniCount();
}
function clearCart(){
  if(!confirm('¿Vaciar el carrito?')) return;
  cart = []; localStorage.setItem('drogueria_cart','[]');
  renderCart(); updateMiniCount();
}

/* =====================
   Pago / Modal
   ===================== */
const paymentModal = document.getElementById('paymentModal');
const btnCheckout = document.getElementById('btnCheckout');
let chosenPayment = null;
if(btnCheckout) {
  btnCheckout.addEventListener('click', () => {
    if(cart.length === 0){ showToast('Tu carrito está vacío', 'warn'); return; }
    paymentModal.style.display = 'flex';
    paymentModal.setAttribute('aria-hidden','false');
  });
}
function closeModal(){
  if(paymentModal){
    paymentModal.style.display = 'none';
    paymentModal.setAttribute('aria-hidden','true');
  }
  const box = document.getElementById('paymentMessage');
  if(box) box.innerHTML = '';
  chosenPayment = null;
}

function pay(method){
  chosenPayment = method;
  const box = document.getElementById('paymentMessage');
  if(!box) return;
  if(method === 'transferencia'){
    box.innerHTML = `
      <p>Realiza tu transferencia/recarga al número:</p>
      <div style="display:flex;gap:16px;align-items:center;justify-content:center;margin-top:8px;">
        <div style="text-align:center"><img src="https://seeklogo.com/images/N/nequi-logo-46032F6E9D-seeklogo.com.png" style="height:36px"><div><strong>3143548512</strong></div></div>
        <div style="text-align:center"><img src="https://seeklogo.com/images/D/daviplata-logo-7E6AFA0E38-seeklogo.com.png" style="height:36px"><div><strong>3143548512</strong></div></div>
      </div>
      <div style="text-align:center;margin-top:8px"><button class="primary" onclick="copyPayNumber()">Copiar número</button></div>
    `;
  } else if(method === 'tarjeta'){
    // Cambio solicitado: mensaje claro sobre datáfono
    box.innerHTML = `<p>El domiciliario llevará <strong>datáfono</strong> para que realices el pago con tu tarjeta de manera segura.</p>`;
  } else if(method === 'efectivo'){
    box.innerHTML = `<p>Has elegido pagar en <strong>efectivo</strong>. Por favor, cancela al domiciliario al recibir el pedido.</p>`;
  }
}

function copyPayNumber(){
  const num = '3143548512';
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(num).then(()=> showToast(`Número ${num} copiado ✅`, 'success'), ()=> showToast('No se pudo copiar','warn'));
  } else {
    prompt('Copia el número:', num);
  }
}

function confirmOrder(){
  if(!chosenPayment){ alert('Selecciona un método de pago primero'); return; }
  // acción de confirmación (simulada)
  if(chosenPayment === 'transferencia') copyPayNumber();
  showToast('Pedido confirmado. Nos comunicamos para coordinar la entrega.', 'success', 3500);
  cart = []; localStorage.setItem('drogueria_cart','[]'); renderCart(); updateMiniCount(); closeModal();
}

/* =====================
   Categorías
   ===================== */
function renderCategories(){
  const cats = Array.from(new Set(PRODUCTS.map(p => p.cat))).sort();
  const grid = document.getElementById('catsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  cats.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'cat-card';
    el.innerText = cat;
    el.onclick = () => { filterProducts(cat); showSection('inicio'); window.scrollTo({top:0, behavior:'smooth'}); };
    grid.appendChild(el);
  });
}
function filterProducts(cat){
  const subset = PRODUCTS.filter(p => p.cat === cat);
  renderProducts(subset);
}

/* =====================
   Quick info
   ===================== */
function showQuickInfo(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  alert(`${p.name}\n${p.desc}\nCategoría: ${p.cat}\nPrecio: $${p.price.toLocaleString('es-CO')}`);
}

/* =====================
   Búsqueda y orden
   ===================== */
const searchEl = document.getElementById('search');
const sortEl = document.getElementById('sort');
if(searchEl) searchEl.addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = PRODUCTS.filter(p => (p.name + ' ' + p.desc + ' ' + p.cat).toLowerCase().includes(q));
  renderProducts(filtered);
});
if(sortEl) sortEl.addEventListener('change', e => {
  const v = e.target.value;
  let arr = [...PRODUCTS];
  if(v === 'price_asc') arr.sort((a,b)=>a.price-b.price);
  if(v === 'price_desc') arr.sort((a,b)=>b.price-a.price);
  renderProducts(arr);
});

/* =====================
   Chatbot local (respuestas rápidas)
   ===================== */
const quickReplies = [
  {keys: ['horario','abren','cierran'], text:'⏰ Horario: Lunes a sábado 8:00-20:00. Domingos 9:00-17:00.'},
  {keys: ['domicilio','envío','envio','llevar'], text:'🚚 Sí, contamos con servicio a domicilio. Pide por WhatsApp al 3143548512.'},
  {keys: ['pagar','transferencia','nequi','daviplata','efectivo'], text:'💳 Puedes pagar por Nequi/Daviplata (3143548512), o en efectivo al domiciliario. También aceptamos tarjeta con datáfono.'},
  {keys: ['panza','abdomen','estómago','estomago'], text:'💊 Para molestias de panza: hidratación y opciones como Smecta o Enterogermina. Si es persistente, consulta médico.'},
  {keys: ['diarrea'], text:'💊 Para diarrea: Loperamida o Smecta. Si hay fiebre o sangre en heces, acude al médico.'},
  {keys: ['dolor de musculos','dolor músculos','dolor de cuerpo','dolor corporal','dolor muscular'], text:'💊 Para dolor muscular o corporal: Ibuprofeno, Acetaminofén o Dexibuprofeno según tolerancia.'},
  {keys: ['planificar','planificacion','planificación','anticonceptivo','anticonceptivos'], text:'💊 Métodos de planificación disponibles: Bellaface, Microgynon, Depo-Provera, Mesigyna. Consulte contraindicaciones con su médico.'},
  {keys: ['protección','preservativo','condon','condones'], text:'🛡️ Disponemos de preservativos marca Today y otras opciones.'},
  {keys: ['gracias','muchas gracias'], text:'😊 Con gusto, estamos para servirle.'}
];

function respondBot(message){
  const low = message.toLowerCase();
  for(const r of quickReplies){
    if(r.keys.some(k => low.includes(k))) return r.text;
  }
  return "🤖 Lo siento, no entendí. Por favor sé más específico o escríbenos por WhatsApp al 3143548512.";
}

const chatSend = document.getElementById('chatSend');
if(chatSend) {
  chatSend.addEventListener('click', () => {
    const input = document.getElementById('chatInput');
    if(!input) return;
    const txt = input.value.trim();
    if(!txt) return;
    appendChat('user', txt);
    setTimeout(()=> appendChat('bot', respondBot(txt)), 300);
    input.value = '';
  });
}
const chatInputEl = document.getElementById('chatInput');
if(chatInputEl) chatInputEl.addEventListener('keypress', e => { if(e.key === 'Enter') chatSend.click(); });
function appendChat(who, text){
  const box = document.getElementById('chatBox');
  if(!box) return;
  const d = document.createElement('div');
  d.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
  d.textContent = text;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
}

/* =====================
   Recordatorios (persistentes + notificaciones)
   ===================== */
const remForm = document.getElementById('remForm');
const remProduct = document.getElementById('remProduct');
const remList = document.getElementById('remList');

function populateRemProducts(){
  if(!remProduct) return;
  remProduct.innerHTML = '';
  PRODUCTS.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.text = `${p.name} — $${p.price.toLocaleString('es-CO')}`;
    remProduct.appendChild(opt);
  });
}
if(remForm){
  remForm.addEventListener('submit', e => {
    e.preventDefault();
    const pid = Number(remProduct.value);
    const dtVal = document.getElementById('remDatetime').value;
    if(!dtVal){ showToast('Selecciona fecha y hora','warn'); return; }
    const t = new Date(dtVal).getTime();
    if(t <= Date.now()){ showToast('Elige una fecha futura','warn'); return; }
    const p = PRODUCTS.find(x => x.id === pid);
    const rem = { id: Date.now(), productId: pid, productName: p.name, time: t, notified: false };
    reminders.push(rem);
    localStorage.setItem('drogueria_reminders', JSON.stringify(reminders));
    renderReminders();
    showToast('Recordatorio agregado ✅','success');
    remForm.reset();
  });
}

function renderReminders(){
  if(!remList) return;
  remList.innerHTML = '';
  if(reminders.length === 0){ remList.innerHTML = '<div style="background:#fff;padding:12px;border-radius:8px">No hay recordatorios</div>'; return; }
  reminders.sort((a,b) => a.time - b.time);
  reminders.forEach(r => {
    const d = new Date(r.time);
    const div = document.createElement('div');
    div.className = 'rem-card';
    div.innerHTML = `<div><strong>${r.productName}</strong><div style="font-size:13px;color:var(--muted)">${d.toLocaleString()}</div></div>
                     <div><button class="muted" data-id="${r.id}">Eliminar</button></div>`;
    remList.appendChild(div);
  });
  // attach delete listeners
  remList.querySelectorAll('button[data-id]').forEach(b => {
    b.addEventListener('click', e => {
      const id = Number(e.currentTarget.dataset.id);
      deleteReminder(id);
    });
  });
}
function deleteReminder(id){
  reminders = reminders.filter(r => r.id !== id);
  localStorage.setItem('drogueria_reminders', JSON.stringify(reminders));
  renderReminders();
}

function checkReminders(){
  const now = Date.now();
  let changed = false;
  reminders.forEach(r => {
    if(!r.notified && r.time <= now){
      showToast(`⏰ Recordatorio: tomar ${r.productName}`, 'info', 6000);
      if("Notification" in window && Notification.permission === "granted"){
        new Notification("Recordatorio - Droguería Corfam", { body: `Tomar ${r.productName}` });
      }
      r.notified = true; changed = true;
    }
  });
  if(changed) localStorage.setItem('drogueria_reminders', JSON.stringify(reminders));
}

// solicitar permiso notificaciones si es posible
if("Notification" in window && Notification.permission !== "granted"){
  try{ Notification.requestPermission(); }catch(e){}
}

/* =====================
   Inicialización
   ===================== */
function renderInitial(){
  renderProducts(PRODUCTS);
  renderCategories();
  populateRemProducts();
  renderReminders();
  renderCart();
  updateMiniCount();
  // listeners guardados
  if(document.getElementById('search')) document.getElementById('search').value = '';
  if(document.getElementById('sort')) document.getElementById('sort').value = 'default';
  setInterval(checkReminders, 20000); // chequear cada 20s
}

// Exponer funciones globales necesarias para botones inline en HTML
window.showSection = showSection;
window.goHome = goHome;
window.addToCartById = addToCartById;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.pay = pay;
window.closeModal = closeModal;
window.confirmOrder = confirmOrder;
window.copyPayNumber = copyPayNumber;
window.showQuickInfo = showQuickInfo;
window.filterProducts = filterProducts;

// Ejecutar inicialización cuando DOM esté listo
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', renderInitial);
} else {
  renderInitial();
}
