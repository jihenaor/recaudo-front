export interface PagoResponse {
  date: string;
  currency: string;
  total: string;
  reference: string;
  status: string;
  message: string;
  authorization: string;
  cuenta: string;
  pagoregistrado: string;
}
