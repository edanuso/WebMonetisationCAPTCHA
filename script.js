// Drawer class
// Drawer class
// Drawer class
// Drawer class
// Drawer class
// Drawer class
// Drawer class

var Drawer = (function () {
    function Drawer(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        //$('<span>&nbsp;</span>').css('font-family', 'Distortion Dos Analogue').appendTo(document.body);
        //$('#captcha').css('font-family', 'Distortion Dos Analogue');
    }
    Drawer.prototype.drawText = function (text, _a, size, angle, font) {
        var x = _a.x, y = _a.y, _b = _a.color, color = _b === void 0 ? null : _b;
        if (font === void 0) { font = 'Arial'; }
        if (color) {
            this.ctx.fillStyle = color;
        }
        else {
            this.ctx.fillStyle = 'red';
        }
        size = size || 100;
        this.ctx.font = "bold " + size + "px " + font;
        if (angle) {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.translate(x, y);
            this.ctx.rotate(angle * Math.PI / 180);
            this.ctx.translate(-x, -y);
        }
        this.ctx.fillText(text, x, y);
    };
    Drawer.prototype.drawLine = function (start, stop, color) {
        this.ctx.beginPath();
        //console.log(start.x,start.y,stop.x,stop.y)
        if (color) {
            this.ctx.strokeStyle = color;
        }
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(start.x, start.y);
        this.ctx.lineTo(stop.x, stop.y);
        this.ctx.stroke();
    };
    Drawer.prototype.drawCircle = function (_a, radius, color, fill) {
        var x = _a.x, y = _a.y;
        this.ctx.beginPath();
        if (color) {
            this.ctx.fillStyle = color;
        }
        this.ctx.arc(x, y, radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
        if (fill) {
            this.ctx.fill();
        }
        else
            this.ctx.stroke();
    };
    Drawer.prototype.drawCollapsedText = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.drawText(char, { x: 35 + (i * 42), y: 100 + (Math.random() * 30) }, 120);
        }
    };
    Drawer.prototype.randomLines = function (max, color) {
        if (color === void 0) { color = 'blue'; }
        for (var i = 0; i < max; i++) {
            this.drawLine({
                x: (i * 5),
                y: 0
            }, {
                x: (i * 5),
                y: 200
            }, color);
        }
    };
    Drawer.prototype.drawPlainText = function (text) {
      this.drawText(text, { x: 15, y: 100 }, 85);
      // for (var i = 0; i < text.length; i++) {
      //     var char = text[i];
      //     this.drawText(char, { x: 15 + (i * 70), y: 100 }, 100);
      // }
    };
    Drawer.prototype.drawDistortedText = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.ctx.setTransform(1, -0.2, 0, 1, 0, 0);
            this.drawText(char, { x: 35 + (i * 60), y: 100 }, 120);
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
    };
    Drawer.prototype.randomScaledTexts = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.ctx.scale(0.5, 0.5);
            //50+(Math.random()*60)
            this.drawText(char, { x: 30 + (i * 45), y: 100 });
            this.ctx.restore();
        }
    };
    Drawer.prototype.randomRotatedTexts = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            this.drawText(char, { x: 35 + (i * 47), y: 100 }, 110, 50 * Math.random() * (Math.random() > 0.5 ? -1 : 1));
        }
    };
    Drawer.prototype.randomTextPositions = function (text, max) {
        // for (var i = 0; i < max; i++) {
        //     this.drawText(text, { x: (270 * Math.random())-40, y: 140 * Math.random() }, 20)
        // }
        for (var i = 0; i < max; i++) {
            this.drawText(text, { x: (i * 5) - 30, y: (i * 18) % 200, color: 'blue' }, 20);
        }
    };
    Drawer.prototype.clear = function () {
        this.ctx.clearRect(-10, -10, 1000, 1000);
    };
    Drawer.prototype.randomCharacterSizes = function (text) {
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            //this.ctx.scale(0.5, 0.5)
            //
            this.drawText(char, { x: 0 + (i * 57), y: 100 }, 50 + (Math.random() * 70));
            this.ctx.restore();
        }
    };
    Drawer.prototype.randomColorText = function (text) {
        var colors = ['yellow', 'red', 'blue', 'green', 'orange', 'black', 'brown', 'gray'];
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            //this.ctx.scale(0.5, 0.5)
            //
            var color = colors[Math.floor(Math.random() * colors.length)];
            this.drawText(char, { x: 0 + (i * 57), y: 100, color: color });
            this.ctx.restore();
        }
    };
    Drawer.prototype.canvasBackground = function (img) {
        this.ctx.drawImage(img, 0, 0, 500, 200);
    };
    Drawer.prototype.backgroundColor = function (color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Drawer;
})();

