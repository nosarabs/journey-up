console.log("Devlog ready to go!");

// Array simulating the posts in the "posts" folder
const posts = [
    { title: "The Journey Begins", date: "Mar 12, 2025", file: "posts/the-journey-begins.html" },
    // { title: "Devlog #2", date: "Mar 20, 2025", file: "posts/devlog-2.html" }
    // Add more posts as you create them
  ];
  
  // Function to fetch and display a post's content
  const fetchPostContent = async (post) => {
    try {
      const response = await fetch(post.file);
      const content = await response.text();
      const element = document.createElement('div');
      element.classList.add('card');
      element.innerHTML = content;
      const brk = document.createElement('br');
      // Append the post content to the main container
      document.getElementById('posts-list').appendChild(element);
      document.getElementById('posts-list').appendChild(brk);
    } catch (error) {
      console.error("Error fetching post content:", error);
    }
  };
  
  // Loop through the posts array and fetch the content of each post
  posts.forEach(post => fetchPostContent(post));
  