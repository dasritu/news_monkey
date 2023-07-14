import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log()
  // }
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card">
          <img src={!imgUrl?"https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg":imgUrl} className="card-img-top" alt="..." style={{width:"100%",height:"14rem"}}/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} className="btn btn-primary">Read More</a>
            </div>

        </div>
      </div>
    )
  }
}

export default NewsItem
