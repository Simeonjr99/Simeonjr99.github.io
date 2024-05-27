< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > BantuBox < /title>
    <!-- Bootstrap CSS -->
    <
    link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
rel = "stylesheet" >
    <
    style >
    /* Your existing CSS styles here */

    body {
        margin: 0;
        font - family: 'Arial',
        sans - serif;
        background - color: #000;

            /* Set background color of the entire page to black */

            color: # ffffff;
        display: flex;
        flex - direction: column;
        align - items: center;
        justify - content: center;
        min - height: 100 vh;
        overflow: auto;
    }

.genre - list {
    list - style: none;
    padding: 0;
    display: flex;
    justify - content: center;
    margin - top: 20 px;
    background - color: #000;

            /* Set background color to black */

            padding: 20px;

            border-radius: 5px;

        }

        

        .genre-list li {

            margin: 0 10px;

        }

        

        .genre-list li a {

            text-decoration: none;

            color: # fff;
    padding: 10 px 20 px;
    border - radius: 5 px;
    background - color: #ff9900;
    transition: background - color 0.3 s ease;
    font - weight: bold;
}

.genre - list li a: hover {
    background - color: #e68a00;
}

.carousel - item img {
        height: 300 px;
        /* Set a fixed height for carousel images */
        width: 100 % ;
        /* Ensure images cover the entire carousel item */
        object - fit: cover;
    } <
    /style> <
    /head>

<
body >
    <
    header >
    <!-- Your header content -->
    <
    /header> <
    main >
    <
    div class = "container" >
    <
    h1 > BantuBox < /h1>
    <!-- Removed "Welcome to" and "Your favorite streaming platform!" -->
    <!-- Genre list -->
    <
    ul class = "genre-list" >
    <
    li > < a href = "#" > Action < /a></li >
    <
    li > < a href = "#" > Comedy < /a></li >
    <
    li > < a href = "#" > Drama < /a></li >
    <
    li > < a href = "#" > Horror < /a></li >
    <
    li > < a href = "#" > Science Fiction < /a></li >
    <
    li > < a href = "#" > Thriller < /a></li >
    <
    li > < a href = "#" > Romance < /a></li >
    <!-- Add more genres as needed -->
    <
    /ul>

<!-- Carousels for each genre -->
<
div id = "carouselExample"
class = "carousel slide mt-5"
data - bs - ride = "carousel" >
    <
    div class = "carousel-inner" >
    <!-- Action carousel -->
    <
    div class = "carousel-item active" >
    <
    img src = "placeholder.jpg"
class = "d-block w-100"
alt = "Image 1" >
    <
    /div> <
    div class = "carousel-item" >
    <
    img src = "placeholder.jpg"
class = "d-block w-100"
alt = "Image 2" >
    <
    /div> <
    div class = "carousel-item" >
    <
    img src = "placeholder.jpg"
class = "d-block w-100"
alt = "Image 3" >
    <
    /div>
    <!-- Add more carousel items for other genres -->
    <
    /div> <
    button class = "carousel-control-prev"
type = "button"
data - bs - target = "#carouselExample"
data - bs - slide = "prev" >
    <
    span class = "carousel-control-prev-icon"
aria - hidden = "true" > < /span> <
    span class = "visually-hidden" > Previous < /span> <
    /button> <
    button class = "carousel-control-next"
type = "button"
data - bs - target = "#carouselExample"
data - bs - slide = "next" >
    <
    span class = "carousel-control-next-icon"
aria - hidden = "true" > < /span> <
    span class = "visually-hidden" > Next < /span> <
    /button> <
    /div> <
    /div> <
    /main> <
    footer >
    <!-- Your footer content -->
    <
    /footer>

<!-- Bootstrap JS -->
<
script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" > < /script> <
    script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" > < /script>

<!-- Carousel Script -->
<
script >
    $(document).ready(function() {
        $('#carouselExample').carousel();
    }); <
/script> <
/body>

<
/html>