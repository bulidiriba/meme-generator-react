import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    
    render(){
        return(
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    
                    <input
                        type="text"
                        name='topText'
                        value={this.state.topText}
                        placeholder='top text'
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type='text'
                        name='bottomText'
                        value={this.state.bottomText}
                        placeholder='bottom text'
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>

                
            </div>
        )
    }

}

export default MemeGenerator
