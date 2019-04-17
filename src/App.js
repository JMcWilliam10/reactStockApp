import React, { Component } from 'react';
import NewsFeed from './components/newsFeed.js';
import SearchComponent from './components/searchComponent.js';
import StockChart from './components/stockChart.js';
import Hooks from './components/hooks.js'
import Footer from './components/footer.js'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  // onSelectedTickerChange = (ticker) => {
  //   console.log(ticker)
  //   this.setState({
  //     selectedTicker: ticker
  //   })
  // }

   onSelectedQuery = (search) =>{
     console.log(search)
     this.setState({
       userSearchQuery: search
     })
   }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[
          {
            data:[
              61759,
              181045,
              153060,
              106519,
              105162,
              95072, 
              84739
            ],
            backgroundColor:[
              'rgba(54, 162, 235, 0.6)',
            ]
          }
        ]
      }
    });
  }



  render() {
    return (
      <div className="App">
        <StockChart chartData={this.state.chartData} stock="Stock" />
        <SearchComponent />
        <NewsFeed />
        <Hooks />
        <Footer />
      </div>
    )
  }
}

export default App;