// Font spy 
// Font spy 
// Font spy 
// Font spy 
// Font spy 

function fontSpy(fontName, callback, options) {
  // Throw error if fontName is not a string or not is left as an empty string
  if (Object.prototype.toString.call(fontName) === "[object Array]") {
      // we have an array, thats ok
  } else if (fontName && typeof fontName === "string") {
      // we have a string, convert it to an array
      fontName = [fontName];
  } else {
      throw "A valid fontName is required. fontName must be a string or an array.";
  }

  // defaults
  options = options || {};
  options.testFont = options.testFont || "Courier New";
  options.testString = options.testString || "QW@HhsXJIO";
  options.glyphs = options.glyphs || "";
  options.delay = options.delay || 100;
  options.timeOut = options.timeOut || 1000;

  // lets get at it :)
  var testElements = {};

  for (var i = 0; i < fontName.length; i++) {
      var testElement = document.createElement("span");
      testElement.style.position = "absolute";
      testElement.style.top = "-9999px";
      testElement.style.left = "-9999px";
      testElement.style.visibility = "hidden";
      testElement.style.fontFamily = options.testFont;
      testElement.style.fontSize = options.fontSize;
      testElement.innerHTML = options.testString + options.glyphs;

      document.body.appendChild(testElement);

      testElements[fontName[i]] = {
          element: testElement,
          fallbackFontWidth: testElement.offsetWidth,
          hasChangedWidth: function () {
              return this.fallbackFontWidth !== this.element.offsetWidth
          }
      }

      testElement.style.fontFamily = fontName[i].split(",")[0] + "," + options.testFont
  }

  var finished = function () {
      var loadedFonts = [];
      for (var i = 0; i < fontName.length; i++) {
          var testElement = testElements[fontName[i]];
          if (testElement.loaded === true) {
              loadedFonts.push(fontName[i]);
          }
          document.body.removeChild(testElement.element);
          testElement = undefined;
      }

      callback(loadedFonts);
  };

  var retry = function () {
      if (options.timeOut > 0) {
          setTimeout(checkFont, options.delay);
          options.timeOut -= options.delay;
      } else {
          finished();
      }
  };

  var checkFont = function () {
      var allFontsLoaded = true;

      for (var i = 0; i < fontName.length; i++) {
          var testElement = testElements[fontName[i]];
          if (testElement && testElement.hasChangedWidth()) {
              testElement.loaded = true;
          } else {
              allFontsLoaded = false;
          }
      }

      if (allFontsLoaded) {
          finished();
      } else {
          retry();
      }
  }

  checkFont();
};




// End of Font spy Routine
// End of Font spy Routine
// End of Font spy Routine
// End of Font spy Routine


