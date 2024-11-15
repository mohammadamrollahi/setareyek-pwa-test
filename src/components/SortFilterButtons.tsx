import { useState } from "react";
import Filter from "../assets/icons/Filter";
import Sort from "../assets/icons/Sort";
import SortDrawer from "./SortDrawer";
import FilterDrawer from "./FilterDrawer";
import { TSort } from "../types/transactions";

type Props = {
  sortBy: TSort;
  setSortBy: React.Dispatch<React.SetStateAction<TSort>>;
  isSuccessFilter: boolean | undefined;
  setIsSuccessFilter: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const SortFilterButtons = ({
  setSortBy,
  isSuccessFilter,
  setIsSuccessFilter,
}: Props) => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortDrawerOpen, setSortDrawerOpen] = useState(false);

  return (
    <>
      <div className="h-14 bg-primary-3"></div>
      <div className="w-full flex justify-between fixed bottom-0 py-4 px-9 rounded-t-[30px] bg-primary-2 dark:bg-darkPrimary-2">
        <div
          onClick={() => setFilterDrawerOpen(true)}
          className="flex gap-1 w-1/2 justify-center cursor-pointer"
        >
          <Filter />
          <p className="font-thin text-sm text-neutral-0 dark:text-darkPrimary-0">فیلتر</p>
        </div>
        <div
          onClick={() => setSortDrawerOpen(true)}
          className="flex gap-1 w-1/2 justify-center cursor-pointer border-r"
        >
          <Sort />
          <p className="font-thin text-sm text-neutral-0 dark:text-darkPrimary-0">مرتب سازی</p>
        </div>
      </div>
      <SortDrawer
        open={sortDrawerOpen}
        setOpen={setSortDrawerOpen}
        setSortBy={setSortBy}
      />
      <FilterDrawer
        open={filterDrawerOpen}
        setOpen={setFilterDrawerOpen}
        isSuccessFilter={isSuccessFilter}
        setIsSuccessFilter={setIsSuccessFilter}
      />
    </>
  );
};

export default SortFilterButtons;
