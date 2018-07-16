import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import './VehiclePlug.css';

const PostListing = ({ post }) => (
    
 <Link to={post.fields.slug} className={`vehicle fuve-mix y2020 electric`}>
  <Img className="vehicle__artwork" sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
  <div className="vehicle__details">
    <h2 className="vehicle__title">{post.frontmatter.title}</h2>
      <p className="vehicle__desc">
        All-electric, luxury-class sport SUV EV to be produced 2020.
      </p>
  </div>
  </Link>
);

export default PostListing;