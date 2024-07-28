import React from 'react'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar() {
  return (
    <>

      <div className='flex items-center justify-between grid-cols-3 hover:cursor-pointer'  >

        <img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="Logo" width={200} height={100} />

        <div className="flex flex-grow items-center justify-center mx-10">
          <div className="flex w-full max-w-2xl bg-yellow-50 rounded-lg">
            <input
              className="flex-grow border-none text-xs bg-transparent px-4 py-2 text-gray-700 outline-none focus:outline-none"
              type="search"
              name="search"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            />
            <button
              type="submit"
              className="m-2 px-4 py-2 bg-transparent text-orange-400 rounded-lg"
            >
              <SearchOutlinedIcon />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
            <Person2OutlinedIcon />
            <p className="p-2 m-2 text-xs">Giriş Yap</p>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
            <FavoriteBorderOutlinedIcon />
            <p className="p-2 m-2 text-xs">Favorilerim</p>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
            <ShoppingCartOutlinedIcon />
            <p className="p-2 m-2 text-xs">Sepetim</p>
          </div>



        </div>


      </div>


    </>
  )
}

export default Navbar