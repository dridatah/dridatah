import Breadcrumb from "@/components/common/Breadcrumb";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import ImprovePerformanceCTA from "@/components/home_2/ImprovePerformanceCTA";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dailyrevs - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Dailyrevs - Dridatah Technology Pvt Ltd",
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

export default function ProjectDetails() {
  return (
    <>
      <Header layout={1} select_color="light" social_menu_color="light" />
      <Breadcrumb
        title={`Dailyrevs: A Performance-Driven Web App Revamp`}
        page={`Project Dailyrevs Case Study`}
      />
      <OffCanvasBox />
      <MobileMenu />
      <section className="project-details ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature-image mb-5">
                <Image
                  src="/assets/images/banner/project-banner-lg.jpg"
                  alt="not found"
                  className="img-fluid rounded-4"
                  width={1921}
                  height={976}
                />
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="project-details-content">
                <h5 className="mb-4">Challenge</h5>
                <p className="mb-40">
                  DailyRevs, a website for car news and reviews, was struggling
                  with a slow and outdated WordPress website. They needed a
                  complete overhaul to improve their website's performance, user
                  experience (UX), and visual appeal (UI).
                </p>
                <h5 className="mb-4">Solution</h5>
                <p className="mb-40">
                  Dridatah Technology partnered with DailyRevs to develop a
                  brand new web app using Next.js, Tailwind CSS, MongoDB, and
                  Amazon S3. Next.js provided a server-side rendering framework
                  for optimal performance, while Tailwind CSS offered a rapid
                  development UI framework. MongoDB served as a flexible and
                  scalable database, and Amazon S3 provided a reliable and
                  cost-effective storage solution for the website's content.
                </p>
                <h5 className="mb-4">Results</h5>
                <p className="mb-40">
                  The new DailyRevs web app is significantly faster, more
                  user-friendly, and visually appealing than the previous
                  WordPress site. The site now loads in under 2 seconds, and
                  users can easily find the information they need. The new
                  design is also more modern and engaging, which has helped to
                  attract new visitors and improve brand perception.
                </p>

                <h5 className="mb-4">Specific achievements</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    50% reduction in page load times
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    20% increase in user engagement
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    15% increase in organic traffic
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Improved brand image and reputation
                  </li>
                </ul>

                <h5 className="mb-4">Technologies Used</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Next.js: A server-side rendering framework for optimal
                    performance
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Tailwind CSS: A rapid development UI framework
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    MongoDB: A flexible and scalable database
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Amazon S3: A reliable and cost-effective storage solution
                  </li>
                </ul>

                <div className="d-flex align-items-center gap-4 mb-40">
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/pd-1.jpg"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/pd-2.jpg"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                </div>

                <h5 className="mb-4">Conclusion</h5>
                <p className="mb-40">
                  The DailyRevs web app is a testament to Dridatah Technology's
                  expertise in developing high-performance, user-friendly, and
                  visually appealing web applications. By leveraging the latest
                  technologies and best practices, Dridatah was able to help
                  DailyRevs achieve their business goals and create a website
                  that they can be proud of.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="pd-sidebar">
                <div className="info-sidebar-widget">
                  <h6 className="mb-4">Project Information</h6>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fas fa-user"></i>
                    </span>
                    <div>
                      <span>Clients</span>
                      <h6 className="mb-0 mt-1 fs-18">Dailyrevs</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-layer-group"></i>
                    </span>
                    <div>
                      <span>Industry</span>
                      <h6 className="mb-0 mt-1 fs-18">Plublications</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <div>
                      <span>Project Duration</span>
                      <h6 className="mb-0 mt-1 fs-18">30 Days</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-globe"></i>
                    </span>
                    <div>
                      <span>Website</span>
                      <Link href="https://www.dailyrevs.com" target="_blank">
                        <h6 className="mb-0 mt-1 fs-18">
                          <small>www.dailyrevs.com</small>
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ImprovePerformanceCTA />
        </div>
      </section>
      <FooterTwo />
    </>
  );
}
