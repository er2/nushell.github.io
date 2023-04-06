import{_ as t,p,q as o,Q as n,t as a,v as e,a1 as l}from"./framework-344bb0e4.js";const c={},r={id:"frontmatter-title-for-filters",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),i={class:"command-title"},k=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; upsert (field) (replacement value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update or insert</li><li><code>replacement value</code>: the new value to give the cell(s), or a closure to create the value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update a record&#39;s value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> upsert name <span class="token string">&#39;Nushell&#39;</span>
╭───────┬─────────╮
│ name  │ Nushell │
│ stars │ <span class="token number">5</span>       │
╰───────┴─────────╯
</code></pre></div><p>Update each row of a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name lang<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>Nushell <span class="token string">&#39;&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>Reedline <span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert lang <span class="token string">&#39;Rust&#39;</span>
╭───┬──────────┬──────╮
│ <span class="token comment"># │   name   │ lang │</span>
├───┼──────────┼──────┤
│ <span class="token number">0</span> │ Nushell  │ Rust │
│ <span class="token number">1</span> │ Reedline │ Rust │
╰───┴──────────┴──────╯

</code></pre></div><p>Insert a new entry into a single record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> upsert language <span class="token string">&#39;Rust&#39;</span>
╭──────────┬──────╮
│ name     │ nu   │
│ stars    │ <span class="token number">5</span>    │
│ language │ Rust │
╰──────────┴──────╯
</code></pre></div><p>Use in closure form for more involved updating logic</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>count fruit<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> enumerate <span class="token operator">|</span> upsert item.count <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token punctuation">(</span><span class="token variable">$e</span>.item.fruit <span class="token operator">|</span> str length<span class="token punctuation">)</span> + <span class="token variable">$e</span>.index <span class="token punctuation">}</span> <span class="token operator">|</span> get item
╭───┬───────┬───────╮
│ <span class="token comment"># │ count │ fruit │</span>
├───┼───────┼───────┤
│ <span class="token number">0</span> │     <span class="token number">5</span> │ apple │
╰───┴───────┴───────╯

</code></pre></div><p>Upsert an int into a list, updating an existing value based on the index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert <span class="token number">0</span> <span class="token number">2</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">2</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">3</span> │
╰───┴───╯

</code></pre></div><p>Upsert an int into a list, inserting a new value based on the index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert <span class="token number">3</span> <span class="token number">4</span>
╭───┬───╮
│ <span class="token number">0</span> │ <span class="token number">1</span> │
│ <span class="token number">1</span> │ <span class="token number">2</span> │
│ <span class="token number">2</span> │ <span class="token number">3</span> │
│ <span class="token number">3</span> │ <span class="token number">4</span> │
╰───┴───╯

</code></pre></div>`,17);function d(s,m){return p(),o("div",null,[n("h1",r,[u,a(),n("code",null,e(s.$frontmatter.title),1),a(" for filters")]),n("div",i,e(s.$frontmatter.filters),1),k])}const h=t(c,[["render",d],["__file","upsert.html.vue"]]);export{h as default};