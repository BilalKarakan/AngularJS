class KrediBase{
    constructor(){

    }
    kaydet():void{
        console.log("Kaydedildi.")
    }

    abstract hesapla():void
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super()
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı.")
    }
}

class EmekliKredi extends KrediBase{
    constructor(){
        super()
    }
    hesapla(): void {
        console.log("Emekli kredisine göre hesap yapıldı.")
    }
}
let krediler = new TuketiciKredi();
krediler.hesapla()
krediler.kaydet()

let kredi:KrediBase
kredi = new TuketiciKredi()

kredi = new EmekliKredi()
