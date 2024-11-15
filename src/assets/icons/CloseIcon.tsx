

const CloseIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9999 21C13.3134 21 15.5554 20.1979 17.3438 18.7302C19.1323 17.2625 20.3565 15.2201 20.8078 12.951C21.2592 10.6819 20.9099 8.32651 19.8193 6.28613C18.7287 4.24574 16.9644 2.64664 14.827 1.76125C12.6895 0.87587 10.3112 0.759001 8.09728 1.43057C5.88334 2.10213 3.97074 3.52057 2.68538 5.44421C1.40002 7.36784 0.821414 9.67765 1.04816 11.9801C1.2749 14.2825 2.29297 16.4351 3.92888 18.071C5.80422 19.9464 8.34773 21 10.9999 21V21Z"
        stroke={document.body.classList.value === "dark" ? "#fff" : "#56596A"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 14L14 8"
        stroke={document.body.classList.value === "dark" ? "#fff" : "#56596A"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8L14 14"
        stroke={document.body.classList.value === "dark" ? "#fff" : "#56596A"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
