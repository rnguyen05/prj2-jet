
$(document).ready(function() {
    $('.detailProperties').on('click',function(event){
      let pid =  $(this).data('pid');
      window.location.href = "/properties/detail/"+ pid;
    });
  });
 

    
