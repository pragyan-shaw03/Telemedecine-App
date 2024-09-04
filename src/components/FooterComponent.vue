<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <!-- About Section -->
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p class="mt-3">
                        We are a team of passionate developers dedicated to creating the best user experiences.
                        Our goal is to build responsive and engaging web applications for our clients.
                    </p>
                </div>
                <!-- Quick Links -->
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled mt-3">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <!-- Contact Info -->
                <div class="col-md-4">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled mt-3">
                        <li><i class="fas fa-map-marker-alt"></i> 1234 Street, City, Country</li>
                        <li><i class="fas fa-phone"></i> +123 456 7890</li>
                        <li><i class="fas fa-envelope"></i> info@example.com</li>
                    </ul>
                    <!-- Social Media Icons -->
                    <div class="social-icons mt-3">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <hr class="mt-4">
            <!-- Footer Bottom -->
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0">Designed with <i class="fas fa-heart text-danger"></i> by Your Team</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
        /* Custom Footer Styles */
        .footer {
            background-color: #0380fd;
            color: #ffffffcf;
            padding: 40px 0;
            margin: 3rem 0 0;
        }

        .footer a {
            color: #ffffffcf;
            text-decoration: none;
        }

        .footer a:hover {
            color: #fff;
            text-decoration: underline;
        }

        .footer .social-icons a {
            font-size: 20px;
            margin-right: 15px;
            color: #ffffffcf;
        }

        .footer .social-icons a:hover {
            color: #fff;
        }

        .footer .form-control {
            border-radius: 50px;
            border: none;
            padding: 10px 20px;
        }

        .footer .btn {
            border-radius: 50px;
            background-color: #ffffffcf;
            color: #fff;
            padding: 10px 20px;
        }

        .footer .btn:hover {
            background-color: #fff;
            color: #ffffffcf;
        }
    </style>