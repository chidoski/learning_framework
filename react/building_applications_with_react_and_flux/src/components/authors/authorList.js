"use strict";

var React = require('react');

// No need to reference the API since data comes from the parent
// aka from the controller view

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  render: function() {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td>
            <a href={"/#authors/" + author.id}>{author.id}</a>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      );
    }

    return (
      <table className="table">
        <thead>
          <th>Id</th>
          <th>Name</th>
        </thead>

        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = AuthorList;
