import React, { Component } from "react";
import { connect } from 'react-redux';


class Test extends Component {

    render() {
        
        return( 
            <div style={{textAlign: 'center'}}> 
                <div>{ this.props.newsObj ? 
                    <p> 
                        { this.props.newsObj.articles[0].title } 
                    </p> : 
                    <p>
                        Loading...
                    </p>  }
                </div>     
                <div>{ this.props.weatherObj ? 
                    <p> 
                        The temperature in { this.props.weatherObj.timezone } is: {this.props.weatherObj.currently.temperature} °F
                    </p> : 
                    <p>
                        Loading...
                    </p>  }
                </div>  
                <div>{ this.props.newsObj ? 
                    <p> 
                       USD: { this.props.financeObj['USD'] }
                    </p> : 
                    <p>
                        Loading...
                    </p>  }
                </div>
                <div> { this.props.sportsObj ? 
                    <div> 
                    <p>{`${ this.props.sportsObj.home_team.city} ${ this.props.sportsObj.home_team.name}`}</p>
                    <p>{  this.props.sportsObj.home_team_score }</p>
                    </div>
                    : <p>Loading...</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsObj: state.newsObj,
        weatherObj: state.weatherObj,
        financeObj: state.financeObj,
        sportsObj: state.sportsObj
    }
}


export default connect(mapStateToProps, null)(Test);