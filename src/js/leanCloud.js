$(function(){
        //搜索-LeanCloud数据库储存
        var APP_ID = 'DsmzYKQwQyip4Tqxpo62dVjG-gzGzoHsz';
        var APP_KEY = 'Pm6Xbm4f2zYSeC3OvGtCjC7Q';    
        AV.init({
          appId: APP_ID,
          appKey: APP_KEY
        });
    //     var SongObject = AV.Object.extend('Song');//选着表名
    //     var songObject = new SongObject();//生成一条数据
    //     songObject.set({
    //         name:  'That Girl ',//数据里面的内容
    //         singer:'That Girl - Olly Murs',
    //         url:   'http://pexl24320.bkt.clouddn.com/That%20Girl.m4a',
    //         lyric:"\\n[00:1]胡维纳-That Girl\\n[00:00.00] 作曲 : 无\\n[00:00.20] 作词 : 无\\n[00:00.62]There's a girl but I let her get away曾经心爱的女孩 我却让她擦肩而过\\n[00:05.74]It's all my fault cause pride got in the way自尊心作祟 一切都是我的错\\n[00:11.19]And I'd be lying if I said I was ok若说无事 其实只是谎言未戳破\\n[00:16.35]About that girl the one I let get away那个女孩 我们曾擦肩而过\\n[00:21.26]I keep saying no我一直否认\\n[00:23.91]This can't be the way we're supposed to be这不该是我们的结果\\n[00:26.56]I keep saying no我一直否认\\n[00:29.35]There's gotta be a way to get you close to me一定还有办法让我们重新来过\\n[00:32.39]Now I know you gotta到现在我才明白\\n[00:33.64]Speak up if you want somebody要对所爱之人大声诉说\\n[00:36.36]Can't let him get away, oh no别让他错过\\n[00:39.20]You don't wanna end up sorry你不愿后悔无措\\n[00:41.66]The way that I'm feeling everyday不要像我这样 终日在悔恨中度过\\n[00:44.48]No no no no不要像我这样\\n[00:47.18]There's no home for the broken heart破碎的心 无家可归\\n[00:49.84]No no no no不要像我这样\\n[00:52.43]There's no home for the broken破碎的心 无家可归\\n[00:54.34]There's a girl but I let her get away曾经心爱的女孩 我却让她擦肩而过\\n[00:59.65]It's my fault cause I said I needed space全都因为我说需要空间 都是我的错\\n[01:05.05]I've been torturing myself night and day我不断折磨着自己 日出日落\\n[01:10.41]About that girl, the one I let get away那个女孩 我们曾擦肩而过\\n[01:15.17]I keep saying no我一直否认\\n[01:17.87]This can't be the way it was supposed to be这不该是我们的结果\\n[01:20.52]I keep saying no我一直否认\\n[01:23.27]There's gotta be a way to get you应该还有办法\\n[01:24.83]There's gotta be a way to get you一定还有办法\\n[01:26.04]Close to me让我们重新来过\\n[01:27.68]Speak up if you want somebody要对所爱之人大声诉说\\n[01:30.23]Can't let him get away, oh no别让他错过\\n[01:33.09]You don't wanna end up sorry你不愿后悔无措\\n[01:35.60]The way that I'm feeling everyday不要像我 终日在悔恨中度过\\n[01:38.44]No no no no不要像我这样\\n[01:40.94]There's no home for the broken heart破碎的心 无家可归\\n[01:43.65]No no no no不要像我这样\\n[01:46.30]There's no home for the broken破碎的心 无家可归\\n[01:49.50]No home for me无处可去\\n[01:52.00]No home cause I'm broken无家可归 失魂落魄\\n[01:54.67]No room to breathe无法呼吸\\n[01:56.83]And I got no one to bla-ame一切只能怪我自己\\n[02:00.22]No home for me无处可去\\n[02:02.74]No home cause I'm broken无家可归 失魂落魄\\n[02:04.34]About that girl那个女孩\\n[02:06.19]The one I let get away我们曾擦肩而过\\n[02:09.45]So you better你最好\\n[02:10.75]Speak up if you want somebody对所爱之人大声诉说\\n[02:13.30]You can't let him get away oh no别让他错过\\n[02:16.12]You dont wanna end up sorry你不愿后悔无措\\n[02:18.67]The way that I'm feeling everyday不要像我 终日在悔恨中度过\\n[02:21.42]No no no no不要像我这样\\n[02:24.13]There's no home for the broken heart破碎的心 无家可归\\n[02:26.83]No no no no不要像我这样\\n[02:29.54]There's no home for the broken破碎的心 无家可归\\n[02:32.71]You don't wanna lose at love不想失去所爱之人\\n[02:34.81]It's only gonna hurt too muchI唯有伤痛愈来愈深\\n[02:38.14]You don't wanna lose at love不想失去所爱之人\\n[02:40.04]It's only gonna hurt too muchI唯有伤痛愈来愈深\\n[02:43.51]You don't wanna lose at love不想失去所爱之人\\n[02:45.16]Cause There's no home for the broken heart心碎之人 无家可归\\n[02:47.56]About that girl那个女孩\\n[02:49.51]The one I let get away我们曾擦肩而过\\n"
            
    //     })
    //    var songObject2 = new SongObject()
    //    songObject2.set({
    //        name:  'Close To You',
    //        singer:'Carpenters',
    //        url:   'http://pexl24320.bkt.clouddn.com/Close%20To%20You.mp3',
    //        lyric:"\\n[00:1]Carpenters\\n[00:09.580]为什么鸟儿忽然出现\\n[00:16.000]每一次你靠近时\\n[00:22.300]就像我一样,它们一直盼望着\\n[00:27.900]靠近你\\n[00:31.110]为什么星星从夜空坠落\\n[00:37.900]每一次你走过时\\n[00:43.590]就像我一样,它们一直盼望着\\n[00:49.600]靠近你\\n[00:54.340]你出生的那一天\\n[00:56.930]天使们聚集在一起\\n[00:59.270]决定创造一个成真的美梦\\n[01:04.239]所以他们喷洒月亮的纤尘 于你金色的头发上\\n[01:08.300]于你澈蓝的眼眸中 点缀了星辉\\n[01:14.840]这就是为什么镇上所有的女孩\\n[01:20.950]都环绕着你\\n[01:26.580]就像我一样,她们一直盼望着\\n[01:32.400]靠近你\\n[01:59.400]在你诞生的那一天\\n[02:01.520]天使们聚在一起\\n[02:03.950]决定创造一个成真的美梦 于你金色的头发上\\n[02:08.859]所以他们喷洒月亮的纤尘\\n[02:12.260]于你澈蓝的眼眸中 点缀了星辉\\n[02:19.000]这就是为什么镇上所有的女孩\\n[02:25.179]都环绕着你\\n[02:31.000]就像我一样,她们一直盼望着\\n[02:36.600]靠近你\\n[02:41.649]就像我一样,她们一直盼望着\\n[02:48.190]靠近你\\n[03:04.560]靠近你\\n[03:15.250]靠近你\\n[03:26.109]靠近你\\n"
           
    //    })
    //    var songObject3 = new SongObject()
    //    songObject3.set({
    //        name:  'Last Christmas',
    //        singer:'Ariana Grande',
    //        url:   'http://pexl24320.bkt.clouddn.com/Last%20Christmas.mp3',
    //        lyric:"\\n[00:1]Ariana Grande[00:00.780]I hate that I remember\\n[00:03.330]I wish I could forget\\n[00:05.070]What you did last December\\n[00:07.570]You left my heart a mess (A mess)\\n[00:10.810]Boy, you blew it\\n[00:12.860]How could you do it? (Do it)\\n[00:17.400]last christmas\\n[00:19.370]I gave you my heart\\n[00:22.320]but the very next day, you gave it away\\n[00:27.660]this year\\n[00:30.620]to save me from tears\\n[00:32.700]I'll give it to someone......special\\n[00:37.150]But Last Christmas\\n[00:39.400]I gave you my heart\\n[00:41.340]But the very next day you gave it away\\n[00:46.560]This year\\n[00:48.810]To save me from tears\\n[00:51.100]I'll give it to someone special\\n[00:56.250]Thought we belong together\\n[00:58.600]At least that's what you said\\n[01:01.580]Should've known better\\n[01:03.180]You broke my heart again\\n[01:06.470]Boy, you blew it\\n[01:08.620]How could you do it?(Do it)\\n[01:14.460]But Last Christmas\\n[01:16.710]I gave you my heart\\n[01:18.710]But the very next day you gave it away\\n[01:23.760]This year\\n[01:26.410]To save me from tears\\n[01:28.510]I'll give it to someone special\\n[01:33.110]Last Christmas\\n[01:35.320]I gave you my heart\\n[01:37.310]But the very next day you gave it away\\n[01:42.470]This year\\n[01:44.720]To save me from tears\\n[01:46.860]I'll give it to someone special\\n[01:52.300]Ooooo yeeah\\n[01:54.350]How could you leave Christmas morning?\\n[01:58.590]You broke my heart with no warning\\n[02:02.640]Boy, you blew it\\n[02:04.680]How could you do it?(Do it)\\n[02:10.980]Last Christmas\\n[02:12.670]I gave you my heart\\n[02:15.320]But the very next day you gave it away\\n[02:21.070]This year\\n[02:22.570]To save me from tears\\n[02:25.020]I'll give it to someone special\\n[02:28.930]This is our Last (Last) Last (Last) Christmas.\\n[02:33.270]You broke my heart\\n[02:35.270]Last (Last) Last (Last) Christmas\\n[02:37.600]You broke my heart\\n[02:39.320]This year\\n[02:41.220]To save me from tears\\n[02:43.570]I'll give it to someone special.\\n[02:48.490]I hate that I remember\\n[02:51.140]I wish I could forget\\n[02:53.800]What you did last December\\n[02:56.090]You left my heart a mess (A mess)\\n[02:59.910]you blew it\\n[03:02.700]you do it? (Do it)\\n[03:07.750]I hate that I remember\\n[03:10.100]I wish I could forget\\n[03:12.690]What you did last December\\n[03:14.830]You left my heart a mess (A mess)\\n"
           
    //    })
    //    var songObject4 = new SongObject()
    //    songObject4.set({
    //        name:  'Havana',
    //        singer:'J.Fla',
    //        url:   'http://pexl24320.bkt.clouddn.com/Havana.mp3',
    //        lyric:"\\n[00:1]J.Fla\\n[00:01.490]Hey\\n[00:02.230]\\n[00:08.970]Havana, ooh na-na (ayy)\\n[00:11.800]Half of my heart is in Havana, ooh-na-na (ayy, ayy)\\n[00:16.360]He took me back to East Atlanta, na-na-na\\n[00:20.990]Oh, but my heart is in Havana (ayy)\\n[00:23.800]There's somethin' 'bout his manners (uh huh)\\n[00:26.080]Havana, ooh na-na\\n[00:27.330]\\n[00:27.410]He didn't walk up with that\\n[00:30.680](When he came in the room)\\n[00:31.980]He said there’s a lot of girls I can do with\\n[00:35.200](But I can't without you)\\n[00:36.370]I'm doin' forever in a minute\\n[00:39.780](That summer night in June)\\n[00:41.900]And papa says he got malo in him\\n[00:44.350]He got me feelin' like\\n[00:45.490]\\n[00:45.780]Oooh-oooh-ooh, I knew it when I met him\\n[00:51.210]I loved him when I left him\\n[00:54.100]Got me feelin' like\\n[00:54.950]Oooh-oooh-ooh, and then I had to tell him\\n[01:00.400]I had to go, oh na-na-na-na-na\\n[01:03.620]\\n[01:03.760]Havana, ooh na-na (ayy)\\n[01:06.580]Half of my heart is in Havana, ooh-na-na (ayy, ayy)\\n[01:11.260]He took me back to East Atlanta, na-na-na (uh huh)\\n[01:15.830]Oh, but my heart is in Havana (ayy)\\n[01:18.660]My heart is in Havana\\n[01:20.950]Havana, ooh na-na\\n[01:22.360]\\n[01:22.920]Jeffery\\n[01:23.810]Just graduated, fresh on campus, mmm\\n[01:28.080]Fresh out East Atlanta with no manners, damn\\n[01:31.510]Fresh out East Atlanta\\n[01:33.830]Bump on her bumper like a traffic jam (jam)\\n[01:36.640]Hey, I was quick to pay that girl like Uncle Sam (here you go, ayy)\\n[01:41.260]Back it on me, shawty cravin' on me\\n[01:43.830]Get to diggin' on me (on me)\\n[01:45.730]She waited on me (then what?)\\n[01:47.230]Shawty cakin' on me, got the bacon on me (wait up)\\n[01:50.300]This is history in the makin' on me (on me)\\n[01:52.360]Point blank, close range, that be\\n[01:54.670]If it cost a million, that's me (that's me)\\n[01:56.950]I was gettin' mula, man they feel me\\n[01:58.300]\\n[01:58.610]Havana, ooh na-na (ayy, ayy)\\n[02:01.540]Half of my heart is in Havana, ooh-na-na (oh, ayy, ayy)\\n[02:06.600]He took me back to East Atlanta, na-na-na (oh no)\\n[02:10.660]Oh, but my heart is in Havana (ayy)\\n[02:13.520]My heart is in Havana (ayy)\\n[02:15.840]Havana, ooh na-na\\n[02:17.320]\\n[02:17.400]Ooh na-na, oh na-na-na\\n[02:20.410]Take me back, back, back like\\n[02:21.890]Ooh na-na, oh na-na-na\\n[02:24.960]Take me back, back, back like\\n[02:26.400]Ooh na-na, oh na-na-na\\n[02:29.510]Take me back, back, back like\\n[02:30.920]Ooh na-na, oh na-na-na\\n[02:34.080]Take me back, back, back\\n[02:38.400]Yeah, ayy\\n[02:44.640]Oooh-oooh-ooh\\n[02:49.220]Oooh-oooh-ooh\\n[02:52.600]Take me back to my Havana...\\n[02:53.370]\\n[02:53.540]Havana, ooh na-na (ayy, ayy)\\n[02:56.390]Half of my heart is in Havana, ooh-na-na (oh, yeah)\\n[03:01.000]He took me back to East Atlanta, na-na-na\\n[03:05.500]Oh, but my heart is in Havana\\n[03:08.360]My heart is in Havana (ayy)\\n[03:10.650]Havana, ooh na-na\\n[03:12.300]\\n[03:12.350]Uh huh\\n[03:13.540]Oh na-na-na\\n[03:18.080]Oh na-na-na (hey)\\n[03:22.650]Oh na-na-na\\n[03:23.340]No, no, no, take me back\\n[03:27.230]Oh na-na-na\\n[03:29.070]Havana, ooh na-na\\n"
           
           
    //    })
    //    var songObject5 = new SongObject()
    //    songObject5.set({
    //        name:  "Fuckin' Perfect",
    //        singer:'P!nk',
    //        url:   'http://pexl24320.bkt.clouddn.com/Fuckin%27%20Perfect.mp3',
    //        lyric:"\\n[00:1]P!nk[00:01.190]Made a wrong turn\\n[00:03.550]Once or twice\\n[00:06.190]Dug my way out\\n[00:08.860]Blood and fire\\n[00:11.250]Bad decisions\\n[00:13.690]That's alright\\n[00:16.390]Welcome to my silly life\\n[00:21.600]Mistreated, misplaced, misunderstood\\n[00:25.640]Miss no way it's all good\\n[00:28.140]It didn't slow me down\\n[00:31.889]Mistaken\\n[00:34.020]Always second guessing\\n[00:36.800]Underestimated\\n[00:39.780]Look, I'm still around…\\n[00:43.280]\\n[00:43.790]Pretty, pretty please\\n[00:45.510]Don't you ever, ever feel\\n[00:48.300]Like your less than\\n[00:50.360]Fuckin' perfect\\n[00:53.300]Pretty, pretty please\\n[00:56.230]If you ever, ever feel\\n[00:58.100]Like your nothing\\n[01:00.740]You're fuckin' perfect to me\\n[01:04.580]\\n[01:06.300]You're so mean\\n[01:08.690]When you talk\\n[01:11.270]About yourself\\n[01:13.960]You are wrong\\n[01:16.330]Change the voices\\n[01:18.920]In your head\\n[01:21.600]Make them like you\\n[01:24.640]Instead\\n[01:26.820]So complicated\\n[01:29.160]Look how big you'll make it\\n[01:31.790]Filled with so much hatred\\n[01:34.800]Such a tired game\\n[01:38.500]It's enough\\n[01:39.579]I've done all i can think of\\n[01:41.760]Chased down all my demons\\n[01:45.100]see you same\\n[01:48.190]\\n[01:48.889]Pretty, pretty please\\n[01:51.990]Don't you ever, ever feel\\n[01:53.550]Like your less than\\n[01:55.950]Fuckin' perfect\\n[01:58.590]Pretty, pretty please\\n[02:01.720]If you ever, ever feel\\n[02:03.850]Like your nothing\\n[02:06.440]You're fuckin' perfect to me\\n[02:10.030]\\n[02:10.740]The world stares while i swallow the fear\\n[02:12.650]The only thing i should be drinking is an ice cold beer\\n[02:15.140]So cool in lying and I tried tried\\n[02:17.529]But we try too hard, it's a waste of my time\\n[02:20.620]Done looking for the critics, cuz they're everywhere\\n[02:23.250]They don't like my genes, they don't get my hair\\n[02:26.040]Stringe ourselves and we do it all the time\\n[02:28.700]Why do we do that?\\n[02:30.700]Why do I do that?\\n[02:31.460]Why do I do that?\\n[02:33.130]\\n[02:33.380]Yeah Ooh,\\n[02:42.400]Ohh pretty pretty pretty,\\n[02:44.620]Pretty pretty please don't you ever ever feel\\n[02:49.180]Like you're less then, fuckin' perfect\\n[02:54.490]Pretty pretty please if you ever ever feel\\n[02:59.500]Like you're nothing you're fuckin' perfect, to me\\n[03:10.390]You're perfect\\n[03:13.320]You're perfect\\n[03:16.620]Pretty, pretty please\\n[03:18.750]if you ever ever feel\\n[03:20.920]like you're nothing you're fucking perfect\\n[03:25.970]to me\\n[03:28.880]\\n"
           
           
    //    })
    //    let songs = [songObject, songObject2, songObject3, songObject4,songObject5]
    //    AV.Object.saveAll(songs).then(function(object){
    //          alert(成功)
    // })
})