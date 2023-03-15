export function  filteredData(searchText, restaurants){
   const filteredData = restaurants.filter((whatever)=> 
       whatever?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filteredData;
 }