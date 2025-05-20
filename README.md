# react-playful-avatar

<div align="center">
    <a href="https://www.drawkit.com/illustrations/playful-avatar-creator">
        <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/28bca1599725629bd5775cad49c80c272e7aec15.png" 
        width="600" alt="imagewall" />
    </a>
</div>



## Online Avatar Maker 

- https://playful-avatar.romubuntu.dev

## Assets

- Designer: [@DrawKitTeam](https://www.drawkit.com/) 
- Figma files: [Playful Avatar Illustration System](https://www.figma.com/community/file/1034368792791687764/playful-avatar-creator-drawkit)

## Installation

```sh
npm install react-playful-avatar
```

or

```sh
yarn add react-playful-avatar
```

## Usage

### Playful Avatar

1. Import the component.
    ```js
    import {PlayfulAvatar} from 'react-playful-avatar'
    ```
2. Generate an Avatar
   
    Playful Avatar can be generated with a string seed. It can be a name, email or any string you like.
    ```js
    const seededConfig = genUserConfigBySeed('salut@romubutun.dev')
    <PlayfulAvatar {...seededConfig} /> 
    ```
    
    Playful Avatar can also be generated with customized props. You can check the attributes below. If some attributes are not passed, they will be randomly generated.
    ```js
      <PlayfulAvatar
      eyes="Angry"
      backgroundShape="Rounded"
      />
    ```

    ```js
    const customConfig = {eyes:"Angry",backgroundShape:"Rounded" }
      <PlayfulAvatar {...customConfig}/>
    ```

    
    You can also generate a random avatar by passing nothing to the component.
    ```js
    <PlayfullAvatar /> 
    ```


3. You should pass a CSS style to define the width for the component.

    ```jsx
    <PlayfulAvatar style={{ width: '100', height: '100' }}  />
    ```
    or
    
    ```jsx
    <PlayfulAvatar style={{ width: '20vh', height: 'auto', aspect-ratio:1 }}  />
    ```

### Playful Element

1. Import the component.
    ```js
    import {PlayfulElement, AVATAR_ELEMENTS} from 'react-playful-avatar'
    ```
2. Generate an element.

    You can show all the different element available with this component. You should pass an TAvatarElement from the ALL_ELEMENT. ALL_ELEMENT is an object with list for all types of elements.

    You can display one unique element.
    ```js
    <PlayfulElement element={AVATAR_ELEMENTS.accessory[0]} />
    ```

    or, you can display all the element to create your own avatar maker.
    ```js
    {AVATAR_ELEMENTS.accessory.map((item, index) => {
    return <PlayfulElement element={item} key={index} />
    })}
    ```
3. For the elements with customizable colors such as Haircut and Face, you can pass colorProps.
    ```js
    <PlayfulElement element={AVATAR_ELEMENTS.haircut[0]}
    colorProps={'#EEEEEE'}
    />
    ```

4. You should pass a CSS style to define the width for the component.

    ```jsx
    <PlayfulElement style={{ width: '100', height: '100' }}  />
    ```
    or
    
    ```jsx
    <PlayfulElement style={{ width: '20vh', height: 'auto', aspect-ratio:1 }}  />
    ```


## Options

The options can be passed as React props. It is defines as TUserConfig. 

| key            | type   | default | accept                                       | tips                 |
| -------------- | ------ | ------- | -------------------------------------------- | -------------------- |
| `id`           | string |         |                                              | Only for React Props |
| `style`        | object |         |                                              | Only for React Props |
| `backgroundShape`| TAvatarBackgroundShape | circle  | Square, Rounded, Circle    |                      |
| `backgroundColor`| string |       |                                              | Use Hex colors       |
| `accessory`    | TAvatarAccessory |         | Rounded Glasses,Simple Earring,Glasses,Futuristic Glasses,Stylish Glasses,Mask,Earring,Cap,Circle Earring,Mask Google,Moustache,Earphone|                      |
| `eyes`         | TAvatarEyes |         |Thin, Closed, Cynic, Sad, Angry, Normal       |                      |
| `face`         | TAvatarFace |         |  Blush, Bear, Normal                         |                      |
| `faceColor`    | string |         |                                              |Use Hex colors            |
| `mouth`        | TAvatarMouth |         | Normal Smile, Normal Thin, Eat, Open Mouth Open Tooth, Sad, Angry, Cute, Hate, Smiliey |                      |
| `outfit`       | TAvatarOutfit |         | Blue hoodie, Retro yellow polo, Classic suit with red tie, Pastel blue sweater, Aviator jacket, Grey sweater with white scarf, Green sweater with yellow polka dots, Striped purple cardigan, Red sweater with white diamonds,  Pink sweater with round patterns, Purple sweater with Peter Pan collar,  Chic jacket with gold pendant, Blue overalls with green buttons, Black sweater with floral white collar, Black top with geometric patterns, Black buttoned tank top, Yellow top with black pompoms, Orange top with festive patterns, Simple purple sweater, Classic blue overalls, Black shirt with white collar, Black top with wavy stripes, Brown pinafore dress
| `haircut`    | TAvatarHaircut |         |Classic short, Double bun, Bob with bangs, Retro pompadour, Relaxed mullet, Natural waves, Structured short, Stylish quiff, Rockabilly, Bohemian flower, Space buns, Messy pixie, Voluminous curls, Asymmetrical short, Short curls, Spiky punk, Retro wave, Wavy short, Thick curls, Low ponytail, High ponytail, Tight curls, Side shave |                      |
| `haircutColor`    | string |         |                                              | Use Hex colors       |


## License

Released under [MIT](/LICENSE) by [@romubuntu](https://me.romubuntu.dev).