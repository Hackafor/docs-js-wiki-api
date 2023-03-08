import{_ as s,c as a,o as n,a as e}from"./app.2db56847.js";const E=JSON.parse('{"title":"Contraseñas","description":"","frontmatter":{},"headers":[{"level":2,"title":"Api de Elasticsearch","slug":"api-de-elasticsearch","link":"#api-de-elasticsearch","children":[]},{"level":2,"title":"Kibana Panel","slug":"kibana-panel","link":"#kibana-panel","children":[]}],"relativePath":"security.md"}'),p={name:"security.md"},l=e(`<h1 id="contrasenas" tabindex="-1">Contraseñas <a class="header-anchor" href="#contrasenas" aria-hidden="true">#</a></h1><p>Las contraseñas del usuario que se este usando (incluido el usuario root &#39;elastic&#39;) se pueden cambiar por medio de la Api de Elasticsearch o por el panel de Kibana</p><h2 id="api-de-elasticsearch" tabindex="-1">Api de Elasticsearch <a class="header-anchor" href="#api-de-elasticsearch" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-X</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">POST</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;localhost:9200/_security/user/some_user/_password?pretty&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\ </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">-H</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Content-Type: application/json&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-d</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;password&quot; : &quot;new-test-password&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-X</span><span style="color:#24292E;"> </span><span style="color:#032F62;">POST</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;localhost:9200/_security/user/some_user/_password?pretty&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\ </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6F42C1;">-H</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Content-Type: application/json&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-d</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;password&quot; : &quot;new-test-password&quot;</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="kibana-panel" tabindex="-1">Kibana Panel <a class="header-anchor" href="#kibana-panel" aria-hidden="true">#</a></h2><p>En el panel nos vamos a la parte de editar perfil</p><p><img src="https://i.postimg.cc/v8kGQ5qg/password.png" alt=""></p><p>Y cambiamos la contraseña</p><p><img src="https://i.postimg.cc/7ZV6YfJF/change-password.png" alt=""></p><p>y al final si hicimos todo bien nos saldra un mensaje de que la contraseña ha sido cambiada</p>`,10),o=[l];function t(c,r,i,d,y,u){return n(),a("div",null,o)}const F=s(p,[["render",t]]);export{E as __pageData,F as default};