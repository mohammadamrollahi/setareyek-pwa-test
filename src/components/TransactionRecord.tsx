import { TTransactionRecord } from "../types/transactions";
import clsx from "clsx";
import { useState } from "react";
import TransactionInfoDrawer from "./TransactionInfoDrawer";

type Props = { transactionRecord: TTransactionRecord };

const TransactionRecord = ({ transactionRecord }: Props) => {
  const [infoDrawerOpen, setInfoDrawerOpen] = useState(false);
  return (
    <>
      <div className="relative min-w-[335px] p-4 rounded-[15px] border border-[#D6D6D6] bg-primary-3 dark:bg-darkPrimary-3 text-neutral-0 dark:text-darkPrimary-0">
        <div
          className={clsx(
            transactionRecord.isSuccess ? "bg-success-0" : "bg-error-0",
            "w-1 h-6 rounded-tl rounded-bl  absolute top-[calc(50%-12px)] bottom-0 right-0"
          )}
        ></div>
        <div className="w-full flex justify-between border-b-2 pb-2">
          <p className="text-sm">{`خرید ${transactionRecord.title}`}</p>
          {transactionRecord.isSuccess ? (
            <p className="text-xs text-neutral-0 dark:text-darkPrimary-0 font-light">
              کد پیگیری: <span>{transactionRecord.trackingCode}</span>
            </p>
          ) : (
            <p className="font-thin text-xs text-error-0 border rounded-md border-error-0 px-2">
              ناموفق
            </p>
          )}
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-sm">
            {transactionRecord.Price.toLocaleString()}
            <span className="font-light mr-1">تومان</span>
          </p>
          <div className="flex items-center gap-1 ">
            <p className=" font-light">
              {transactionRecord.date}
              <span className="ml-1">{transactionRecord.time}</span>
            </p>
            <button
              onClick={() => setInfoDrawerOpen(!infoDrawerOpen)}
              className="text-sm  border border-primary-0 dark:border-darkPrimary-0 rounded-3xl bg-transparent px-7 py-[2px]"
            >
              جزيیات
            </button>
          </div>
        </div>
      </div>
      <TransactionInfoDrawer
        open={infoDrawerOpen}
        setOpen={setInfoDrawerOpen}
        transactionRecord={transactionRecord}
      />
    </>
  );
};

export default TransactionRecord;
