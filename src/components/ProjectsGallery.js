import React from 'react';
import { Link } from 'react-router';

const GalleryItem = ({ data }) => {
  return (
    <Link to={`/projects/${data.name}?modal=true`}>
      <div className="galleryItem">
        <img src={data.imageUrl}/>
        <div className="title">{data.title}</div>
        <div className="company">{data.company}</div>
      </div>
    </Link>
  );
};

class ProjectsGallery extends React.Component{
  render() {
    return (
      <div className="projectsGallery">
        {
          this.props.projectList.map((item, index) => {
            return <GalleryItem key={index} data={item} />;
          })
        }
      </div>
    );
  }
}

export default ProjectsGallery;
