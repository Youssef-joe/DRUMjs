window.addEventListener('keydown', function(e){
    function removeTransiton (e) {
        if (e.type !== 'transitionend') return // skip the untrastioned 
        this.classList.remove('playing')
    }
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // That gonna stop the function from running all together
    audio.currentTime = 0 // rewind to the start
    audio.play()
    key.classList.add('playing')
    const keys = document.querySelectorAll('.key')
   
    keys.forEach(key => key.addEventListener('transitionend', removeTransiton))
})
