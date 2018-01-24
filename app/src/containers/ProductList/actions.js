import axios from 'axios';

export const loadProducst = () =>{
    const products = [
      { id: 1, name: "Vino Mala Sangre", price: 299, image: "http://cajaspararegalo.es/wp-content/uploads/2014/05/centumvitis2.jpg" },
      { id: 2, name: "Jack LaLanne's Power Juicer deluxe stainless steel ", price: 99, image: "https://images-na.ssl-images-amazon.com/images/I/51SHUdN4LuL.jpg" },
      { id: 3, name: "Destapador de Vino Electrico", price: 145, image: "https://images-na.ssl-images-amazon.com/images/I/41UaA3DITUL._SL500_AC_SS350_.jpg" },
      { id: 4, name: "Logitech Harmony One Touch Screen LCD Advanced Universal Remote Control", price: 143, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAO7BMO_VOWyEtFFSq3KKuNTrvznpccHE5dUlrKUzeGRNDmRI" },
      { id:10, name: "Barbacoa portátil de carbón con parrilla para balcón ", price: 75, image: "https://i.pinimg.com/736x/94/dc/27/94dc27b0649378e38b4f121c7c5f1e74--balcony-grill-the-balcony.jpg" },
      { id:11, name: " Motorised 90 Degree Rotate TV Wall Mount with Remote", price: 86, image: "https://cdn2.bigcommerce.com/server6200/ruxeh5dd/product_images/uploaded_images/brateck-qtm03-26-22-47-22-motorised-90-degree-rotate-tv-wall-mount-with-remote-control.png?t=1447023353" },
      { id:13, name: "Disipador de CPU GAMMAXX 400", price: 34, image: "http://www.deepcool.com/ProductGallery/CPUAirCoolers/GAMMAXX400_RED/Gallery/800X480/01.jpg" },
      { id:143, name: "Plantronics Headsets", price: 56, image: "https://pisces.bbystatic.com/image2/BestBuy_US/store/ee/2016/aud/pr/152565-Plantronics/152565-Plantronics-flex-Console_Gaming.jpg;maxHeight=291;maxWidth=291"},
      { id:142, name: "Dell N5050", price: 149, image: "http://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Dell_Inspiron_N4050/Dell_Inspiron_N4050_L_1.jpg" },
      { id:141, name: "Batidora Amasadora Kitchenaid Artis", price: 34, image: "https://http2.mlstatic.com/batidora-amasadora-kitchenaid-artisan-220v-5-litros-evotech-D_NQ_NP_926311-MLA26336076317_112017-F.jpg" },
      { id:147, name: "MAQUINA TORTILLADORA MANUAL", price: 12, image: "https://i.ytimg.com/vi/I_ziSXCWUgY/hqdefault.jpg" },
      { id:140, name: "Picador PApas Fritas", price: 37, image: "https://www.uniworldespanol.com/s/cc_images/teaserbox_4092711584.jpg?t=1423157884" }
    ];
    return {
        type: "REPLACE_PRODUCTS",
        products
    };
};

/*
consumir API REst
export const loadProducst = () =>{
    return dispatch => {
      return axios.get("http://127.0.0.1/dbservice/products")
      .then(response => {
        dispatch({
          type: "REPLACE_PRODUCTS",
          products: response.data
        })
      });
    };
};
*/
export const addToCart = (product) => {

    return {
        type: "ADD_TO_CART",
        product
    }
};
