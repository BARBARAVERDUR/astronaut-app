
export  const API_CONSTANTS = {
  URL : "http://localhost:8080",

  PERSON : function (){
    return `${this.URL}/person`;
  },

  PERSON_ID: function(id){
    return `${this.PERSON()}/{id}`;
  }
}