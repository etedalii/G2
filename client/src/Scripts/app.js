// Immediately Invoke Function Expression

(() => {
    function Start() {
      console.log('App Started');
    }
  
    window.addEventListener('load', Start);
  })();
  