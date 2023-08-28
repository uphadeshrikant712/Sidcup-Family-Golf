var blur=document.querySelector("#cursor-blur")
var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets)
{
    crsr.style.left=dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left= dets.x -115 +"px"
    blur.style.top=dets.y -115 +"px"
});

var h4all=document.querySelectorAll("#navbar h4");
h4all.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function()
    {
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave", function () 
    {
    crsr.style.scale = 1;
    crsr.style.border = "1px solid transparent";
    crsr.style.backgroundColor = "#f05f36";
    });
});

gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:0.5,
    height:"85px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers:true, 
        start:"top -10%",
        end:"top -11%",
        scrub:3,

      }
});

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        stat:"top -300%",
        end:"top -100%",
        scrub:1,
    }

});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:
    {
        trigger:"#about-us",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:10, 
    },
});

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:3,
    stagger:2,
    scrollTrigger:
    {
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2, 
    },
});

gsap.from("#colon1",
{   
    y:-70,
    x:-70,
    scrollTrigger:
    {
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 45%",
        scrub:5,
    }

});

gsap.from("#colon2",
{
    y:70,
    x:70,
    scrollTrigger:
    {
        trigger:"#colon1",
        scroller:"body",
        start:"top 65%",
        end:"top 45%",
        scrub:5,
    }
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 95%",
        end:"top 90%",
        scrub:3,
    }
});