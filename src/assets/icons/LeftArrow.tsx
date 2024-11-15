const LeftArrow = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9H17"
        stroke={document.body.classList.value === "dark" ? "#fff" : "#5439AC"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 1L17 9L9 17"
        stroke={document.body.classList.value === "dark" ? "#fff" : "#5439AC"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LeftArrow;
