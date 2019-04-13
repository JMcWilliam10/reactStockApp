import React, { Component } from "react";
import Axios from "axios";

class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        news: []
        };
    }

    renderEmptyState(){
        return(
            <div>
                <p>Loading News...</p>
            </div>
        )
    }

    renderNews(){
        const newsList = this.state.news.map((story) => {
        return(  
            <div className="flexCard">
                <img alt="" src={story.urlToImage}/>
                <h2>{story.title}</h2>
            </div>
            )
        });
    return(
      <div className="flexWrap">{newsList}</div>
    )
}

  async getNews(newsQuery) {
    try {
      const newsStories = await Axios.get("https://newsapi.org/v2/everything", {
        headers: { 'Authorization' : `Bearer ccdad157151647f9a27caa79bcbb7c42`  },
        params: {
          q: newsQuery,
          sources: "bloomberg, business-insider"
        }
      });
      console.log(newsStories)
      this.setState({
        news: newsStories.data.articles
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount(){
    this.getNews('apple')
}

  render(){
    return(
        <div>
            {this.state.news.length ? this.renderNews() : this.renderEmptyState()}
        </div>
       
        
    )
}
}

//   getNews = newsQuery => {
//     $.ajax({
//       url: "https://newsapi.org/v2/everything",
//       method: "GET",
//       dataType: "json",
//       data: {
//         apikey: "ccdad157151647f9a27caa79bcbb7c42",
//         q: newsQuery,
//         sources: "bloomberg, business-insider"
//       }
//     }).then(result => {
//       console.log(result);
//       app.displayNews(result.articles);
//     });
//   };
//   displayNews = newsList => {
//     console.log(newsList[0]);
//     $("aside").empty();
//     newsList.forEach(newsItem => {
//       console.log(newsItem);
//       console.log(newsItem.urlToImage);
//       if (newsItem.urlToImage != null) {
//         const newsHTML = `
//             <div class="flexCard">
//                 <img src=${newsItem.urlToImage}>  
//                 <h2>${newsItem.title}</h2>
//             </div>            
//             `;
//         $("aside").append(newsHTML);
//       }
//     });
//   }; //end of display news function

export default NewsFeed;