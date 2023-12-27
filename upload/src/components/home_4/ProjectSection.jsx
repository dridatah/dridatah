"use client"
import React, { useState } from 'react';
import SinglePortfolioLayoutThree from '../single/portfolio/SinglePortfolioLayoutThree';
import Link from 'next/link';

export default function ProjectSection() {
  // Action Filter Value
  const [filter, setFilter] = useState('*');

  // Filter Options
  const filterOptions = [
    { label: 'All', value: '*' },
    { label: 'Design', value: 'design' },
    { label: 'Branding', value: 'branding' },
    { label: 'Photography', value: 'photography' },
    { label: 'Video', value: 'video' },
    { label: 'Development', value: 'development' },
  ];

  // Projects
  const projects = [
    {
      id: 1,
      title: 'Makeup product Website',
      subtitle: "Website Animation",
      thumbnail: '/assets/images/home-4/project-1.jpg',
      link: '/project/details',
      categories: ['design', 'branding', 'video']
    },
    {
      id: 2,
      title: 'Makeup product Website',
      subtitle: "Website Animation",
      thumbnail: '/assets/images/home-4/project-2.jpg',
      link: '/project/details',
      categories: ['design', 'photography', 'development']
    },
    {
      id: 3,
      title: 'Makeup product Website',
      subtitle: "Website Animation",
      thumbnail: '/assets/images/home-4/project-3.jpg',
      link: '/project/details',
      categories: ['branding', 'video']
    },
    {
      id: 4,
      title: 'Makeup product Website',
      subtitle: "Website Animation",
      thumbnail: '/assets/images/home-4/project-4.jpg',
      link: '/project/details',
      categories: ['photography', 'video', 'development']
    },
    {
      id: 5,
      title: 'Makeup product Website',
      subtitle: "Website Animation",
      thumbnail: '/assets/images/home-4/project-5.jpg',
      link: '/project/details',
      categories: ['branding', 'design']
    },
    {
      id: 6,
      title: 'Makeup product Website',
      subtitle: "Website Animation",
      thumbnail: '/assets/images/home-4/project-6.jpg',
      link: '/project/details',
      categories: ['video', 'photography', 'development']
    },
  ];


  // Function Filter item
  const handleFilterClick = (event) => {
    const selectedFilter = event.target.getAttribute('data-filter');
    setFilter(selectedFilter);
  };

  // Filtered Projects
  const filteredProjects = filter === '*'
    ? projects
    : projects.filter((project) => project.categories.includes(filter));

  return (
    <section className="hm4-projects-section hm3-light-bg pb-100 overflow-hidden" id="projects">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="cr-subtitle position-relative fw-semibold primary-text-color">Latest Case Studies</span>
              <h3 className="mt-4">My Recent Projects</h3>
            </div>
          </div>
        </div>
        <div className="hm4-filter-widget mt-80">
          <div className="hm4-filter-btn-group flex-wrap">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                data-filter={option.value}
                onClick={handleFilterClick}
                className={filter === option.value ? 'active' : ''}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="row g-4 mt-60 hm4-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className={`col-xl-4 col-lg-6 ${project.categories.join(' ')}`}>
                <SinglePortfolioLayoutThree
                  subtitle={project.subtitle}
                  title={project.title}
                  thumbnail={project.thumbnail}
                  link={project.link}
                />
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/project" className="template-btn primary-btn">View All Showcase</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
