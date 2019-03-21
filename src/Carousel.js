import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  handleIndexClick = event => {
    this.setState({ active: +event.target.dataset.index });
  };

  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }
  render() {
    const { photos, active } = this.state;
    console.log(photos);
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              alt="animal thumbnail"
              data-index={index}
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
