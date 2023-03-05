import React from "react";
import ReactDOM from "react-dom/client";

/*
   Header
      -Title
      -NavItems(RightSide)
      -Cart
   Body
      -SearchBar
      -RestaurantList
         -RestaurantCard
            -Image
            -Name
            -Rating
            -Cuisines
   Footer
      -Links
      -CopyRights

*/

 const Title = () => (
   <a href="/">
   <img 
     className="logo"
     alt ="logo"
     src="https://scontent.fhyd2-2.fna.fbcdn.net/v/t39.30808-6/302441959_486213156849687_1897954130219057783_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bn1LlsOobO8AX-jL2jD&_nc_ht=scontent.fhyd2-2.fna&oh=00_AfCxrNqVlPDVAkZQr4xQLqmcOe7bLQ9iOJgoQ1G4KBZyUg&oe=64084BA4"
   />
   </a>
 );

const Header = () => {
   return(
      <div className="header">
       <Title/>
        <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               <li>Cart</li>
            </ul>
        </div>
      </div>
   );
};

const restaurantList = 
[{
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "151511",
   "name": "Sree Harsha Delux Mess",
   "uuid": "c45dc692-1307-412a-bba7-3158143b6551",
   "city": "3",
   "area": "Kukatpally",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "yljlambpvjtgidnagdzz",
   "cuisines": [
   "South Indian",
   "Biryani"
   ],
   "tags": [ ],
   "costForTwo": 25000,
   "costForTwoString": "₹250 FOR TWO",
   "deliveryTime": 20,
   "minDeliveryTime": 20,
   "maxDeliveryTime": 20,
   "slaString": "20 MINS",
   "lastMileTravel": 2.0999999046325684,
   "slugs": {
   "restaurant": "sree-harsha-delux-mess-kukatpally-kukatpally",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072",
   "locality": "Housing Board Colony",
   "parentId": 19618,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "20% off",
   "shortDescriptionList": [
   {
   "meta": "20% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "20% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=6040356~p=1~eid=00000186-b066-104e-0b05-e6bc00ae016a",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "2 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "151511",
   "deliveryTime": 20,
   "minDeliveryTime": 20,
   "maxDeliveryTime": 20,
   "lastMileTravel": 2.0999999046325684,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.0",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "56096",
   "name": "Mehfil",
   "uuid": "b0d8a5ff-d870-40ce-878d-6cac0a9eee09",
   "city": "3",
   "area": "Kukatpally",
   "totalRatingsString": "10000+ ratings",
   "cloudinaryImageId": "wfaytngr2fhmdyngai1g",
   "cuisines": [
   "Biryani",
   "North Indian",
   "Tandoor",
   "Chinese",
   "Kebabs"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 19,
   "minDeliveryTime": 19,
   "maxDeliveryTime": 19,
   "slaString": "19 MINS",
   "lastMileTravel": 1.2999999523162842,
   "slugs": {
   "restaurant": "mehfil-restaurant-kukatpally-kukatpally",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "Beside More Mega Store, Nizampet Cross Roads,Kukatpally, Hyderabad",
   "locality": "Nizampet X Road",
   "parentId": 637,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "10% off",
   "shortDescriptionList": [
   {
   "meta": "10% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "10% off up to ₹40 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "10% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "10% off up to ₹40 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "1.2 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "56096",
   "deliveryTime": 19,
   "minDeliveryTime": 19,
   "maxDeliveryTime": 19,
   "lastMileTravel": 1.2999999523162842,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "3.8",
   "totalRatings": 10000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "58799",
   "name": "Kritunga Restaurant",
   "uuid": "b5ebbcad-ff77-4951-a2d4-e74a1d4b9e16",
   "city": "3",
   "area": "Raji Reddy Nagar",
   "totalRatingsString": "1000+ ratings",
   "cloudinaryImageId": "wjptmufe6ccdcfahwjuv",
   "cuisines": [
   "Biryani",
   "Andhra",
   "Rayalaseema",
   "South Indian",
   "North Indian",
   "Chinese"
   ],
   "tags": [ ],
   "costForTwo": 50000,
   "costForTwoString": "₹500 FOR TWO",
   "deliveryTime": 27,
   "minDeliveryTime": 27,
   "maxDeliveryTime": 27,
   "slaString": "27 MINS",
   "lastMileTravel": 2,
   "slugs": {
   "restaurant": "kritunga-restaurant-kukatpally-kukatpally",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "PNR Empire, 3rd Floor, KPHB, Hyderabad -72",
   "locality": "KPHB Main Road",
   "parentId": 20088,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "20% off",
   "shortDescriptionList": [
   {
   "meta": "20% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "20% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=6070298~p=4~eid=00000186-b066-104e-0b05-e6bd00ae043d",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "2 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "58799",
   "deliveryTime": 27,
   "minDeliveryTime": 27,
   "maxDeliveryTime": 27,
   "lastMileTravel": 2,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "3.6",
   "totalRatings": 1000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "1691",
   "name": "Chaitanya Food Court",
   "uuid": "afc579e9-e2b4-4041-b36a-c976c9714752",
   "city": "3",
   "area": "Kukatpally",
   "totalRatingsString": "10000+ ratings",
   "cloudinaryImageId": "lyzlpgvi7jh12frwvlle",
   "cuisines": [
   "Biryani",
   "Chinese",
   "Andhra",
   "North Indian"
   ],
   "tags": [ ],
   "costForTwo": 60000,
   "costForTwoString": "₹600 FOR TWO",
   "deliveryTime": 29,
   "minDeliveryTime": 29,
   "maxDeliveryTime": 29,
   "slaString": "29 MINS",
   "lastMileTravel": 2.9000000953674316,
   "slugs": {
   "restaurant": "chaitanya-food-court-kukatpally",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "Near Malaysian Township Circle,JNTU-Hitech City Road,Kphb Colony",
   "locality": "Kukatpally",
   "parentId": 1865,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "50% off",
   "shortDescriptionList": [
   {
   "meta": "50% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "50% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "50% off up to ₹100 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "2.9 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "1691",
   "deliveryTime": 29,
   "minDeliveryTime": 29,
   "maxDeliveryTime": 29,
   "lastMileTravel": 2.9000000953674316,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.0",
   "totalRatings": 10000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "6372",
   "name": "Raja Rani Ruchulu",
   "uuid": "c9074b67-f115-4c98-baaf-723b22b66744",
   "city": "3",
   "area": "Kukatpally",
   "totalRatingsString": "5000+ ratings",
   "cloudinaryImageId": "cyg49t7uytu2mhb4hgub",
   "cuisines": [
   "Biryani",
   "Indian",
   "Chinese",
   "Tandoor",
   "North Indian",
   "Haleem"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 26,
   "minDeliveryTime": 26,
   "maxDeliveryTime": 26,
   "slaString": "26 MINS",
   "lastMileTravel": 3,
   "slugs": {
   "restaurant": "raja-rani-ruchulu-vivekananda-nagar-kukatpally",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "Beside V V Statue, Opposite Ramdevrao Hospital, Vivekananda Nagar, Kukatpally, Hyderabad",
   "locality": "Vivekananda Nagar",
   "parentId": 8315,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "20% off",
   "shortDescriptionList": [
   {
   "meta": "20% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "20% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "3 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "6372",
   "deliveryTime": 26,
   "minDeliveryTime": 26,
   "maxDeliveryTime": 26,
   "lastMileTravel": 3,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "4.0",
   "totalRatings": 5000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "50099",
   "name": "Vasista's Sri Lakshmi",
   "uuid": "67cb5bab-29c2-43a3-9eed-e1d8f09074e2",
   "city": "3",
   "area": "Nizampet",
   "totalRatingsString": "5000+ ratings",
   "cloudinaryImageId": "fhlawfoalrnoussx2m7t",
   "cuisines": [
   "Biryani",
   "Chinese",
   "Tandoor",
   "North Indian",
   "South Indian"
   ],
   "tags": [ ],
   "costForTwo": 35000,
   "costForTwoString": "₹350 FOR TWO",
   "deliveryTime": 26,
   "minDeliveryTime": 26,
   "maxDeliveryTime": 26,
   "slaString": "26 MINS",
   "lastMileTravel": 1.5,
   "slugs": {
   "restaurant": "vasistas-sri-laxmi-nizampet-kukatpally",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "C S R Bliss,Shop no-1,Nizampet main road,Kukatpally",
   "locality": "Nizampet main road",
   "parentId": 387872,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "30% off",
   "shortDescriptionList": [
   {
   "meta": "30% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "30% off up to ₹75 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "30% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "30% off up to ₹75 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=6037880~p=7~eid=00000186-b066-104e-0b05-e6be00ae077c",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "1.5 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "50099",
   "deliveryTime": 26,
   "minDeliveryTime": 26,
   "maxDeliveryTime": 26,
   "lastMileTravel": 1.5,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "3.9",
   "totalRatings": 5000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "16164",
   "name": "Lucky Multicuisine Restaurant",
   "uuid": "8aa8fdd1-c537-4f78-991d-f40029aa30d9",
   "city": "3",
   "area": "Kalapuram Basti",
   "totalRatingsString": "5000+ ratings",
   "cloudinaryImageId": "bv7eioaorni0demvwih4",
   "cuisines": [
   "Indian",
   "Chinese",
   "Tandoor"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 31,
   "minDeliveryTime": 31,
   "maxDeliveryTime": 31,
   "slaString": "31 MINS",
   "lastMileTravel": 4.5,
   "slugs": {
   "restaurant": "lucky-multicuisine-restaurant-bollaram-road-miyapur",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "2-69 Bollaram Road , Miyapur , Hyderabad",
   "locality": "Bollaram Road",
   "parentId": 18963,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "Flat ₹125 off",
   "shortDescriptionList": [
   {
   "meta": "Flat ₹125 off on orders above ₹499",
   "discountType": "Flat",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "Flat ₹125 off on orders above ₹499 | Use code SWIGGYHOLI",
   "discountType": "Flat",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "₹125 OFF",
   "shortDescriptionList": [
   {
   "meta": "Use SWIGGYHOLI",
   "discountType": "Flat",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "Flat ₹125 off on orders above ₹499 | Use code SWIGGYHOLI",
   "discountType": "Flat",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 1,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "4.5 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "16164",
   "deliveryTime": 31,
   "minDeliveryTime": 31,
   "maxDeliveryTime": 31,
   "lastMileTravel": 4.5,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "IT_IS_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "3.5",
   "totalRatings": 5000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "120129",
   "name": "Shah Ghouse Hotel",
   "uuid": "a3177899-355f-4109-8a1f-b24b31afbcd8",
   "city": "3",
   "area": "Land Mark Residency",
   "totalRatingsString": "5000+ ratings",
   "cloudinaryImageId": "von4k7mxgbgv0w58apx6",
   "cuisines": [
   "Biryani",
   "North Indian",
   "Chinese",
   "Mughlai",
   "Tandoor"
   ],
   "tags": [ ],
   "costForTwo": 30000,
   "costForTwoString": "₹300 FOR TWO",
   "deliveryTime": 36,
   "minDeliveryTime": 36,
   "maxDeliveryTime": 36,
   "slaString": "36 MINS",
   "lastMileTravel": 8.600000381469727,
   "slugs": {
   "restaurant": "shah-ghouse-hotel-restaurant-kondapur-kondapur",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "2-25/A, Beside Apollo Hospital, Near Kondapur Kothaguda 'X' Road, Kondapur, Hyderabad",
   "locality": "Kothaguda 'X' Road",
   "parentId": 19271,
   "unserviceable": false,
   "veg": false,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "20% off",
   "shortDescriptionList": [
   {
   "meta": "20% off | Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "20% OFF",
   "shortDescriptionList": [
   {
   "meta": "Use TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "20% off up to ₹50 | Use code TRYNEW",
   "discountType": "Percentage",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 1,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "8.6 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "120129",
   "deliveryTime": 36,
   "minDeliveryTime": 36,
   "maxDeliveryTime": 36,
   "lastMileTravel": 8.600000381469727,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "IT_IS_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": false,
   "avgRating": "3.8",
   "totalRatings": 5000,
   "new": false
   },
   "subtype": "basic"
   },
   {
   "type": "restaurant",
   "data": {
   "type": "F",
   "id": "544786",
   "name": "Shero Home Food - Andhra",
   "uuid": "545ccf16-f356-44c8-a8c3-10ce47794591",
   "city": "3",
   "area": "Nizampet & Pragathi Nagar",
   "totalRatingsString": "100+ ratings",
   "cloudinaryImageId": "a7gbzr4kgfzky90cre8s",
   "cuisines": [
   "South Indian",
   "Andhra",
   "Healthy Food"
   ],
   "tags": [ ],
   "costForTwo": 35000,
   "costForTwoString": "₹350 FOR TWO",
   "deliveryTime": 33,
   "minDeliveryTime": 33,
   "maxDeliveryTime": 33,
   "slaString": "33 MINS",
   "lastMileTravel": 3,
   "slugs": {
   "restaurant": "shero-home-food---andhra-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar-2",
   "city": "hyderabad"
   },
   "cityState": "3",
   "address": "Villa No: 417, 1C Road, Reddy's Avenue, Nizampet, Hyderabad 500090",
   "locality": "Reddy'S Avenue",
   "parentId": 301480,
   "unserviceable": false,
   "veg": true,
   "select": false,
   "favorite": false,
   "tradeCampaignHeaders": [ ],
   "aggregatedDiscountInfo": {
   "header": "FREE DELIVERY",
   "shortDescriptionList": [
   {
   "meta": "FREE DELIVERY",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "FREE DELIVERY",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "aggregatedDiscountInfoV2": {
   "header": "",
   "shortDescriptionList": [
   {
   "meta": "Free Delivery",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "descriptionList": [
   {
   "meta": "FREE DELIVERY",
   "discountType": "FREE_DELIVERY",
   "operationType": "RESTAURANT"
   }
   ],
   "subHeader": "",
   "headerType": 0,
   "superFreedel": ""
   },
   "ribbon": [
   {
   "type": "PROMOTED"
   }
   ],
   "chain": [ ],
   "feeDetails": {
   "fees": [ ],
   "totalFees": 0,
   "message": "",
   "title": "",
   "amount": "",
   "icon": ""
   },
   "availability": {
   "opened": true,
   "nextOpenMessage": "",
   "nextCloseMessage": ""
   },
   "longDistanceEnabled": 0,
   "rainMode": "NONE",
   "thirdPartyAddress": false,
   "thirdPartyVendor": "",
   "adTrackingID": "cid=6045855~p=10~eid=00000186-b066-104e-0b05-e6bf00ae0a4f",
   "badges": {
   "imageBased": [ ],
   "textBased": [ ],
   "textExtendedBadges": [ ]
   },
   "lastMileTravelString": "3 kms",
   "hasSurge": false,
   "sla": {
   "restaurantId": "544786",
   "deliveryTime": 33,
   "minDeliveryTime": 33,
   "maxDeliveryTime": 33,
   "lastMileTravel": 3,
   "lastMileDistance": 0,
   "serviceability": "SERVICEABLE",
   "rainMode": "NONE",
   "longDistance": "NOT_LONG_DISTANCE",
   "preferentialService": false,
   "iconType": "EMPTY"
   },
   "promoted": true,
   "avgRating": "4.1",
   "totalRatings": 100,
   "new": false
   },
   "subtype": "basic"
   },]


const RestaurantCard = ({name,lastMileTravelString,cuisines,cloudinaryImageId,avgRating}) =>{

  
   
   return(
      <div className="card">
         <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
            cloudinaryImageId} 
         />
         <h2>{name}</h2>
         <h3>{lastMileTravelString}</h3>
         <h3>{cuisines.join(", ")}</h3>
   
         <h4>{avgRating} Stars</h4>
      </div>
   )
}
//No key (not accaeptable) <<<index Key (Last Option)<<< Unique Key (best practice)
const Body = () => {
   return(
      <div className="restaurant-list">
         {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
         })}
    
    </div>
      );
};

const Footer = () => {
   return(
      <h1>Footer</h1>
   );
};
const AppLayout = () => {
   return(
      <React.Fragment>
       <Header/>
       <Body/>
       <Footer/>
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);