import NotesForm from "@/components/forms/NoteForm";
import CommunityNavbar from "@/components/shared/CommunityNavbar";
import Footer from "@/components/shared/Footer";

const Page = () => {
  return (
    <div>
      <CommunityNavbar />
      <NotesForm />
      <Footer />
    </div>
  );
};

export default Page;
