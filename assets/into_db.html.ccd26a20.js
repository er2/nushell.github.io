import{_ as n,z as o,A as r,X as e,C as t,D as s,a6 as d}from"./framework.3d018c9f.js";const i={},c={id:"frontmatter-title-for-database",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-database","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into db </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This function is used as a hint to Nushell to optimize the pipeline for database queries.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts an open file into a db object.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite <span class="token operator">|</span> into db
</code></pre></div>`,7);function f(a,u){return o(),r("div",null,[e("h1",c,[l,t(),e("code",null,s(a.$frontmatter.title),1),t(" for database")]),e("div",h,s(a.$frontmatter.database),1),p])}const b=n(i,[["render",f],["__file","into_db.html.vue"]]);export{b as default};