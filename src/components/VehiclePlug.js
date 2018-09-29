import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import './VehiclePlug.css';

const PostListing = ({ post }) => (
    
  <Link to={post.fields.slug} className={`vehicle`} >
    <div className="ratio__content">
      <Img style={{height:"100%",zIndex:"0"}} sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
      <h2 className="vehicle__title">{post.frontmatter.title}</h2>
      <p className="vehicle__year">{post.frontmatter.availability}</p>    
    </div>
  </Link>
);

export default PostListing;