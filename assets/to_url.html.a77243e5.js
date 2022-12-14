import{_ as n,z as o,A as r,X as a,C as s,D as e,a6 as c}from"./framework.3d018c9f.js";const p={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to url </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an URL string representing the contents of this table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to url
</code></pre></div>`,5);function h(t,f){return o(),r("div",null,[a("h1",i,[l,s(),a("code",null,e(t.$frontmatter.title),1),s(" for formats")]),a("div",u,e(t.$frontmatter.formats),1),d])}const m=n(p,[["render",h],["__file","to_url.html.vue"]]);export{m as default};