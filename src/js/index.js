$(function () {
    //最新歌曲-js动态获取
    setTimeout(function () {
        $.get('./src/lyric/songs.json').then(function (response) {
            let items = response
            items.forEach((i) => {
                let $li = $(`
                <li class="lastes">
                    <a href="./song.html?id=${i.id}">
                        <h3>${i.name}</h3>
                        <p>
                            <svg class="sq"> 
                                    <use xlink:href="#icon-sq"></use>
                                </svg>  
                                ${i.singer}</p>
                            <svg class="play">
                                    <use xlink:href="#icon-play-cirded"></use>
                                </svg> 
                    </a>          
            </li>
                `)
                $('#lastesMusic').append($li)
            })
            $('#lastesMusicLoading').remove()
        }, function (error) {
            alert('获取歌曲失败了！')
        })
    }, 1000)

    //tab切换
    $('.siteNav').on('click', 'ol.tabItems>li', function (e) {
        let $li = $(e.currentTarget).addClass('active')
        $li.siblings().removeClass('active')
        let index = $li.index()
        $li.trigger('tabChange', index)
        $('.tabContent > li').eq(index).addClass('active')
            .siblings().removeClass('active')
    })

    $('.siteNav').on('tabChange', function (e, index) {
        //console.log(e,index)
        let $li = $('.tabContent > li').eq(index)
        if ($li.attr('data-downloaded') === 'yes') {
            return
        }
        if (index === 1) {
            setTimeout(function () {
                $.get('./hotSong.json').then(function (response) {
                    // console.log(response.content)
                    // $li.text(response.content)
                    let items = response
                    items.forEach((e) => {
                        let $li = $(`
                        <li>
                            <a href="./song.html?id=${e.id}">
                                <div class="listing">
                                    <span>${e.list}</span>
                                </div>
                                <div class="song">
                                    <h3>${e.name}</h3>
                                    <p class="hotLine">
                                        <svg class="sq"> 
                                                <use xlink:href="#icon-sq"></use>
                                            </svg>  
                                            ${e.singer}</p>
                                        <svg class="play">
                                                <use xlink:href="#icon-play-cirded"></use>
                                            </svg> 
                                </div>        
                            </a>          
                    </li>
                        `)
                        $('#hotMusic').append($li)
                    })
                    $('#lastesMusicLoading').remove()
                }, function (error) {
                    alert('获取歌曲失败')
                    $li.attr('data-downloaded', 'yes')
                })
            }, 500)
        } else if (index === 2) {
            return
            $.get('./src/lyric/page3.json').then((response) => {
                //console.log(response.content)
                $li.text(response.content)
                $li.attr('data-downloaded', 'yes')
            })
        }
    })



})