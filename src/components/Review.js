import React, { Component } from "react";
import axios from "axios";
class Review extends Component {
  state = {
    reviewerName: "",
    rating: null,
    topic: "",
    description: "",
    reviews: [],
    isFormInvalid: false,
  };

  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleReviewerName = (event) => {
    this.setState({ reviewerName: event.target.value });
  };

  handleTopic = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleRating = (event) => {
    this.setState({ rating: event.target.value });
  };

  getAllReviews = () => {
    fetch(`http://localhost:8080/review/fetchAllReviews/${this.props.productId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: data }));
  };

  postReview = () => {
    if (this.state.rating <= 0 || this.state.rating >= 5) {
      window.alert("The rating should be between 0 and 5.");
    } else if (
      this.state.description === "" ||
      this.state.rating === null ||
      this.state.reviewerName === "" ||
      this.state.topic === ""
    ) {
      this.setState({ isFormInvalid: true });
    } else {
      axios.post(`http://localhost:8080/review/createReview/${this.props.productId}`, {
        reviewerName: this.state.reviewerName,
        rating: this.state.rating,
        topic: this.state.topic,
        description: this.state.description,
      });

      window.alert("Review Posted....");
      this.setState({ isFormInvalid: false });
      window.location.reload(false);
    }
  };

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    const {
      reviewerName,
      rating,
      topic,
      description,
      reviews,
      isFormInvalid,
    } = this.state;

    return (
      <div className="reviews">
        <h2 className="mt-5 text-center ">Reviews</h2>

        <div className="container-review">
          <span className="badge badge-primary">Post Review </span>
          <div className="post-review">
            <form>
              <input
                type="text"
                value={reviewerName}
                onChange={this.handleReviewerName}
                placeholder="Reviewer Name..."
                required
              />
              <br />

              <input
                type="number"
                value={rating}
                onChange={this.handleRating}
                placeholder="Enter Rating..."
                required
              />
              <br />

              <input
                type="text"
                value={topic}
                onChange={this.handleTopic}
                placeholder="Enter Topic..."
                required
              />

              <br />

              <textarea
                value={description}
                onChange={this.handleDescription}
                rows="2"
                cols="50"
                placeholder="Enter Description..."
                required
              />

              <input
                type="button"
                value="Post"
                className="btm btn-success"
                onClick={this.postReview}
              />
            </form>
            {isFormInvalid ? "One or more empty fields.." : null}
          </div>

          {reviews.length !== 0 ? (
            <span className="badge badge-primary">
              Read All Reviews ({reviews.length} Reviews){" "}
            </span>
          ) : null}

          <div className="display-review">
            {reviews.map((review) => {
              return (
                <div key={review.id}>
                  <h2>{review.reviewerName[0].toUpperCase()}</h2>{" "}
                  <h5>{review.reviewerName}</h5>
                  <span>{review.date} </span>
                  <h6>{review.topic}</h6>
                  <p>{review.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
