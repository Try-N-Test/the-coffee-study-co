import NotesForm from "@/components/forms/NoteForm";
import CommunityNavbar from "@/components/shared/CommunityNavbar";
import Footer from "@/components/shared/Footer";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

interface UrlProps {
  params: { id: string };
}

const Page = async ({ params }: UrlProps) => {

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  return (
    <div>
      <CommunityNavbar />
      <NotesForm communityId={params.id} userId={userInfo._id} />
      <Footer />
    </div>
  );
};

export default Page;
