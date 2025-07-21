/* empty css                      */import{S as m,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=document.getElementById("form"),a=document.getElementById("search"),c=document.getElementById("loader-center"),l=document.getElementById("gallery"),h=new m(".gallery-item",{captionsData:"alt",captionDelay:250}),y="51314790-8eb7b58c862d15e75f23e4ac3",g=n=>{const o=`https://pixabay.com/api/?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>r.json()).then(r=>r.hits).catch(r=>console.error("Error fetching images:",r))};p.addEventListener("submit",n=>{n.preventDefault();const o=a.value.trim();a.value="",o!==""&&(l.innerHTML="",c.classList.remove("hidden"),g(o).then(r=>{r.length===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(r)}).finally(()=>{c.classList.add("hidden")}))});function L(n){const o=n.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:s,comments:d,downloads:u})=>`
      <a href="${i}" class="gallery-item">
        <img src="${r}" alt="${e}" />
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${s}</p>
          <p>Comments: ${d}</p>
          <p>Downloads: ${u}</p>
        </div>
      </a>
    `).join("");l.innerHTML=o,h.refresh()}
//# sourceMappingURL=index.js.map
