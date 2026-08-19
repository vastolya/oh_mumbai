import { cn } from "@/lib/utils";

type AcornProps = {
  size?: number;
  className?: string;
};

export default function Acorn({ size = 24, className }: AcornProps) {
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
        d="M18 10L17.55 14.1C17.3835 15.6 16.814 17.027 15.902 18.2295C14.99 19.4319 13.7695 20.3651 12.37 20.93C12.1324 21.0246 11.8676 21.0246 11.63 20.93C10.2305 20.3651 9.00997 19.4319 8.09798 18.2295C7.18598 17.027 6.61651 15.6 6.45 14.1L6 10M18 10C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9C19 8.20435 18.6839 7.44129 18.1213 6.87868C17.5587 6.31607 16.7957 6 16 6H8C7.20435 6 6.44129 6.31607 5.87868 6.87868C5.31607 7.44129 5 8.20435 5 9C5 9.26522 5.10536 9.51957 5.29289 9.70711C5.48043 9.89464 5.73478 10 6 10M18 10H6M13 3C12.3443 3.862 11.9926 4.91697 12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
