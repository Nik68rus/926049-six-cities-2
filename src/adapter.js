export default class Adapter {
  static getOffers(offers) {
    return offers instanceof Array ? offers.map(Adapter.getOffer) : [];
  }

  static getOffer(offer) {
    return {
      id: offer.id,
      city: {
        name: offer.city.name,
        location: {
          latitude: offer.city.location.latitude,
          longitude: offer.city.location.longitude,
          zoom: offer.city.location.zoom
        },
      },
      picture: offer.preview_image,
      isPremium: offer[`is_premium`],
      isBookmarked: offer[`is_favorite`],
      price: offer.price,
      title: offer.title,
      type: offer.type,
      rate: offer.rating,
      photos: offer.images,
      coords: [offer.location.latitude, offer.location.longitude],
      locationZoom: offer.location.zoom,
      description: offer.description,
      host: {
        id: offer.host.id,
        name: offer.host.name,
        isPro: offer.host[`is_pro`],
        avatar: offer.host[`avatar_url`],
      },
      bedrooms: offer.bedrooms,
      goods: offer.goods,
      maxAdults: offer[`max_adults`],
    };
  }

  static getUser(user) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user[`avatar_url`],
      isPro: user[`is_pro`],
    };
  }

  static getReview(review) {
    return {
      id: review.id,
      user: {
        id: review.user.id,
        isPro: review.user[`is_pro`],
        name: review.user.name,
        avatar: review.user[`avatar_url`],
      },
      rating: review.rating,
      comment: review.comment,
      date: review.date,
    };
  }

  static getReviews(reviews) {
    return reviews.map(Adapter.getReview);
  }
}
