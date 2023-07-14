import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    catagory:'general'
  }
  static propTypes={
    catagory:PropTypes.string
  }
  articles= []
  constructor(){
      super();
      console.log("Hello I am a constructor from News Component");
      this.state={
        articles:this.articles,
        loading:false,
        page:1,
        totalResults:0
      }
    }
     async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b3eb89aa074f4eeda6840fbcc7481866&page=1&pageSize=20`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})  
    }
    handlePrevClick =async()=>{    
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b3eb89aa074f4eeda6840fbcc7481866&page=${this.state.page-1}&pageSize=20`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, page: this.state.page - 1,loading:false });
        
        // console.log("Next Page...");
        
        // this.setState({page:parseData.page})
    }
    handleNextClick= async()=>{
      const total= Math.ceil(this.state.totalResults / 20);
      if (this.state.page + 1 >total) {
      }
      else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b3eb89aa074f4eeda6840fbcc7481866&page=${this.state.page+1}&pageSize=20`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, page: this.state.page + 1 ,loading:false}); 
       
      }
    }
  render() {
    return (
      <div className='container my-4' >
        <h2>Top HeadLines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return   <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

