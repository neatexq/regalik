function showPage(pageId){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

async function loadGallery(){
  const res = await fetch('data/artworks.json');
  const artworks = await res.json();
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML='';
  artworks.forEach(art=>{
    const img=document.createElement('img');
    img.src=art.image;
    img.alt=art.title;
    img.onclick=()=>openModal(art);
    grid.appendChild(img);
  });
}

function openModal(art){
  document.getElementById('modal-img').src=art.image;
  document.getElementById('modal-title').textContent=art.title;
  document.getElementById('modal-tags').textContent=art.tags;
  document.getElementById('modal-link').href=art.telegram;
  document.getElementById('art-modal').style.display='block';
}

function closeModal(){
  document.getElementById('art-modal').style.display='none';
}

window.onload=loadGallery;
