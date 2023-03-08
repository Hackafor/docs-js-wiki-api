import{_ as s,c as a,o as n,a as p}from"./app.2db56847.js";const q=JSON.parse('{"title":"Autenticacion ApiKey","description":"","frontmatter":{},"headers":[{"level":2,"title":"Api de Elasticsearch","slug":"api-de-elasticsearch","link":"#api-de-elasticsearch","children":[]},{"level":2,"title":"Panel de Kibana","slug":"panel-de-kibana","link":"#panel-de-kibana","children":[]}],"relativePath":"auth-apikey.md"}'),e={name:"auth-apikey.md"},l=p(`<h1 id="autenticacion-apikey" tabindex="-1">Autenticacion ApiKey <a class="header-anchor" href="#autenticacion-apikey" aria-hidden="true">#</a></h1><p>| debe estar habilitada la seguridad en la config de elasticsearch y kibana</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#9ECBFF;">xpack.security.enabled=true</span></span>
<span class="line"><span style="color:#9ECBFF;">xpack.security.enrollment.enabled=true</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#032F62;">xpack.security.enabled=true</span></span>
<span class="line"><span style="color:#032F62;">xpack.security.enrollment.enabled=true</span></span>
<span class="line"></span></code></pre></div><p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/security-api-create-api-key.html#security-api-create-api-key" target="_blank" rel="noreferrer">Docs Elasticsearch ApiKey</a></p><p>Los ApiKey son cadenas de string codificadas para servir como llave y poder autenticarnos con ciertos permisos, los apikey los habilita la api de elasticsearch de manera automatica, podemos crearlos desde una peticion http o desde el panel de kibana</p><h2 id="api-de-elasticsearch" tabindex="-1">Api de Elasticsearch <a class="header-anchor" href="#api-de-elasticsearch" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">elastic:</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">passwor</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-X</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">POST</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;localhost:9200/_security/api_key?pretty&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-H</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Content-Type: application/json&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;name&quot;: &quot;my-api-key&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;expiration&quot;: &quot;1d&quot;,   </span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;role_descriptors&quot;: { </span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;role-a&quot;: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;cluster&quot;: [&quot;all&quot;],</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;index&quot;: [</span></span>
<span class="line"><span style="color:#9ECBFF;">        {</span></span>
<span class="line"><span style="color:#9ECBFF;">          &quot;names&quot;: [&quot;index-a*&quot;],</span></span>
<span class="line"><span style="color:#9ECBFF;">          &quot;privileges&quot;: [&quot;read&quot;]</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">      ]</span></span>
<span class="line"><span style="color:#9ECBFF;">    },</span></span>
<span class="line"><span style="color:#9ECBFF;">  &quot;metadata&quot;: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;application&quot;: &quot;my-application&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;environment&quot;: {</span></span>
<span class="line"><span style="color:#9ECBFF;">       &quot;level&quot;: 1,</span></span>
<span class="line"><span style="color:#9ECBFF;">       &quot;trusted&quot;: true,</span></span>
<span class="line"><span style="color:#9ECBFF;">       &quot;tags&quot;: [&quot;dev&quot;, &quot;staging&quot;]</span></span>
<span class="line"><span style="color:#9ECBFF;">    }</span></span>
<span class="line"><span style="color:#9ECBFF;">  }</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">elastic:</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">passwor</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">-X</span><span style="color:#24292E;"> </span><span style="color:#032F62;">POST</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;localhost:9200/_security/api_key?pretty&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">-H</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Content-Type: application/json&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;name&quot;: &quot;my-api-key&quot;,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;expiration&quot;: &quot;1d&quot;,   </span></span>
<span class="line"><span style="color:#032F62;">  &quot;role_descriptors&quot;: { </span></span>
<span class="line"><span style="color:#032F62;">    &quot;role-a&quot;: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;cluster&quot;: [&quot;all&quot;],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;index&quot;: [</span></span>
<span class="line"><span style="color:#032F62;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;names&quot;: [&quot;index-a*&quot;],</span></span>
<span class="line"><span style="color:#032F62;">          &quot;privileges&quot;: [&quot;read&quot;]</span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"><span style="color:#032F62;">      ]</span></span>
<span class="line"><span style="color:#032F62;">    },</span></span>
<span class="line"><span style="color:#032F62;">  &quot;metadata&quot;: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;application&quot;: &quot;my-application&quot;,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;environment&quot;: {</span></span>
<span class="line"><span style="color:#032F62;">       &quot;level&quot;: 1,</span></span>
<span class="line"><span style="color:#032F62;">       &quot;trusted&quot;: true,</span></span>
<span class="line"><span style="color:#032F62;">       &quot;tags&quot;: [&quot;dev&quot;, &quot;staging&quot;]</span></span>
<span class="line"><span style="color:#032F62;">    }</span></span>
<span class="line"><span style="color:#032F62;">  }</span></span>
<span class="line"><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#032F62;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="panel-de-kibana" tabindex="-1">Panel de Kibana <a class="header-anchor" href="#panel-de-kibana" aria-hidden="true">#</a></h2><p>Nos autenticamos con un usuario con suficientes permisos como elastic y entramos a la url <code>/app/management/security/api_keys/</code> y presionamos en crear apikey</p><p><img src="https://i.postimg.cc/Mps9B9n9/apikeys1.png" alt=""></p><p>Podemos indicarle que tenga ciertos permisos</p><p><img src="https://i.postimg.cc/Yq0G98wr/permissions-api.png" alt=""></p><p>y tambien podemos agregar informacion del apikey y fecha de vigencia</p><p><img src="https://i.postimg.cc/CK5SCrm5/settings-apikey.png" alt=""></p>`,14),o=[l];function t(c,i,r,y,u,d){return n(),a("div",null,o)}const E=s(e,[["render",t]]);export{q as __pageData,E as default};
