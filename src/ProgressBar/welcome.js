import React, { Component } from 'react'
import './ProgressBar.css'
export default class Welcome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            progress : 0
        }
    }
    componentDidMount() {
        let counter = 1;
        const interval = setInterval(() => {
            counter++;
            this.setState({
                progress : counter
            })
            if(counter == 100) {
                clearInterval(interval);
            }
        }, 100);
      }
    updateProgress = (field, val) => {
        this.setState({ [field]: val });
      };
    render() {
        return (
            <div>
                Welcome Shital Beta Progress : { this.state.progress }
               {/* <div className='progress' state={{width:'400' }}> Progress : { this.state.progress }</div> */}
                {/* <button
            onClick={() =>
              this.updateProgress("progress", this.state.progress+ 0.1)
            }
          >
            Add 10%
          </button> */}
            </div>
        )
    }
}
