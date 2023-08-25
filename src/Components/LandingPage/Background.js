import React from 'react'
import BackgroundBox from './BackgroundBox'
import confusedPerson1 from 'src/assets/confusedperson.png'
import confusedPerson2 from 'src/assets/confusedperson2.png'
import confusedPerson3 from 'src/assets/confusedperson3.png'

function Background() {

  
  return (
    <>
        <div className='flex flex-col z-50 bg-white-gray p-12 ml-12 mr-12 rounded-t-[50px] items-center gap-[100px] font-montserrat'>
            <BackgroundBox passedImage={confusedPerson1} idBox={1}/>
            <BackgroundBox passedImage={confusedPerson2} idBox={2}/>
            <BackgroundBox passedImage={confusedPerson3} idBox={3}/>
        </div>
    </>
  )
}

export default Background