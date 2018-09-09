$(function(){
    //歌词显示
    $.get('/lyric.json').then(function(object){
        let {lyric} = object //let lyric = object.lyric
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function(string, index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            } 
        })
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })
    //播放
    let audio = document.createElement('audio')
    audio.src = "http://isure.stream.qqmusic.qq.com/C400000HxWei2wG2Rk.m4a?vkey=B942CACD10F1C4E895FA218098B7E5ABBAF0A65FF38DF4BEAB3868D8455BC7E6C70AFC9F21FD9B18B4A7BEEEEC7E8367AC3166D8B9B803F4&guid=797559602&uin=496355208&fromtag=66"
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
    $('.icon-pause').on('click', function(){
        audio.pause()
        $('.disc-container').removeClass('playing')
    })
    $('.icon-play').on('click', function(){
        audio.play()
        $('.disc-container').addClass('playing')
    })
})