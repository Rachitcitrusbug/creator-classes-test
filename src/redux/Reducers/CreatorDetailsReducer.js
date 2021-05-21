import { CREATOR_DETAILS } from '../Types/CreatorDetailsType';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  username: '',
  profile_image: '',
  description: '',
  country_details: '',
  key_skill: '',
  other_skills: [],
  instagram_url: '',
  youtube_url: '',
  facebook_url: '',
  creator_website_url: '',
  total_rating: '',
  creator_reviews: [],
  affiliation_link: '',
  is_fav: false,
  country: {},
};

const creatorDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATOR_DETAILS:
      return {
        ...state,
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        username: action.payload.username,
        profile_image: action.payload.profile_image,
        description: action.payload.description,
        country_details: action.payload.country_details,
        key_skill: action.payload.key_skill,
        other_skills: action.payload.other_skills,
        instagram_url: action.payload.instagram_url,
        youtube_url: action.payload.youtube_url,
        facebook_url: action.payload.facebook_url,
        creator_website_url: action.payload.creator_website_url,
        total_rating: action.payload.total_rating,
        creator_reviews: action.payload.creator_reviews,
        affiliation_link: action.payload.affiliation_link,
        is_fav: action.payload.is_fav,
        country: action.payload.country,
      };
    default:
      return state;
  }
};

export default creatorDetailsReducer;
