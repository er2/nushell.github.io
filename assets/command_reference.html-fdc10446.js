import{p as c}from"./app-7e8994c7.js";import{_ as d,p as a,q as s,Q as e,O as i,P as m,t as _,v as o}from"./framework-344bb0e4.js";const u={computed:{commands(){return c.filter(t=>t.path.indexOf("/book/commands/")>=0).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},h=e("h1",{id:"command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-reference","aria-hidden":"true"},"#"),_(" Command Reference")],-1),f=e("tr",null,[e("th",null,"Command"),e("th",null,"Beschreibung")],-1),p=["href"],x={style:{"white-space":"pre-wrap"}};function g(t,r,B,b,k,l){return a(),s("div",null,[h,e("table",null,[f,(a(!0),s(i,null,m(l.commands,n=>(a(),s("tr",null,[e("td",null,[e("a",{href:n.path},[e("code",null,o(n.title),1)],8,p)]),e("td",x,o(n.frontmatter.usage),1)]))),256))])])}const w=d(u,[["render",g],["__file","command_reference.html.vue"]]);export{w as default};