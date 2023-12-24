var posts=["2023/12/23/Java基本数据类型与包装类型的存储方式/","2023/12/24/Java基础-优先队列PriorityQueue详解/","2023/12/23/大数据基础-伪分布式hadoop集群搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };