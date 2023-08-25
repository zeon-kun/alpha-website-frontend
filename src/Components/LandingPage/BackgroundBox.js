function BackgroundBox({passedImage, idBox}) {
  if (idBox === 1){
    return (
      <div className='flex rounded-[50px] bg-white mx-[20px] gap-[100px] px-[90px]'>
        <div className='flex flex-col gap-10 py-[100px]'>
          <p className='font-semibold text-[32px] hd:text-[44px] text-black-blue'>
            Merasa susah mencari materi persiapan olimpiade?
          </p>
          <p className='font-normal text-[24px] hd:text-[32px]'>
            Materi Olimpiade berbeda dengan materi sekolah pada umumnya. Bahkan terdapat bidang yang tidak diajarkan di sekolah, seperti astronomi, kebumian, dan komputer.
          </p>
        </div>
        {passedImage && <img src={passedImage} alt="box-img" className="h-auto w-[40%] self-center" />}
      </div>
    )
  } else if (idBox === 2) {
    return (
      <div className='flex rounded-[50px] bg-white mx-[20px] gap-[100px] px-[90px]'>
        {passedImage && <img src={passedImage} alt="box-img" className="h-auto w-[40%] self-center" />}
        <div className='flex flex-col gap-10 py-[100px]'>
          <p className='font-semibold text-[32px] hd:text-[44px] text-black-blue'>
            Sudah latihan soal tapi bingung dengan pembahasannya?
          </p>
          <p className='font-normal text-[24px] hd:text-[32px]'>
            Berlatih mengerjakan latihan soal adalah salah satu kunci sukses untuk meraih juara di olimpiade. Namun, agar latihan menjadi lebih terarah kita harus memiliki tutor yang berpengalaman.
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex rounded-[50px] bg-white mx-[20px] gap-[100px] px-[90px]'>
        <div className='flex flex-col gap-10 py-[100px]'>
          <p className='font-semibold text-[32px] hd:text-[44px] text-black-blue'>
            Ingin menjadi juara tapi sekolah belum memfasilitasi?
          </p>
          <p className='font-normal text-[24px] hd:text-[32px]'>
            Dukungan sekolah sangatlah penting agar siswanya dapat belajar dengan tenang. Namun, tidak semua sekolah memiliki anggaran yang cukup untuk memfasilitasi siswa yang berminat di dalam Olimpiade sains.
          </p>
        </div>
        {passedImage && <img src={passedImage} alt="box-img" className="h-auto w-[40%] self-center" />}
      </div>
    )
  }
}

export default BackgroundBox