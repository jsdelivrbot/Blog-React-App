import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createPost } from '../actions';

class PostNew extends Component {
    renderField (field) {
        const { meta } = field;
        const className = `form-group ${meta.touched && meta.error ? "has-danger" : ""}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {(meta.touched) ? meta.error : ''}
                </div>
            </div>
        );
    }
    onSubmit (values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="contents"
                    label="Contents"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Add a Post</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        );
    }
}

function validate (values) {
    let errors = {};
    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Please enter a category';
    }
    if (!values.contents) {
        errors.contents = 'Please enter contents';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(PostNew)
);
