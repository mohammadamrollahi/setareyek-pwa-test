import axios from "axios";
import { TTransactionRecord } from "../types/transactions";
import { TGetListResponse } from "../types/globalTypes";

export const get_transactions = async (): Promise<
  TGetListResponse<TTransactionRecord>
> => {
  const res = await axios.get(
    "https://pub-api.rasamsg.info/PWATestTransactions"
  );
  return res.data;
};
