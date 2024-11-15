import { useState } from "react";
import LeftArrow from "../assets/icons/LeftArrow";
import { Link } from "react-router-dom";

type Props = {
  pageTitle: string;
  backLink: string;
};

const PageHeader = ({ pageTitle, backLink }: Props) => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="w-full flex justify-between py-4 px-2 items-center">
      <Link to={backLink}>
        <LeftArrow />
      </Link>
      <p className="font-bold text-primary-1 dark:text-darkPrimary-0 text-lg mr-8">
        {pageTitle}
      </p>
      <button
        onClick={darkModeHandler}
        className="text-[10px] border border-primary-1 dark:border-darkPrimary-0 rounded-xl px-4 dark:text-darkPrimary-0"
      >
        {document.body.classList.value==="dark"?"لایت مود":"دارک مود"}
      </button>
    </div>
  );
};

export default PageHeader;
