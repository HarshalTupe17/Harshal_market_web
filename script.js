// window.addEventListener('load', function() {
//     if (typeof gsap === 'undefined') {
//         console.error('GSAP is not loaded!');
//         return;
//     }

//     var nav = document.querySelector("nav");

//     nav.addEventListener("mouseenter", function(){
//         console.log("Mouse entered nav");
//         // Timeline for enter animation
//         let tl = gsap.timeline();
        
//         tl.to("#nav-bottom", {
//             height: "21vh",
//             duration: 0.5,
//             ease: "power2.out"
//         })
//         .to(".nav-part2 h5", {
//             display: "block",
//             duration: 0
//         })
//         .to(".nav-part2 h5 span", {
//             y: 0,
//             stagger: 0.05,
//             duration: 0.5,
//             ease: "power2.out"
//         });
//     });

//     nav.addEventListener("mouseleave", function(){
//         console.log("Mouse left nav");
//         // Timeline for exit animation
//         let tl = gsap.timeline();
        
//         tl.to(".nav-part2 h5 span", {
//             y: 25,
//             stagger: 0.05,
//             duration: 0.5,
//             ease: "power2.in"
//         })
//         .to(".nav-part2 h5", {
//             display: "none",
//             duration: 0
//         })
//         .to("#nav-bottom", {
//             height: "0vh",
//             duration: 0.5,
//             ease: "power2.in"
//         });
//     });
// });


function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

navAnimation();