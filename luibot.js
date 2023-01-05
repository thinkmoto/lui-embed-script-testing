window.addEventListener('load', function () {
  let initialized = false;
  let bubble = 'firstLaunch'; // the speech bubble element
  let hideBubble = localStorage.getItem('lui_hideBubble') || false;
  if (typeof LEX_LUI !== 'undefined') {
    if (typeof LEX_LUI.url !== 'undefined') {
      let pathToLui = new URL(
        LEX_LUI.url.split('/lui/embedded.html?skipIntro=1')[0]
      );
      const style = document.createTextNode(`
    #lex-lui {
        display: none;
    }
    @media (min-width: 992px) {
      #lex-lui {
          bottom: 0;
          cursor: pointer;
          display: block;
          position: fixed;
          right: 0;
          width: 130px;
          z-index: 10;
      }
    }
    .lui-embedded {
      background-color: #fff;
      border-radius: 4px;
      bottom: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      height: 80vh;
      min-width: 550px;
      overflow: hidden;
      padding-top: 10px;
      position: fixed;
      right: 10px;
      transition: transform 0.25s ease-out;
      transform: translateX(120%);
      width: 50vw;
      z-index: 150;
    }
    @media (min-width: 1280px) {
      .lui-embedded {
          width: 30vw;
      }
    }
    @font-face {
      font-family: 'hlf-lexoffice';
      src: url('./lui/assets/fonts/lexoffice/hlf-lexoffice.woff');
    }
    .lui-embedded__close {
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      right: 5px;
      top: 5px;
      z-index: 10;
    }
    .lex-icon-close:before {
      content: "H";
      font-family: "hlf-lexoffice"!important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .lui-embedded__frame {
      border: none;
      height: calc(100% - 30px);
      left: 0;
      position: absolute;
      top: 30px;
      width: 100%;
    }
    .lui-embedded.show {
      transform: translateX(0);
    }
  
        @keyframes bubble {
          0% {
              transform: translateY(-3px);
          }
          5% {
              transform: translateY(-2.9px);
          }
          45% {
              transform: translateY(2.9px);
          }
          50% {
              transform: translateY(3px);
          }
          55% {
              transform: translateY(2.9px);
          }
          95% {
              transform: translateY(-2.9px);
          }
          100% {
              transform: translateY(-3px);
          }
        }
  
        .bubble {
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-name: bubble;
          animation-timing-function: linear;
          cursor: auto;
          position: absolute;
          top: -127px;
          right: 32px;
          perspective-origin: right;
          perspective: 946px;
        }
  
        .bubble-back-layer {
          background-color: white;
          border: solid 1px #E6E6E6;
          height: 100%;
          position: absolute;
          transform: rotateY(21deg) translate(13px, -4px);
          width: 100%;
          z-index: 1;
        }
  
        .bubble-back-layer::after {
          bottom: -28px;
          border-left: 24px solid transparent;
          border-top: 31px solid white;
          content: '';
          display: block;
          position: absolute;
          right: 90px;
          transform: rotate(350deg);
        }
  
        .bubble-text {
          /* dark-grey */
          box-sizing: content-box;
          color: #333333;
          font-family: 'Open Sans';
          line-height: 22px;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          position: relative;
          margin: 0;
          padding: 38px 30px;
          width: 311px;
          z-index: 2;
        }
  
        .bubble-close-btn {
          cursor: pointer;
          height: 20px;
          overflow: hidden;
          position: absolute;
          right: 16px;
          top: 14px;
          width: 20px;
          z-index: 3;
        }
  
        .bubble-close-btn svg {
          height: 20px;
          width: 20px;
        }`);
      const head = document.getElementsByTagName('head')[0];
      const styles = document.createElement('style');
      styles.appendChild(style);
      head.append(styles);
      // connecting google fonts
      const openSansFontLink = document.createElement('link');
      openSansFontLink.setAttribute('rel', 'stylesheet');
      openSansFontLink.setAttribute(
        'href',
        'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
      );
      head.append(openSansFontLink);

      const body = document.getElementsByTagName('body')[0];

      const lui = document.createElement('div');

      let appear = lottie.loadAnimation({
        autoplay: false,
        container: lui,
        loop: false,
        name: 'appear',
        path: 'https://lui.lexoffice.de/assets/botanimations/lui-appears.json',
        renderer: 'svg',
      });

      appear.addEventListener('complete', function () {
        if (bubble === 'firstLaunch') {
          // Create a speech bubble element
          // bubble element
          bubble = document.createElement('div');
          bubble.setAttribute('class', 'bubble');
          bubble.setAttribute('div', 'speech-bubble');
          // black layer
          let backLayer = document.createElement('div');
          backLayer.setAttribute('class', 'bubble-back-layer');
          // bubble text
          let bubbleText = document.createElement('p');
          bubbleText.setAttribute('class', 'bubble-text');
          bubbleText.innerText =
            'Pst, ich bin Lui. Du kannst jederzeit zusammen mit mir die ' +
            'Welt von lexoffice entdecken oder dich beraten lassen!';
          // close icon
          let bubbleClosebtn = document.createElement('div');
          bubbleClosebtn.setAttribute('class', 'bubble-close-btn');
          bubbleClosebtn.addEventListener('click', function () {
            bubble.style.display = 'none';
            localStorage.setItem('lui_hideBubble', true);
          });
          let svgNs = 'http://www.w3.org/2000/svg';
          // create svg
          let bubbleCloseIcon = document.createElementNS(svgNs, 'svg');
          let bubbleCloseIconBarOne = document.createElementNS(svgNs, 'rect');
          bubbleCloseIconBarOne.setAttribute('x', '2.16113');
          bubbleCloseIconBarOne.setAttribute('y', '0.954102');
          bubbleCloseIconBarOne.setAttribute('width', '25');
          bubbleCloseIconBarOne.setAttribute('height', '2');
          bubbleCloseIconBarOne.setAttribute('rx', '1');
          bubbleCloseIconBarOne.setAttribute(
            'transform',
            'rotate(45 2.16113 0.954102)'
          );
          bubbleCloseIconBarOne.setAttribute('fill', '#555555');
          let bubbleCloseIconBarTwo = document.createElementNS(svgNs, 'rect');
          bubbleCloseIconBarTwo.setAttribute('x', '1.16113');
          bubbleCloseIconBarTwo.setAttribute('y', '18.6318');
          bubbleCloseIconBarTwo.setAttribute('width', '25');
          bubbleCloseIconBarTwo.setAttribute('height', '2');
          bubbleCloseIconBarTwo.setAttribute('rx', '1');
          bubbleCloseIconBarTwo.setAttribute(
            'transform',
            'rotate(-45 1.16113 18.6318)'
          );
          bubbleCloseIconBarTwo.setAttribute('fill', '#555555');
          // combine svg
          bubbleCloseIcon.append(bubbleCloseIconBarOne);
          bubbleCloseIcon.append(bubbleCloseIconBarTwo);
          // combine close icon
          bubbleClosebtn.append(bubbleCloseIcon);
          // combine bubble
          bubble.append(backLayer);
          bubble.append(bubbleText);
          bubble.append(bubbleClosebtn);

          // add bubble to LUI
          if (!hideBubble) {
            lui.append(bubble);
          }
        }
        // open the webchat when clicking on lui's face icon
        lui.querySelector('svg').addEventListener('click', function () {
          if (!initialized) {
            initalizeLuiWrapper();
            initialized = true;
          }
          if (!hideBubble) {
            localStorage.setItem('lui_hideBubble', true);
          }
          chatContainer.classList.add('show');
          bubble.style.display = 'none';
        });
      });

      lui.className = 'lex-lui';
      lui.id = 'lex-lui';

      const chatContainer = document.createElement('div');
      chatContainer.className = 'lui-embedded';

      const object = document.createElement('embed');
      const CD = LxoCampaign.getCampaignData();
      let { cid, pid, pdata, fallbackCid } = CD;
      object.className = 'lui-embedded__frame';
      object.src = LEX_LUI.url;

      object.src = `${LEX_LUI.url}&payload=${
        window.location.href.split('//')[1]
      }#cid=${cid ? fallbackCid : cid}&pid=${pid}&pdata=${pdata}`;
      console.log(`#cid=${cid ? cid : fallbackCid}&pid=${pid}&pdata=${pdata}`);
      chatContainer.append(object);

      const close = document.createElement('div');
      close.className = 'lui-embedded__close';
      close.classList.add('lex-icon-close');

      close.addEventListener('click', function () {
        chatContainer.classList.remove('show');
        appear.setSpeed(1.25);
        appear.goToAndPlay(0);
      });

      chatContainer.append(close);

      body.append(lui);
      appear.play();

      const initalizeLuiWrapper = function () {
        body.append(chatContainer);
      };
    }
  }
});
