import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Kelly Zhou (Yang Zhou)",
    position: "The founder of Broadview Foindation",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.broadview.org.nz",
      },
      {
        name: "Facebook",
        url: "https://www.broadview.org.nz",
      },
      {
        name: "Instagram",
        url: "https://www.broadview.org.nz",
      },
    ],
  },
];

export const About = () => {

  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl text-center md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          About{" "}
        </span>
        Us 
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      </p>

      <div className="min-h-screen flex justify-center items-center">
        {teamList.map(
          ({ name, position }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center w-full max-w-5xl"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-left pb-2" style={{ textAlign: "justify" }}>
                <p>As one of the founding members of the BROADVIEW CULTURAL AND EDUCATION FOUNDATION INCORPORATED, Kelly Zhou has accumulated extensive experience in international business, financial management, and cross-cultural cooperation. She has achieved significant accomplishments in promoting multi-sector cooperation between New Zealand and China.<br />
                  <br />
                  Business and Financial Management Experience:
                  <br />
                  <ul className="list-disc pl-6">
                    <li>In 2009, founded NZ Business Solutions Ltd, providing professional accounting, taxation, and financial management services to local New Zealand businesses and the New Zealand branches of Chinese enterprises.
                    </li>
                    <li>
                     In 2018, joined GPA Legal, strengthening its corporate compliance and legal advisory services, offering clients more comprehensive legal and financial support. 
                    </li>
                  </ul>
                  <br />
                  Real Estate Development and Investment Achievements:
                  <ul className="list-disc pl-6">
                    <li>
                     Since 2020, has participated in multiple real estate development and investment projects, including residential and commercial property projects in Auckland and Hamilton, providing a solid foundation for bilateral investment cooperation.
                    </li>
                  </ul>
                  <br />
                  Contricution of Culture and Education:
                  <ul className="list-disc pl-6">
                    <li>
                     In 2017, signed a three-year agreement with the Beijing Municipal Commission of Tourism Development to promote New Zealand-Auckland tourism, enhancing the tourism brands of both locations.
                    </li>
                    <li>
                     Previously invited by the Overseas Chinese Affairs Office of the State Council of China to return to China, attending leadership workshops for overseas Chinese leaders at Tsinghua University and Xiamen University, systematically studying cross-cultural communication theory and practice, and receiving completion certificates.
                    </li>
                    <li>
                     In 2022, invested in Shandong Huaheng Group, participating in the China Railway Construction Corporation (CRCC) construction project in Qingdao, supporting international technical cooperation between China and New Zealand in the construction sector.
                    </li>
                  </ul>
                  <br />
                  International Vision and Resource Integration Capabilities:
                  <ul className="list-disc pl-6">
                    <li>
                    Through the BROADVIEW CULTURAL AND EDUCATION FOUNDATION INCORPORATED, Kelly Zhou fully leverages her international perspective and resource integration capabilities, aiming to provide more platforms for interaction between China and New Zealand in the fields of culture, education, sports, and tourism, promoting win-win cooperation and mutual development between the two countries in these areas.
                    </li>
                  </ul>
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
