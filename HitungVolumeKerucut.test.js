import { expect } from "chai";
import hitungVolumeKerucut from "./HitungVolumeKerucut.js";

describe('Unit Test Function Volume Kerucut', function (){
    it('Hitung Volume kerucut dengan parameter yang valid', function(){
        const phi = 3.14
        const jari = 21
        const tinggi = 30

        const hasil = hitungVolumeKerucut (phi, jari, tinggi)
        expect(hasil).to.equal(13847.4)
    })

    it('Hitung Volume kerucut dengan parameter jari menggunakan string', function(){
        const phi = 3.14
        const jari = '21'
        const tinggi = 30

        const hasil = hitungVolumeKerucut (phi, jari, tinggi)
        expect(hasil).to.equal('Parameter jari harus berupa angka')
    })

    it('Hitung Volume kerucut dengan parameter yang kosong', function(){
        const hasil = function(){
            hitungVolumeKerucut()
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    it('Hitung Volume kerucut dengan parameter phi menggunakan string', function(){
        const phi = '3.14'
        const jari = 21
        const tinggi = 30

        const hasil = hitungVolumeKerucut(phi, jari, tinggi)
        expect(hasil).to.equal('Parameter phi harus berupa angka')
    })

    it('Hitung Volume kerucut dengan parameter tinggi menggunakan string', function(){
        const phi = 3.14
        const jari = 21
        const tinggi = '30'

        const hasil = hitungVolumeKerucut(phi, jari, tinggi)
        expect(hasil).to.equal('Parameter tinggi harus berupa angka')
    })

    it('Hitung Volume kerucut dengan parameter phi bernilai null', function(){
        const phi = null
        const jari = 21
        const tinggi = 30

        const hasil = function(){
            hitungVolumeKerucut(phi, jari, tinggi)
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    it('Hitung Volume kerucut dengan parameter jari bernilai null', function(){
        const phi = 3.14
        const jari = null
        const tinggi = 30

        const hasil = function(){
            hitungVolumeKerucut(phi, jari, tinggi)
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    it('Hitung Volume kerucut dengan parameter tinggi bernilai null', function(){
        const phi = 3.14
        const jari = 21
        const tinggi = null

        const hasil = function(){
            hitungVolumeKerucut(phi, jari, tinggi)
        }
        expect(hasil).to.throw('Parameter harus diisi')
    })

    it('Hitung Volume kerucut dengan parameter phi menggunakan boolean', function(){
        const phi = true
        const jari = 21
        const tinggi = 30

        const hasil = hitungVolumeKerucut(phi, jari, tinggi)
        expect(hasil).to.equal('Parameter phi harus berupa angka')
    })

    it('Hitung Volume kerucut dengan parameter jari menggunakan boolean', function(){
        const phi = 3.14
        const jari = true
        const tinggi = 30

        const hasil = hitungVolumeKerucut(phi, jari, tinggi)
        expect(hasil).to.equal('Parameter jari harus berupa angka')
    })

    it('Hitung Volume kerucut dengan parameter tinggi menggunakan boolean', function(){
        const phi = 3.14
        const jari = 21
        const tinggi = true

        const hasil = hitungVolumeKerucut(phi, jari, tinggi)
        expect(hasil).to.equal('Parameter tinggi harus berupa angka')
    })
})