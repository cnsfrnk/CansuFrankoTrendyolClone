import React from 'react'

function TopHeader() {
  return (
    <div className='flex justify-end space-x-4 p-4 bg-white size-full'>
      <p className='text-xs text-gray-600 hover:text-black-500 cursor-pointer'>İndirim Kuponlarım</p>
      <p className='text-xs text-gray-600 hover:text-black-500 cursor-pointer'>Trendyol'da Satış Yap</p>
      <p className='text-xs text-gray-600 hover:text-black-500 cursor-pointer'>Hakkımızda</p>
      <p className='text-xs text-gray-600 hover:text-black-500 cursor-pointer'>Yardım & Destek</p>
    </div>
  )
}

export default TopHeader
