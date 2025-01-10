function startLoader(){
    const counterElement = document.querySelector('.counter');
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100)
            return
        currentValue += Math.floor(Math.random() * 10) + 1;
        if(currentValue > 100){
            currentValue = 100;
        }

        counterElement.textContent = String(currentValue) + "%";
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter,delay);
    }

    

    updateCounter()
}

startLoader()

gsap.to(".counter", 0.25,{
    delay:3.5,
    opacity:0
})

gsap.to(".bar", 1.5,{
    delay:3.5,
    height:0,
    stagger:{
        amount:0.5
    },
    ease:'power4.inOut'
})

gsap.from(".h1",1.5,{
    delay:4,
    y:700,
    stagger:{
        amount:0.5
    },
    ease: "power4.inOut"
});

gsap.to(".header",1.5,{
    delay:5,
    width:"50%",
    ease:"power4.inOut",
    onComplete : () => {
        gsap.delayedCall(0.5,()=>{
            document.querySelector(".header").style.overflow = "hidden";
        })
    }
})

gsap.from(".hero",1.5,{
    delay:4.5,
    y:600,
    ease:"power4.inOut"
})

gsap.to('.group:first-child .h1',2,{
    delay:5.5,
    stagger:{
        amount:0.3
    },
    opacity:0,
    y:-100,
    ease:"power4.inOut"
})

gsap.to('.group.hidden',2,{
    delay:6,
    stagger:{
        amount:0.3
    },
    opacity:1,
    y:-183,
    ease:"power4.inOut"
})

// gsap.to('.group.hidden .h1',2,{
//     delay:6.2,
//     stagger:{
//         amount:0.3
//     },
//     opacity:1,
//     ease:"power4.inOut"
// })

