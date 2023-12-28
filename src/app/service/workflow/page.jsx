import Breadcrumb from "@/components/common/Breadcrumb";
import ColorNdCursorSwitcher from "@/components/common/ColorNdCursorSwitcher";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import ContactFormSection from "@/components/contact_page/ContactFormSection";
import ContactSection from "@/components/contact_page/ContactSection";
import FooterBrands from "@/components/home_2/FooterBrands";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import React from "react";

export const metadata = {
  title: "Crete Personal Portfolio - Contact Page",
  openGraph: {
    title: "Crete - Crete Personal Portfolio Next js Template",
  },
};

export default function Workflow() {
  return (
    <>
      <Header layout={1} select_color="light" social_menu_color="light" />
      <Breadcrumb title={`Our Workflow`} page={`Our Workflow`} />
      <OffCanvasBox />
      <MobileMenu />
      <section style={{ backgroundColor: "#F0F2F5" }}>
        <div class="container py-5">
          <div class="main-timeline">
            <div class="timeline left">
              <div class="card light-bg rounded-4 border-0">
                <div class="card-body p-4">
                  <h5>Product Design</h5>
                  <ul className="srd-feature-list mt-2">
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Transforming Ideas into Experiences: We craft user-centric
                      interfaces that elevate your startup and captivate your
                      audience.
                    </li>
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      From wireframes to prototypes, we design intuitive and
                      engaging apps and platforms that empower your users and
                      fuel your success.
                    </li>
                  </ul>
                  <p class="mb-0 mt-3">
                    <strong>
                      Result: Wireframe, Software Requirements Specification
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card light-bg rounded-4 border-0">
                <div class="card-body p-4">
                  <h5>Project Planning</h5>
                  <ul className="srd-feature-list mt-2">
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Charting your path to success: We collaborate with you to
                      define your roadmap, prioritize features, and set
                      realistic goals for a smooth launch.
                    </li>
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      No more launch day surprises: Our structured approach and
                      meticulous planning ensure your journey from concept to
                      execution is clear and confident.
                    </li>
                  </ul>

                  <p class="mb-0 mt-2">
                    <strong>
                      Result: Milestone Plan, Effort Estimation, Sprint Plan,
                      Cost Analysis
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="card light-bg rounded-4 border-0">
                <div class="card-body p-4">
                  <h5>UI Design</h5>
                  <ul className="srd-feature-list mt-2">
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Pixel-Perfect Aesthetics: We create stunning interfaces
                      that not only capture attention but also optimize the user
                      journey.
                    </li>
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      From branding to visual storytelling, we infuse your
                      digital products with personality and clarity, driving
                      impactful interactions.
                    </li>
                  </ul>

                  <p class="mb-0 mt-2">
                    <strong>
                      Result : Moodboarding, UI style guide, Digital Asset
                      Design, Hi-Fidelity UI
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card light-bg rounded-4 border-0">
                <div class="card-body p-4">
                  <h5>Development</h5>
                  <ul className="srd-feature-list mt-2">
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Building the Backbone of Innovation: We translate your
                      vision into robust and scalable software solutions,
                      powering your startup's growth.
                    </li>
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      From front-end frameworks to back-end integrations, we
                      utilize cutting-edge technologies to craft secure and
                      flexible platforms that stand the test of time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="card light-bg rounded-4 border-0">
                <div class="card-body p-4">
                  <h5>Testing</h5>
                  <ul className="srd-feature-list mt-2">
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Ensuring Perfection at Every Pixel: We meticulously test
                      your software across all platforms and devices,
                      guaranteeing a seamless and bug-free user experience.
                    </li>
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      From performance optimization to security audits, we leave
                      no stone unturned, ensuring your startup launches with
                      confidence and stays reliable.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card light-bg rounded-4 border-0">
                <div class="card-body p-4">
                  <h5>DevOps</h5>
                  <ul className="srd-feature-list mt-2">
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Streamlining Delivery and Deployment: We bridge the gap
                      between development and operations, ensuring seamless
                      updates and continuous improvement.
                    </li>
                    <li>
                      <span className="me-2">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                      Agile methodologies and automation tools keep your
                      software running smoothly, allowing you to focus on what
                      matters most - your vision.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline left">
            <div class="card light-bg rounded-4 border-0">
              <div class="card-body p-4">
                <h5>Continuous Support and Maintenance</h5>
                <ul className="srd-feature-list mt-2">
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    Your Long-Term Tech Partner: We stand by your side,
                    providing ongoing support and maintenance to keep your
                    software performing at its peak.
                  </li>
                  <li>
                    <span className="me-2">
                      <i className="fa-regular fa-circle-check"></i>
                    </span>
                    From bug fixes to feature enhancements, we offer a safety
                    net, ensuring your platform evolves alongside your growing
                    business.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  );
}
