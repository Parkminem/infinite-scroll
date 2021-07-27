import React, { Component } from "react";

class InfiniteScrollList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loding...</div>;
    } else {
      return (
        <div className="InfiniteScroll">
          <ul className="profile">
            {items.map(item => (
              <ul key={item.id}>
                <li className="commentId">Comment Id {item.id}</li>
                <li className="email">Email {item.email}</li>
                <li className="comment">Comment {item.body}</li>
              </ul>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default InfiniteScrollList;
