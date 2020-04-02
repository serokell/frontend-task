# Description

Create a responsive main page of the blog with a list of all the posts. The page should contain a header with a logo and some menu items. For mobile devices, the menu should be moved to a hamburger menu. The header should stick to the window top while the page is being scrolled. The main part of the page is a list of posts which should look like a grid with three columns max. The number of columns depends on the window width. While scrolling the page, some more posts should be preloaded and inserted. Last element on the page is a footer. It may contain author's name, but it should be always on the bottom of page event if there are no posts (e.g. search returns no posts).

# Layout of the post

![post example](/post.jpg)

The post should contain an image with the same aspect ratio, title, some intro and a meta section with an avatar of the author, a name and the post date.

# What we expect

### Code

* Project contains one file with page's HTML, one file with page's JS and styles with the main file and imported components styles
* BEM methodology is used for the naming of class elements (`block__element-modifier`)
* Code is formatted according to the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

### Resulting page

* Page looks good on mobile devices
* Page looks similar in different browsers
* Header is always on the top of the page while scrolling
* The amount of columns in the post grid changes depending on the window size
* Post blocks look like in the provided image
* If there are no posts, the footer stays on the bottom of the page
