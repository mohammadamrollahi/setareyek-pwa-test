import React from "react";
import { Drawer } from "@material-tailwind/react";
import CloseIcon from "../assets/icons/CloseIcon";
import MidTick from "../assets/icons/MidTick";
import MidClose from "../assets/icons/MidClose";
import clsx from "clsx";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessFilter: boolean | undefined;
  setIsSuccessFilter: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const FilterDrawer = ({
  open,
  setOpen,
  isSuccessFilter,
  setIsSuccessFilter,
}: Props) => {
  const closeDrawer = () => setOpen(false);
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      placement="bottom"
      className="h-fit flex flex-col items-center rounded-t-[30px] pr-8 dark:bg-darkPrimary-3"
      size={190}
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
      <p className="text-center text-xs text-neutral-0 dark:text-darkPrimary-0">فیلتر‌ها</p>
      <div className="flex flex-col items-start w-full mt-4">
        <p className="text-sm dark:text-darkPrimary-0">نوع تراکنش:</p>
        <div className="flex gap-4 mt-4">
          <div
            onClick={() => setIsSuccessFilter(true)}
            className={clsx(
              isSuccessFilter ? "border-primary-1" : "border-neutral-1",
              "w-[103px] h-[40px] flex justify-center items-center border rounded-[10px] text-neutral-0 dark:text-darkPrimary-0 cursor-pointer"
            )}
          >
            <div className="bg-success-0 rounded-full p-1 ml-1">
              <MidTick />
            </div>
            موفق
          </div>
          <div
            onClick={() => setIsSuccessFilter(false)}
            className={clsx(
              isSuccessFilter===false ? "border-primary-1" : "border-neutral-1",
              "w-[103px] h-[40px] flex justify-center items-center border rounded-[10px] text-neutral-0 dark:text-darkPrimary-0 cursor-pointer"
            )}
          >
            <div className="bg-error-0 rounded-full p-1 ml-1">
              <MidClose />
            </div>
            ناموفق
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
