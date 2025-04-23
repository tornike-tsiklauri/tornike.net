
/*
    https://www.youtube.com/watch?v=BuWF4QX8zSo
    https://www.youtube.com/watch?v=evuwn_7pdPU
    https://www.youtube.com/watch?v=ihwzG5-W8tE
    https://www.youtube.com/watch?v=Kevdt1T9daA
    https://www.youtube.com/watch?v=fh5yJG7No3w
    https://www.youtube.com/watch?v=jBPpT_DtJLM
    https://www.youtube.com/watch?v=oKpPd2hDrE4
*/

$('.create').click(function(){
    list = $('#youtubeUrls').val().split('\n');
    playlist = []
    for (str in list) {
        str = list[str];
        if (str.toLowerCase().contains('youtube.com/watch?v=')) {
            str = str.split('youtube.com\/watch?v=').slice(-1)[0]
            // console.log(str);
            playlist.push(str);
        }
    }
    
    if (playlist != [] && playlist !='' ) {
        newTab =  "target='_blank'"; // If wanted in a new tab //
        plStr = "https://www.youtube.com/embed/?playlist="+String(playlist)
        console.log(plStr);
        $('#playlistLink').html("<a href='"+plStr+"'"+newTab+">"+plStr+"</a>");
    } else {
  $('#playlistLink').html("<span class='nolink'>Add Some Youtube Links!  : )</span>");
  }
    
});