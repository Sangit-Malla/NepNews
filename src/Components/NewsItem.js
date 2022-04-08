
import React from 'react'

const NewsItem = (props)=> {
    let { title, description, imageurl, url,author,publishedAt, source } = props;
    return (
      <div className="container my-3 ">
        <>
          <div className="card" >
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">{source},{author}</small></p>
              <p className="card-text"><small className="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
              <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </>
      </div>
    )
}

export default NewsItem