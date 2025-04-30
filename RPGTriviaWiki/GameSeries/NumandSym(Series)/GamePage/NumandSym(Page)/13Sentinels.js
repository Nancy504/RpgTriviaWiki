function navigate(url) {
    // Redirects to the specified URL
    window.location.href = url;
}
//jquery code for the zoom in and zoom out for the image gallery 
(function($) {
    $.fn.zoomModal = function(options) {
        const settings = $.extend({}, options);

        // Create modal if not already present
        if ($("#zoomModal").length === 0) {
            $("body").append(`
                <div id="zoomModal" class="zoom-modal">
                    <span class="close">&times;</span>
                    <figure>
                        <img id="zoomedImage" src="#" alt="zoom-image">
                        <figcaption id="zoomCaption">
                            <a id="zoomLink" href="" target="_blank"></a>
                        </figcaption>
                    </figure>
                </div>
            `);
        }

        const $modal = $("#zoomModal");
        const $zoomedImage = $("#zoomedImage");
        const $zoomLink = $("#zoomLink");

        this.on("click", function() {
            const src = $(this).attr("src");
            $zoomedImage.attr("src", src);
            $zoomLink.attr("href", src).text(src.split('/').pop());
            $modal.fadeIn().addClass("show");
        });

        $modal.on("click", function(e) {
            if (e.target === this || $(e.target).hasClass("close")) {
                $modal.fadeOut().removeClass("show");
            }
        });

        return this; // for chaining
    };
}(jQuery));
$(document).ready(function() {
    $(".gallery img").zoomModal();
});

// Hover preview functionality using jquery plugin
(function ($) {
    $.fn.linkPreview = function (options) {
        const settings = $.extend({
            previewSelector: '#link-preview',
            frameSelector: '#preview-frame',
            offsetX: 15,
            offsetY: 15,
            hideDelay: 100
        }, options);

        const $preview = $(settings.previewSelector);
        const $frame = $(settings.frameSelector);
        let previewTimeout;

        function showPreview(url) {
            $frame.attr('src', url);
            $preview.show();
        }

        function hidePreview() {
            $frame.attr('src', '');
            $preview.hide();
        }

        function movePreview(x, y) {
            $preview.css({
                top: (y + settings.offsetY) + 'px',
                left: (x + settings.offsetX) + 'px'
            });
        }

        function attachPreviewEvents($el, getUrl) {
            $el.on('mouseover', function (e) {
                clearTimeout(previewTimeout);
                showPreview(getUrl($(this)));
                movePreview(e.pageX, e.pageY);
            });

            $el.on('mousemove', function (e) {
                movePreview(e.pageX, e.pageY);
            });

            $el.on('mouseout', function () {
                previewTimeout = setTimeout(hidePreview, settings.hideDelay);
            });
        }

        return this.each(function () {
            const $el = $(this);
            if ($el.is('a')) {
                attachPreviewEvents($el, el => el.attr('href'));
            } else if ($el.is('button') && $el.data('href')) {
                attachPreviewEvents($el, el => el.data('href'));
            }
        });
    };

        // Optional: initialize it on all matching elements at once
        $(document).ready(function () {
            $('a, button[data-href]').linkPreview();
        });
    })(jQuery);
    
    $('a, button[data-href]').linkPreview({
        offsetX: 10,
        offsetY: 20
    });
    
//Used to operate the button that sends users back to the top if needed 
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function() {
         // Show back-to-top button after scrolling down 200px
        if (window.scrollY > 200) { 
            backToTopButton.style.display = "flex";
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.opacity = "0";
            setTimeout(() => {
                if (window.scrollY <= 200) backToTopButton.style.display = "none";
            }, 300); // Delay hiding to allow fade-out effect
        }
    });

    backToTopButton.addEventListener("click", function() {
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

//Jquery UI widget for the video that is playing the trailer for the game 
$(document).ready(function () {
    $("#videoDialog").dialog({
      autoOpen: false,
      modal: true,
      width: 700,
      resizable: false,
      open: function () {
        const vid = $("#dialogVideo")[0];
        vid.currentTime = 0;
        vid.play();
      },
      close: function () {
        $("#dialogVideo")[0].pause();
      }
    });

    $("#openDialog").click(function () {
      $("#videoDialog").dialog("open");
    });
  });
document.getElementById("postButton").addEventListener("click", function () {
     // Handles creating a new post
    let postText = document.getElementById("postInput").value;
    if (postText.trim() === "") return;

    let postContainer = createPostElement(postText);
    document.getElementById("postsContainer").prepend(postContainer);
    document.getElementById("postInput").value = "";
});

// Function to create a new post or reply element
function createPostElement(text) {
    let container = document.createElement("div");
    container.classList.add("post");
    container.innerHTML = `
        <p class="post-text">${text}</p>
        <div class="options">⋮</div>
        <div class="options-menu">
            <button class="replyBtn">Reply</button>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            <button class="reportBtn">Report</button>
        </div>
        <div class="reply" style="display: none;">
            <textarea placeholder="Write a reply..."></textarea>
            <button class="submitReply">Submit Reply</button>
        </div>
        <button class="toggleReplies">Toggle Replies</button>
        <div class="replies-container" style="display: none;"></div>
    `;
    return container;
}

// Event delegation for reply, edit, delete, and toggle functionality
document.getElementById("postsContainer").addEventListener("click", function (event) {
    let target = event.target;

    // Handle options menu toggle
    if (target.classList.contains("options")) {
        let menu = target.nextElementSibling;
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // Show/hide reply box
    if (target.classList.contains("replyBtn")) {
        let replyBox = target.closest(".post").querySelector(".reply");
        replyBox.style.display = replyBox.style.display === "block" ? "none" : "block";
    }

    // Submit a reply
    if (target.classList.contains("submitReply")) {
        let replyBox = target.closest(".reply");
        let replyText = replyBox.querySelector("textarea").value;
        if (replyText.trim() === "") return;

        let replyDiv = createPostElement(replyText);
        replyDiv.classList.add("reply-message");

        let repliesContainer = target.closest(".post").querySelector(".replies-container");
        repliesContainer.appendChild(replyDiv);
        repliesContainer.style.display = "block"; // Ensure replies are shown

        // Clear input and hide box
        replyBox.querySelector("textarea").value = "";
        replyBox.style.display = "none";
    }

    // Toggle replies visibility
    if (target.classList.contains("toggleReplies")) {
        let repliesContainer = target.nextElementSibling;
        if (repliesContainer.children.length > 0) {
            repliesContainer.style.display = repliesContainer.style.display === "none" ? "block" : "none";
        }
    }

    // Edit a post or reply
    if (target.classList.contains("editBtn")) {
        let postContainer = target.closest(".post");
        let postTextElement = postContainer.querySelector(".post-text");
        let currentText = postTextElement.textContent;

        let editInput = document.createElement("textarea");
        editInput.value = currentText;
        editInput.style.width = "100%";
        editInput.style.height = "50px";
        editInput.style.marginTop = "5px";

        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.style.marginTop = "5px";

        postContainer.replaceChild(editInput, postTextElement);
        postContainer.appendChild(saveButton);

        saveButton.addEventListener("click", function () {
            let newText = editInput.value.trim();
            if (newText === "") return;

            let newTextElement = document.createElement("p");
            newTextElement.classList.add("post-text");
            newTextElement.textContent = newText;
            postContainer.replaceChild(newTextElement, editInput);
            postContainer.removeChild(saveButton);
        });
    }

    // Delete a post or reply
    if (target.classList.contains("deleteBtn")) {
        let postContainer = target.closest(".post");
        postContainer.remove();
    }
});
