AFRAME.registerComponent('playerMovement', {
    init:function(){
        var playerEl = document.querySelector('#player')
        var p = playerEl.getAttribute('position')
        window.addEventListener('keyDown',E=>{
            if(E.key==='w' || E.key==='ArrowUp'){
                p.z-=500
                playerEl.setAttribute('position',{x:p.x,y:p.y,z:p.z})
            }
            if(E.key==='s' || E.key==='ArrowDown'){
                p.z+=500
                playerEl.setAttribute('position',{x:p.x,y:p.y,z:p.z})
            }
            if(E.key==='a' || E.key==='ArrowLeft'){
                p.x-=500
                playerEl.setAttribute('position',{x:p.x,y:p.y,z:p.z})
            }
            if(E.key==='d' || E.key==='ArrowRight'){
                p.x+=500
                playerEl.setAttribute('position',{x:p.x,y:p.y,z:p.z})
            }
            if(E.key==='space'){
                p.y-=500
                playerEl.setAttribute('position',{x:p.x,y:p.y,z:p.z})
            }
        })
    }
})