import SocialMediaIcons from "./socialMediaIcons";

interface FooterProps {}
export default function Footer(_props: FooterProps) {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-between gap-3 px-8 py-3 sm:flex-row md:px-12">
      <SocialMediaIcons />
      <span className="text-sm font-medium text-zinc-500">
        © 2024 All rights reserved
      </span>
    </div>
  );
}
