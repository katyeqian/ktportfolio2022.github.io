$(document).ready(function() {

        class HoverButton {
          constructor(el) {
            this.el = el;
            this.hover = false;
            this.calculatePosition();
            this.attachEventsListener();
            this.box;
          }

          attachEventsListener() {
            window.addEventListener('mousemove', e => this.onMouseMove(e));
            window.addEventListener('resize', e => this.calculatePosition(e));
          }

          calculatePosition() {
            gsap.set(this.el, {
              x: 0,
              y: 0,
              scale: 1
            });
            this.box = this.el.getBoundingClientRect();
//            this.x = box.left + (box.width * 0.5);
//            this.y = box.top + (box.height * 0.5);
            this.width = this.box.width;
            this.height = this.box.height;
            this.x = this.box.left;
            this.y = this.box.top+window.scrollY;
          }
        
          onMouseMove(e) {
            let hover = false;
            let mouseX = e.clientX;
            let mouseY = e.clientY + window.scrollY;
              console.log(mouseY, this.y);
            if (mouseX > this.x && (this.x+this.width) > mouseX && mouseY > this.y && (this.y+this.height) > mouseY) {
                hover = true;
                console.log("true");
                if (!this.hover) {
                  this.hover = true;
                }
                this.onHover(e.clientX, e.clientY);
            }
            if(!hover && this.hover) {
              this.onLeave();
              this.hover = false;
            }
          }
//            let hoverArea = (this.hover ? 0.7 : 0.5);
//            let x = e.clientX - this.x;
//            let y = e.clientY - this.y;
//            let distance = Math.sqrt( x*x + y*y );
////            console.log("if",distance,"<",(this.width * hoverArea), hoverArea, this.width)
//            if (distance < (this.width * hoverArea)) {
//               hover = true;
//                console.log("true");
//                if (!this.hover) {
//                  this.hover = true;
//                }
//                this.onHover(e.clientX, e.clientY);
//            }
//
//            if(!hover && this.hover) {
//              this.onLeave();
//              this.hover = false;
//                console.log("check",x,y)
//            }
//          }

          onHover(x, y) {
            gsap.to(this.el,  {
              x: (x - this.x) * 0.1,
              y: (y - this.y) * 0.05,
              scale: 1.15,
              ease: 'power2.out',
              duration: 0.4
            });
            this.el.style.zIndex = 10;
          }
          onLeave() {
            gsap.to(this.el, {
              x: 0,
              y: 0,
              scale: 1,
              ease: 'power2.out(1.2, 0.4)',
              duration: 0.7
            });
            this.el.style.zIndex = 1;
          }
        }
    
    const btn0 = document.querySelectorAll('li');
        btn0.forEach(b => (
          new HoverButton(b)
        ))

//        const btn1 = document.querySelectorAll('li:nth-child(1) button');
//        new HoverButton(btn1);
//
//        const btn2 = document.querySelector('li:nth-child(2) button');
//        new HoverButton(btn2);
//
//        const btn3 = document.querySelector('li:nth-child(3) button');
//        new HoverButton(btn3);
});
                  