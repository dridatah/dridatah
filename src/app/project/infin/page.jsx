import Breadcrumb from "@/components/common/Breadcrumb";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Infin Entities - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Infin Entities - Dridatah Technology Pvt Ltd",
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
        title={`Infin Entities - Streamlining Company Registration in India`}
        page={`Project Infin Case Study`}
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
                  Streamline the complex and often confusing process of company
                  registration in India.
                </p>
                <h5 className="mb-4">Solution</h5>
                <p className="mb-40">
                  Infin Entities developed a user-friendly web application that
                  guides users through the entire registration process, from
                  selecting the right business structure to filing the necessary
                  paperwork. The application also provides access to a team of
                  experienced professionals who can offer guidance and support.
                </p>
                <h5 className="mb-4">Results</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Increased efficiency: The Infin Entities web application has
                    significantly reduced the time and effort required to
                    register a company in India.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Reduced errors: The application's step-by-step guidance
                    helps users avoid common mistakes.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Improved transparency: Infin Entities provides transparent
                    pricing with no hidden fees.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Enhanced customer satisfaction: Customers appreciate the
                    ease of use and convenience of the application.
                  </li>
                </ul>

                <h5 className="mb-4">Technologies Used</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Angular (Frontend)
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    JAVA (Backend)
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    PostgreSQL (Database)
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Amazon S3 (Storage)
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

                <h5 className="mb-4">Key Takeaways</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Infin Entities demonstrates the power of technology to
                    simplify complex processes.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    The application has made it easier than ever for
                    entrepreneurs to start their businesses in India.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Infin Entities is a successful example of how a
                    well-designed web application can make a real difference in
                    the lives of its users.
                  </li>
                </ul>

                <h5 className="mb-4">Dridatah Technology's Role</h5>
                <p>
                  Dridatah Technology played a key role in the success of Infin
                  Entities' web application by:
                </p>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Understanding Infin Entities' business goals and target
                    audience.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Designing and developing a user-friendly and efficient web
                    application.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Implementing effective security measures to protect user
                    data.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Providing ongoing maintenance and support.
                  </li>
                </ul>

                <h5 className="mb-4">Conclusion</h5>
                <p className="mb-40">
                  The Infin Entities web application is a successful example of
                  Dridatah Technology's expertise in developing innovative and
                  user-friendly web applications. By streamlining the company
                  registration process in India, Infin Entities has helped
                  countless entrepreneurs turn their dreams into reality.
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
                      <h6 className="mb-0 mt-1 fs-18">Infin Entities</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-layer-group"></i>
                    </span>
                    <div>
                      <span>Industry</span>
                      <h6 className="mb-0 mt-1 fs-18">Legal Tech</h6>
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
                      <Link href="https://incorpd.mavenstry.io" target="_blank">
                        <h6 className="mb-0 mt-1 fs-18">
                          <small>www.incorpd.mavenstry.io</small>
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  );
}
