import React, { useState, useCallback, memo } from 'react';

// Komponen LegoBuilder dengan state internal
const LegoBuilder = memo(() => {
  const [legoPieces, setLegoPieces] = useState(0);

  // Menggunakan useCallback untuk mendefinisikan fungsi yang tidak berubah pada setiap render
  const addPiece = useCallback(() => {
    setLegoPieces(prev => prev + 1);
  }, []);

  // Membandingkan props untuk memutuskan apakah perlu di-render ulang
  const shouldRender = legoPieces > 2;

  if (!shouldRender) {
    console.log('LegoBuilder tidak di-render ulang');
  }

  console.log('LegoBuilder di-render');

  return (
    <div>
      <h1>Bangunan Lego: {legoPieces} Kepingan</h1>
      <button onClick={addPiece}>Tambah Kepingan</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Tidak ada props yang dibandingkan di sini karena state dikelola di dalam komponen
  return true;
});

export default LegoBuilder