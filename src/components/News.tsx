import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import News1 from "../news/News1.png";
import News2 from "../news/News2.png";
import News3 from "../news/News3.png";

interface FeatureProps {
  description: string | JSX.Element;
}

const features: FeatureProps[] = [
  {
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
  {
    description:(
      <div>
       <p>会员单位介绍</p>
       <p>蓝德国际是拥有第一批新西兰政府持牌顾问的新西兰移民和教育咨询公司。凭借资深顾问20余年的移民和教育咨询服务经验，为客户提供新西兰各类签证服务，包括商业移民、技术移民、工作签证、旅游签证、学生签证、家庭团聚、工作定居、文艺体育演出赛事、团体签证、移民上诉等等，迄今已办理和积累了大量的成功案例，成为新西兰顶尖的知名移民咨询服务机构之一。蓝德国际还拥有一支经验丰富的国际教育咨询服务团队，能够准确地向客户解读移民和国际教育政策的变化、预测行业的走向、为客户量身定做学习、工作、移民的长期计划，并提供及时的咨询和落地服务。</p>
      </div>
    ),
  },
  {
    description:(
      <div>
       <p>2025年4月21日，由Broadview Cultural and Education Foundation Incorporated大力支持与积极参与的“以球会友、增进友谊”中-新气排球交流活动在拱墅区体育中心圆满举办。本次活动特别邀请了来自新西兰的万方男子队与女子队共12名运动员，在完成海宁国际气排球邀请赛后前来杭州参加交流比赛。 很荣幸能够促成此次跨国体育文化交流盛会。赛场上，来自中新两国的运动员们全情投入、配合默契，从发球、接球、扣杀到拦网，每一个回合都扣人心弦、精彩纷呈。他们精湛的球技赢得现场观众阵阵掌声与喝彩，展现出体育交流所独有的活力与激情。此次交流不仅是一场体育竞技，更是一次文化融合的盛会。体育是连接世界的桥梁，是加深彼此理解、促进民间友好往来的重要方式。作为一个致力于推动国际文化教育交流的机构，Broadview基金会将持续支持此类有意义的跨国合作项目，搭建更多元、开放、互信的国际交流平台。整场活动在和谐、热烈的氛围中落下帷幕，衷心感谢拱墅区气排球协会的支持与协作，以及所有参赛队员和现场观众的积极参与。通过这场活动以球会友，以心连心，继续携手前行。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        <img src={News1} alt="气排球活动图1" className="rounded-lg object-cover w-full h-[250px]" />
        <img src={News3} alt="气排球活动图2" className="rounded-lg object-cover w-full h-[250px]" />
        <img src={News2} alt="气排球活动图3" className="rounded-lg object-cover w-full h-[250px]" />
      </div>

      </div>
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
        {features.map(({ description }: FeatureProps) => (
          <Card>
            <CardHeader>
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
