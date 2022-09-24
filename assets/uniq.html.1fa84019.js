import{_ as e,o as t,c as o,a,t as n,d as p,e as c}from"./app.6a167bcd.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; uniq --count --repeated --ignore-case --unique</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--count</code>: Count the unique rows</li><li><code>--repeated</code>: Count the rows that has more than one value</li><li><code>--ignore-case</code>: Ignore differences in case when comparing</li><li><code>--unique</code>: Only return unique values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Remove duplicate rows of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span>
</code></pre></div><p>Only print duplicate lines, one for each group</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span>
</code></pre></div><p>Only print unique lines lines</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>
</code></pre></div><p>Ignore differences in case when comparing</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span> <span class="token string">&#39;goodbye&#39;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-i</span>
</code></pre></div><p>Remove duplicate rows and show counts of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre></div>`,15);function k(s,g){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}const b=e(r,[["render",k],["__file","uniq.html.vue"]]);export{b as default};