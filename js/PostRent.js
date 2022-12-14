getHotPost();


function getHotPost() {
    const url1 = "https://testing.moro.social/js/HotPostRent.json";
fetch(url1)
  .then((response) => response.json()) // parse the JSON from the server
  .then(function(posts) {
        var html = posts.map(function(post) {
            return `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="room-item shadow rounded overflow-hidden">
                <div class="position-relative">
                    <img class="img-fluid" src="${post.image1}" >
                    <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${post.price}</small>
                </div>
                <div class="p-4 mt-2">
                    <div class="d-flex justify-content-between mb-3">
                        <h5 class="mb-0">${post.title}</h5>
                        
                    </div>
                    <div class="d-flex mb-3">
                        <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>${post.bed} Bed</small>
                        <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i>${post.bath} Bath</small>
                        <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
                    </div>
                    <p class="text-body mb-3">${post.shortDes}</p>
                    <div class="d-flex justify-content-between">
                        <a class="btn btn-sm btn-primary rounded py-2 px-4" onclick="Details(${post.id})"> Chi Tiết </a>
                                            
                        <div>
                            <a class="btn btn-outline-light btn-social" href="${post.FB}"><img src="img/facebook-seeklogo.com.svg" width="25px" height="25px"></img></a>
                            <a class="btn btn-outline-light btn-social" href="${post.Zalo}"><img src="img/zalo-seeklogo.com.svg" width="25px" height="25px"></img></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  })
                 var htmls = html.join('');    
                 document.getElementById("HotPostRent").innerHTML = htmls;
})

}
function Details(id) {

    // lưu id vào localstorage
    localStorage.setItem("ID_POST", id);
    // chuyển trang
    window.location.href = "booking detail 1 copy.html";
    }





