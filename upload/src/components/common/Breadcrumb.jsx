import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Breadcrumb Component
 * @param {string} props.title - The title to display in the breadcrumb section.
 * @param {string} props.page - The name of the current page.
 * @param {string} [props.backgroundImg] - The URL of the background image for the breadcrumb section. Default is '/assets/images/banner/breadcrumb.jpg'.
 */
export default function Breadcrumb({
  title,
  page,
  backgroundImg = '/assets/images/banner/breadcrumb.jpg'
}) {
  return (
    <div className="breadcrumb-section position-relative z-1 overflow-hidden" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <span className="circle-shape-1 rounded-circle position-absolute"></span>
      <span className="circle-shape-2 rounded-circle position-absolute"></span>
      <span className="circle-shape-3 rounded-circle position-absolute"></span>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h1 className="text-white mb-3 display-2 fw-bold">{title}</h1>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li>{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes For The Breadcrumb Component
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string,
};
