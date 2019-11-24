export default class Adapter {
  static getOffers(offers) {
    return offers.map(Adapter.getOffer);
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
      rate: offer.rating * 20,
      photos: offer.images,
      coords: [offer.location.latitude, offer.location.longitude],
      locationZoom: offer.location.zoom,
    };
  }
}
