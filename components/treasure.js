AFRAME.registerComponent('treasure-count',{
    init: function(){
        for(var i = 1;i<=12;i++){
            var id = `treasure${i}`
            var posX = Math.random()*200 + (-100)
            var posY = Math.random()*1+(0)
            var posZ = Math.random()*-200 + (100)
            var position = {x: posX, y: posY, z: posZ}
            console.log(position)
            this.createTreasures(id,position)
        }
    },
    createTreasures:function(id,position){
        var environmentEl = document.querySelector('#environment')
        var treasureEl = document.createElement('a-entity')
        treasureEl.setAttribute('id',id)
        treasureEl.setAttribute('position',position)
        treasureEl.setAttribute('gltf-model','./assets/treasure_chest/scene.gltf')
        environmentEl.append(treasureEl)
    }
})