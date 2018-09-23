$(function(){
      //搜索-函数节流-监听input
      let timer = undefined
      $('input#search').on('input', function(e){
          if(timer){ window.clearTimeout(timer)}
  
          timer = setTimeout(function(){
              timer = undefined
  
              let $input = $(e.currentTarget)
              let value = $input.val().trim()
              if(value === ''){return}
  
              var query1 = new AV.Query ("Song");
              query1.contains("name", value);
              var query2 = new AV.Query ("Song");
              query2.contains("singer", value);
  
              var query = AV.Query.or(query1, query2);
              query.find().then(function(results){
                  $('#searchSong').empty()
                  if(results.length === 0){
                      $('#searchSong').html('没有结果')
                  }else{
                      for(var i=0; i<results.length; i++){
                          let song = results[i].attributes
                          let li = `
                              <li data-id="${results[i].id}">
                                  <a href="./song.html?id=${results[i].id}">
                                      ${song.name} - ${song.singer}</a>
                              </li>
                          `
                          $('#searchSong').append(li)
                      }
                  }
              })
          },400)
         
      })
})