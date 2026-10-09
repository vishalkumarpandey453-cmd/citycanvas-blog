
const stories = [
  {
    title: "How Technology Is Changing Our Lives",
    category: "Technology",
    description: "Discover how digital tools and artificial intelligence are changing the way we learn and work."
  },
  {
    title: "The Beauty of Exploring New Places",
    category: "Travel",
    description: "Travel opens our minds to new cultures, people, experiences, and perspectives."
  },
  {
    title: "Small Habits, Big Results",
    category: "Lifestyle",
    description: "Simple daily habits can improve focus, productivity, and personal growth."
  },
  {
    title: "A Beginner's Guide to Artificial Intelligence",
    category: "Technology",
    description: "Learn how AI works and why it is becoming important in our everyday lives."
  },
  {
    title: "Finding Inspiration in Everyday Life",
    category: "Lifestyle",
    description: "Sometimes the best ideas come from ordinary moments and experiences."
  },
  {
    title: "Discovering the World Through Food",
    category: "Travel",
    description: "Explore how local dishes tell stories about culture, tradition, and history."
  }
];

const grid = document.getElementById("storyGrid");

function displayStories(category = "All") {
  grid.innerHTML = "";

  const filteredStories = category === "All"
    ? stories
    : stories.filter(story => story.category === category);

  filteredStories.forEach(story => {
    const card = document.createElement("article");
    card.className = "story-card";

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "category";
    categoryLabel.textContent = story.category;

    const heading = document.createElement("h3");
    heading.textContent = story.title;

    const description = document.createElement("p");
    description.textContent = story.description;

    const link = document.createElement("a");
    link.className = "read-link";
    link.href = "#about";
    link.textContent = "Discover story ↗";

    card.append(categoryLabel, heading, description, link);
    grid.appendChild(card);
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    displayStories(button.dataset.category);
  });
});

document.getElementById("newsletterForm")
  .addEventListener("submit", event => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("message").textContent =
      `Thanks for your interest, ${email}! This is a demo form.`;

    event.target.reset();
  });

document.getElementById("menuToggle")
  .addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
  });

displayStories();
