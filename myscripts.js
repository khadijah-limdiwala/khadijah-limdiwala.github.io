const collabs = {
  mason: {
    description:
      "Location - Bandra, Mumbai\n \n A live project where I worked on the entire process—from concept development to sourcing and execution. Collaborated on styling, material selection, and spatial arrangement to bring the display to life. Focused on creating a visually engaging setup that seamlessly aligned with Mason Home's brand aesthetic while ensuring every detail enhanced the overall experience.\n \n <b> Concept - Fluid Reality\n \n “Reality is not fixed—it shifts with time, perspective, and interaction. What you see depends on where you stand, reminding us that life, like time, is fluid and ever-changing” </b> \n \n This concept centers on the idea that reality is ever-shifting, influenced by emotions, perspectives, and interactions with space. It plays with fluidity in design, where colors, textures, and elements reflect the dynamic nature of life. Three nooks, each showcasing similar Mason Home products, are styled with distinct color schemes—one with warm earth tones, another with cool, calming hues, and the third with bold, contrasting shades. This display of variety symbolizes the transformative power of perception, where the same space evokes different emotions depending on the colors, creating a versatile and evolving experience that feels both intimate and expansive, inside and out.",
    mediaFolder: "media/mason",
  },
  abcd: {
    description:
      '<b>Live Installation Project at RED FORT</b> \n <b>ABCD IGNCA</b> \n \n Roots of Life A Fusion of Tradition and Resilience \n \n "Roots of Light" is an installation that celebrates the rich cultural heritage and resilience embodied by the traditional crafts of Sholapith and Tumba. Through this juxtaposition of materials, we seek to evoke an emotional connection to the past while inspiring a sense of wonder and appreciation for these ancient traditions in the present. By integrating Sholapith and Tumba into a contemporary context, "Roots of Light" serves as a reminder of the enduring legacy of craftsmanship and the importance of preserving our cultural heritage in an ever-changing world. Ultimately, "Roots of Light" is a testament to the power of tradition, resilience, and the timeless beauty of Indian craftsmanship. Through its evocative storytelling and emotional resonance, it seeks to create a lasting impact, fostering a deeper connection between the past, present, and future generations. \n \n <a href=\'https://www.linkedin.com/posts/isdimumbai_creative-craft-installation-at-red-fort-ugcPost-7274400617089912833-kP_E?utm_medium=ios_app&rcm=ACoAACvm-OYBSA1upjbptFJLaUgPx5AP92DUMr0&utm_source=social_share_send&utm_campaign=copy_link\'> Linkedin</a> \n <a href=\'https://www.instagram.com/reel/C5nb8Xiyhtg/?igsh=MWt1NWN0eTYyd3Y1aQ==\'> Reel</a>',
    mediaFolder: "media/abcd",
  },
  godrej: {
    description:
      "<b>Godrej Conscious Collective (Godrej x A+D) </b>\n <b>Live Installation Project </b>\n <b>Infinite Introspection Embracing Life's Wear and Tear</b>\n In a world that often overlooks mental well-being, this interactive installation aims to spark a crucial dialogue. Drawing inspiration from the Mobius strip and the symbolism of \"The Green Ribbon\", our structure becomes a beacon of mental health awareness and openness. We encourage you to step into this space and feel the wear and tear of life unfold, as you walk further and engage with your inner self. Let this be a haven for connection, self-discovery, and collective well-being.\n The installation serves as a powerful reminder to check in with your journey, acknowledging that we are all intricate fragments of our past. By fostering meaningful conversations and promoting introspection, we hope to create a sanctuary of positivity, initiating a full-circle moment where self-reflection leads to embracing one's whole self.\n <a href='https://www.instagram.com/reel/C0otHT9ymr4/?igsh=Y3Z4b3Ezdm9ibDNl'> Reel</a>",
    mediaFolder: "media/godrej",
  },
  conclave: {
    description:
      "<b> Design Conclave 2024 | ACETECH </b>\n Participated as a student presenter, showcasing our project to industry experts. Engaged in insightful discussions, received valuable feedback, and gained a deeper understanding of real-world design applications. The experience honed my presentation skills, reinforced the importance of critical thinking, and provided exposure to professional industry standards. \n <a href='https://www.linkedin.com/posts/isdimumbai_atlas-isdi-students-at-acetechs-design-conclave-activity-7242838348938002434-jSMT?utm_medium=ios_app&rcm=ACoAACvm-OYBSA1upjbptFJLaUgPx5AP92DUMr0&utm_source=social_share_send&utm_campaign=copy_link'> Linkedin</a>",
    mediaFolder: "media/conclave",
  },
  "am-office": {
    description:
      "<b>Alvarez and Marsal</b>\n <b>Live Office Space Design</b>\n The project at hand is a unique endeavor focused on transforming the workspace interior design of Alvarez and Marsal's Lower Parel establishment. The project is not merely about revamping a workspace; it's about innovation and creative expression. We were tasked with reimagining a corporate environment that encapsulates Alvarez's ethos while fostering an atmosphere conducive to productivity and creativity. Balancing functionality with aesthetics, they are pushing the boundaries of conventional design to create a harmonious and inspiring workspace.\n <a href='https://atlasuniversity.edu.in/news/atlas-and-alvarez-forge-pathbreaking-alliance-students-engage-in-real-world-workspace-transformation/'> Linkedin</a> \n <a href='https://www.instagram.com/reel/C06YUC_IJ1c/?igsh=OThtZ29uemVjN3Rw'> Reel</a>",
    mediaFolder: "media/am-office",
  },
  hostel: {
    description:
      "<b>UPGRAD LIVING</b>\n <b>Hostel Design - Dorm Room Layout </b>\n As part of a college team in my second year, I contributed to designing functional and aesthetically cohesive dorm rooms. Focused on optimizing space, incorporating ergonomic solutions, and selecting materials that balanced comfort with durability. Engaged in concept development, layout planning, and styling to create inviting and efficient living spaces.\n",
    mediaFolder: "media/hostel",
  },
};
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("gallery-overlay");
  const closeBtn = document.getElementById("gallery-close");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  const itemsContainer = document.getElementById("gallery-items");
  const collabItems = document.querySelectorAll(".live-collaboration-item");

  let currentIndex = 0;
  let currentMedia = [];

  const openGallery = (itemId) => {
    const data = collabs[itemId];
    currentMedia = buildMediaList(data);
    currentIndex = 0;
    displayItem(currentIndex);
    overlay.style.display = "block";
  };

  const closeGallery = () => {
    overlay.style.display = "none";
    itemsContainer.innerHTML = "";
  };

  const nextItem = () => {
    currentIndex = (currentIndex + 1) % currentMedia.length;
    displayItem(currentIndex);
  };

  const prevItem = () => {
    currentIndex =
      (currentIndex - 1 + currentMedia.length) % currentMedia.length;
    displayItem(currentIndex);
  };

  const displayItem = (index) => {
    itemsContainer.innerHTML = currentMedia[index];
  };

  // Build the media list in order: description -> MP4 videos -> images
  const buildMediaList = (data) => {
    const arr = [];
    // 1. Text description
    const formattedDescription = data.description.replace(/\n/g, "<br>");
    arr.push(`<p>${formattedDescription}</p>`);
    // 2. Videos (example placeholders, adjust as needed)
    if (data.mediaFolder.includes("mason")) {
      arr.push(
        `<video controls src="${data.mediaFolder}/video1.mp4" width=600 ></video>`
      );
    } else if (
      data.mediaFolder.includes("godrej") ||
      data.mediaFolder.includes("abcd")
    ) {
      arr.push(
        `<video controls src="${data.mediaFolder}/video1.mp4" width=300 ></video>`
      );
    }
    // arr.push(`<video controls src="${data.mediaFolder}/video2.mp4"></video>`);
    // 3. Images (example placeholders)
    if (data.mediaFolder.includes("godrej")) {
      arr.push(
        `<img src="${data.mediaFolder}/image1.png" alt="Image 1" width=600 />`
      );
      arr.push(
        `<img src="${data.mediaFolder}/image2.png" alt="Image 2" height=300 />`
      );
      arr.push(
        `<img src="${data.mediaFolder}/image3.png" alt="Image 3" width=600 />`
      );
    } else {
      arr.push(
        `<img src="${data.mediaFolder}/image1.jpg" alt="Image 1" width=400 />`
      );
      if (!data.mediaFolder.includes("hostel")) {
        arr.push(
          `<img src="${data.mediaFolder}/image2.jpg" alt="Image 2" width=400 />`
        );
        arr.push(
          `<img src="${data.mediaFolder}/image3.jpg" alt="Image 3" width=400 />`
        );
      }
      if (data.mediaFolder.includes("office")) {
        arr.push(
          `<img src="${data.mediaFolder}/image4.jpg" alt="Image 4" width=400 />`
        );
        arr.push(
          `<img src="${data.mediaFolder}/image5.jpg" alt="Image 5" width=400 />`
        );
        arr.push(
          `<img src="${data.mediaFolder}/image6.jpg" alt="Image 6" width=400 />`
        );
      }
    }
    return arr;
  };

  // Event listeners
  collabItems.forEach((item) => {
    item.addEventListener("click", () => {
      openGallery(item.id);
    });
  });
  closeBtn.addEventListener("click", closeGallery);
  nextBtn.addEventListener("click", nextItem);
  prevBtn.addEventListener("click", prevItem);
});
