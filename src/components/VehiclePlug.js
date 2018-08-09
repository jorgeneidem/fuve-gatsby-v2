import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import './VehiclePlug.css';

const PostListing = ({ post }) => (
    
  <Link to={post.fields.slug} className={`vehicle fuve-mix y2020 electric`}>
  <h2 className="vehicle__title">{post.frontmatter.title}</h2>
  <p className="vehicle__year">2020</p>
  <Img className="vehicle__artwork" sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
  </Link>
);

export default PostListing;