class BinController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputBin = $('#bin');
        this._buttonConvert = $('#convert');
        this._inputDec = $('#dec');

        this._disabledInput(this._inputDec);

        this._inputBin.oninput = () =>{this._validadeInput(this._inputBin.value,/^[0-1.]+$/);}
        this._buttonConvert.onclick = (event) => { this.convert(event) };
    }

    convert(event) {
        event.preventDefault();
        let binariesNumbers = this._inputBin.value.split('').map((a) => parseInt(a)).reverse();
        console.log(binariesNumbers);
        this._inputDec.value = this._convertsBinToDecimal(binariesNumbers);

    }
    _convertsBinToDecimal(binaries) {
        let decimal = 0;
        binaries.forEach((bin, index) => {
            if (bin === 1) decimal += (Math.pow(2, index))
        });
        
        return decimal;
    }
    _validadeInput(input,exp) {
        if(exp.exec(input) === null){
            console.log(input)
            this._inputBin.value = input.slice(0, -1);
        }
    }
    _disabledInput(input){
        input.disabled = true;
    }
}
