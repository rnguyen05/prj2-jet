$(document).ready(function () {
  //Initial URL array to form url path
  var initialPathArr = ["","properties","location","priceRange","lotSize","propertyType","listingType","squareFeet","beds","baths","status"];
  console.log("initial>>>>",initialPathArr);
    //Search Bar on Index Page
    $("#locationSend").on("click", function (event) {
      const location = $("#location").val().trim();
      const priceRange = $("#priceSelected").val();
      event.preventDefault();
      if (!location) {
        alert("No Available Properties. Please try different location.");
        return;
      }
      window.location.href = "/properties/" + location+"/"+priceRange;
    });

    //Property Details button clicked handler
    $('.detailProperties').on('click',function(event){
      let pid =  $(this).data('pid');
      console.log(">>>>>>>>pid",pid);
      $.get("/properties/detail", {pid}
        ).then(function(data) {
          //console.log(data);
          window.location.href = "/properties/detail?pid="+pid;
      });
    });



    //Top Search Bar
    $("#newsearchBtn").on("click", function (event) {
      event.preventDefault();
      const newsearch = $("#newsearch").val().trim();
      const priceRange = 10;

      event.preventDefault();
      if (!newsearch) {
        alert("No Available Properties. Please try different location.");
        return;
      }
      window.location.href = "/properties/" + newsearch +"/" + priceRange;
    });

    //Lot Size Filter
    $(".ft").on("change", function (event) {
      event.preventDefault();
      var makeURL = "";
      var lotSize = $("#lotSize").val();
      console.log("lotSize ",lotSize);
      
      //To get current browser url
      var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
      console.log("newURL ",newURL);
      var pathArray = window.location.pathname.split( '/' );
     
      //Get path, search location and price range
      var curpath = window.location.pathname.split('/')[1];
      var curlocation = window.location.pathname.split('/')[2];
      var curpriceRange = window.location.pathname.split('/')[3];
      console.log("curpath:   "+curpath);
      console.log("curlocation:  "+curlocation);
      console.log("curpriceRange:  "+curpriceRange);
      console.log("newURL:  "+newURL);
      console.log("pathArray:  "+pathArray);
      initialPathArr.splice(1,1,curpath);
      initialPathArr.splice(2,1,curlocation);
      initialPathArr.splice(3,1,curpriceRange);
      console.log("after index search",initialPathArr);

      //if lotSize filter changed
      if (lotSize != initialPathArr[4]) {
        initialPathArr.splice(4,1,lotSize);
      }
      console.log("after lotSize",initialPathArr);

      //if Property Type filter changed
      const propertyType = $("#propertyType").val();
      if (propertyType != initialPathArr[5]) {
        initialPathArr.splice(5,1,propertyType);
      }
      console.log("after propertyType",initialPathArr);

      //if Listing Type filter changed
      const listingType = $("#listingType").val();
      if (listingType != initialPathArr[6]) {
        initialPathArr.splice(6,1,listingType);
      }
      console.log("after listingType",initialPathArr);

      //if Square Feet filter changed
      const squareFeet = $("#squareFeet").val();
      if (squareFeet != initialPathArr[7]) {
        initialPathArr.splice(7,1,squareFeet);
      }
      console.log("after squareFeet",initialPathArr);

      //if Beds filter changed
      const beds = $("#beds").val();
      if (beds != initialPathArr[8]) {
        initialPathArr.splice(8,1,beds);
      }
      console.log("after beds",initialPathArr);

      //if Baths filter changed
      const baths = $("#baths").val();
      if (baths != initialPathArr[9]) {
        initialPathArr.splice(9,1,baths);
      }
      console.log("after baths",initialPathArr);

      //if Status filter changed
      const status = $("#status").val();
      if (status != initialPathArr[10]) {
        initialPathArr.splice(10,1,status);
      }
      console.log("after status",initialPathArr);
      var tempArr=[];
      if(initialPathArr[4] === "lotSize"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[4]);
      }
      if(initialPathArr[5] === "propertyType"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[5]);
      }
      if(initialPathArr[6] === "listingType"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[6]);
      }
      if(initialPathArr[7] === "squareFeet"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[7]);
      }
      if(initialPathArr[8] === "beds"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[8]);
      }
      if(initialPathArr[9] === "baths"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[9]);
      }
      if(initialPathArr[10] === "status"){
        tempArr.push(0);
      }else{
        tempArr.push(initialPathArr[10]);
      }
      // makeURL = newURL + tempArr[0]+"/"+tempArr[1]+"/"+tempArr[2]+"/"+tempArr[3]+"/"
      //   +tempArr[4]+"/"+tempArr[5]+"/"+tempArr[6]+"/";
      makeURL = "/"+initialPathArr[1]+"/"+"filter"+"/"+initialPathArr[2]+"/"+initialPathArr[3]+"/"+initialPathArr[4]+"/"+initialPathArr[5]+"/"+initialPathArr[6]+"/"+initialPathArr[7]+"/"
         +initialPathArr[8]+"/"+initialPathArr[9]+"/"+initialPathArr[10]+"/";
       console.log("makeURL:   "+makeURL); 
       window.location.href = makeURL;
    });//end of property filters


});//End of $(document).ready(function ()


