import{_ as p,p as o,q as c,Q as a,t as s,v as e,a1 as t}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; append </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Appends a dataframe as new columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> append <span class="token variable">$a</span>
</code></pre></div><p>Appends a dataframe merging at the end of columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> append <span class="token variable">$a</span> <span class="token parameter variable">--col</span>
</code></pre></div>`,7),h={id:"frontmatter-title-for-filters",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),m={class:"command-title"},b=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; append (row)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>row</code>: the row, list, or table to append</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Be aware that this command &#39;unwraps&#39; lists passed to it. So, if you pass a variable to it, and you want the variable&#39;s contents to be appended without being unwrapped, it&#39;s wise to pre-emptively wrap the variable in a list, like so: <code>append [$val]</code>. This way, <code>append</code> will only unwrap the outer list, and leave the variable&#39;s contents untouched.</p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Append one Int item</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3<span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token number">4</span>
</code></pre></div><p>Append three Int items</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token number">2,3</span>,4<span class="token punctuation">]</span>
</code></pre></div><p>Append Ints and Strings</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span><span class="token punctuation">]</span> <span class="token operator">|</span> append <span class="token punctuation">[</span><span class="token number">2</span>,nu,4,shell<span class="token punctuation">]</span>
</code></pre></div>`,13);function f(n,g){return o(),c("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",d,e(n.$frontmatter.dataframe),1),u,a("h1",h,[k,s(),a("code",null,e(n.$frontmatter.title),1),s(" for filters")]),a("div",m,e(n.$frontmatter.filters),1),b])}const _=p(r,[["render",f],["__file","append.html.vue"]]);export{_ as default};