let APPLICATIONS_DATA = {
  "Application1":{
    "company" : "ABC",
    "url" : "https://example.com/"
  }, 
  "Application2":{
    "company" : "DEF",
    "url" : "https://example.com/"
  }, 
  "Application3":{
    "company" : "GHI",
    "url" : "https://example.com/"
  },
}

export async function get_application(prisma, id){
  return APPLICATIONS_DATA[id];
}

export async function get_applications_list(prisma){
  return Object.keys(APPLICATIONS_DATA);
}