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
    name: "Kelly Zhou",
    position: "The founder of Broadview Foindation",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export const Team = () => {

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Founder{" "}
        </span>
        Introduction
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      </p>

      <div className="min-h-screen flex justify-center items-center">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
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

              <CardContent className="text-left pb-2">
                <p>As one of the founding members of the Broadview Cultural and Educational Foundation, Kelly Zhou has accumulated rich experience in international business, financial management and cross-cultural cooperation, and has made remarkable achievements in promoting multi-field cooperation between New Zealand and China.
                  <br />
                  Business and financial management experience:
                  <br />
                  <ul>
                    <li>• In 2009, she founded NZ Business Solutions Ltd to provide professional accounting, taxation and financial management services to local New Zealand companies and branches of Chinese companies in New Zealand.</li>
                    <li>
                     • In 2018, she joined GPA Law, strengthening corporate compliance and legal consulting services and providing clients with more comprehensive legal and financial support.
                    </li>
                  </ul>
                  <br />
                  Real estate development and investment achievements:
                  <ul>
                    <li>• Since 2020, it has participated in multiple real estate development and investment projects, including residential and commercial real estate projects in Auckland and Hamilton, providing a solid foundation for bilateral investment cooperation.</li>
                  </ul>
                  <br />
                  The contricution of culture and education:
                  <ul>
                    <li>• In 2017, a three-year agreement on New Zealand-Auckland tourism promotion was signed with the Beijing Tourism Development Committee to promote the tourism brands of the two places.</li>
                    <li>• She was invited by the Overseas Chinese Affairs Office of the State Council of China to return to China to study at the Overseas Chinese Leaders Training Program of Tsinghua University and Xiamen University, where he systematically studied the theory and practice of cross-cultural communication and obtained a completion certificate.</li>
                    <li>• In 2022, it will inject capital into Shandong Huaheng Group, participate in the China Railway Construction Qingdao construction project, and support international technological cooperation between New Zealand and China in the field of construction.</li>
                  </ul>
                  <br />
                  International vision and resource integration capabilities:
                  <ul>
                    <li>• Through the Broadview Culture and Education Foundation, Kelly Zhou will give full play to her international vision and resource integration capabilities, hoping to provide more communication platforms for the interaction between China and Singapore in the fields of culture, education, sports and tourism, and promote win-win cooperation and common development between the two countries in these fields.</li>
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
