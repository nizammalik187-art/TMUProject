import React from 'react'

const Blog = () => {
  return (
    <div class="container-fluid blog py-5">
      <div class="container py-5">
        <div class="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="sub-style">
            <h4 class="sub-title px-3 mb-0">Our Blog</h4>
          </div>
          <h1 class="display-3 mb-4">Premium Bike Rentals for Every Adventure   </h1>
          <p class="mb-0">Explore the city on two wheels with our top-notch bike rentals. Whether you're a local or a visitor, our bikes are perfect for discovering new places and enjoying the ride. Choose from a variety of models and experience the freedom of cycling!</p>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="blog-item rounded">
              <div class="blog-img">
                <img src="img/blog-1.jpg" class="img-fluid w-100" alt="Image" />
              </div>
              <div class="blog-centent p-4">
                <div class="d-flex justify-content-between mb-4">
                  <p class="mb-0 text-muted"><i class="fa fa-calendar-alt text-primary"></i> 01 Jan 2045</p>
                  <a href="/" class="text-muted"><span class="fa fa-comments text-primary"></span> 3 Comments</a>
                </div>
                <a href="/" class="h4">Explore Nanitaal</a>
                <p class="my-4">Discover the Nanitaal like never before with our high-quality bike rentals,</p>
                <a href="/" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
            <div class="blog-item rounded">
              <div class="blog-img">
                <img src="img/blog-2.jpg" class="img-fluid w-100" alt="Image" />
              </div>
              <div class="blog-centent p-4">
                <div class="d-flex justify-content-between mb-4">
                  <p class="mb-0 text-muted"><i class="fa fa-calendar-alt text-primary"></i> 01 Jan 2045</p>
                  <a href="/" class="text-muted"><span class="fa fa-comments text-primary"></span> 3 Comments</a>
                </div>
                <a href="/" class="h4">Explore Bheamtaal</a>
                <p class="my-4">Discover the city like never before with our high-quality bike rentals,</p>
                <a href="/" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
            <div class="blog-item rounded">
              <div class="blog-img">
                <img src="img/blog-3.jpg" class="img-fluid w-100" alt="Image" />
              </div>
              <div class="blog-centent p-4">
                <div class="d-flex justify-content-between mb-4">
                  <p class="mb-0 text-muted"><i class="fa fa-calendar-alt text-primary"></i> 01 Jan 2045</p>
                  <a href="/" class="text-muted"><span class="fa fa-comments text-primary"></span> 3 Comments</a>
                </div>
                <a href="/" class="h4">Explore Haldwani</a>
                <p class="my-4">Discover the city like never before with our high-quality bike rentals,</p>
                <a href="/" class="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog