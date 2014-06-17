$(window).load(function() {
    setInterval(function(){
        $(".UFILikeLink").each(function(){
            var dataft = $(this).attr("data-ft");
            if(dataft != null){
                var json = $.parseJSON(dataft);
                if(json.tn == "?"){
                    $(this).html("ハラショー!を取り消す");
                }else{
                    $(this).html("ハラショー!");
                }
            }
        });
    },100);
});