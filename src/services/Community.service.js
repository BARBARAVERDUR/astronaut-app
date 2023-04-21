
import { API_CONSTANTS } from './../constants/API.constants';

class CommunityService {

  async getAllCharacters(){
    const response = await fetch(API_CONSTANTS.PERSON());
    //Interceptor
    return response.json();
  }

  async getCharacterById(id){
    const response = await fetch(API_CONSTANTS.PERSON_ID(id));
    //interceptor
    return response.json();
  }

}

export default new CommunityService();