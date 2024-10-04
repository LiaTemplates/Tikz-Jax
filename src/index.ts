var cache = new Map()

customElements.define(
  'tikz-jax',
  class extends HTMLElement {
    private code_: string = ''
    private id_: number = Math.random()

    constructor() {
      super()
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' })
      this.code_ = this.textContent || ''

      // Listen for the message from the iframe
      window.addEventListener('message', (event) => {
        if (event.data.id == this.id_ && event.data.svg) {
          cache.set(this.code_, event.data.svg)
          this.insertSVG(event.data.svg)
        }
      })

      this.render()
    }

    insertSVG(svg: string) {
      if (!this.shadowRoot) {
        return
      }

      this.clear()

      const div = document.createElement('div')
      div.innerHTML = svg
      const svgElement = div.firstChild as SVGElement
      svgElement.style.position = 'relative'
      svgElement.style.backgroundColor = 'white'

      this.shadowRoot.appendChild(svgElement)
    }

    render() {
      if (!this.shadowRoot) {
        return
      }

      if (cache.has(this.code_)) {
        this.insertSVG(cache.get(this.code_))
        return
      }

      const iframe = document.createElement('iframe')
      iframe.setAttribute('style', 'border: 0; width: 100%; height: 0') // Start with height 0
      iframe.srcdoc = `
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
        </html>`

      this.shadowRoot.appendChild(iframe)
    }

    clear() {
      if (this.shadowRoot) {
        while (this.shadowRoot.firstChild) {
          this.shadowRoot.removeChild(this.shadowRoot.firstChild)
        }
      }
    }

    get code() {
      return this.code_
    }

    set code(value) {
      if (this.code_ !== value) {
        this.code_ = value
      }
    }

    disconnectedCallback() {
      this.code_ = ''
    }
  }
)
