import React from "react";
import { Drawer, Radio } from "@material-tailwind/react";
import CloseIcon from "../assets/icons/CloseIcon";
import { TSort, TSortRadioItem } from "../types/transactions";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSortBy: React.Dispatch<React.SetStateAction<TSort>>;
};

const SortDrawer = ({ open, setOpen,setSortBy }: Props) => {
  const closeDrawer = () => setOpen(false);

  const radioItems:TSortRadioItem[] = [
    { label: "براساس زمان(تراکنش‌های جدید)", value: "date" },
    { label: "بیشترین مبلغ", value: "descPrice" },
    { label: "کمترین مبلغ", value: "ascPrice" },
  ];
  
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placement="bottom"
      className="h-fit flex flex-col items-center rounded-t-[30px] pr-8 dark:bg-darkPrimary-3"
      size={226}
    >
      <div
        onClick={() => {
          setOpen(false);
        }}
        className="absolute top-4 right-5"
      >
        <CloseIcon />
      </div>
      <div className="w-[60px] h-2 rounded-lg bg-neutral-1  mt-3 mb-4"></div>
      <p className="text-center text-xs text-neutral-0">مرتب سازی</p>
      <div className="flex flex-col items-start w-full mt-4">
        {radioItems.map((item, index) => (
          <Radio
            onChange={() => {setSortBy(item.value);setOpen(false)}}
            key={index}
            color={document.body.classList.value === "dark" ? "light-blue" : "deep-purple"}
            name={"sort"}
            labelProps={{className:"text-primary-0 dark:text-darkPrimary-0"}}
            label={item.label}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        ))}
      </div>
    </Drawer>
  );
};

export default SortDrawer;
