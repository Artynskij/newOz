
import { Api } from "../api"
import { createStore } from "redux";
// const backState = {
//   categories: [
//     {
//         id: 1,
//         type: "Toys",
//         name: "Игрушки",
//     },
//     {
//         id: 2,
//         type: "Books",
//         name: "Книги",
//     },
//     {
//         id: 3,
//         type: "Sport",
//         name: "Спорт",
//     },
//     {
//         id: 4,
//         type: "Cosmo",
//         name: "Косметика",
//     },
//     {
//         id: 5,
//         type: "Active",
//         name: "Активность",
//     },
//     {
//         id: 6,
//         type: "Baby",
//         name: "Детям",
//     },
//     {
//         id: 7,
//         type: "Suvenir",
//         name: "Сувениры",
//     },
//     {
//         id: 8,
//         type: "House",
//         name: "Для дома",
//     },
//     {
//         id: 9,
//         type: "Health",
//         name: "Здоровье",
//     },
//     {
//         id: 10,
//         type: "Perfume",
//         name: "Парфюмерия",
//     },
//     {
//         id: 11,
//         type: "Black market",
//         name: "Чёрный рынок",
//     },
// ],
//  goods: [
//   {
//     data: {
//       id: 1,
//       type: "Toys",
//       name: "Игрушки",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data: {
//       id: 2,
//       type: "Books",
//       name: "Книги",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data:  {
//       id: 3,
//       type: "Sport",
//       name: "Спорт",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data:{
//       id: 4,
//       type: "Cosmo",
//       name: "Косметика",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data: {
//       id: 5,
//       type: "Active",
//       name: "Активность",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data:{
//       id: 6,
//       type: "Baby",
//       name: "Детям",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data: {
//       id: 7,
//       type: "Suvenir",
//       name: "Сувениры",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data:  {
//       id: 8,
//       type: "House",
//       name: "Для дома",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data: {
//       id: 9,
//       type: "Health",
//       name: "Здоровье",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data: {
//       id: 10,
//       type: "Perfume",
//       name: "Парфюмерия",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Toys",
//         name: "Marvel",
//         price: 199,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 2,
//         category_type: "Books",
//         name: "HotWheels",
//         price: 299,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 3,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 4,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 5,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//       {
//         id: 6,
//         category_type: "Sport",
//         name: "Микки",
//         price: 399,
//         img: "https://source.unsplash.com/random",
//       },
//     ],
//   },
//   {
//     data: {
//       id: 11,
//       type: "Black market",
//       name: "Чёрный рынок",
//   },
//     items: [
//       {
//         id: 1,
//         category_type: "Black market",
//         name: "Ак-74",
//         price: '1.999',
//         img: "https://popadiv10.ru/image/catalog/product/3275/shp-avtomat-kalashnikova-os-ak-74m-oholoshchennyy-10.jpg",
//       },
//       {
//         id: 2,
//         category_type: "Black market",
//         name: "Glock-19",
//         price: '799',
//         img: "https://worldweapon.info/sites/default/files/gun_revolvers/glock19.png",
//       },
//       {
//         id: 3,
//         category_type: "Black market",
//         name: "РПГ-7",
//         price: '3.099',
//         img: "https://nplus1.ru/images/2017/04/11/14df347b7c06510a136b3dad80d81aea.jpg",
//       },
//       {
//         id: 4,
//         category_type: "Black market",
//         name: "Кокс 200кг",
//         price: '301.099',
//         img: "https://imgtest.mir24.tv/uploaded/images/crops/2021/February/870x489_0x101_detail_crop_20210224060931_bc474ccc_df60dbfc913a8e84f44ece0657b175f4dbf95ec02ad04eec0fff6a9a59b6cb36.jpg",
//       },
//       {
//         id: 5,
//         category_type: "Black market",
//         name: "ah-64 apache",
//         price: '17.000.000',
//         img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AH-64D_Apache_Longbow.jpg/1200px-AH-64D_Apache_Longbow.jpg",
//       },
//       {
//         id: 6,
//         category_type: "Black market",
//         name: "Т-90",
//         price: '3.990.000',
//         img: "https://militaryarms.ru/wp-content/uploads/2019/12/t-90a.jpg",
//       },
//     ],
//   },
// ]
// }




const INITIAL_STATE = {
categories: [],
goods: [],
  };


  // const newApi = new Api() 
  // newApi
  // .then((data) => {
  //   categories: data.getСategories()
  //   goods: data.getGoods()
  // })
  


  export const reducer = (state = INITIAL_STATE) => {
          return state
  }
export const store = createStore(reducer)