import{p as d}from"./app-c92bc400.js";import{_ as i,p as r,q as n,Q as t,O as c,P as u,t as _,v as l}from"./framework-344bb0e4.js";const h={computed:{commands(){return d.filter(e=>e.path.includes("/commands/docs/")).filter(e=>e.frontmatter.categories.includes("database")).sort((e,a)=>e.title>a.title?1:a.title>e.title?-1:0)}}},p=t("h1",{id:"database",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#database","aria-hidden":"true"},"#"),_(" Database")],-1),m=t("tr",null,[t("th",null,"Command"),t("th",null,"Description")],-1),f=["href"],b={style:{"white-space":"pre-wrap"}};function g(e,a,x,v,B,o){return r(),n("div",null,[p,t("table",null,[m,(r(!0),n(c,null,u(o.commands,s=>(r(),n("tr",null,[t("td",null,[t("a",{href:s.path},l(s.title),9,f)]),t("td",b,l(s.frontmatter.usage),1)]))),256))])])}const k=i(h,[["render",g],["__file","database.html.vue"]]);export{k as default};