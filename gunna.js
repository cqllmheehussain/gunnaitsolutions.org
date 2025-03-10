<meta name='viewport' content='width=device-width, initial-scale=1'/><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GUNNA IT SOLUTIONS</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>

<!-- Header Section -->
<header>
    <h1>GUNNA IT SOLUTIONS</h1>
    <p>Your Trusted IT Partner</p>
</header>

<!-- Navigation Bar -->
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<!-- Home Section -->
<section id="home" class="hero">
    <h2>We Build, Secure & Scale IT Solutions</h2>
    <p>Providing Web Development, Cybersecurity, Cloud Services & More</p>
    <a href="#services" class="btn">Explore Services</a>
</section>

<!-- About Section -->
<section id="about">
    <h2>About Us</h2>
    <p>GUNNA IT SOLUTIONS is a leading IT service provider specializing in web development, networking, cybersecurity, and cloud solutions. Our mission is to deliver cutting-edge technology to businesses and individuals, ensuring security, efficiency, and growth.</p>
    <h3>Our Core Values:</h3>
    <ul>
        <li>🔹 Innovation & Excellence</li>
        <li>🔹 Security & Reliability</li>
        <li>🔹 Customer Satisfaction</li>
        <li>🔹 24/7 Support & Service</li>
    </ul>
</section>

<!-- Services Section -->
<section id="services">
    <h2>Our IT Services</h2>

    <div class="service-box"><h3>Web Development</h3><p>We build high-quality, responsive websites using PHP, CSS, JavaScript, and SQL.</p></div>
    <div class="service-box"><h3>Networking & IT Support</h3><p>Setup & maintenance of LAN, WAN, VPNs, and cloud networks.</p></div>
    <div class="service-box"><h3>Cybersecurity & Ethical Hacking</h3><p>Security audits, penetration testing & digital forensics.</p></div>
    <div class="service-box"><h3>Cloud Computing & Hosting</h3><p>Cloud storage, domain hosting & server management.</p></div>
    <div class="service-box"><h3>Graphics Design & Branding</h3><p>Branding, UI/UX design & digital graphics.</p></div>
    <div class="service-box"><h3>Mobile App Development</h3><p>iOS & Android app development for businesses & startups.</p></div>
    <div class="service-box"><h3>IT Training & Certification</h3><p>Training in networking, cybersecurity & software development.</p></div>
    <div class="service-box"><h3>AI & Machine Learning</h3><p>AI automation, business intelligence & data analysis.</p></div>
    <div class="service-box"><h3>IoT & Smart Systems</h3><p>IoT automation, security, and smart devices integration.</p></div>
    <div class="service-box"><h3>Telecommunication Solutions</h3><p>VoIP, SIP, and telecom solutions for enterprises.</p></div>
</section>

<!-- Contact Section -->
<section id="contact">
    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:gunnaitsolutions@gmail.com">gunnaitsolutions@gmail.com</a></p>
    <p>WhatsApp: <a href="https://wa.me/+2349153652580">Chat Now</a></p>
    <p>Location: Kagara, Niger State</p>
</section>

<!-- Footer -->
<footer>
    <p>© 2024 GUNNA IT SOLUTIONS | All Rights Reserved</p>
</footer>

</body>
</html>
<style>body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
}

header {
    background: #004488;
    color: white;
    text-align: center;
    padding: 20px;
}

nav ul {
    list-style: none;
    text-align: center;
    padding: 0;
    background: #002244;
}

nav ul li {
    display: inline;
    margin: 10px;
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px 15px;
}

.hero {
    text-align: center;
    padding: 50px;
    background: #004488;
    color: white;
}

.btn {
    background: #f4f4f4;
    padding: 10px 20px;
    color: #004488;
    text-decoration: none;
    font-weight: bold;
}

#about, #services, #contact {
    padding: 30px;
    text-align: center;
    background: white;
}

.service-box {
    background: #eef;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    width: 45%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

footer {
    background: #002244;
    color: white;
    text-align: center;
    padding: 10px;
}
</style><script>document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
</script>