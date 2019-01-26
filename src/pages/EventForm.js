import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getValues, getCategories } from '../store/form/selectors';
import { updateFieldValue } from '../store/form/actions';
import { callAPI } from '../store/api/actions';
import api from '../api';

const Title = styled.h2`
  font-size: 16px;
`;

const Section = styled.section`
  border: 1px solid #01010f;
`;

class EventForm extends React.Component {
  componentDidMount() {
    this.props.callAPI(api.methods.CATEGORIES_GET);
    this.props.callAPI(api.methods.RESPONSIBLES_GET);
    this.props.callAPI(api.methods.DUPLICATED_TITLES_GET);
  }

  onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.props.updateFieldValue(name, value);
  };

  render() {
    const { values, categories } = this.props;
    console.log(categories);
    return (
      <div>
        <Section>
          <Title>About</Title>
          <div>
            <label htmlFor="title">Title*</label>
            <input
              id="title"
              name="title"
              value={values.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description*</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select id="category" name="category_id" onChange={this.onChange}>
              <option value="">Select category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </Section>
      </div>
    );
  }
}

EventForm.propTypes = {
  categories: PropTypes.array,
};

EventForm.defaultProps = {
  categories: [],
};

const mapStateToProps = state => ({
  values: getValues(state),
  categories: getCategories(state),
});

const mapDispatchToProps = {
  updateFieldValue,
  callAPI,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);
