export interface Status {
  status: string;
  reason: string;
  message: string;
  date: string;
}

export interface ClientEvertecResponse {
  status: Status;
  requestId: number;
  processUrl: string;
  actualizado: string;
}
