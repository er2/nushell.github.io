import{_ as i,r,o as l,c as d,a as e,b as a,w as n,e as o,d as t}from"./app.05a5ae3c.js";const c={},h=o(`<h1 id="variables-and-subexpressions" tabindex="-1"><a class="header-anchor" href="#variables-and-subexpressions" aria-hidden="true">#</a> Variables and Subexpressions</h1><p>There are two types of evaluation expressions in Nushell: variables and subexpressions. You know that you&#39;re looking at an evaluation expression because it begins with a dollar sign (<code>$</code>). This indicates that when Nushell gets the value in this position, it will need to run an evaluation step to process the expression and then use the resulting value. Both evaluation expression forms support a simple form and a &#39;path&#39; form for working with more complex data.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>The simpler of the two evaluation expressions is the variable. During evaluation, a variable is replaced by its value.</p><p>If we create a variable, we can print its contents by using <code>$</code> to refer to it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my_value = 4
&gt; $my_value
4
</code></pre></div><p>Variables in Nushell are immutable, that means that you cannot change its value after declaration. They can be shadowed in nested block, that results in:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my_value = 4
&gt; do { let my_value = 5; $my_value }
5
&gt; $my_value
4
</code></pre></div><h2 id="variable-paths" tabindex="-1"><a class="header-anchor" href="#variable-paths" aria-hidden="true">#</a> Variable paths</h2><p>A variable path works by reaching inside of the contents of a variable, navigating columns inside of it, to reach a final value. Let&#39;s say instead of <code>4</code>, we had assigned a table value:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let my_value = [[name]; [testuser]]
</code></pre></div><p>We can use a variable path to evaluate the variable <code>$my_value</code> and get the value from the <code>name</code> column in a single step:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $my_value.name
testuser
</code></pre></div><h2 id="subexpressions" tabindex="-1"><a class="header-anchor" href="#subexpressions" aria-hidden="true">#</a> Subexpressions</h2><p>You can always evaluate a subexpression and use its result by wrapping the expression with parentheses <code>()</code>. Note that previous versions of Nushell (prior to 0.32) used <code>$()</code>.</p>`,15),u=t("The parentheses contain a pipeline that will run to completion, and the resulting value will then be used. For example, "),p=e("code",null,"(ls)",-1),g=t(" would run the "),x=e("code",null,"ls",-1),m=t(" command and give back the resulting table and "),b=e("code",null,"(git branch --show-current)",-1),_=t(" runs the external git command and returns a string with the name of the current branch. You can also use parentheses to run math expressions like "),v=e("code",null,"(2 + 3)",-1),w=t("."),f=o(`<p>Subexpressions can also be pipelines and not just single commands. If we wanted to get a list of filenames larger than ten kilobytes, we can use an subexpression to run a pipeline and assign the result to a variable:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let names_of_big_files = (ls | where size &gt; 10kb)
&gt; $names_of_big_files
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502    name    \u2502 type \u2502   size   \u2502   modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Cargo.lock \u2502 File \u2502 155.3 KB \u2502 17 hours ago
 1 \u2502 README.md  \u2502 File \u2502  15.9 KB \u2502 17 hours ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="subexpressions-and-paths" tabindex="-1"><a class="header-anchor" href="#subexpressions-and-paths" aria-hidden="true">#</a> Subexpressions and paths</h2><p>Subexpressions also support paths. For example, let&#39;s say we wanted to get a list of the filenames in the current directory. One way to do this is to use a pipeline:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>We can do a very similar action in a single step using a subexpression path:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; (ls).name
</code></pre></div><p>It depends on the needs of the code and your particular style which form works best for you.</p><h2 id="short-hand-subexpressions-row-conditions" tabindex="-1"><a class="header-anchor" href="#short-hand-subexpressions-row-conditions" aria-hidden="true">#</a> Short-hand subexpressions (row conditions)</h2>`,9),y=t("Nushell supports accessing columns in a subexpression using a simple short-hand. You may have already used this functionality before. If, for example, we wanted to only see rows from "),k=e("code",null,"ls",-1),$=t(" where the entry is at least ten kilobytes we can write:"),z=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | where size > 10kb
`)])],-1),N=t("The "),T=e("code",null,"where size > 10kb",-1),S=t(" is a command with two parts: the command name "),V=e("code",null,"where",-1),B=t(" and the short-hand expression "),F=e("code",null,"size > 10kb",-1),Y=t(". We say short-hand because "),q=e("code",null,"size",-1),A=t(" here is the shortened version of writing "),I=e("code",null,"$it.size",-1),C=t(". This could also be written in any of the following ways:"),E=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where $it.size &gt; 10kb
&gt; ls | where ($it.size &gt; 10kb)
&gt; ls | where {|$x| $x.size &gt; 10kb }
</code></pre></div><p>For short-hand syntax to work, the column name must appear on the left-hand side of the operation (like <code>size</code> in <code>size &gt; 10kb</code>).</p><h2 id="subexpressions-with-external-commands" tabindex="-1"><a class="header-anchor" href="#subexpressions-with-external-commands" aria-hidden="true">#</a> Subexpressions with external commands</h2><p>You may find something strange when you&#39;re using subexpression with external commands, for example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $&quot;my pwd is (pwd), hooray!&quot;
</code></pre></div><p>And nu gives you the following output:</p><div class="language-text ext-text"><pre class="language-text"><code>my pwd is /private/tmp
, hooray!
</code></pre></div><p>That&#39;s because when you execute <code>(pwd)</code>, it yields to <code>/private/tmp\\n</code>, and the value is inserted into our string, so the raw string will be <code>my pwd is /private/tmp\\n, hooray!</code>, and then <code>\\n</code> is a newline character. A work around can be put <code>str trim</code> after external command, like this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $&quot;my pwd is (pwd | str trim), hooray!&quot;
</code></pre></div><p>Then everything will be normal.</p>`,10);function L(R,W){const s=r("RouterLink");return l(),d("div",null,[h,e("p",null,[u,p,g,a(s,{to:"/book/commands/ls.html"},{default:n(()=>[x]),_:1}),m,b,_,v,w]),f,e("p",null,[y,a(s,{to:"/book/commands/ls.html"},{default:n(()=>[k]),_:1}),$]),z,e("p",null,[N,T,S,a(s,{to:"/book/commands/where.html"},{default:n(()=>[V]),_:1}),B,F,Y,q,A,I,C]),E])}const K=i(c,[["render",L],["__file","variables_and_subexpressions.html.vue"]]);export{K as default};