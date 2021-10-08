
import React, { Component } from 'react';

export class CommentBox extends Component {
    state = { comment: ''};

    handleChange = (event) => {
      this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        // call an action and save the comment
        
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}