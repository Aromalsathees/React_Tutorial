import React from 'react'
import {useState} from 'react'

const Image_slider = () => {

    const images = [
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
        'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
        'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'
    ]

    const [index , SetIndex] = useState(0)


    function PreviousButton(){
        SetIndex(function(preindex){
             if(images.lenght-1 === preindex){
                return 0;
             }else{
                return preindex - 1;
             }
        })
    }

    function NextButton(){
        SetIndex(function(preindex){
            if(preindex === images.length-1){
                return 0;
            }else{
                return preindex + 1;
            }
        })
    }


  return (
    <div>
        <div>
            <img src={images[index]} alt="" />
            <button onClick={NextButton}>Next Button</button>
            <button onClick={PreviousButton}>Previous BUtton</button>
        </div>
    </div>
  )
}

export default Image_slider