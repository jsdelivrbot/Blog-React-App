import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSinglePost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class SinglePost extends Component {
    componentWillMount () {
        const { id } = this.props.match.params;
        this.props.getSinglePost(id);
    }
    deletePost () {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    render () {
        const { post } = this.props;
        if (!this.props.post) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                <button className="btn btn-danger pull-xs-right" onClick={this.deletePost.bind(this)}>Delete</button>
                <h1>{post.title}</h1>
                <h6>Categories: {post.categories}</h6>
                <p>{post.title}</p>
                <Link className="btn btn-success"to="/">Back</Link>
            </div>
        );
    }
}

function mapStateToProps ({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { getSinglePost, deletePost })(SinglePost);
