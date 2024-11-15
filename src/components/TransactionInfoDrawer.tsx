import React from "react";
import { Drawer } from "@material-tailwind/react";
import CloseIcon from "../assets/icons/CloseIcon";
import { TTransactionRecord } from "../types/transactions";
import MidTick from "../assets/icons/MidTick";
import MidClose from "../assets/icons/MidClose";
import Subtract from "../assets/otherSvg/subtract";
import clsx from "clsx";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transactionRecord: TTransactionRecord;
};

const TransactionInfoDrawer = ({ open, setOpen, transactionRecord }: Props) => {
  const closeDrawer = () => setOpen(false);
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placement="bottom"
      className={"rounded-t-[30px]"}
      size={440}
    >
      <div className="w-full flex justify-center">
        <div className="w-[60px] h-2 rounded-lg bg-neutral-1 mt-3 mb-4"></div>
      </div>
      {/** header */}
      <div className="relative px-5 pb-4">
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="absolute top-1 right-5"
        >
          <CloseIcon />
        </div>
        <div className="flex w-full justify-center h-9 items-end">
          <p className="font-bold text-lg text-neutral-0 "> جزئیات تراکنش </p>
          {transactionRecord.isSuccess ? (
            <div className="flex items-center">
              <p className="font-bold text-lg flex text-neutral-0 px-1">موفق</p>
              <div className="bg-success-0 rounded-full p-1 mr-0.5">
                <MidTick />
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <p className="font-bold text-lg flex text-neutral-0 px-1">
                ناموفق
              </p>
              <div className="bg-error-0 rounded-full p-1 mr-0.5">
                <MidClose />
              </div>
            </div>
          )}
        </div>
      </div>
      {/** */}
      {/** data */}
      <div className="w-full flex flex-col items-center ">
        <Subtract />
        <div className="w-[335px] h-[224px] bg-neutral-2 px-4 py-1">
          <div
            className={clsx(
              transactionRecord.isSuccess ? "bg-success-1" : "bg-error-1",
              "w-full h-full rounded-[15px] px-4 py-3 space-y-1"
            )}
          >
            <div className="flex justify-between">
              <p className="text-neutral-0">مبلغ تراکنش:</p>
              <p className="text-neutral-0 font-bold">
                {transactionRecord.Price.toLocaleString()}
                <span className="font-normal mr-1">ریال</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-0">سرویس تراکنش:</p>
              <p className="text-neutral-0">
                {`خرید ${transactionRecord.title}`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-0">نحوه پرداخت:</p>
              <p className="text-neutral-0">{transactionRecord.paymentType}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-0">تاریخ تراکنش:</p>
              <p className="text-neutral-0">{transactionRecord.date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-0">زمان تراکنش:</p>
              <p className="text-neutral-0">{transactionRecord.time}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-0">شماره همراه:</p>
              <p className="text-neutral-0">{transactionRecord.phoneNumber}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-neutral-0">کد پیگیری:</p>
              <p className="text-neutral-0">{transactionRecord.trackingCode}</p>
            </div>
          </div>
        </div>
        <div className="rotate-180">
          <Subtract />
        </div>
        <button className="w-[335px] bg-primary-1 rounded-[16px] text-primary-2 py-[9px] mt-10">
          اشتراک گذاری تراکنش
        </button>
      </div>
      {/** */}
    </Drawer>
  );
};

export default TransactionInfoDrawer;