// <<<<<<< propertiesFilters
// =======
// // $("#lotSize").on("change", function (event) {
// //   event.preventDefault();
  
// //   const lotSize = $(this).val();
// //   console.log("lotSize ",lotSize);
// //   //To get current browser url
// //   $(location).attr('href');
// //   var pathname = window.location.pathname;
// //   var urlArr = pathname.split("/");
// //   for(let i=0;i<urlArr.length;i++){
// //     console.log("You should have another function to do get request",i);
// //   }
// //   var city1 = urlArr[2];
// //   var priceRange1 = urlArr[3];
// //   var lotSize1 = urlArr[4];
// //   console.log("city1",city1);
  
// //   window.location.href = window.location+lotSize;
// // });


// $("#lotSize").on("change", function (event) {
//   //alert("erfhrfhr"+objSent.FirstPart);
//   event.preventDefault();
  
//   const lotSize = $(this).val();
//   console.log("lotSize ",lotSize);
//   //alert("erfhrfhr"+objSent.FirstPart);
//   var url = makeURL("lotsize",lotSize);
//   alert("url lot:   "+url);
//   window.location.href = url;

// });
// $("#propertyType").on("change", function (event) {
//   //alert("erfhrfhr"+objSent.FirstPart);
//   event.preventDefault();
  
//   const propertyType = $(this).val();
//   console.log("propertyType ",lotSize);
//  // alert("erfhrfhr"+objSent.FirstPart);
//   var url = makeURL("propertytypeid",propertyType);
//   alert("url ;roperty:   "+url);
//   window.location.href = url;
// >>>>>>> master

// });
// $("#beds").on("change", function (event) {
//   //alert("erfhrfhr"+objSent.FirstPart);
//   event.preventDefault();
  
//   const beds = $(this).val();
//   console.log("beds ",beds);
//  // alert("erfhrfhr"+objSent.FirstPart);
//   var url = makeURL("beds",beds);
//   alert("url beds:   "+url);
//   window.location.href = url;

// <<<<<<< propertiesFilters
// =======
// });
//   function makeURL(filterType,filterValue){
//     $(location).attr('href');
//     var pathname = window.location.href;
//     var insertto=0;
//     var urlArr = pathname.split("/");
// //  alert("urlArr:   ");
//     var firstpart = urlArr[0]+"//"+urlArr[2]+"/"+urlArr[3]+"/"+urlArr[4]+"/"+urlArr[5];
//     alert("firstpart:   "+firstpart);
//     if((urlArr.length>6)){
//       // for(let i=6;i<=11;i++){
//       //   urlArr.push("NA");
//       // }
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
      
//     }
//     alert("urlArr"+firstpart);
//     alert("urlArr:*****"+urlArr);
//     let index =6;
//     switch(filterType){
//       case "lotsize":
//         urlArr[index]=filterValue;
//         //objSent.LotSize = filterValue;
//       break;
//       case "propertytypeid":
//         urlArr[index+1]=filterValue;
//         // objSent.PropertyTypeID = filterValue;
//       break;
//       case "listingtypeid":
//         urlArr[index+2]=filterValue;
//         // objSent.ListingTypeID = filterValue;
//       break;
//       case "sqft":
//         urlArr[index+3]=filterValue;
//         // objSent.SqFt = filterValue;
//       break;
//       case "beds":
//         urlArr[index+4]=filterValue;
//         // objSent.Beds = filterValue;
//       break;
//       case "baths":
//         urlArr[index+5]=filterValue;
//         // objSent.Baths = filterValue;
//       break;
//       case "status":
//         urlArr[index+6]=filterValue;
//         // objSent.Status = filterValue;
//       //break;
//     }
    
