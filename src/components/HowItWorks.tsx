import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon, BilateralIcon, WelfareIcon, InfoIcon, TechIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Culture Exchange",
    description: (
    <>
     • Organize art exhibitions, concerts and cultural festivals to enhance mutual cultural understanding and recognition between the Kiwis and Chinese.<br />
     • Promote the exchange of traditional culture between New Zealand and China, and realize cultural inheritance and innovation through interactive activities.
    </>
    ),
  },
  {
    icon: <MapIcon />,
    title: "Educational Cooperation",
    description:(
    <>
     • Build a cooperation platform between educational institutions in China and Singapore, promote joint education projects, and support teacher exchanges and academic seminars. <br />
     • Provide student exchange programs, study tours and summer camp activities to broaden the international vision and diversified learning experience of the younger generation.
      </>
    ),
  },
  {
    icon: <PlaneIcon />,
    title: "Sports Exchange And Cooperation",
    description: (
     <>
      • Organize sports events and training camps between New Zealand and China to promote the development of youth sports and improve their competitive level.<br />
      • Promote sports culture and deepen the friendship and cooperation between the New Zealand and China through sports activities.
      </>
    ),
  },
  {
    icon: <GiftIcon />,
    title: "Tourism Promotion and Cooperation",
    description: (
    <>
     • Strengthen two-way tourism promotion between New Zealand and China, and enhance the tourism brand image of both sides through the design of special tourism routes and joint activities.<br />
     • Develop themed tourist routes such as ecotourism and cultural tourism to promote in-depth cultural exchanges among tourists.
      </>
    ),
  },
  {
    icon: <BilateralIcon />,
    title: "Bilateral Exchange",
    description: (
     <>
      • Build a cross-border cooperation platform for governments, enterprises and individuals to promote in-depth cooperation in the economic, technological and social fields.<br />
      • Provide consulting and guidance services to support enterprises and organizations of both countries in expanding international cooperation opportunities.
      </>
    ),
  },
  {
    icon: <WelfareIcon />,
    title: "Public Welfare Projects Support",
    description: (
     <>
      • Support community development projects and educational charitable activities to promote the growth and progress of disadvantaged groups.<br />
      • Cooperate with local organizations to promote public welfare actions for environmental protection and sustainable development.
      </>
    ),
  },
  {
    icon: <InfoIcon />,
    title: "Information Sharing And Resource Integration",
    description:(
    <>
     • Establish a resource sharing platform to provide information and research reports on cultural, educational and economic cooperation.<br />
     • Integrate resources from all parties, provide one-stop support and services for cooperation projects, and promote bilateral development.
      </>
    ),
  },
  {
    icon: <TechIcon />,
    title: "Technology and Innovation Cooperation",
    description:(
    <>
     • Promote exchanges and cooperation between New Zealand and China in the field of scientific and technological innovation, and promote the development of emerging fields such as artificial intelligence, green energy, and digital economy.<br />
     • Build an innovation and entrepreneurship platform to support the cooperation of young entrepreneurs, scientific and technological talents and research institutions, share technical resources, and promote the transformation of scientific research results.<br />
     • Organize technical forums, innovation competitions and entrepreneurship training.
      </>
    ),
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Foundation{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Work{" "}
        </span>
        Focus
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Explore how our foundation works
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
