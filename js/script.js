var data=[
    {   
        "product_img":"img/img1.png",
        "product_name":"Oppo",
        "product_price":3599,
        "traker":{"ShippingSoon":"done",
                    "Shipped":"done",
                    "Transit":"",
                    "OutforDelivered":"",
                    "Delivered":"",
                }
    },
    {   
        "product_img":"img/img2.png",
        "product_name":"Spark tecno",
        "product_price":2999,
        "traker":{"ShippingSoon":"done",
                    "Shipped":"",
                    "Transit":"",
                    "OutforDelivered":"",
                    "Delivered":"",
                }
    },
    {   
        "product_img":"img/img3.png",
        "product_name":"Samsung",
        "product_price":5000,
        "traker":{"ShippingSoon":"done",
                    "Shipped":"done",
                    "Transit":"done",
                    "OutforDelivered":"done",
                    "Delivered":"",
                }
    },
]

var product=document.querySelector('.container');
for (var i = 0; i < data.length; i++){
    var fetch = document.querySelector('.container').innerHTML;
    
    product.innerHTML= fetch+
    '<div class="product">'+
        '<div class="product__img">'+
            '<img src="'+data[i]["product_img"]+'" alt="img">'+
        '</div>'+
        '<div class="product__info">'+
            '<div class="product__details">'+
                '<h2>'+data[i]["product_name"]+'</h2>'+
                '<P>$'+data[i]["product_price"]+'/-</P>'+
            '</div>'+
            '<div class="product__tracker">'+
                '<ul class="tracker">'+
                    '<li class="tracker__checkpoint '+data[i]["traker"]["ShippingSoon"]+'">'+
                        '<span class="tracker__flag">'+
                            '<i class="fas fa-check"></i>'+
                        '</span>'+
                        '<span class="tracker__text">Shipping <br>Soon</span>'+
                    '</li>'+
                    '<li class="tracker__checkpoint '+data[i]["traker"]["Shipped"]+'">'+
                        '<span class="tracker__flag">'+
                            '<i class="fas fa-check"></i>'+
                        '</span>'+
                        '<span class="tracker__text">Shipped</span>'+
                    '</li>'+
                    '<li class="tracker__checkpoint '+data[i]["traker"]["Transit"]+'">'+
                        '<span class="tracker__flag">'+
                            '<i class="fas fa-check"></i>'+
                        '</span>'+
                        '<span class="tracker__text">In <br>Transit</span>'+
                    '</li>'+
                    '<li class="tracker__checkpoint '+data[i]["traker"]["OutforDelivered"]+'">'+
                        '<span class="tracker__flag">'+
                            '<i class="fas fa-check"></i>'+
                        '</span>'+
                        '<span class="tracker__text">Out for <br>Delivery</span>'+
                    '</li>'+
                    '<li class="tracker__checkpoint '+data[i]["traker"]["Delivered"]+'">'+
                        '<span class="tracker__flag">'+
                            '<i class="fas fa-check"></i>'+
                        '</span>'+
                        '<span class="tracker__text">Delivered</span>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>';
}