import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
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
                        onChange={}
                    />
                    <input 
                        type='text'
                        name='bottomText'
                        value={this.state.bottomText}
                        placeholder='bottom text'
                        onChange={}
                    />
                    <button>Gen</button>
                </form>

                
            </div>
        )
    }

}

export default MemeGenerator
