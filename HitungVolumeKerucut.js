function hitungVolumeKerucut (phi, jari, tinggi){
    if(phi === undefined || phi === null) throw 'Parameter harus diisi'
    if(jari === undefined || jari === null) throw 'Parameter harus diisi'
    if(tinggi === undefined || tinggi === null) throw 'Parameter harus diisi'

    if(typeof phi !== 'number') return 'Parameter phi harus berupa angka'
    if(typeof jari !== 'number') return 'Parameter jari harus berupa angka'
    if(typeof tinggi !== 'number') return 'Parameter tinggi harus berupa angka'

    const hasil = 1/3*phi*jari*jari*tinggi
    return hasil

}

export default hitungVolumeKerucut