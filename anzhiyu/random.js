var posts=["2023/12/22/hello-world/","2023/12/23/Java基本数据类型与包装类型的存储方式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };