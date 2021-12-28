import React from 'react';
import './css/AsideSection.css';

const AsideSection = () => {
   const diskusiLists = [
      'Bersihkan laptop dari butiran debu',
      'Cara akses website dengan menggunakan koneksi VPN',
      'Batas aman overclock PC rakitan',
      'Mengetahui akun facebook di hack menggunakan aplikasi',
      'Tutorial: langkah langkah mencegah website untuk track user',
   ];
   return (
      <aside>
         <h1>Diskusi 5 teratas</h1>
         <ul>
            {diskusiLists.map((data, index) => (
               <li key={index}>
                  <span>{index + 1}</span> {data}
               </li>
            ))}
         </ul>
      </aside>
   );
};

export default AsideSection;
