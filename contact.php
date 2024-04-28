<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>GovHub Directory - Your Gateway to Government Resources</title>
</head>

<body class=" font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mt-16">

    <!-- ----------------------------------Nav Bar---------------------------- -->

    <nav
        class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="assets/logo.png" class="h-8" alt="GovWeb Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GovWeb</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button id="toggleButton" data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <button type="button"
                    class="hidden md:inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Wanna Contribute?
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="index.html"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="listing.html"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">View
                            All</a>
                    </li>
                    <li>
                        <a href="about.html"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About
                            Us</a>
                    </li>
                    <li>
                        <a href="contact.php"
                            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                            aria-current="page">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- ----------------------------------Main---------------------------- -->


    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical
                issue? Want to send feedback? Wanna Reach Us Out? Let us know.</p>
            <?php
            // process_form.php

            // Check if the form has been submitted
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Define the recipient email address
                $to = "govweb@asanjeev.com.np";

                // Get the form data
                $email = $_POST['email'];
                $subject = $_POST['subject'];
                $message = $_POST['message'];

                // Construct the email body
                $body = "From: $email\n\n";
                $body .= "Subject: $subject\n\n";
                $body .= "Message:\n$message";

                // Send the email
                if (mail($to, $subject, $body)) {
                    echo "<p class='text-green-500'>Thank you for your message!</p>";
                } else {
                    echo "<p class='text-red-500'>Oops! Something went wrong. Please try again later.</p>";
                }
            }
            ?>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        email</label>
                    <input type="email" id="email" name="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
placeholder="yourmail@domain.com" required>
</div>
<div>
<label for="subject"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
<input type="text" id="subject" name="subject"
                     class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                     placeholder="Let us know how we can help you" required>
</div>
<div class="sm:col-span-2">
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
message</label>
<textarea id="message" name="message" rows="6"
                     class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="Leave Us Message"></textarea>
</div>
<button type="submit"
                 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
Message Us
</button>
</form>
</div>
</section>
<!-- ----------------------------------Footer---------------------------- -->
<footer
    class="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"
            class="hover:underline">aCrazyPOTATO</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="about.html" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="https://github.com/Know-Nepal/government-websites/blob/main/LICENSE"
                class="hover:underline me-4 md:me-6" target="_blank">Licensing</a>
        </li>
        <li>
            <a href="contact.php" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
<script src="assets/js/app.js"></script>