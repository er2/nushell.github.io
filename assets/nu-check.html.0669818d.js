import{_ as t,z as r,A as o,X as a,C as s,D as n,a6 as c}from"./framework.3d018c9f.js";const p={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; nu-check (path) --as-module --debug --all</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: File path to parse</li><li><code>--as-module</code>: Parse content as module</li><li><code>--debug</code>: Show error messages</li><li><code>--all</code>: Parse content as script first, returns result if success, otherwise, try with module</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a input file as script(Default)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check script.nu
</code></pre></div><p>Parse a input file as module</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check --as-module module.nu
</code></pre></div><p>Parse a input file by showing error message</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check <span class="token parameter variable">-d</span> script.nu
</code></pre></div><p>Parse an external stream as script by showing error message</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.nu <span class="token operator">|</span> nu-check <span class="token parameter variable">-d</span> script.nu
</code></pre></div><p>Parse an internal stream as module by showing error message</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> module.nu <span class="token operator">|</span> lines <span class="token operator">|</span> nu-check <span class="token parameter variable">-d</span> --as-module module.nu
</code></pre></div><p>Parse a string as script</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;two(char nl)lines&#39;</span> <span class="token operator">|</span> nu-check
</code></pre></div><p>Heuristically parse which begins with script first, if it sees a failure, try module afterwards</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu-check <span class="token parameter variable">-a</span> script.nu
</code></pre></div><p>Heuristically parse by showing error message</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> foo.nu <span class="token operator">|</span> lines <span class="token operator">|</span> nu-check <span class="token parameter variable">-ad</span>
</code></pre></div>`,21);function u(e,g){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for strings")]),a("div",d,n(e.$frontmatter.strings),1),h])}const k=t(p,[["render",u],["__file","nu-check.html.vue"]]);export{k as default};