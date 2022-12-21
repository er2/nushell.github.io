import{_ as t,z as o,A as r,X as a,C as n,D as s,a6 as c}from"./framework.3d018c9f.js";const l={},i={id:"frontmatter-title-for-filters",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop column (columns)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>columns</code>: starting from the end, the number of columns to remove</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove the last column of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lib, extension<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>nu-lib, rs<span class="token punctuation">]</span> <span class="token punctuation">[</span>nu-core, rb<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> drop <span class="token function">column</span>
</code></pre></div>`,7);function h(e,m){return o(),r("div",null,[a("h1",i,[p,n(),a("code",null,s(e.$frontmatter.title),1),n(" for filters")]),a("div",d,s(e.$frontmatter.filters),1),u])}const _=t(l,[["render",h],["__file","drop_column.html.vue"]]);export{_ as default};