import "../index.css";

interface SectionTitleComponentProps {
  name: string;
}
export default function SectionTitleComponent(
  props: SectionTitleComponentProps,
) {
  return (
    <>
      <span className="text-gradient text-[28px] font-bold tracking-wide">
        &lt;
        {props.name}/&gt;
      </span>
    </>
  );
}
