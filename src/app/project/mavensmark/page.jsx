import Breadcrumb from "@/components/common/Breadcrumb";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Mavensmark - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Mavensmark - Dridatah Technology Pvt Ltd",
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
        title={`Mavensmark - Empowering Businesses through Comprehensive Consulting Solutions`}
        page={`Project Mavensmark Case Study`}
      />
      <OffCanvasBox />
      <MobileMenu />
      <section className="project-details ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature-image mb-5">
                <Image
                  src="/assets/images/projects/mavensmark_Cover.jpg"
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
                  Mavensmark needed a website that effectively showcased their
                  comprehensive range of consulting services and expertise to
                  attract new clients across India, UAE, and Qatar.
                </p>
                <h5 className="mb-4">Solution</h5>
                <p>
                  Dridatah Technology developed a modern and user-friendly
                  website built with Next JS and Tailwind that clearly
                  communicates Mavensmark's value proposition and highlights
                  their team of experienced professionals. The website features:
                </p>
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

                <h5 className="mb-4">Results</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Increased website traffic and leads: The new website has
                    resulted in a significant increase in website traffic and
                    leads from potential clients across India, UAE, and Qatar.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Improved brand awareness: The website has helped to
                    establish Mavensmark as a leading provider of consulting
                    services in their target markets.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Enhanced client satisfaction: The user-friendly website and
                    clear communication of services have led to improved client
                    satisfaction.
                  </li>
                </ul>

                <h5 className="mb-4">Technologies Used</h5>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Next.js (Frontend)
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Tailwind CSS (Style framework)
                  </li>
                </ul>

                <div className="d-flex align-items-center gap-4 mb-40">
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/mavensmark_611.png"
                      alt="feature image"
                      className="img-fluid rounded-4"
                      width={611}
                      height={526}
                    />
                  </div>
                  <div className="feature-image">
                    <Image
                      src="/assets/images/projects/mavensmark_611-1.png"
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
                    Mavensmark's website demonstrates the importance of a clear
                    and concise value proposition in attracting new clients.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    The use of case studies and testimonials can effectively
                    build trust and credibility.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    A user-friendly website with easy-to-use contact forms is
                    essential for generating leads and converting website
                    visitors into clients.
                  </li>
                </ul>

                <h5 className="mb-4">Dridatah Technology's Role</h5>
                <p>
                  Dridatah Technology played a key role in the success of
                  Mavensmark's website by:
                </p>
                <ul className="srd-feature-list mt-2 mb-40">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Understanding Mavensmark's business goals and target
                    audience.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Designing and developing a website that is both visually
                    appealing and user-friendly.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Implementing effective SEO strategies to improve website
                    traffic.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Providing ongoing website maintenance and support.
                  </li>
                </ul>

                <h5 className="mb-4">Conclusion</h5>
                <p className="mb-40">
                  The Mavensmark website is a successful example of how Dridatah
                  Technology can help businesses achieve their online marketing
                  goals. By creating a website that is both informative and
                  engaging, Dridatah Technology has helped Mavensmark attract
                  new clients and grow their business.
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
                      <h6 className="mb-0 mt-1 fs-18">Mavensmark</h6>
                    </div>
                  </div>
                  <div className="icon-box">
                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                      <i className="fa-solid fa-layer-group"></i>
                    </span>
                    <div>
                      <span>Industry</span>
                      <h6 className="mb-0 mt-1 fs-18">Business Consulting</h6>
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
                      <Link href="https://mavensmark.com" target="_blank">
                        <h6 className="mb-0 mt-1 fs-18">
                          <small>www.mavensmark.com</small>
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