//     //var lotSize1 = urlArr[4];
//     //console.log("city1",city1);
//     var makeURL = firstpart+"/"+urlArr[index]+"/"+urlArr[index+1] +"/"+urlArr[index+2]+"/"+urlArr[index+3]+"/"+
//     urlArr[index+4]+"/"+urlArr[index+5]+"/"+urlArr[index+6];
//     alert("makeURL"+makeURL);
//     return makeURL;
//   }
// $("#newsearchBtn").on("click", function (event) {
//   event.preventDefault();
// >>>>>>> master




// //Lot Size filter
// $("#lotSize").on("change", function (event) {
//   //alert("erfhrfhr"+objSent.FirstPart);
//   event.preventDefault();
  
//   const lotSize = $(this).val();
//   console.log("lotSize ",lotSize);
//   //alert("erfhrfhr"+objSent.FirstPart);
//   var url = makeURL("lotsize",lotSize);
//   alert("url lot:   "+url);
//   window.location.href = url;
// });


// $("#propertyType").on("change", function (event) {
//   //alert("erfhrfhr"+objSent.FirstPart);
//   event.preventDefault();
  
//   const propertyType = $(this).val();
//   console.log("propertyType ",lotSize);
//  // alert("erfhrfhr"+objSent.FirstPart);
//   var url = makeURL("propertytypeid",propertyType);
//   alert("url ;roperty:   "+url);
//   window.location.href = url;

// });
// $("#beds").on("change", function (event) {
//   //alert("erfhrfhr"+objSent.FirstPart);
//   event.preventDefault();
  
//   const beds = $(this).val();
//   console.log("beds ",beds);
//  // alert("erfhrfhr"+objSent.FirstPart);
//   var url = makeURL("beds",beds);
//   alert("url beds:   "+url);
//   window.location.href = url;

// });
//   function makeURL(filterType,filterValue){
//     $(location).attr('href');
//     var pathname = window.location.href;
//     var insertto=0;
//     var urlArr = pathname.split("/");
// //  alert("urlArr:   ");
//     var firstpart = urlArr[0]+"//"+urlArr[2]+"/"+urlArr[3]+"/"+urlArr[4]+"/"+urlArr[5];
//     alert("firstpart:   "+firstpart);
//     if((urlArr.length>6)){
//       // for(let i=6;i<=11;i++){
//       //   urlArr.push("NA");
//       // }
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
//       urlArr.push(0);
      
//     }
//     alert("urlArr"+firstpart);
//     alert("urlArr:*****"+urlArr);
//     let index =6;
//     switch(filterType){
//       case "lotsize":
//         urlArr[index]=filterValue;
//         //objSent.LotSize = filterValue;
//       break;
//       case "propertytypeid":
//         urlArr[index+1]=filterValue;
//         // objSent.PropertyTypeID = filterValue;
//       break;
//       case "listingtypeid":
//         urlArr[index+2]=filterValue;
//         // objSent.ListingTypeID = filterValue;
//       break;
//       case "sqft":
//         urlArr[index+3]=filterValue;
//         // objSent.SqFt = filterValue;
//       break;
//       case "beds":
//         urlArr[index+4]=filterValue;
//         // objSent.Beds = filterValue;
//       break;
//       case "baths":
//         urlArr[index+5]=filterValue;
//         // objSent.Baths = filterValue;
//       break;
//       case "status":
//         urlArr[index+6]=filterValue;
//         // objSent.Status = filterValue;
//       //break;
//     }
    
//     //var lotSize1 = urlArr[4];
//     //console.log("city1",city1);
//     var makeURL = firstpart+"/"+urlArr[index]+"/"+urlArr[index+1] +"/"+urlArr[index+2]+"/"+urlArr[index+3]+"/"+
//     urlArr[index+4]+"/"+urlArr[index+5]+"/"+urlArr[index+6];
//     alert("makeURL"+makeURL);
//     return makeURL;
//   }