gsap.registerPlugin("scrolltrigger");
gsap.to("h2", {
    scrollTrigger: {
    trigger: "h2",
    start: "top 20%",
    end: "bottom 100%",
    scrub:2,
    pin: true,
    markers: true,
    toggleActions: "restar, pause, none, none",
  },
  y: 300,
  duration: 1,
  rotate: 360,
  ease:"none",
  fill:"red"
});
// gsap.to("h2",{
//    y:100,
//    duration:0.3,
//    stagger:{
//        each:0.1
//     //    from:"start" 
//    }
// });