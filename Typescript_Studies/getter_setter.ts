class People{
    private _isim : string

    get isim() : string {
        return "Sayın " + this._isim;
    }
    set isim(ad:string){
        this._isim = ad;
    }
}

let people = new People()
people.isim = "Bilal"
console.log(people.isim)