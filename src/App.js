import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NewsFeed from './Components/NewsFeed';
import answer_icon from './Components/dev_test_assets/AnswerIcon.svg';
import home_icon from './Components/dev_test_assets/home.svg';
import popular_icon from './Components/dev_test_assets/popular.svg';

class App extends Component {

  state = {
    repos:[],
    userName:'',
    userImg:''
  }

  componentDidMount(){
    this.getData();
  }

  getData = async (e) =>{

    const api_call = await fetch(`https://api.myjson.com/bins/18feih`);
    const data= await api_call.json();

    this.setState({
      repos:data.aData
    });

    this.setState({
      userName:this.state.repos[0].userName,
      userImg:this.state.repos[0].userImage,
      compName:this.state.repos[0].companyName
    });

    console.log(this.state.repos);

  }


  render() {
    return (
      <div className="App">

        <Header />
        <br></br>
        <div className="card" >
            <div className="container" >
                    
                      <div className="mobile-container">

                        <div className="topnav">
                        <a href="#home" className="active">
                        
                          <div className="widdth"> 
                              <button type="button" className=" btn btn-light" data-toggle="collapse" 
                              data-target={"#copp"}>
                                  <div className="menu"></div>
                                  <div className="menu"></div>
                                  <div className="menu"></div>
                              </button> 
                              {' '}{" "}
                              <span class="HushText"><b>HushFeed</b></span>
                          </div>

                        </a>
                          
                          <div id="copp" className="collapse">
                            <div id="myLinks" >
                              <a className="links" href="#home">
                                <img src={home_icon} />{" "}
                                Home
                              </a>
                              <a className="links" href="#popular">
                                <img src={popular_icon} />{" "}
                                Popular
                              </a>
                            </div>

                          </div>

                        </div>
                      </div>
            </div>
        </div>

        <NewsFeed repos={this.state.repos}/>

        <br></br><br></br><br></br><br></br><br></br><br></br>

      </div>
    );
  }
}

export default App;
