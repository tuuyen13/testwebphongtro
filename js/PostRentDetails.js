getHotPost();

function getHotPost() {
    const url1 = "http://localhost:3000/HotPostRent";
fetch(url1)
  .then((response) => response.json()) // parse the JSON from the server
  .then(function(post) {

    // lấy id từ localstorage
    var id = localStorage.getItem("ID_POST");
    // tìm post có id trùng với id lấy từ localstorage
    var post = post.find((post) => post.id == id);
    
    // gán phần tử post vào mảng mới
    var detailpost = [post];

    // lấy mảng mới và map ra html
    var html = detailpost.map(function(post) {
        let star  = post.star;
        return `<div class="col-md-8">
    <div class="aa-properties-content">            
      <div class="aa-properties-details">
      <div class="aa-properties-details-img">
   
            <div class="container-fluid p-0 mb-5">
              <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img class="w-100" src="${post.image1}" alt="Image">
                      </div>
                      <div class="carousel-item">
                          <img class="w-100" src="${post.image2}" alt="Image">
                      </div>
                      <div class="carousel-item">
                          <img class="w-100" src="${post.image3}" alt="Image">
                      </div>
                  </div> 
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
      </div>
 <div class="aa-properties-info">
   <h2>${post.title}</h2>
    <div id ="star" class="ps-2">` + showStar(star) + `
    </div>
   <span class="aa-price">${post.price}</span>
   <p>Địa chỉ: ${post.address}</p>     
 </div>

 <section class="section post-map"><div class="section-header"><h3 >Bản đồ</h3>
  <address class="section-description">Địa chỉ: ${post.address}</address></div>
  <div class="section-content">
    <div id="__maps_content" style="width:100%; height:300px;" data-lat="" data-long="" data-address="18/5 Nguyễn Hới, Phường An Lạc, Quận Bình Tân, Hồ Chí Minh">
      <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=18/5 Nguyễn Hới, Phường An Lạc, Quận Bình Tân, Hồ Chí Minh&amp;key=AIzaSyD6Coia3ssHYuRKJ2nDysWBdSlVlBCzKAw&amp;zoom=14" allowfullscreen=""></iframe>
    </div>
  </div>
</section>

    </div>           
  </div>
</div>
        <div class="col-md-4">
          <aside class="aa-properties-sidebar">
            <div class="aa-properties-single-sidebar">
              <div class="aa-properties-info">
                <h3>Cơ sở vật chất</h3>
              <ul>
                <li>${post.facilities[1]}</li>
                <li>${post.facilities[2]}</li>
                <li>${post.facilities[3]}</li>
                <li>${post.facilities[4]}</li>
                <li>${post.facilities[5]}</li>
                <li>${post.facilities[6]}</li>
                <li>${post.facilities[7]}</li>

              </ul>
              </div>

  <h3>Thông tin liên hệ</h3>

  <div class="aa-properties-single-sidebar">
    
      <h6>${post.contact[1]}</h6>
     <span>Số điện thoại: </span>
          <a  rel="nofollow" href="tel:${post.contact[2]}">
            <i></i> ${post.contact[2]}</a>
            <br>
      <span>Facebook: </span>
      <a  rel="nofollow" target="_blank" href="${post.FB}">
        <i></i> ${post.contact[1]}</a>
        <br>
      <span>Địa chỉ: </span>
      <span>${post.address} </span>
              <a class="btn btn-primary w-100" target="_blank" rel="nofollow"
              href="${post.Zalo}">Liên hệ Zalo</a>
              <br>
            <br>
          </div> 

  <h3>Các dịch vụ khác</h3>

    <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object" src="" >
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading"><a href="#">Chuyển nhà 24h</a></h4>
        <p>${post.description}</p>                
        
      </div>              
    </div>

    <div class="aa-properties-single-sidebar">

      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src="">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading"><a href="#">Thành Hưng House</a></h4>
          <p>Dịch vụ chuyển nhà trọn gói sinh viên của Taxi Tải Thành Hưng cam kết sẽ cung cấp cho các bạn sinh viên giá chuyển nhà tiết kiệm, thời gian vận chuyển nhanh chóng.</p>                
          
        </div>              
      </div>
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src="" >
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading"><a href="#">Kiến Vàng</a></h4>
          <p>Dịch vụ chuyển nhà sinh viên tại Kiến Vàng có nhiều điểm mạnh như thiết bị hiện đại, đa dạng, đội ngũ nhân viên được đào tạo bài bản, phục vụ chuyên nghiệp</p>                
          
        </div>              
      </div>
  </div>
</aside>
</div>`; 
    })
    document.getElementById("details").innerHTML = html;
   
  })

}

function showStar(star) {
  let html = '';
  for (let i = 1; i <= star; i++) {
    html += `<small class="fa fa-star text-primary"></small>`;
  }
  return html;
}





