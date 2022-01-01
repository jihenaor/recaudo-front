export class PagoRequest {
    codsuscrip: string;
    idfactura: string;

    constructor(codsuscrip: string, idfactura: string) {
        this.codsuscrip = codsuscrip;
        this.idfactura = idfactura;
    }
        
}