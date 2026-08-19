import { cn } from "@/lib/utils";

type TelegramProps = {
  href: string;
  label?: string;
  size?: number;
  fill?: string;
  hoverFill?: string;
  className?: string;
};

const transition = "transition-[fill] duration-300 ease-out";

export default function Telegram({
  href,
  label = "Telegram",
  size = 48,
  fill = "#ffffff",
  hoverFill = "#229ED9",
  className,
}: TelegramProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      style={
        { "--icon": fill, "--icon-hover": hoverFill } as React.CSSProperties
      }
      className={cn("group inline-flex shrink-0", className)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        focusable="false"
      >
        <path
          d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
          className={cn(
            transition,
            "fill-(--icon) group-hover:fill-(--icon-hover)",
          )}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0426 23.4238C21.125 21.6458 23.8466 20.4726 25.2074 19.907C29.0966 18.2886 29.903 18.0086 30.4294 18.0002C30.5442 17.9974 30.8046 18.0282 30.9726 18.1626C31.1154 18.2774 31.1546 18.4314 31.1714 18.5406C31.1882 18.6498 31.2134 18.899 31.1938 19.0922C30.9838 21.307 30.071 26.6774 29.609 29.1582C29.413 30.2082 29.0266 30.5582 28.6514 30.5946C27.8394 30.6702 27.2206 30.057 26.4338 29.5418C25.2018 28.7354 24.5046 28.2314 23.309 27.4418C21.9258 26.5318 22.8218 26.0306 23.6114 25.213C23.8186 25.0002 27.3998 21.741 27.4698 21.4442C27.4782 21.4078 27.4866 21.2706 27.4054 21.1978C27.3242 21.125 27.2038 21.1502 27.1142 21.1698C26.991 21.1978 25.0226 22.4998 21.209 25.073C20.649 25.4566 20.145 25.6442 19.6914 25.633C19.1902 25.6218 18.2298 25.3502 17.5158 25.1178C16.6394 24.8322 15.9422 24.681 16.0038 24.1994C16.0346 23.9446 16.3818 23.687 17.0426 23.4238Z"
          className={cn(transition, "fill-green group-hover:fill-white")}
        />
      </svg>
    </a>
  );
}
