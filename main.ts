sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeCountdownBy(2)
    otherSprite.destroy(effects.hearts, 100)
    music.baDing.play()
})
let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 2 4 4 4 4 2 c . . . . . 
    . . c 4 4 4 4 4 4 4 4 c . . . . 
    . c 2 4 4 4 4 4 4 4 4 2 c . . . 
    . c 4 c 2 2 2 2 c 4 4 4 c . . . 
    . f 4 2 f 2 2 f 2 4 4 4 f . . . 
    . f 4 4 4 4 4 4 4 4 4 4 f . . . 
    . . f 4 4 4 4 2 c 4 4 2 f c . . 
    . . . f c c c c 4 4 2 f 4 4 c . 
    . . c 4 2 4 4 4 2 c f 4 4 4 4 c 
    . c 4 4 2 4 4 c f c 2 4 4 2 c c 
    c 1 1 1 1 4 2 f c c 2 2 2 c . . 
    f 1 1 1 1 1 2 2 c 2 2 2 2 f . . 
    f 2 1 1 1 1 1 2 2 2 2 2 c f . . 
    . f 2 1 1 1 1 1 1 2 2 2 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, scene.screenHeight()))
})
