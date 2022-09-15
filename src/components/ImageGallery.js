import React from 'react'
import ImageCard from './ImageCard'
import './ImageGallery.css'

const ImageGallery = () => {
  return (
    <div className='gallery-container'>
      <ImageCard src='https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' carBrand='Lambo'
      carModel='Veneno'
      fact='Has a top speed of 356 km/h. Only 13 were ever made.'/>
      
      <ImageCard src="https://images.pexels.com/photos/4651251/pexels-photo-4651251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" carBrand='Ferrari' carModel='Spider'  fact="It is Ferrari's 8th v8 vehicle."/>

      <ImageCard src='https://www.cnet.com/a/img/resize/5e7e837526d6cf1bf64396ea586b9f46eb3aaa19/hub/2008/08/25/55e8255e-cc2e-11e2-9a4a-0291187b029a/bugatti-veyron-grand-sport_1.jpg?auto=webp&width=1200' carBrand='Buagatti' carModel='Veyron' fact='The engine of this beast sucks 47k lires of air per minute. It also goes 0-100-0 in just 5 seconds.'/>

      <ImageCard src='https://hips.hearstapps.com/hmg-prod/images/2021-mercedes-amg-g63-mmp-1-1604077613.jpg' carBrand='Mercedes Benz' carModel='G 63 AMG' fact='This car is an embodiment of class and power. No, really, it can go as high as 577 horsepower.'/>

      <ImageCard src='https://images.pexels.com/photos/10905500/pexels-photo-10905500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' carBrand='Ford' carModel='Mustang' fact='The Mustang busted into the automobile scene in 1964, selling 22k units on the first day alone.'/>

      <ImageCard src='https://images.pexels.com/photos/11685469/pexels-photo-11685469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' carBrand='McLaren' carModel='P1' fact='There are only 375 units of this beauty. I hope I get a hold of one soon.'/>

      <ImageCard src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg/1200px-2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg' carBrand='Rolls Royce' carModel='Phantom' fact='Top notch luxury coupled with a V12? Sign me up please.'/>

      <ImageCard src='https://images.pexels.com/photos/8343503/pexels-photo-8343503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' carBrand='Bentley' carModel='Mulsanne' fact='It takes 9 weeks to produce one of these cars. It is has recently been discontinued though.'/>

      <ImageCard src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Mercedes-Maybach_Vision_6_mondial_auto_2016_%281%29.jpg' carBrand='Mercedes Benz' carModel='Vision Mercedes-Maybach 6 Cabriolet' fact='Unreleased concept car that should in fact be a released actual car!!'/>

      <ImageCard src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1200px-2018_Tesla_Model_S_75D.jpg' carBrand='Tesla' carModel='Model S' fact='Elecetric|Super Fast|Automatic Breaking|Self-Driving'/>

      <ImageCard src='https://hips.hearstapps.com/hmg-prod/images/2021-porsche-718-cayman-gt4-107-1616160477.jpg?crop=0.835xw:0.627xh;0.103xw,0.188xh&resize=640:*' carBrand='Porsche' carModel='718 Cayman' fact='Has turbo engines and is arguably their best sports car'/>
    </div>
  )
}

export default ImageGallery
