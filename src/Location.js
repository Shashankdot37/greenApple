import React from 'react'

function Location() {
  return (
    <>
    <h1>Our Location</h1>
    <div id="OurLocation">
      <div id="LocationIntro" class="col-md-6">
            <h5>Visit Us At:</h5>
            <p>Nyatapola</p>
            <p>Bhaktapur, Prov-3, Bagmati</p>
            <p>Phone: (+977) 456-7890</p>
            <p>Opening Hours: 10 AM - 10 PM</p>
        </div>
        <div id="Map" class="col-md-6">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.9498262312267!2d85.4290783504506!3d27.671360251491365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aafaf52a8d9%3A0x8552bfb072200f12!2sNyatapola%20Temple!5e0!3m2!1sen!2snp!4v1729665050313!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default Location
