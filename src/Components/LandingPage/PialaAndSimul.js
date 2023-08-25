import React from 'react'
import { Link } from "react-router-dom";
import blob from 'src/assets/illust-piala/blob.png';
import bintang from 'src/assets/illust-piala/bintang.png';
import pialaKiri from 'src/assets/illust-piala/piala-kiri.png';
import pialaKanan from 'src/assets/illust-piala/piala-kanan.png'; 

const PialaAndSimul = () => {
  return (
    <>
        <div class="flex flex-row flex-shrink bg-teal-500 items-center h-screen">
          <div className="sm:pt-0 flex-wrap basis-1/2">
            <img src={blob} alt="" className="mt-[-15%] w-[50%] z-0 absolute" />
            <img src={bintang} alt="" className="w-[30%] ml-[8%] z-10 absolute animate-ping" />
            <img src={pialaKiri} alt="" className="ml-[5%] w-[20%] z-30 absolute drop-shadow-lg animate-bounceCustom" />
            <img src={pialaKanan} alt="" className="ml-[25%] mt-[-5%] w-[20%] z-20 absolute drop-shadow-lg animate-bounceCustom" />
          </div>
          <div className='flex flex-col basis-1/2 items-center text-white pt-24'>
            <p className='max-w-2xl font-montserrat text-4xl text-center'>Latihan soal lebih menyenangkan dengan<strong> Alpha Academy.</strong></p>
            <button className=' bg-orange-piala w-[50%] self-center p-2 text-2xl mt-10 drop-shadow-md rounded-[50px] hover:text-orange-piala hover:bg-transparent border-orange-piala border-2'>
              <Link to="/simulasi">Mulai Simulasi</Link>
            </button>
            <button className='w-[50%] self-center p-2 text-2xl mt-10 drop-shadow-md border-2 rounded-[50px] hover:text-orange-piala hover:bg-transparent hover:border-orange-piala'>
              <Link to="/login">Saya sudah memiliki akun</Link>
            </button>
          </div>

        </div>
    </>
  )
}

export default PialaAndSimul