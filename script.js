
// var dim=document.querySelectorAll(".center")
// .getBoundingClientRect();
// var prev =dim.left;
// document.querySelector("#container")
// .addEventListener("scroll",function(){
//     var dim2=document.querySelector(".center")
//     .getBoundingClientRect();
//     var diff=prev - dim2.left;
//     document.querySelectorAll(".center")
//     .forEach(function(elem){
//         elem.style.transform= `skewX(${diff*10}deg)`;
//     });
//     prev =dim2.left;
// })




gsap.to("#right2",{
    ScrollTrigger:{
        trigger:"#right2",
        start:"top 40%",
        scroller:"#main",
        scrub:2,
        end:"bottom 90%",
        markers:true
    
    
    },
    backgroundColor:"#000",
    color:"#dadadad",
    ease:Circ
    })






    gsap.to("#left1",{
        ScrollTrigger:{
            trigger:"#left1",
            start:"top 10%",
            scroller:"#main",
            scrub:2,
            end:"bottom 40%",
            markers:true
        
        
        },
        backgroundColor:"#000",
        color:"#dadadad",
        ease:Circ
        })

document.querySelector("")




const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

