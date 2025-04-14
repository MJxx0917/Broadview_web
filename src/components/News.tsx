import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string | JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "News 1",
    description:
    (
      <ul className="list-disc pl-5 space-y-1">
        <p>博泰文化教育基金会简介</p>
        <p>博泰文化教育基金会（BROADVIEW CULTURAL AND EDUCATION FOUNDATION INCORPORATED）
注册于新西兰，总部位于奥克兰，致力于促进新西兰与中国之间在文化、教育、体育及旅游等领域的交流与合作。基金会的核心使命是推动双边理解与友谊，构建多元包容的社会，借助各类活动和平台建设，成为两国之间的桥梁，推动长远的国际合作与社会发展。</p>
        <br />
        <p>基金会工作重点</p>
        <p>1. 文化交流活动</p>
        <li>举办艺术展览、音乐会和文化节，增进中新两国人民对彼此文化的理解与认同。</li>
        <li>推动新西兰与中国传统文化的交流，通过互动活动实现文化的传承与创新。</li>
        <p>2. 教育合作项目</p>
        <li>搭建中新两国教育机构的合作平台，推进联合办学项目，支持师资交流和学术研讨会。</li>
        <li>提供学生交换项目、游学和夏令营活动，拓宽青年一代的国际视野和多元化学习体验。</li>
        <p>3. 体育交流与合作</p>
        <li>组织中新两国的体育赛事和训练营，促进青少年体育发展与竞技水平提升。</li>
        <li>推广体育文化，通过体育活动加深两国人民之间的友谊与合作。</li>
        <p>4. 旅游推广与合作</p>
        <li>强化中新两国的双向旅游推广，通过特色旅游线路设计与联合活动提升双方旅游品牌形象。</li>
        <li>开发生态旅游、文化旅游等主题旅游路线，促进游客之间的深度文化交流。</li>
        <p>5. 双边交流桥梁</p>
        <li>为政府、企业及个人搭建跨国合作平台，推动经济、技术及社会领域的深度合作。</li>
        <li>提供咨询与指导服务，支持两国企业和组织拓展国际合作机会。</li>
        <p>6. 公益项目支持</p>
        <li>支持社区发展项目及教育慈善活动，促进弱势群体的成长与进步。</li>
        <li>与本地组织合作，推动环保与可持续发展的公益行动。</li>
        <p>7. 信息共享与资源整合</p>
        <li>建立资源共享平台，提供有关文化、教育及经济合作的资讯和研究报告。</li>
        <li>整合各方资源，为合作项目提供一站式支持与服务，促进双边发展。</li>
      </ul>
    ),
  },
  {
    title: "News 2",
    description:
      (
       <ul className="list-disc pl-5 space-y-1">
         <p>创始成员介绍</p>
         <p>Kelly Zhou（周杨)</p>
         <p>作为博泰文化教育基金会的创始成员之一，Kelly Zhou积累了丰富的国际商务、财务管理以及跨文化合作经验，在促进新西兰与中国之间的多领域合作中取得了显著成就。</p>
         <p>商业与财务管理经验</p>
         <li>2009年，创立 NZ Business Solutions Ltd，为新西兰本地企业及中国企业在新西兰的分支机构提供专业的会计、税务及财务管理服务。</li>
         <li>2018年，加入 GPA Law律师事务所，加强了企业合规与法律咨询服务，为客户提供更全面的法律与财务支持。</li>
         <p>房地产开发与投资成就</p>
         <li>自 2020年 起，参与多个房地产开发与投资项目，包括奥克兰和汉密尔顿的住宅与商业地产项目，为双边投资合作提供坚实的基础。</li>
         <p>文化与教育交流贡献</p>
         <li>2017年，与北京旅游发展委员会签署了新西兰-奥克兰旅游推广三年协议，推动两地旅游品牌的提升。</li>
         <li>曾受 中国国务院侨务办公室 邀请回国，就读清华大学及厦门大学侨领研修班，系统学习跨文化交流理论与实践，获得结业证书。</li>
         <li>022年，注资山东华恒集团，参与青岛中铁建建设项目，支持中新两国在建筑领域的国际技术合作。</li>
         <p>国际化视野与资源整合能力</p>
         <li>通过博泰文化与教育基金会，Kelly Zhou充分发挥其国际化视野与资源整合能力，期望为中新两国在文化、教育、体育及旅游领域的互动提供更多的交流平台，推动两国在这些领域的合作共赢与共同发展。
</li>
       </ul>
      ),
  },
];

export const News = () => {
  return (
    <section
      id="news"
      className="container py-24 sm:py-32 space-y-8 text-center"
    >
      <h2 className="text-3xl text-center lg:text-4xl font-bold md:text-center">
        {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
         News 
        </span>
      </h2>


      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 justify-center">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-left pb-2" style={{ textAlign: "justify" }}>{description}</CardContent>

            <CardFooter>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
