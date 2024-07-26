import "../index.css";

interface SectionTitleComponentProps {
  title: string;
}
export default function SectionTitleComponent(
  props: SectionTitleComponentProps,
) {
  return (
    <>
      <span className="text-gradient text-[28px] font-bold tracking-wide 2xl:text-4xl">
        &lt;
        {props.title}/&gt;
      </span>
    </>
  );
}
