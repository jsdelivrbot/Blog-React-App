import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getPosts } from '../actions';

class Posts extends Component {
    componentWillMount () {
        this.props.getPosts();
    }
    renderPosts () {
        return _.map(this.props.posts, (post) => {
            return (
                <Link className="list-group-item" to={`/post/${post.id}`}  key={post.id}>
                    {post.title}
                </Link>
            );
        });
    }
    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-success" to="/post/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { getPosts })(Posts);
