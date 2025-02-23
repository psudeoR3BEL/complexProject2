$(document).ready(function () {

    function initializeTilt() {
        $('.post').tilt({
            maxTilt: 15,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1.02,
            speed: 300,
            glare: true,
            maxGlare: 0.5
        });
    }

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": '#ffffff'
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    $('#toggle-theme').click(function () {
        const currentTheme = $('body').attr('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        $('body').attr('data-theme', newTheme);

        $(this).html(newTheme === 'dark' ? '<i class="fas fa-moon"></i> / <i class="fas fa-sun"></i>' : '<i class="fas fa-sun"></i> / <i class="fas fa-moon"></i>');
    });

    function createPostElement(post) {
        return `
            <div class="col-md-4">
                <div class="post">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="post-content">
                        <h3>${post.title}</h3>
                        <p>${post.description}</p>
                        <button class="btn btn-neon">Like</button>
                        <button class="btn btn-neon">Comment</button>
                    </div>
                </div>
            </div>
        `;
    }

    let posts = [
        { title: "Post 1", description: "Description for Post 1", image: "img/post1.jpg" },
        { title: "Post 2", description: "Description for Post 2", image: "img/post2.jpg" },
        { title: "Post 3", description: "Description for Post 3", image: "img/post3.jpg" },
        { title: "Post 4", description: "Description for Post 4", image: "img/post4.jpg" },
        { title: "Post 5", description: "Description for Post 5", image: "img/post5.jpg" },
        { title: "Post 6", description: "Description for Post 6", image: "img/post6.jpg" }
    ];

    function appendPosts(posts) {
        const feed = $('#feed');
        posts.forEach(post => {
            const postElement = createPostElement(post);
            feed.append(postElement);
        });

        initializeTilt();
    }

    appendPosts(posts);

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            const newPosts = [
                { title: "New Post 1", description: "Description for New Post 1", image: "img/post1.jpg" },
                { title: "New Post 2", description: "Description for New Post 2", image: "img/post2.jpg" }
            ];
            appendPosts(newPosts);
        }
    });

    gsap.from(".navbar", { duration: 1, y: '-100%', ease: 'bounce' });
    gsap.from(".story", { duration: 1, opacity: 0, scale: 0.5, stagger: 0.2, ease: "back.out(1.7)" });

    $(document).on('mouseenter', '.btn-neon', function () {
        gsap.to(this, { duration: 0.2, scale: 1.1, yoyo: true, repeat: 1 });
    });

    function showNotification(message) {
        const notification = $('<div class="notification">' + message + '</div>');
        $('body').append(notification);
        gsap.to(notification, {
            duration: 0.5,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            onComplete: function () {
                gsap.to(notification, {
                    duration: 0.5,
                    delay: 3,
                    x: 100,
                    opacity: 0,
                    ease: "power2.in",
                    onComplete: function () {
                        notification.remove();
                    }
                });
            }
        });
    }

    $('#feed').on('click', '.btn-neon', function(){
        showNotification('You liked a post!');
    });

    $('.fa-comment').click(function () {
        $('#chatModal').modal('show');
    });

    $('#chatModal').on('shown.bs.modal', function () {
        gsap.from('.chat-message', { duration: 0.5, opacity: 0, y: 50, stagger: 0.2 });
    });

    initializeTilt();
});