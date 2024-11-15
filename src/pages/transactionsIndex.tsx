import { useQuery } from "@tanstack/react-query";
import { get_transactions } from "../api/transactionsApi";
import TransactionRecord from "../components/TransactionRecord";
import PageHeader from "../components/PageHeader";
import SortFilterButtons from "../components/SortFilterButtons";
import moment from "moment-jalaali";
import { useEffect, useState } from "react";
import { TSort, TTransactionRecord } from "../types/transactions";

const TransactionsIndex = () => {
  const { data: transactionsList } = useQuery({
    queryKey: ["transactions"],
    queryFn: get_transactions,
  });
  const [sortBy, setSortBy] = useState<TSort>("date");
  const [isSuccessFilter, setIsSuccessFilter] = useState<boolean | undefined>();
  const [sortedTransactions, setSortedTransactions] = useState<
    TTransactionRecord[] | undefined
  >(transactionsList?.Data);
  useEffect(() => {
    switch (sortBy) {
      case "date":
        transactionsList
          ? setSortedTransactions(
              [...transactionsList.Data].sort((a, b) => {
                const dateTimeA = moment(
                  `${a.date} ${a.time}`,
                  "jYYYY/jMM/jDD HH:mm"
                ).valueOf();
                const dateTimeB = moment(
                  `${b.date} ${b.time}`,
                  "jYYYY/jMM/jDD HH:mm"
                ).valueOf();
                return dateTimeB - dateTimeA; // Ascending order
              })
            )
          : undefined;
        break;
      case "ascPrice":
        transactionsList
          ? setSortedTransactions(
              [...transactionsList?.Data].sort((a, b) => a.Price - b.Price)
            )
          : undefined;
        break;
      case "descPrice":
        transactionsList
          ? setSortedTransactions(
              [...transactionsList?.Data].sort((a, b) => b.Price - a.Price)
            )
          : undefined;
        break;
    }
  }, [sortBy, transactionsList]);
  useEffect(() => {
    setSortedTransactions(
      transactionsList?.Data.filter((item) => item.isSuccess === isSuccessFilter)
    );
  }, [isSuccessFilter]);

  return (
    <div className="w-full bg-primary-2 dark:bg-darkPrimary-2 ">
      <PageHeader pageTitle="تراکنش‌ها" backLink="#" />
      <div className="rounded-t-[30px] p-4 bg-primary-3 dark:bg-darkPrimary-3 flex flex-col gap-3 ">
        {sortedTransactions?.map((transactionRecord, index) => (
          <TransactionRecord
            key={index}
            transactionRecord={transactionRecord}
          />
        ))}
      </div>
      <SortFilterButtons
        sortBy={sortBy}
        setSortBy={setSortBy}
        isSuccessFilter={isSuccessFilter}
        setIsSuccessFilter={setIsSuccessFilter}
      />
    </div>
  );
};

export default TransactionsIndex;
