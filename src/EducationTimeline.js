import React, { useEffect, useRef, useState } from 'react';
import './EducationTimeline.css';

const experienceData = [
  {
    title: 'Industrial Trainee',
    date: 'MAY 2024 - JUL 2024',
    institution: 'Intel Corporation',
    details: 'Developed a GPS Toll-Based System Simulation using Python. The system automatically detects vehicle entry and exit in toll zones, calculates fees based on distance or routes, and charges users without requiring them to stop.',
  },
  {
    title: 'Student Internship',
    date: '1-3 FEB 2024',
    institution: 'ARK InfoSolutions Pvt.Ltd',
    details: 'Participated in a 3-day internship program on Introduction To Unity 3D And AR conducted by ARK Infosolutions Pvt. Ltd. Chennai as part of the Industry Academic Alliance Program at Saintgits College of Engineering.',
  },
  {
    title: 'Technical Chair at Saintgits Open Source Club',
    date: 'APR 2025 - PRESENT',
    institution: 'Saintgits College of Engineering',
    details: 'As the Technical Chair and former Core Committee Member of the Open Source Club at SAINTGITS, I have been actively leading and contributing to technical initiatives, fostering open-source collaboration and innovation.',
  },
  {
    title: 'Internship',
    date: 'JUN 2025 - PRESENT',
    institution: 'Infospica',
    details: 'Contributing to a real-time web development project focused on modern full-stack technologies as part of a hands-on internship at Infospica.',
  },
];

const EducationTimeline = () => {
  const timelineRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const updated = new Set(prev);
          entries.forEach((entry) => {
            const index = Number(entry.target.dataset.index);
            if (entry.isIntersecting) updated.add(index);
            else updated.delete(index);
          });
          return updated;
        });
      },
      { threshold: 0.5 }
    );

    timelineRef.current.forEach((el) => el && observer.observe(el));
    return () => {
      timelineRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (visibleItems.size === 0) {
      setLineHeight(0);
      return;
    }

    const visibleElements = Array.from(visibleItems)
      .map((idx) => timelineRef.current[idx])
      .filter(Boolean);

    if (!visibleElements.length) {
      setLineHeight(0);
      return;
    }

    const containerTop = timelineRef.current[0].parentElement.getBoundingClientRect().top;
    const firstDotTop = visibleElements[0].querySelector('.dot').getBoundingClientRect().top;
    const lastDotBottom = visibleElements[visibleElements.length - 1].querySelector('.dot').getBoundingClientRect().bottom;

    const height = lastDotBottom - containerTop;
    setLineHeight(height);
  }, [visibleItems]);

  return (
    <section id="education-timeline">
      <h2 className="timeline-title">Experience</h2>
      <div className="timeline-container" style={{ position: 'relative' }}>
        <div
          className="vertical-line"
          style={{
            height: `${lineHeight}px`,
            transition: 'height 0.4s ease-out',
          }}
        />
        {experienceData.map((item, idx) => (
          <div
            className={`timeline-item ${visibleItems.has(idx) ? 'visible' : ''}`}
            key={idx}
            ref={(el) => (timelineRef.current[idx] = el)}
            data-index={idx}
          >
            <div className="dot" />
            <div className="content">
              <h3>{item.title}</h3>
              <span className="timeline-date">
                {item.date} | {item.institution}
              </span>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
