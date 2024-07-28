import SectionTitleComponent from "../components/sectionTitle";
import image from "../assets/contactSectionImg.svg";
import FormsContactComponent from "../components/formsContact";
interface ContactProps {}

export default function Contact(_props: ContactProps) {
  return (
    <section
      id="contact"
      className="mt-20 flex w-full flex-col items-start justify-center gap-8 px-8 py-4 md:px-36"
    >
      <SectionTitleComponent title="Contact" />

      <div className="flex w-full gap-8">
        <div className="hidden flex-1 lg:flex">
          <img src={image} alt="contact" className="w-full" />
        </div>
        <div className="flex w-full flex-1">
          <FormsContactComponent />
        </div>
      </div>
    </section>
  );
}
