class BinController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputBin = $('#bin');
        this._buttonConvert = $('#convert');
        this._inputDec = $('#dec');

        this._inputDec.disabled = true;
        this._buttonConvert.onclick = (event)=>{this.convert(event)};
    }

    convert(event){
       event.preventDefault();

       let binariesNumbers = this._inputBin.value.split('').map((a)=>parseInt(a));
       console.log(binariesNumbers);
       this._inputDec.value = this._convertsBinToDecimal(binariesNumbers);       
        
    }
    _convertsBinToDecimal(binaries){
        let decimal = 0;
         binaries.forEach((bin,index) => {
            if(bin % 1 === 0) decimal += (Math.pow(2,index))
        });
       
        return decimal;
    }
   
}
