import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";

const Features = () => {
  return (
    <section className="grid grid-cols-12 gap-8 px-24 py-16">
      <div className="col-span-6">
        <h2 className="font-secondary text-5xl font-semibold">
          Level up your <span className="text-primary-6">learning journey</span>{" "}
          with features that empower you
        </h2>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card>
            <CardTitle>
              Community
            </CardTitle>
            <CardContent>
                Join a community of learners and educators who are passionate
                about learning
                </CardContent>

          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardTitle>
              Community
            </CardTitle>
            <CardContent>
                Join a community of learners and educators who are passionate
                about learning
                </CardContent>

          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardTitle>
              Community
            </CardTitle>
            <CardContent>
                Join a community of learners and educators who are passionate
                about learning
                </CardContent>

          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <CardTitle>
              Community
            </CardTitle>
            <CardContent>
                Join a community of learners and educators who are passionate
                about learning
                </CardContent>

          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default Features;
