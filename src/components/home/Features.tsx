import { FaFilePen, FaFileVideo } from "react-icons/fa6";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { FaBookOpen } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Features = () => {
  return (
    <section id="features" className="grid grid-cols-12 gap-8 px-24 py-36">
      <div className="col-span-6">
        <h2 className="font-secondary text-5xl font-semibold">
          Level up your <span className="text-primary-6">learning journey</span>{" "}
          with features that empower you
        </h2>
      </div>

      <div className="col-span-12 mt-8 grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <Card className="group hover:bg-primary-9 transition ease-in-out hover:cursor-pointer h-48">
            <CardTitle className="items-center">
              <FaBookOpen size={48} className="group-hover:text-secondary-6" />
            </CardTitle>
            <CardContent className="group-hover:text-primary-1 pt-3 text-center text-base">
              Beyond textbooks, beyond lectures. Share your notes, build a
              learning community.
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="group hover:bg-primary-9 transition ease-in-out hover:cursor-pointer h-48">
            <CardTitle className="items-center">
              <FaFileVideo size={48} className="group-hover:text-secondary-6" />
            </CardTitle>
            <CardContent className="group-hover:text-primary-1 pt-3 text-center text-base">
              Let your creativity shine. Upload your videos, build an audience.
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="group hover:bg-primary-9 transition ease-in-out hover:cursor-pointer h-48">
            <CardTitle className="items-center">
              <IoChatbubbleEllipses size={48} className="group-hover:text-secondary-6" />
            </CardTitle>
            <CardContent className="group-hover:text-primary-1 pt-3 text-center text-base">
              Find chat rooms for every interest and start conversations today!
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="group hover:bg-primary-9 transition ease-in-out hover:cursor-pointer h-48">
            <CardTitle className="items-center">
              <FaFilePen size={48} className="group-hover:text-secondary-6" />
            </CardTitle>
            <CardContent className="group-hover:text-primary-1 pt-3 text-center text-base">
              Dive deeper, explore further. Share your articles, expand the
              conversation.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
