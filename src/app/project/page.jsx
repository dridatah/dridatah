import Breadcrumb from "@/components/common/Breadcrumb";
import ColorNdCursorSwitcher from "@/components/common/ColorNdCursorSwitcher";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import FooterBrands from "@/components/home_2/FooterBrands";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import ProjectsSection from "@/components/project_page/ProjectsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Infin Entities",
    subTitle:
      "Simplified Business Registration: Navigating Success with Infin Entities Intuitive Web Application",
    description:
      "Infin Entities, a company facilitating seamless business registration in India. Delve into the comprehensive array of services provided by Infin Entities, including company registration, compliance filing, and legal assistance. Discover how Infin Entities fulfils its commitment to simplifying and streamlining the business registration process, emphasizing transparent pricing devoid of hidden fees.",
    link: "project/infin",
  },
  {
    title: "Dailyrevs",
    subTitle:
      "Revamped DailyRevs Web App - Lightning-Fast Load Times, Attracting A Broader Audience and Elevating Brand Perception",
    description:
      " DailyRevs, a leading online platform for car enthusiasts, underwent a transformative upgrade with the collaboration of Dridatah Technology. Struggling with a sluggish and outdated WordPress site, DailyRevs sought a comprehensive solution for enhanced performance, user experience, and visual appeal. The partnership resulted in a cutting-edge web app crafted with Next.js, Tailwind CSS, MongoDB, and Amazon S3, ensuring optimal speed, intuitive design, and reliable content storage. The revamped DailyRevs web app now boasts lightning-fast load times, user-friendly navigation, and a modern aesthetic, attracting a broader audience and elevating brand perception.",
    link: "project/dailyrevs",
  },
  {
    title: "Amruta Designs",
    subTitle:
      "Delivering a Seamless and Secure E-Commerce Website and CMS for Amruta Designs",
    description:
      "Amruta Designs, is a renowned clothing store specializing in cotton kurtis, nightwear, and an array of stylish clothing items. With dedicated sections catering to women and children, Amruta Designs stands as a premier destination to enhance your wardrobe with timeless elegance and comfort.",
    link: "project/amruta",
  },
  {
    title: "StaffIn",
    subTitle:
      "Transformative HR Solutions: Empowering Growth with a Unified Multi-Platform HRMS",
    description:
      "StaffIn is a robust Human Resource Management System (HRMS) designed to simplify HR processes and enhance efficiency for businesses.StaffIn revolutionizes your HR experience with Effortless Payroll Management, Seamless Recruitment and Onboarding,Performance Management, Leave Management, Time and Attendance Tracking. StaffIn's user-friendly interface and mobile accessibility empower HR teams and employees, enhancing convenience and satisfaction. Investing in StaffIn means Reduced administrative burden, Improved employee experience, Enhanced data-driven decision-making. If you're looking for a modern, efficient, and user-friendly HRMS solution, StaffIn is definitely worth considering.",
    link: "project/staffin",
  },
  {
    title: "Empire Duels",
    subTitle:
      "Forged a captivating, 2D play-to-earn blockchain game where players build empires across platforms and chains, wielding NFTs and a real-time in-game exchange.",
    description:
      "Conquer empires across blockchains and platforms in this captivating 2D play-to-earn blockchain game! Wield NFTs and resources to forge your own economic destiny in a thriving in-game marketplace. Battle across two blockchains for ultimate conquest, and watch your NFTs become more than just collectibles - they're essential tools and status symbols that will fuel your rise to power. Charming pixelated perfection brings this world to life, immersing you in the empires you build. So buckle up, blockchain gamer - it's time to claim your throne!",
    link: "project/empuireduels",
  },
  {
    title: "Mavensmark",
    subTitle:
      "Web Innovation Unveiled: Web Solution for Showcasing Mavensmark's Expertise and Distinctive Value",
    description:
      "Mavensmark is a business consultancy service dedicated to fostering the growth and success of businesses. They excel in a range of services, including business advisory, management consultancy, and market research. Comprising a team of experienced professionals, Mavensmark is devoted to delivering top-notch services to ensure the success of their clients.",
    link: "project/mavensmark",
  },
  {
    title: "United Pest Control",
    subTitle:
      "United Pest Control Crawls into Online Success with a Powerful Website Launch",
    description:
      "United Pest Control provides services for homes and businesses to protect them from unwanted pests. They are licensed and experienced professionals who use safe and effective methods. They are committed to providing quality service and customer satisfaction.",
  },
  {
    title: "Vione Technologies",
    subTitle:
      "Boosted Vione Technologies’ Online Presence Through a Robust Website",
    description:
      "Vione Technologies, a software development and consulting company. They offer a variety of services, including custom software development, application development, website design, and software maintenance. They also offer BPO services. Vione Technologies has a team of experienced and qualified staff who are able to deliver high quality software development processes.",
  },
  {
    title: "Mavenstry",
    subTitle: "A Web Application To Streamline Your Business Operations",
    description:
      "Mavenstry is a business management platform that helps you start and manage your business. It takes care of business registration, filing taxes, and managing finances.Mavenstry also provides a secure platform to store your business documents. With Mavenstry, you can focus on what you do best - running your business.",
  },
];

export const metadata = {
  title: "Projects - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Projects - Dridatah Technology Pvt Ltd",
    description:
      "Dridatah is a veteran web and mobile application development company based in Kerala, India.",
    url: "https://dridatah.com",
    siteName: "Dridatah",
    images: [
      {
        url: "https://dridatah.jibi.dev/assets/images/og-meta-image.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function Project() {
  return (
    <>
      <Header layout={1} select_color="light" social_menu_color="light" />
      <Breadcrumb title={`Project Showcase`} page={`Project Showcase`} />
      {/* <ColorNdCursorSwitcher position={`left`} /> */}
      <OffCanvasBox />
      <MobileMenu />
      {/* <ProjectsSection /> */}
      <section className="project-section ptb-100">
        <div className="container">
          {projects.map((proj, index) => (
            <div className="srd-feature-box rounded-4 light-bg overflow-hidden flex-wrap flex-md-nowrap mb-5">
              <div className="row g-4">
                <div
                  class={`col-xl-5  ${index % 2 == 0 ? "order-md-last" : ""}`}
                >
                  <div className="image-wrapper p-4">
                    <Image
                      src="/assets/images/services/sr-1.jpg"
                      alt="not found"
                      className="img-fluid rounded-3"
                      width={491}
                      height={377}
                    />
                  </div>
                </div>
                <div class="col-xl-7">
                  <div className="p-4">
                    <h6 className="">{proj.title}</h6>
                    <p
                      className="fw-bold mb-3"
                      style={{
                        fontSize: "18px",
                      }}
                    >
                      {proj.subTitle}
                    </p>
                    <p className="mb-4">{proj.description}</p>
                    {proj?.link ? (
                      <Link href={proj.link} className="explore-btn">
                        <button
                          type="submit"
                          class="template-btn primary-btn mt-3"
                        >
                          See Case Study
                        </button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <FooterBrands /> */}
      <FooterTwo />
    </>
  );
}
