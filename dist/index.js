var t;t=new Map,customElements.define("tikz-jax",class extends HTMLElement{constructor(){super(),this.code_="",this.id_=Math.random()}connectedCallback(){this.attachShadow({mode:"open"}),this.code_=this.textContent||"",window.addEventListener("message",e=>{e.data.id==this.id_&&e.data.svg&&(t.set(this.code_,e.data.svg),this.insertSVG(e.data.svg))}),this.render()}insertSVG(t){if(!this.shadowRoot)return;this.clear();let e=document.createElement("div");e.innerHTML=t;let s=e.firstChild;s.style.position="relative",s.style.backgroundColor="white",this.shadowRoot.appendChild(s)}render(){if(!this.shadowRoot)return;if(t.has(this.code_)){this.insertSVG(t.get(this.code_));return}let e=document.createElement("iframe");e.setAttribute("style","border: 0; width: 100%; height: 0"),e.srcdoc=`
        <html>
          <head>
            <script>
              var countdown = 50;

              function checkForSVG() {
                if (countdown-- <= 0) {
                  return
                }

                const tikzImage = document.body.querySelector('svg');

                if (tikzImage) {
                  const svg = tikzImage.parentElement.innerHTML;
                  window.parent.postMessage({ id: ${this.id_}, svg }, '*');
                } else {
                  setTimeout(checkForSVG, 100);
                }
              }  
            </script>
            <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
            <script src="https://tikzjax.com/v1/tikzjax.js" onload="setTimeout(checkForSVG, 100)"></script>
          </head>
          <body>
            <script type="text/tikz">
              ${this.code_}
            </script>
          </body>
        </html>`,this.shadowRoot.appendChild(e)}clear(){if(this.shadowRoot)for(;this.shadowRoot.firstChild;)this.shadowRoot.removeChild(this.shadowRoot.firstChild)}get code(){return this.code_}set code(t){this.code_!==t&&(this.code_=t)}disconnectedCallback(){this.code_=""}});
//# sourceMappingURL=index.js.map
