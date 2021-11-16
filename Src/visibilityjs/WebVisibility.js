// MIT License
// 
// Copyright (c) 2021 MXPSQL
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



const WebVisibilityJS = {
    noop: () => {/* noop */ return true;},
    logo: `data:image/png;base64,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`,
    blinkToolkit: {
        blink: (element, duration) => {element.classList.add("WebVisibilityJSBlinking"); element.setAttribute("WebVisibilityJS-Blinkrate", duration); return true;},
        stop: (element) => element.classList.remove("WebVisibilityJSBlinking"),
        startBlinkElement: () => { 
            var blinks = document.getElementsByTagName('blink');
            for (var e of blinks) { 
                WebVisibilityJS.blinkToolkit.blink(e);
                var child = e.childNodes; 
                for(var i = child.length -1; i >= 0; i--){  
                    try{
                        WebVisibilityJS.blinkToolkit.blink(child[i]); 
                    }
                    catch(e){

                    }
                } 
            } 

            return true;
        },
        stopBlinkElement: () => {
            var blinks = document.getElementsByTagName('blink');
            for (var e of blinks) { 
                WebVisibilityJS.blinkToolkit.stop(e);
                var child = e.childNodes; 
                for(var i = child.length -1; i >= 0; i--){  
                    try{
                        WebVisibilityJS.blinkToolkit.stop(child[i]); 
                    }
                    catch(e){

                    }
                } 
            } 

            return true;
        }
    },
    visibilityToolkit: {
        show: (element) => {element.style.visibility = "visible"; return true;},
        hide: (element) => {element.style.visibility = "hidden"; return true;},
        collapse: (element) => {element.style.display = "collapse"; return true;},
        inherit: (element) => {element.style.display = "inherit"; return true;},
        initial: (element) => {element.style.display = "initial"; return true;}
    },
    displayToolkit: {
        initial: (element) => {element.style.display = "initial"; return true;},
        normal: (element) => {element.style.display = ""; return true;},
        none: (element) => {element.style.display = "none";},
        inherit: (element) => {element.style.display = "inherit"; return true;},
        block: (element) => {element.style.display = "block"; return true;},
        inline: (element) => {element.style.display = "inline"; return true;},
        flex: (element) => {element.style.display = "flex"; return true;},
        grid: (element) => {element.style.display = "grid"; return true;},
        inlineBlock: (element) => {element.style.display = "inline-block"; return true;},
        inlineFlex: (element) => {element.style.display = "inline-flex"; return true;},
        inlineGrid: (element) => {element.style.display = "inline-grid"; return true;},
        inlineTable: (element) => {element.style.display = "inline-table"; return true;},
        listItem: (element) => {element.style.display = "list-item"; return true;},
        runIn: (element) => {element.style.display = "run-in"; return true;},
        table: (element) => {element.style.display = "table"; return true;},
        tableCaption: (element) => {element.style.display = "table-caption"; return true;},
        tableCollumnGroup: (element) => {element.style.display = "table-collumn-group"; return true;},
        tableHeaderGroup: (element) => {element.style.display = "table-header-group"; return true;},
        tableFooterGroup: (element) => {element.style.display = "table-footer-group"; return true;},
        tableRowGroup: (element) => {element.style.display = "table-row-group"; return true;},
        tableCell: (element) => {element.style.display = "table-cell"; return true;},
        tableCollumn: (element) => {element.style.display = "table-collumn"; return true;},
        tableRow: (element) => {element.style.display = "table-row"; return true;}
    }
};


function addCssToDocument(tcss){
    var style = document.createElement('style')
    style.innerText = tcss;
    document.head.appendChild(style)
}


const css = ` .WebVisibilityJSBlinking {
    -webkit-animation: 1s blink ease infinite;
    -moz-animation: 1s blink ease infinite;
    -ms-animation: 1s blink ease infinite;
    -o-animation: 1s blink ease infinite;
    animation: 1s blink ease infinite;
  }

  @keyframes "blink" {

    from,
    to {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  @-moz-keyframes blink {

    from,
    to {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes "blink" {

    from,
    to {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  @-ms-keyframes "blink" {

    from,
    to {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  @-o-keyframes "blink" {

    from,
    to {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }`;

addCssToDocument(css);


Object.freeze(WebVisibilityJS);
Object.freeze(WebVisibilityJS.blinkToolkit);
Object.freeze(WebVisibilityJS.visibilityToolkit);
Object.freeze(WebVisibilityJS.displayToolkit);

const WVJS = WebVisibilityJS;