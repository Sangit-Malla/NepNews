import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // const [author, setauthor] = useState(author)
  // const [publishedAt, setpublishedAt] = useState(publishedAt)

  const Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // document.title = `${Capitalize(props.category)} - NepNews`

  const updateNews = async () => {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=21`;
    setloading(true)
    let data = await fetch(url);
    props.setprogress(45);
    let parsedData = await data.json()
    console.log(parsedData);
    props.setprogress(75);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    // setauthor(parsedData.author),
    // setpublishedAt(parsedData.publishedAt),
    setloading(false),
    props.setprogress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

  const handlenextclick = async () => {
    setpage(page + 1)
    updateNews();

  }

  const handlepreclick = async () => {
    setpage(page - 1)
    updateNews();
  }

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=21`;
    setpage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    // setauthor(parsedData.author)
    // setpublishedAt(parsedData.publishedAt)
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">NepNews Top-Headlines on {Capitalize(props.category)}</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">
            <div className="row" >
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 55) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageurl={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/YU9tz0NtrdY/hqdefault.jpg"} url={element.url}
                    author={element.author ? element.author.slice(0, 30) : "unknown "} publishedAt={element.publishedAt ? element.publishedAt : " "} source={element.source.name ? element.source.name : " "} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* </div>
         <div className="container">
         <div className="d-flex justify-content-between my-3">
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlepreclick} className="btn btn-dark">&larr;Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 21)} onClick={this.handlenextclick} className="btn btn-dark">Next &rarr;</button>
          </div>  */}
      </div>
      
    </>
  )
}

News.defaultProps = {
  country: "in",
  PageSize: 21,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  PageSize: PropTypes.number,
  category: PropTypes.string,
}



export default News