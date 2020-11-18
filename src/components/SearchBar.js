import React from 'react';

class SearchBar extends React.Component{
    state={
        user_input:''
    }
    onChange=(e)=>{
        this.setState({user_input:e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.grab_data(this.state.user_input);
        this.setState({user_input:''});
    }
    render(){
        return(
            <div>
                <h1>Search Bar</h1>
                <form onSubmit={this.onSubmit}>
                    <input 
                        value={this.state.user_input}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar