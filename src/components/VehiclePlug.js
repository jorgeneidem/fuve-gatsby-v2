import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import './VehiclePlug.css';

const PostListing = ({ post }) => (
    
  <Link to={post.fields.slug} className={`vehicle fuve-mix y2020 electric`}>
    <div className="aspect-ratio-box-inside">
      <h2 className="vehicle__title">{post.frontmatter.title}</h2>
      <p className="vehicle__year">{post.frontmatter.availability}</p>
      <Img className="vehicle__artwork" style={{position:"absolute",height:"100%",width:"100%"}} sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
    </div>
  </Link>
);

export default PostListing;