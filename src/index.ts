import { Color4, Vector3 } from '@dcl/sdk/math'
import { AudioSource, EasingFunction, engine, InputAction, Material, MaterialTransparencyMode, MeshRenderer, pointerEventsSystem, Transform, Tween, TweenLoop, TweenSequence } from '@dcl/sdk/ecs'

export function main() {

    ////// BUTTONS

    const birdItem = engine.getEntityOrNullByName("birdItem")

    if (birdItem) {

        pointerEventsSystem.onPointerDown(
            {
            entity: birdItem,
            opts: {
                button: InputAction.IA_POINTER,
                hoverText: 'Play/Pause Sound'
            }
            },
            () => {
            const audio = AudioSource.getMutable(myEntity)
            audio.playing = !audio.playing
            console.log(audio.playing ? 'Playing audio' : 'Paused audio')
            }
        )
    }


    const taoismItem = engine.getEntityOrNullByName("taoismItem")

    if (taoismItem) {

        pointerEventsSystem.onPointerDown(
            {
            entity: taoismItem,
            opts: {
                button: InputAction.IA_POINTER,
                hoverText: 'Play/Pause Sound'
            }
            },
            () => {
            const audio = AudioSource.getMutable(myEntity2)
            audio.playing = !audio.playing
            console.log(audio.playing ? 'Playing audio' : 'Paused audio')
            }
        )
    }


    const waterItem = engine.getEntityOrNullByName("waterItem")

    if (waterItem) {

        pointerEventsSystem.onPointerDown(
            {
            entity: waterItem,
            opts: {
                button: InputAction.IA_POINTER,
                hoverText: 'Play/Pause Sound'
            }
            },
            () => {
            const audio = AudioSource.getMutable(myEntity3)
            audio.playing = !audio.playing
            console.log(audio.playing ? 'Playing audio' : 'Paused audio')
            }
        )
    }


    const musicItem = engine.getEntityOrNullByName("musicItem")

    if (musicItem) {

        pointerEventsSystem.onPointerDown(
            {
            entity: musicItem,
            opts: {
                button: InputAction.IA_POINTER,
                hoverText: 'Play/Pause Sound'
            }
            },
            () => {
            const audio = AudioSource.getMutable(myEntity4)
            audio.playing = !audio.playing
            console.log(audio.playing ? 'Playing audio' : 'Paused audio')
            }
        )
    }

    /////// ENTITY

    const myEntity = engine.addEntity()
    Transform.create(myEntity, {
        position: Vector3.create(1, 1, 1),
    })
    MeshRenderer.setSphere(myEntity)

    Material.setPbrMaterial(myEntity, {
        albedoColor: Color4.create(1, 1, 1, 1),
        transparencyMode: MaterialTransparencyMode.MTM_ALPHA_BLEND
      })


    AudioSource.create(myEntity, {
        audioClipUrl: 'assets/sounds/nature.mp3',
        loop: true,
        playing: false,
    })

    Tween.create(myEntity, {
        duration: 4000,
        easingFunction: EasingFunction.EF_LINEAR,
        currentTime: 0,
        playing: true,
        mode: Tween.Mode.Move({
            start: Vector3.create(1, 1, 1),
            end: Vector3.create(15, 1, 1),
        }),
    })

    TweenSequence.create(myEntity, {
        sequence: [
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(15, 1, 1),
                    end: Vector3.create(15, 1, 15),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(15, 1, 15),
                    end: Vector3.create(1, 1, 15),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(1, 1, 15),
                    end: Vector3.create(1, 1, 1),
                })
            },
        ],
        loop: TweenLoop.TL_RESTART,
    })

    ////// ENTITY 2

    const myEntity2 = engine.addEntity()
    Transform.create(myEntity2, {
        position: Vector3.create(1, 1, 1),
    })
    MeshRenderer.setSphere(myEntity2)

    Material.setPbrMaterial(myEntity2, {
        albedoColor: Color4.create(1, 1, 1, 1), 
        transparencyMode: MaterialTransparencyMode.MTM_ALPHA_BLEND
      })


    AudioSource.create(myEntity2, {
        audioClipUrl: 'assets/sounds/taoism.mp3',
        loop: true,
        playing: false,
    })

    Tween.create(myEntity2, {
        duration: 4000,
        easingFunction: EasingFunction.EF_LINEAR,
        currentTime: 0,
        playing: true,
        mode: Tween.Mode.Move({
            start: Vector3.create(15, 1, 1),
            end: Vector3.create(15, 1, 15),
        }),
    })

    TweenSequence.create(myEntity2, {
        sequence: [
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(15, 1, 15),
                    end: Vector3.create(1, 1, 15),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(1, 1, 15),
                    end: Vector3.create(1, 1, 1),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(1, 1, 1),
                    end: Vector3.create(15, 1, 1),
                })
            },
        ],
        loop: TweenLoop.TL_RESTART,
    })


    ////// ENTITY 3

    const myEntity3 = engine.addEntity()
    Transform.create(myEntity3, {
        position: Vector3.create(1, 1, 1),
    })
    MeshRenderer.setSphere(myEntity3)

    Material.setPbrMaterial(myEntity3, {
        albedoColor: Color4.create(1, 1, 1, 1),
        transparencyMode: MaterialTransparencyMode.MTM_ALPHA_BLEND
      })

    AudioSource.create(myEntity3, {
        audioClipUrl: 'assets/sounds/water.mp3',
        loop: true,
        playing: false,
    })

    Tween.create(myEntity3, {
        duration: 4000,
        easingFunction: EasingFunction.EF_LINEAR,
        currentTime: 0,
        playing: true,
        mode: Tween.Mode.Move({
            start: Vector3.create(15, 1, 15),
            end: Vector3.create(1, 1, 15),
        }),
    })

    TweenSequence.create(myEntity3, {
        sequence: [
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(1, 1, 15),
                    end: Vector3.create(1, 1, 1),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(1, 1, 1),
                    end: Vector3.create(15, 1, 1),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(15, 1, 1),
                    end: Vector3.create(15, 1, 15),
                })
            },
        ],
        loop: TweenLoop.TL_RESTART,
    })


    ////// ENTITY 4

    const myEntity4 = engine.addEntity()
    Transform.create(myEntity4, {
        position: Vector3.create(1, 1, 1),
    })
    MeshRenderer.setSphere(myEntity4)

    Material.setPbrMaterial(myEntity4, {
        albedoColor: Color4.create(1, 1, 1, 1),
        transparencyMode: MaterialTransparencyMode.MTM_ALPHA_BLEND
      })


    AudioSource.create(myEntity4, {
        audioClipUrl: 'assets/sounds/music.mp3',
        loop: true,
        playing: false,
    })

    Tween.create(myEntity4, {
        duration: 4000,
        easingFunction: EasingFunction.EF_LINEAR,
        currentTime: 0,
        playing: true,
        mode: Tween.Mode.Move({
            start: Vector3.create(1, 1, 15),
            end: Vector3.create(1, 1, 1),
        }),
    })

    TweenSequence.create(myEntity4, {
        sequence: [
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(1, 1, 1),
                    end: Vector3.create(15, 1, 1),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(15, 1, 1),
                    end: Vector3.create(15, 1, 15),
                })
            },
            {
                duration: 4000,
                easingFunction: EasingFunction.EF_LINEAR,
                mode: Tween.Mode.Move({
                    start: Vector3.create(15, 1, 15),
                    end: Vector3.create(1, 1, 15),
                })
            },
        ],
        loop: TweenLoop.TL_RESTART,
    })
}
