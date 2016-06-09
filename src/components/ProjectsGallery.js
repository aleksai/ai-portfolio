import React from 'react'

const PROJECTS = [
  {
    title: 'Social Studio',
    company: 'Salesforce',
    technology: 'Javascript, Backbone JS, HTML/CSS',
    imageUrl: ''
  },
  {
    title: 'K3 Music',
    company: 'Independent',
    technology: 'Javascript, React JS, HTML/CSS',
    imageUrl: ''
  },
  {
    title: 'Engagement Console',
    company: 'Radian6',
    technology: 'Adobe Flex, Javascript',
    imageUrl: ''
  }
];


const GalleryItem = (props) => {
  return (
    <div className="galleryItem"></div>
  );
};

class ProjectsGallery extends React.Component{
  render() {
    return (
      <div className="projectsGallery">
        {
          PROJECTS.map((item, index) => {
            return <GalleryItem key={index} data={item} />;
          })
        }
      </div>
    );
  }
}

export default ProjectsGallery;
