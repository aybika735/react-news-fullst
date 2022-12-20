import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: null,
  // news: [
  //   {
  //     id: 1,
  //     text:'Фигуристка Валиева выиграла личный турнир на чемпионате России по прыжкам',
  //     categoryId: 1,
  //     image: 'https://s-cdn.sportbox.ru/images/styles/690_388/fp_fotos/98/7d/f0550472cc64bc1cdd0f71c43cf92443638c929cd6d4c894154578.jpg',
  //   },
  //   {
  //     id: 2,
  //     text:'Тите сообщил, что Неймар сыграет с командой Южной Кореи в 1/8 финала ЧМ',
  //     categoryId: 1,
  //     image: 'https://ss.sport-express.ru/userfiles/materials/184/1843794/volga.jpg',
  //   },
  //   {
  //     id: 3,
  //     text:'«Аргентина — будущий чемпион мира!» — Бракамонте',
  //     categoryId: 1,
  //     image: 'https://s-cdn.sportbox.ru/images/styles/690_388/fp_fotos/bc/ec/c5eea96e3bf05e6e700b85577956c2a663828ae676b51410666597.jpg',
  //   },
  //   {
  //     id: 4,
  //     text:'Жуткая драма российской фигуристки. Саша упала с высоты на глазах Тутберидзе и Плющенко',
  //     categoryId: 1,
  //     image:'https://s-cdn.sportbox.ru/images/styles/690_388/fp_fotos/29/e3/b1ccfa0157efa1666b499440d49d6e61629f17221db92795194579.jpg',
  //   },
  //   {
  //     id: 5,
  //     text:'Савичев объяснил провальное выступление сборной Германии на ЧМ-2022',
  //     categoryId: 1,
  //     image: 'https://s-cdn.sportbox.ru/images/styles/960_auto/fp_fotos/96/a8/a4be4b075185bfac46b70cdc7c5b54ce6389a6d249bce454650211.jpg',
  //   },
  //   {
  //     id: 6,
  //     text:'Зампред ЦИК Булаев прокомментировал санкции США против него',
  //     categoryId: 2,
  //     image: "https://cdnn21.img.ria.ru/images/149014/75/1490147576_0:161:3053:1878_436x0_80_0_0_7f25689f68bd4ffc639154424bca9cc1.jpg.webp",
  //   },
  //   {
  //     id: 7,
  //     text:'Памфилова заявила, что не нуждается в "привилегии" ездить в США',
  //     categoryId: 2,
  //     image: "https://cdnn21.img.ria.ru/images/07e5/09/17/1751477310_0:306:2810:1887_436x0_80_0_0_fb18b5966ea013d33a83e5777d703922.jpg.webp",
  //   },
  //   {
  //     id: 8,
  //     text:'СМИ: Володина ждут с визитом в Турции 12 декабря',
  //     categoryId: 2,
  //     image: "https://cdnn21.img.ria.ru/images/07e6/0a/1a/1826823486_0:23:2582:1475_436x0_80_0_0_74aee859676993dc2e3de00d93390658.jpg.webp",
  //   },
  //   {
  //     id: 9,
  //     text:'США ввели санкции против российского ЦИК',
  //     categoryId: 2,
  //     image: "https://cdnn21.img.ria.ru/images/151359/57/1513595775_0:302:2048:1454_436x0_80_0_0_4b87e9f273225c435d77015a6cd73eb9.jpg.webp",
  //   },
  //   {
  //     id: 10,
  //     text:'Путин объяснил, почему проехал по Крымскому мосту',
  //     categoryId: 2,
  //     image: "https://cdnn21.img.ria.ru/images/151060/64/1510606430_0:295:4380:2759_436x0_80_0_0_2932bb1e39aa4df2b66c989332794f32.jpg.webp",
  //   },
  //   {
  //     id: 11,
  //     text:'Названы самые непопулярные страны для новогоднего отдыха Об этом сообщает "Рамблер"',
  //     categoryId: 3,
  //     image: "https://news.store.rambler.ru/img/cdb64e1d4aa3a39abab31c76648612e7?img-format=auto&img-1-resize=height:710,fit:max",
  //   },
  //   {
  //     id: 12,
  //     text:'Из Москвы запустят новые прямые рейсы на Мальдивы Об этом сообщает "Рамблер"',
  //     categoryId: 3,
  //     image: "https://static.r-express.ru/images/AdobeStock_305850247.jpeg",
  //   },
  //   {
  //     id: 13,
  //     text:'В Турции будет внедрена альтернатива картам «Мир» Об этом сообщает "Рамблер"',
  //     categoryId: 3,
  //     image: "https://news.store.rambler.ru/img/cda9b09f82f0079f6e8ec68a2ca60268?img-format=auto&img-1-resize=height:710,fit:max",
  //   },
    
    
  // ],
  // categories: [
  //   {
  //     id: 1,
  //     name: "Спорт",
  //   },
  //   {
  //     id: 2,
  //     name: "Политика",
  //   },
  //   {
  //     id: 3,
  //     name: "Путешествия",
  //   },
  // ],
}
const newsReducer = createReducer(initialState,(builder)=>{
  builder
  .addCase ('newsReducer/signup/pending', (state, action)=>{
    return{
      signingUp:true,
      error: null
   
    }
  })
  .addCase ('newsReducer/signup/fulfilled', (state, action)=>{
    return{
      signingUp:false,
    }
  })
  .addCase ('newsReducer/signup/rejected', (state, action)=>{
    return{
      signingUp:false,
      error: action.error
    }
  })
  .addCase ('newsReducer/signin/pending', (state, action)=>{
    return{
      signingIn:true,
      error: null
   
    }
  })
  .addCase ('newsReducer/signin/fulfilled', (state, action)=>{
    return{
      signingIn:false,
      token:action.payload.token
    }
  })
  .addCase ('newsReducer/signin/rejected', (state, action)=>{
    return{
      signingIn:false,
      error: action.error
    }
  })

  
});
export {newsReducer};
export const createUser = (login, password) =>{
return async dispatch =>{
  dispatch({type: 'newsReducer/signup/pending'});
  const response = await fetch('/users', {
    method: 'POST',
    body: JSON.stringify({login, password}),
    headers:{
      "Content-type":"application/json"
    }
  });
 
  const json = await response.json();
  if(json.error){
    dispatch({type:'newsReducer/signup/rejected', error: json.error});

  }else{
    dispatch({type:'newsReducer/signup/fulfilled', payload: json});
  }
}
}

export const auth = (login, password) => {
  return async dispatch=>{
    dispatch({type: 'newsReducer/signin/pending'});
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({login, password}),
      headers:{
        "Content-type":"application/json"
      }
      
    });
   
    const json = await response.json();
    
    if(json.error){
      dispatch({type:'newsReducer/signin/rejected', error: json.error});
  
    }else{
      dispatch({type:'newsReducer/signin/fulfilled', payload: json});
    }
  }
  
}