//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
//  Captcha Utility functions
var image = new Image()
image.src = "https://peaceful-chandrasekhar-155b00.netlify.app/color.jpg";
function showColorBG(captcha, cb) {
    if (image.complete) {
      captcha.canvasBackground(image)
      cb();
    }
    image.onload = function () {
      captcha.canvasBackground(image)
      cb();
    }
  }
  
  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }
  
  function startTimeRec() {
    var t0 = performance.now();
    return t0;
  }
  
  function endTimeRec(startTime) {
    var t1 = performance.now();
    //console.log("Call to doSomething took " + (t1 - startTime) + " milliseconds.");
    return round((t1 - startTime), 2);
  }
  /**
   * 
   * @param {String} code 
   * @param {Drawer} captcha 
   * @param {String} captchastring 
   */
  function drawCaptcha(code, captcha, captchastring) {
    var resolve, reject, promise = new Promise((rs, rj) => {
      resolve = rs;
      reject = rj;
    })
    switch (code) {
      case 'plain_text': q
        captcha.drawPlainText(captchastring);
        resolve();
        break;
      case 'character_collapse_no_bg':
        captcha.randomRotatedTexts(captchastring);
        resolve();
        break;
      case 'character_collapse_with_bg':
        showColorBG(captcha, () => {
          captcha.randomRotatedTexts(captchastring);
          resolve();
        });
        break;
      case 'character_collapse_with_bg_noise':
        captcha.randomTextPositions("captcha", 60);
        captcha.randomRotatedTexts(captchastring);
        resolve();
        break;
      case 'text_distortion_no_bg':
        fontSpy(["Distortion Dos Analogue"], function (loadedFonts) {
          captcha.drawText(captchastring, {
            x: 10,
            y: 100,
            color: null
          }, 110, null, "Distortion Dos Analogue");
          resolve();
        });
        break;
      case 'text_distortion_with_bg':
        fontSpy(["Distortion Dos Analogue"], function (loadedFonts) {
          showColorBG(captcha, () => {
            captcha.drawText(captchastring, {
              x: 10,
              y: 100,
              color: null
            }, 110, null, "Distortion Dos Analogue");
            resolve();
          });
        });
        break;
      case 'text_distortion_with_bg_noise':
        fontSpy(["Distortion Dos Analogue"], function (loadedFonts) {
          captcha.randomTextPositions("captcha", 60);
          captcha.drawText(captchastring, {
            x: 10,
            y: 100,
            color: null
          }, 110, null, "Distortion Dos Analogue")
          resolve();
        });
        break;
      case 'random_lines_no_bg':
        captcha.randomLines(100);
        captcha.drawText(captchastring, {
          x: 20,
          y: 100
        });
        resolve();
        break;
      case 'random_lines_with_bg':
  
        showColorBG(captcha, () => {
          captcha.randomLines(100);
          captcha.drawText(captchastring, {
            x: 20,
            y: 100
          })
          resolve();
        });
        break;
      case 'random_lines_with_bg_noise':
        captcha.randomLines(100, 'green');
        captcha.randomTextPositions("captcha", 60);
        captcha.drawText(captchastring, {
          x: 20,
          y: 100
        })
        resolve();
        break;
      case 'character_fragmentation_no_bg':
        fontSpy(["Teleindicadores1"], function (loadedFonts) {
          //captcha.canvasBackground(image);
          captcha.drawText(captchastring, {
            x: 5,
            y: 100
          }, 130, null, "Teleindicadores1")
          resolve();
        });
        break;
      case 'character_fragmentation_with_bg':
        showColorBG(captcha, () => {
          fontSpy(["Teleindicadores1"], function (loadedFonts) {
            captcha.drawText(captchastring, {
              x: 5,
              y: 100,
              color: 'blue'
            }, 130, null, "Teleindicadores1")
            resolve();
          });
        });
        break;
      case 'character_fragmentation_with_bg_noise':
        fontSpy(["Teleindicadores1"], function (loadedFonts) {
          captcha.randomTextPositions("captcha", 60);
          captcha.drawText(captchastring, {
            x: 5,
            y: 100
          }, 130, null, "Teleindicadores1")
          resolve();
        });
        break;
      case 'colored_texts':
        captcha.randomColorText(captchastring);
        resolve();
        break;
      case 'colored_texts_with_bg':
        showColorBG(captcha, () => captcha.randomColorText(captchastring));
        resolve();
        break;
      case 'background_noise_no_bg':
        captcha.randomTextPositions("captcha", 60);
        captcha.drawText(captchastring, {
          x: 20,
          y: 100
        })
        resolve();
        break;
      case 'coloured_background_noise_coloured_characters':
        showColorBG(captcha, () => {
          captcha.randomTextPositions("captcha", 60);
          captcha.randomColorText(captchastring)
          resolve();
        });
        break;
      default:
        alert("Error")
        break;
  
    }
    return promise;
  
  }
  
  function startOcr() {
    $('#loaderdiv').show() 
    const {
      createWorker
    } = Tesseract;
    const worker = createWorker({
      logger: (m) => console.log("worker logger: ", m)
    });
    
  
    (async () => {
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
  
      const canvas = document.getElementById('captcha');
      const ctx = canvas.getContext("2d");
      let image = new Image()
      image.src = canvas.toDataURL('image/png');
      console.log(image.src)
      const {
        data: {
          text
        }
      } = await worker.recognize(
        image.src
      );
      console.log("generated text", text);
      var solvingTime = endTimeRec(startSolvingTime);
      if(text)
      {
        if(generatedCaptcha !== text){
          document.getElementById('outputBox').innerHTML = "Unable to break captcha";
          $.post('save_breaker.php', {
            'status' : 'Failed to break captcha',
            'captcha_type': captchaType,
            solving_time: solvingTime,
            response_time: solvingTime
          });
          
        }
        else{
          document.getElementById('outputBox').innerHTML = text;
          $.post('save_breaker.php', {
            'status' : 'Breaking successful',
            'captcha_type': captchaType,
            solving_time: solvingTime,
            response_time: solvingTime
          });
        }
        
      }
      else{
        $.post('save_breaker.php', {
          'status' : 'Failed to break captcha',
          'captcha_type': captchaType,
          solving_time: solvingTime,
          response_time: solvingTime
        });
        document.getElementById('outputBox').innerHTML = "No charaters recognized";
      }
      await worker.terminate();
      $('#loaderdiv').hide() 
    })();
  }
  
  function startOcrPlainText() {
    $('#loaderdiv').show() 
    const {
      createWorker
    } = Tesseract;
    const worker = createWorker({
      logger: (m) => console.log("worker logger: ", m)
    });
    
  
    (async () => {
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
  
      const canvas = document.getElementById('captcha');
      const ctx = canvas.getContext("2d");
      let image = new Image()
      image.src = canvas.toDataURL('image/png');
      console.log(image.src)
      const {
        data: {
          text
        }
      } = await worker.recognize(
        image.src
      );
     
    })();
  }











