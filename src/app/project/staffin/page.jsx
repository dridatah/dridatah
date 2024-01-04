import Breadcrumb from "@/components/common/Breadcrumb";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import CustomAppCTA from "@/components/home_2/CustomAppCTA";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Staffin - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Staffin - Dridatah Technology Pvt Ltd",
    description:
      "Dridatah partners with ambitious startups to transform your innovative ideas into reality through custom-built software solutions. Don't let your brilliant concepts stay on the whiteboard.",
    url: "https://dridatah.com",
    siteName: "Dridatah",
    images: [
      {
        url: "https://dridatah.com/assets/images/og-meta-image.png",
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
        title={`StaffIn: Streamlining HR with a Multi-Platform App`}
        page={`Project StaffIn Case Study`}
      />
      <OffCanvasBox />
      <MobileMenu />
      <section className="project-details ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature-image mb-5">
                <Image
                  src="/assets/images/projects/1921_hrms_option.png"
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
                  Our client sought a modern and efficient HRMS solution to
                  manage their growing workforce. They needed a system
                  accessible across web, Android, and iOS devices, offering
                  comprehensive features and a user-friendly interface.
                </p>

                <h5 className="mb-4">Solution</h5>
                <p>
                  Dridatah Technology rose to the challenge, crafting StaffIn -
                  a multi-platform HRMS application built with robust technology
                  and intuitive design:
                </p>
                <p>
                  <strong>React Native:</strong> Forged a unified codebase for
                  Android and iOS apps, ensuring faster development and
                  consistent user experience.
                </p>
                <p>
                  <strong>Next JS:</strong> Leveraged server-side rendering on
                  the web app for optimal performance and SEO.
                </p>
                <p>
                  <strong>Tailwind CSS:</strong> Rapidly developed responsive
                  and visually appealing interfaces across all platforms.
                </p>
                <p>
                  <strong>PostgreSQL:</strong> Built a powerful and scalable
                  database to handle employee data, leave management, payroll,
                  and more.
                </p>
                <p>
                  <strong>Python:</strong> Developed backend processes for
                  automated tasks and data integrations.
                </p>
                <p className="mb-40">
                  <strong>Amazon S3:</strong> Secured robust and cost-effective
                  cloud storage for sensitive employee data.
                </p>

                <h5 className="mb-4">Results</h5>
                <p>
                  StaffIn transformed the client's HR operations, delivering
                  tangible results:
                </p>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Increased Employee Engagement: Intuitive and accessible app
                    empowers employees to easily manage leave requests, view
                    payslips, and access company information.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Improved Operational Efficiency: Streamlined workflows from
                    onboarding to payroll, saving HR teams time and resources.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Enhanced Data Security: Secure cloud storage and access
                    controls safeguard sensitive employee data.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Scalability for Future Growth: Robust architecture provides
                    the flexibility to accommodate the client's expanding
                    workforce.
                  </li>
                </ul>

                <h5 className="mb-4">Technologies Used</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    React Native
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Next.js
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Tailwind CSS
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    PostgreSQL
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Python
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
                      src="/assets/images/projects/hrms_611.png"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/hrms_611-2.png"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                </div>

                <h5 className="mb-4">Conclusion</h5>
                <p className="mb-40">
                  StaffIn exemplifies Dridatah's expertise in crafting custom
                  HRMS solutions that empower businesses and their employees. By
                  employing a dynamic tech stack and user-centric design,
                  Dridatah delivers practical solutions that drive
                  organisational success.
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
          <CustomAppCTA />
        </div>
      </section>
      <FooterTwo />
    </>
  );
}
