<script type="ts">
    import { page } from '$app/stores';
  </script>
  

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="css/style.css">

<!-- <div id="loader"> </div> -->
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark navigation fixed-top">
    <div id="nav-border" class="nav-border"></div>
    <div class="container-fluid nav-container">
      <a class="navbar-brand" href="#">
        <img src="images/logo-white.png" class="img-fluid" alt="" height="60">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 menu">
          <li><a href="#times">Times</a></li>
          <li><a href="#directions">Directions</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#about">About us</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="hero-area th-fullpage" data-parallax="scroll" data-image-src="images/hero3-min.jpg" data-bleed="100" data-ios-fix="false" data-android-fix="false">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="hero-text">Worship, Charity & Community Welfare in Widnes</h1>
        </div>
      </div>
    </div>
  </header>

  <div id="times" style="position: relative; top: -86px;"></div>
  <!-- <section class="time-section" data-parallax="scroll" data-image-src="images/fabrictiled.jpg" data-z-index="-99"  data-ios-fix="false" data-android-fix="false"> -->
  <section class="time-section">
    <div class="text-center">
      <h2 class="title">Prayer Timings</h2>
    </div>
    <!-- Case Study Description
        top section -->
    <div class="time-section-content">
      <div class="container">


        <div class="grid lg:grid-cols-5 items-center">
            <div class="content">
                <h4>FAJR</h4>
                <p>{$page.data.fajr}</p>
            </div>
            <div class="content">
                <h4>DHUHR</h4>
                <p>{$page.data.dhur}</p>
            </div>
            <div class="content">
                <h4>ASR</h4>
                <p>{$page.data.asr}</p>
            </div>
            <div class="content">
                <h4>MAGHRIB</h4>
                <p>{$page.data.maghrib}</p>
            </div>
            <div class="content">
                <h4>ISHA</h4>
                <p>{$page.data.isha}</p>
            </div>
        </div>
      </div>
      <a href="images/April2022Timetable.jpeg" download="April2022Timetable.jpeg"><button class="btn btn-default btn-main">View Timetable</button></a>
    </div>
  </section>

  <div id="directions" style="position: relative; top: -86px;"></div>
  <section class="directions">
    <div class="section">
      <div class="text-center">
        <h2 class="title">Directions</h2>
      </div>
      <div class="directions-content">
        <div class="container">
          <p><b>ADDRESS:</b> 31-35 Alforde St, Widnes. WA8 7TR</p>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/front1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/front2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/front3.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- <div class="modal-header">
          
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <button type="button" class="btn-close ttt" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-body">
          <h4 class="modal-title" id="exampleModalLabel">Widnes Mosque Jumaa</h4>
          <hr>
          <p>
            Please come join us on: <br/>
            Friday 8th April, Jumaa begins 1:30pm <br/>
          </p><p>
            Please arrive early to view our facilities <br/>
            There is plenty of parking available in the very close vicinity of the mosque <br/>
            Please park responsibly. Be considerate to all the neighbours <br/>
            Do not park at the rear of the mosque <br/>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div id="donate" style="position: relative; top: -86px;"></div>
  <section class="donate" data-parallax="scroll" data-image-src="images/donatebanner.jpg" data-bleed=200  data-ios-fix="false" data-android-fix="false">
    <div class="section">
      <div class="text-center">
        <h2 class="title">Donate</h2>
      </div>
      <div class="donate-content">
        <div class="container text-center">
          <p>You can donate to our Masjid here</p>
          <div class="details">
            <p><b>Account Name:</b> Widnes Deen Center</p>
            <p><b>Sort Code:</b> 16-24-06</p>
            <p><b>Account Number:</b> 20374041</p>
          </div>
          <!-- <button class="btn btn-default btn-main">Donate</button> -->
        </div>
      </div>
    </div>
    <!-- <div class="section" >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="hero-text">Worship, Charity & Community Welfare in Widnes</h1>
          </div>
        </div>
      </div>
    </div> -->
  </section>

  <div id="about" style="position: relative; top: -86px;"></div>
  <section class="about">
    <div class="section">
      <div class="text-center">
        <h2 class="title">About Us</h2>
      </div>
      <div class="about-content">
        <div class="container text-center">
          <p>Widnes Deen Center is the body that helps the Widnes Islamic Centre to function. 
            The Associations role is to provide all manner of Islamic functions, events and general day-to-day running of the centre.</p>
          <!-- <button class="btn btn-default btn-main">Read More</button> -->
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-top row">
        <!-- <div class="col-md-4"> -->
          <div class="footer-address">
            <h3 class="footer-title">Address</h3>
            <p>31-35 Alforde St, Widnes. WA8 7TR</p>
          </div>
        <!-- </div> -->
        <!-- <div class="col-md-4">
          <div class="footer-social-media">
            <h3 class="footer-title">Contact</h3>
            <p class="contact-address">
              Phone: <a href="tel:+610383666274">-</a><br>
              Email: <a href="mailto:info@info.com">-</a>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="footer-social-media">
            <h3 class="footer-title">Keep in touch</h3>
            <ul class="footer-media-link">
              <li><a href="#"><i class="tf-ion-social-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="tf-ion-social-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="tf-ion-social-instagram-outline" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div> -->
      </div>
      <div class="footer-nav text-center">
        <div class="col-md-12">
          <ul>
            <li><a href="#times">Times</a></li>
            <li><a href="#directions">Directions</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center">
        <div class="col-md-12">
          <div class="copyright">
            <p>&copy; 2022 All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

