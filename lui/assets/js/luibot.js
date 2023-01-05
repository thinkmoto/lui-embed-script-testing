window.addEventListener("load",(function(){let e=!1,n="firstLaunch",t=localStorage.getItem("lui_hideBubble")||!1;if("undefined"!=typeof LEX_LUI&&void 0!==LEX_LUI.url){const i=document.createTextNode("\n        #lex-lui {\n          display: none;\n        }\n        @media (min-width: 992px) {\n          #lex-lui {\n            bottom: 0;\n            cursor: pointer;\n            display: block;\n            position: fixed;\n            right: 0;\n            width: 130px;\n            z-index: 10;\n          }\n        }\n        .lui-embedded {\n          background-color: #fff;\n          border-radius: 4px;\n          bottom: 10px;\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);\n          height: 80vh;\n          min-width: 550px;\n          overflow: hidden;\n          padding-top: 10px;\n          position: fixed;\n          right: 10px;\n          transition: transform 0.25s ease-out;\n          transform: translateX(120%);\n          width: 50vw;\n          z-index: 150;\n        }\n        @media (min-width: 1280px) {\n          .lui-embedded {\n            width: 30vw;\n          }\n        }\n        .lui-embedded__close {\n          cursor: pointer;\n          font-size: 30px;\n          position: absolute;\n          right: 5px;\n          top: 5px;\n          z-index: 10;\n        }\n        .lui-embedded__frame {\n          border: none;\n          height: calc(100% - 30px);\n          left: 0;\n          position: absolute;\n          top: 30px;\n          width: 100%;\n        }\n        .lui-embedded.show {\n          transform: translateX(0);\n        }\n\n        @keyframes bubble {\n          0% {\n              transform: translateY(-3px);\n          }\n          5% {\n              transform: translateY(-2.9px);\n          }\n          45% {\n              transform: translateY(2.9px);\n          }\n          50% {\n              transform: translateY(3px);\n          }\n          55% {\n              transform: translateY(2.9px);\n          }\n          95% {\n              transform: translateY(-2.9px);\n          }\n          100% {\n              transform: translateY(-3px);\n          }\n      }\n\n      .bubble {\n          animation-duration: 4s;\n          animation-iteration-count: infinite;\n          animation-name: bubble;\n          animation-timing-function: linear;\n          cursor: auto;\n          position: absolute;\n          top: -127px;\n          right: 32px;\n          perspective-origin: right;\n          perspective: 946px;\n      }\n\n      .bubble-back-layer {\n          background-color: white;\n          border: solid 1px #E6E6E6;\n          height: 100%;\n          position: absolute;\n          transform: rotateY(21deg) translate(13px, -4px);\n          width: 100%;\n          z-index: 1;\n      }\n\n      .bubble-back-layer::after {\n          bottom: -28px;\n          border-left: 24px solid transparent;\n          border-top: 31px solid white;\n          content: '';\n          display: block;\n          position: absolute;\n          right: 90px;\n          transform: rotate(350deg);\n      }\n\n      .bubble-text {\n          /* dark-grey */\n          box-sizing: content-box;\n          color: #333333;\n          font-family: 'Open Sans';\n          line-height: 22px;\n          font-size: 16px;\n          font-style: normal;\n          font-weight: 400;\n          position: relative;\n          margin: 0;\n          padding: 38px 30px;\n          width: 311px;\n          z-index: 2;\n      }\n\n      .bubble-close-btn {\n          cursor: pointer;\n          height: 20px;\n          overflow: hidden;\n          position: absolute;\n          right: 16px;\n          top: 14px;\n          width: 20px;\n          z-index: 3;\n      }\n\n      .bubble-close-btn svg {\n          height: 20px;\n          width: 20px;\n      }"),a=document.getElementsByTagName("head")[0],o=document.createElement("style");o.appendChild(i),a.append(o);const r=document.getElementsByTagName("body")[0],s=document.createElement("div");let d=lottie.loadAnimation({autoplay:!1,container:s,loop:!1,name:"appear",path:"https://lui.lexoffice.de/assets/botanimations/lui-appears.json",renderer:"svg"});d.addEventListener("complete",(function(){if("firstLaunch"===n){n=document.createElement("div"),n.setAttribute("class","bubble"),n.setAttribute("div","speech-bubble");let e=document.createElement("div");e.setAttribute("class","bubble-back-layer");let i=document.createElement("p");i.setAttribute("class","bubble-text"),i.innerText="Pst, ich bin Lui. Du kannst jederzeit zusammen mit mir die Welt von lexoffice entdecken oder dich beraten lassen!";let a=document.createElement("div");a.setAttribute("class","bubble-close-btn"),a.addEventListener("click",(function(){n.style.display="none",localStorage.setItem("lui_hideBubble",!0)}));let o="http://www.w3.org/2000/svg",r=document.createElementNS(o,"svg"),d=document.createElementNS(o,"rect");d.setAttribute("x","2.16113"),d.setAttribute("y","0.954102"),d.setAttribute("width","25"),d.setAttribute("height","2"),d.setAttribute("rx","1"),d.setAttribute("transform","rotate(45 2.16113 0.954102)"),d.setAttribute("fill","#555555");let l=document.createElementNS(o,"rect");l.setAttribute("x","1.16113"),l.setAttribute("y","18.6318"),l.setAttribute("width","25"),l.setAttribute("height","2"),l.setAttribute("rx","1"),l.setAttribute("transform","rotate(-45 1.16113 18.6318)"),l.setAttribute("fill","#555555"),r.append(d),r.append(l),a.append(r),n.append(e),n.append(i),n.append(a),t||s.append(n)}s.querySelector("svg").addEventListener("click",(function(){e||(f(),e=!0),t||localStorage.setItem("lui_hideBubble",!0),l.classList.add("show"),n.style.display="none"}))})),s.className="lex-lui",s.id="lex-lui";const l=document.createElement("div");l.className="lui-embedded";const p=document.createElement("embed"),c=LxoCampaign.getCampaignData();let{cid:b,pid:u,pdata:m,fallbackCid:x}=c;p.className="lui-embedded__frame",p.src=LEX_LUI.url,p.src=`${LEX_LUI.url}&payload=${window.location.href.split("//")[1]}#cid=${b?x:b}&pid=${u}&pdata=${m}`,console.log(`#cid=${b||x}&pid=${u}&pdata=${m}`),l.append(p);const h=document.createElement("div");h.className="lui-embedded__close",h.classList.add("lex-icon-close"),h.addEventListener("click",(function(){l.classList.remove("show"),d.setSpeed(1.25),d.goToAndPlay(0)})),l.append(h),r.append(s),d.play();const f=function(){r.append(l)}}}));