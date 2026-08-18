import { cn } from "@/lib/utils";

type PepperProps = {
  size?: number;
  className?: string;
};

export default function Pepper({ size = 24, className }: PepperProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M10.9999 10.9997C12.4999 7.96674 14.1019 7.15274 15.4999 7.49974C16.8979 7.84674 17.7859 8.48974 18.1779 10.1067C18.6409 12.2227 16.4349 15.0837 12.3399 18.3147C11.1339 19.2277 8.8459 20.3317 7.2899 21.0147C6.5919 21.3077 5.6949 21.0677 5.1909 20.3827C4.6879 19.6987 4.7999 18.7667 5.4379 18.1827C5.8309 17.7377 6.1909 17.4227 6.5499 17.1067C8.1849 15.6197 9.4999 14.0327 10.9999 10.9997ZM10.9999 10.9997H13.9999V12.9997H16.9999M17.1579 7.51474L18.4169 5.37974C18.8789 4.67974 18.5729 3.77274 17.8719 3.30974C17.1719 2.84774 16.2649 3.15374 15.8019 3.85474L15.7219 3.90174"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
