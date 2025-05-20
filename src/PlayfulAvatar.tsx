import React, { useMemo } from 'react'
import SimpleComposer from './composers/SimpleComposer'
import { EyesComposer } from './avatarElements/Eyes'
import { OutfitsComposer } from './avatarElements/Outfits'
import { AccessoriesComposer } from './avatarElements/Accessories'
import { MouthComposer } from './avatarElements/Mouth'
import ColoredComposer from './composers/ColoredComposer'
import { FaceComposer } from './avatarElements/Face'
import { HairComposer } from './avatarElements/Hair'
import type {TAvatarAccessory, TAvatarBackgroundShape, TAvatarEyes, TAvatarFace, TAvatarHaircut, TAvatarMouth, TAvatarOutfit } from './types'
import { genConfig } from './utils/avatarUtils'

interface PlayfulAvatarProps {
    style:React.CSSProperties,
    seed?:string,
    backgroundColor?:string,
    backgroundShape?:TAvatarBackgroundShape,
    accessory?:TAvatarAccessory,
    eyes?:TAvatarEyes,
    face?:TAvatarFace,
    faceColor?:string,
    mouth?:TAvatarMouth,
    outfit?:TAvatarOutfit,
    haircut?:TAvatarHaircut,
    haircutColor?:string,
}


const PlayfulAvatar = ((
    {style, backgroundColor, backgroundShape, accessory, eyes, face, faceColor, mouth, outfit, haircut, haircutColor
    }:PlayfulAvatarProps
) => {

    const config = useMemo(()=> {

        return genConfig({
            backgroundColor:backgroundColor,
            backgroundShape:backgroundShape,
            accessory:accessory,
            eyes:eyes,
            face:face,
            faceColor:faceColor,
            mouth:mouth,
            outfit:outfit,
            haircut:haircut,
            haircutColor:haircutColor
        });
    }, [backgroundColor, backgroundShape, accessory, eyes, face, faceColor, mouth, outfit, haircut, haircutColor])


  return <div style={style}>
    <svg height="100%" width="100%" viewBox="0 0 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <rect 
        height={1300} width={1300}
        fill={config.backgroundColor} 
        rx={config.backgroundShapeRadius}
        />
        <mask id="mask0_26_635" >
            <rect 
            height={1300} width={1300}
            fill={'white'}
            rx={config.backgroundShapeRadius}
            />
        </mask>
        <ColoredComposer elementID={config.faceID} composer={FaceComposer} color={config.faceColor} />
        <SimpleComposer  elementID={config.outfitID} composer={OutfitsComposer} />
        <SimpleComposer  elementID={config.eyesID} composer={EyesComposer} />
        <SimpleComposer  elementID={config.mouthID} composer={MouthComposer} /> 
        <ColoredComposer elementID={config.haircutID} composer={HairComposer}  color={config.haircutColor} />
        <SimpleComposer  elementID={config.accessoryID} composer={AccessoriesComposer} />
    </svg>
    </div>
})

export default PlayfulAvatar