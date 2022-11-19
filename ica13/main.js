const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  // Callbacks 
  function callback(){
    alice1.animate(aliceTumbling, aliceTiming).finished.then(()=>{
        alice2.animate(aliceTumbling, aliceTiming).finished.then(()=>{
            alice3.animate(aliceTumbling, aliceTiming);
        })
    })
  }
  callback();

  // Promise Chain
  const animation = alice1.animate(aliceTumbling, aliceTiming)

  animation.finished.then(()=>alice2.animate(aliceTumbling, aliceTiming).finished).then(()=>alice3.animate(aliceTumbling, aliceTiming))

  // Async and await

  async function awaitSequence(){
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        await alice2.animate(aliceTumbling, aliceTiming).finished;
        alice3.animate(aliceTumbling, aliceTiming)
      }
      catch(error){
        console.error(`Could not animate: ${error}`)
      }
  }
  awaitSequence();