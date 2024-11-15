export type TTransactionRecord = {
  isSuccess: boolean;
  title: string;
  date: string;
  time: string;
  Price: number;
  trackingCode: string;
  paymentType: string;
  phoneNumber: string;
  shareText: string;
};
export type TSort="ascPrice" | "descPrice" | "date"
export type TSortRadioItem={
  label:string;
  value:TSort
}