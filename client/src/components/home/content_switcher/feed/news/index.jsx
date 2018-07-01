import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import moment from 'moment';

import './news.sass';
// enable in development
// import data from './news.json';

const key = process.env.NEWS_API_KEY;

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: data.articles,
      articles: []
    };
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    // enable in production
    this.fetchArticles();
  }

  fetchArticles() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&pagesize=5&apiKey=' + key)
    .then(articles => {
      this.setState({
        articles: articles.data.articles,
      });
    })
    .catch(err=> {
      console.log('failed to fetch news data', err);
    });
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      draggable: false,
      fade: true,
      lazyLoad: 'ondemand'
    };

    if (this.state.articles) {
      return (
        <div className="news__feed">
          <Slider {...settings}>
            {
              this.state.articles.map(article => (
                <div className="article" key={article.url}>
                  <a href={article.url}>
                    <img src={article.urlToImage?article.urlToImage:'/assets/no-image.jpg'} alt="" />
                  </a>

                  <div className="article__details">
                    <p id="createdAt">{moment(article.publishedAt).format('dddd, MMMM Do')} - {article.source.name}</p>
                    <p id="title">{article.title.length > 75 ? article.title.slice(0,75) + '...' : article.title}</p>
                    <p id="details">{article.description ? article.description.slice(0,75) + '...' : ''}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      );
    } else {
      return (
        <div className="news__feed">
          <h5>loading articles...</h5>
        </div>
      );
    }
  }
}

export default News;