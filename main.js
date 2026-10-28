document.documentElement.classList.add('js');
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.hero-title .w').forEach((w,i)=>setTimeout(()=>w.classList.add('in'),rm?0:120+i*110));
const els=document.querySelectorAll('.reveal');
if(rm||!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('in'))}else{
const groups=new Map();els.forEach(e=>{const p=e.parentElement;const n=groups.get(p)||0;e.style.setProperty('--d',Math.min(n*70,350)+'ms');groups.set(p,n+1)});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{rootMargin:'0px 0px -8% 0px'});
els.forEach(e=>io.observe(e))}