// Generate captcha
let captchaString;




  // Inject CSS file and other resources 
  const htmlHead= document.querySelector("head");
  const styleLink = document.createElement("link");
  styleLink.setAttribute("href","https://peaceful-chandrasekhar-155b00.netlify.app/yorubaCaptcha.min.css");
  styleLink.setAttribute("rel","stylesheet");
  htmlHead.appendChild(styleLink);
  htmlHead.innerHTML+=`<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,200&display=swap" rel="stylesheet">
  <script type="text/javascript" src="Drawer.js"></script>
  <script type="text/javascript" src="shared.js"></script>
  <script type="text/javascript" src="vanilla-fontspy.js"></script>
  `;
// validate captcha
function revealCaptcha(cb){
  generateCaptcha();
  
  function generateCaptcha(){
    const captchaParent=document.querySelector(".yoruba__captcha")
    const mainCaptchaToBeRemoved = document.querySelector(".main__captcha");
    if(mainCaptchaToBeRemoved) captchaParent.removeChild(mainCaptchaToBeRemoved)
    // const captchaHtml = document.querySelector("html")
    // console.log(captchaHtml)
    // captchaHtml.appendChild()
    // Inject Captcha Markup
    const words = [
        'ṣtóyà',
        'àeáuá',
        'áiẹoó',
        'óaísò',
        'ófṣdù',
        'ùtẹyì',
        'ìuáió',
        'óoẹpì',
        'ìaísò',
        'òdófí',
        'óyàeá',
        'ẹoóaí',
        'ísòdó',
        'ófṣdù'
    ];
     captchaString = words[Math.floor(Math.random() * words.length)];
    const logoSpan=document.createElement("span")
    logoSpan.setAttribute("class","captcha__logo")
    logoSpan.textContent="yorubaCaptcha."
    const mainCaptcha = document.createElement("div")
    mainCaptcha.setAttribute("class","main__captcha");
    mainCaptcha.setAttribute("id","main__captcha");
    const captchaCanvas= document.createElement("canvas")
    captchaCanvas.setAttribute("class","captcha__placeholder")
    const captchaAccentedCharacters = document.createElement("div");
    captchaAccentedCharacters.setAttribute("class","accented__characters");
    const captchaInput= document.createElement("input");
    captchaInput.setAttribute("type","text");
    captchaInput.setAttribute("class","captcha__input")
    captchaInput.setAttribute("placeholder","Enter text")
    const captchaMessage = document.createElement("span")
    captchaMessage.setAttribute("class","captcha__message")
    const captchaButton = document.createElement("button")
    captchaButton.setAttribute("class","captcha__btn")
    captchaButton.addEventListener("click",validateCaptcha)
    captchaButton.textContent="Submit"
    const cancelLink= document.createElement("span")
    cancelLink.style.display="block"
    cancelLink.style.textAlign="center"
    cancelLink.setAttribute("class","cancel-btn")
    cancelLink.textContent="cancel"
    cancelLink.addEventListener("click",function(){
       captchaParent.style.display="none"
    })

    
    const mainCaptchaChildren = []
    
    // Inject words into captcha
    var captchatypes = [
        'character_collapse_no_bg',
        'character_collapse_with_bg',
        'character_collapse_with_bg_noise',
        'text_distortion_no_bg',
        'text_distortion_with_bg',
        'text_distortion_with_bg_noise',
        'random_lines_no_bg',
        'random_lines_with_bg',
        'character_fragmentation_no_bg',
        'character_fragmentation_with_bg',
        'character_fragmentation_with_bg_noise',
        'colored_texts',
        'colored_texts_with_bg',
        'background_noise_no_bg',
        'coloured_background_noise_coloured_characters'
    ];
    const captchaType = captchatypes[Math.floor(Math.random() * captchatypes.length)];
    const newCaptcha = new Drawer(captchaCanvas)
    drawCaptcha(captchaType,newCaptcha,captchaString)
    // Inject accented characters
    const chars = "àáẹṣùìòóí";
    
    chars.split("").forEach((each)=>{
        const accentedCharacter= document.createElement("span");
    accentedCharacter.setAttribute("class","accented__character")
       accentedCharacter.textContent=each;
       accentedCharacter.addEventListener("click",()=>{
           captchaInput.value += each;
           captchaInput.focus()
       })
       captchaAccentedCharacters.appendChild(accentedCharacter);
       mainCaptchaChildren.push(accentedCharacter)
    
    })
    const accentedCharacter= document.createElement("span");
    accentedCharacter.setAttribute("class","accented__character")
    // Inject elements into the parent contauner
    mainCaptcha.appendChild(logoSpan)
    mainCaptcha.appendChild(captchaCanvas)
    mainCaptcha.appendChild(captchaInput)
    mainCaptcha.appendChild(captchaMessage)
    mainCaptcha.appendChild(captchaAccentedCharacters)
    mainCaptcha.appendChild(captchaButton)
    mainCaptcha.appendChild(cancelLink)
    
    mainCaptcha.style.display="none"
    mainCaptchaChildren.push(captchaButton,captchaButton,captchaCanvas,captchaMessage,logoSpan,captchaInput,captchaAccentedCharacters,accentedCharacter)
    
    // blur event for captcha
 
    captchaParent.appendChild(mainCaptcha)
    // alert(captchaParent.children.length)
    document.querySelectorAll(".main__captcha").forEach(each=>each.style.display="none")
     captchaParent.children.length > 1 ? captchaParent.children[captchaParent.children.length -1].style.display="block" : captchaParent.children[0].style.display="block"
    // Fix glitch
    setTimeout(()=>{captchaParent.style.display="flex"} ,50)
    
    
    }
  function validateCaptcha(){
    const userInput = document.querySelector(".captcha__input").value
    const captchaMessage= document.querySelector(".captcha__message")
         let isValidated=false
         if(userInput != captchaString || userInput == ""){
             const error = userInput == "" ?  "captcha cannot be empty" : "Incorect captcha input"
           captchaMessage.textContent= error
           captchaMessage.classList.contains("success") ? captchaMessage.classList.remove("success") : null
           captchaMessage.classList.add("error")
          //  captchaInput.focus()
        }else if(userInput == captchaString){
            captchaMessage.textContent="Captcha successfully validated ✔️"
            captchaMessage.classList.contains("error") ? captchaMessage.classList.remove("error") : null
            captchaMessage.classList.add("success")
            setTimeout(()=>{
              document.querySelector(".yoruba__captcha").style.display="none"
              cb()
            },1500)
        }
        return isValidated
   }
}
