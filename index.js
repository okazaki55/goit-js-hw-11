/* empty css                      */import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=document.getElementById("form"),a=document.getElementById("search"),c=document.getElementById("loader-center"),d=document.getElementById("gallery"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250}),g="51314790-8eb7b58c862d15e75f23e4ac3",y=n=>{const o=`https://pixabay.com/api/?key=${g}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>r.json()).then(r=>r.hits).catch(r=>console.error("Error fetching images:",r))};p.addEventListener("submit",n=>{n.preventDefault();const o=a.value.trim();a.value="",o!==""&&(d.innerHTML="",c.classList.remove("hidden"),y(o).then(r=>{r.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):b(r)}).finally(()=>{c.classList.add("hidden")}))});function b(n){const o=n.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
      <a href="${i}" class="photo-card">
        <img src="${r}" alt="${e}"/>
        <div class="info">
          <p><b>Likes</b><br> ${t}</p>
          <p><b>Views</b><br> ${s}</p>
          <p><b>Comments</b><br> ${u}</p>
          <p><b>Downloads</b><br> ${f}</p>
        </div>
      </a>
    `).join("");d.innerHTML=o,h.refresh()}l.settings({position:"topRight"});
//# sourceMappingURL=index.js.map
