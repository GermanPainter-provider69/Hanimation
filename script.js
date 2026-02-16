const posts = [
    {
        id: 1,
        category: "Technology",
        title: "The Future of AI in Web Development",
        excerpt: "Artificial Intelligence is reshaping how we build websites. From automated coding assistants to dynamic content generation, let's explore the next decade.",
        image: "https://picsum.photos/seed/tech1/800/400",
        date: "Oct 24, 2024",
        readTime: "5 min read",
        content: `
            <p>Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how we approach web development. In the past few years, we've seen the rise of tools that can generate code, optimize images on the fly, and even design user interfaces based on simple text descriptions.</p>
            
            <h2>The Role of Generative AI</h2>
            <p>Generative AI models are enabling developers to prototype faster than ever before. Instead of spending hours writing boilerplate code, developers can now describe what they need and let the AI handle the heavy lifting. This allows for more time to be spent on creative problem-solving and user experience design.</p>
            
            <ul>
                <li><strong>Automated Code Generation:</strong> Tools like GitHub Copilot are acting as pair programmers.</li>
                <li><strong>Dynamic Content:</strong> AI can personalize content for users in real-time.</li>
                <li><strong>Testing and Debugging:</strong> AI agents can swiftly identify bugs and suggest fixes.</li>
            </ul>

            <h2>What This Means for Developers</h2>
            <p>Some fear that AI will replace developers, but the reality is more nuanced. AI is a multiplier. It empowers a single developer to do the work of a team. However, it also raises the bar for quality. With basic coding becoming commodity, the value shifts to system architecture, security, and novel user experiences.</p>
            
            <p>The future isn't about AI replacing humans; it's about humans using AI to build things we couldn't even imagine a decade ago.</p>
        `
    },
    {
        id: 2,
        category: "Design",
        title: "Minimalism is Not Just 'Less'",
        excerpt: "True minimalism is about purpose. Removing the unnecessary to handle the significant. See how top brands are pivoting to cleaner aesthetics.",
        image: "https://picsum.photos/seed/design2/800/400",
        date: "Oct 22, 2024",
        readTime: "3 min read",
        content: `
            <p>Minimalism has long been a staple in design, but its definition is evolving. It is no longer just about white space and Helvetica; it is about intentionality. In a world saturated with information, design that clears the clutter to focus on what matters is more valuable than ever.</p>
            
            <h2>The Power of Negative Space</h2>
            <p>Negative space is not empty space; it is an active design element. It guides the user's eye, creates balance, and improves readability. By removing visual noise, we allow the content to shine. This approach is evident in the rebranding of major tech companies who are simplifying their logos and interfaces.</p>
            
            <h2>Function over Form</h2>
            <p>Modern minimalism prioritizes function. Every element on the screen must serve a purpose. If it doesn't help the user achieve their goal, it goes. This philosophy leads to faster load times, better accessibility, and a smoother user journey.</p>
        `
    },
    {
        id: 3,
        category: "Lifestyle",
        title: "Digital Nomad: Reality vs Dream",
        excerpt: "Working from a beach sounds perfect, until the Wi-Fi cuts out. A realistic look at the remote work lifestyle in 2024.",
        image: "https://picsum.photos/seed/travel3/800/400",
        date: "Oct 20, 2024",
        readTime: "8 min read",
        content: `
            <p>The digital nomad lifestyle is often portrayed as a permanent vacation. Instagram feeds are full of laptops on beach chairs and sunset cocktails. But the reality of working remotely while traveling is far more complex and demanding than the glossy photos suggest.</p>
            
            <h2>The Infrastructure Challenge</h2>
            <p>The biggest enemy of the digital nomad is unreliable internet. Finding a quiet place with a strong connection for a Zoom call can turn into a daily stress test. Furthermore, time zone differences can mean working long into the night or starting your day before dawn to sync with your team.</p>
            
            <h2>Loneliness and Community</h2>
            <p>Constant travel makes it hard to build deep relationships. You are always the new guy in town. While the freedom is intoxicating, the lack of a stable community can be isolating. Successful nomads often end up staying in one place for months at a time to build a routine and make friends.</p>
            
            <p>Ultimately, it is a rewarding lifestyle for those who value experiences over possessions, but it requires discipline, planning, and a high tolerance for uncertainty.</p>
        `
    },
    {
        id: 4,
        category: "Coding",
        title: "Why You Should Learn Rust Today",
        excerpt: "Memory safety without garbage collection? It sounds too good to be true, but Rust delivers. Here is why it is the most loved language.",
        image: "https://picsum.photos/seed/code4/800/400",
        date: "Oct 18, 2024",
        readTime: "12 min read",
        content: `
            <p>Rust has consistently topped the Stack Overflow Developer Survey as the most loved programming language. But what makes it so special? It solves a problem that has plagued systems programming for decades: memory safety without the performance cost of a garbage collector.</p>
            
            <h2>The Ownership Model</h2>
            <p>Rust's unique ownership model ensures that memory is managed efficiently at compile time. This eliminates entire classes of bugs, such as null pointer dereferences and buffer overflows, which are common in C and C++. The steep learning curve of the borrow checker is a small price to pay for the stability it provides.</p>
            
            <h2>WebAssembly and Beyond</h2>
            <p>Rust is also a first-class citizen in the world of WebAssembly (Wasm). Its small binary size and high performance make it ideal for running complex applications in the browser. From building high-performance web servers to writing operating systems, Rust is proving to be a versatile and future-proof tool.</p>
        `
    },
    {
        id: 5,
        category: "Gadgets",
        title: "Review: The New VR Headsets",
        excerpt: "Virtual Reality is finally hitting the mainstream with lighter, faster, and cheaper headsets. Are we ready for the Metaverse?",
        image: "https://picsum.photos/seed/vr5/800/400",
        date: "Oct 15, 2024",
        readTime: "6 min read",
        content: `
            <p>We have been promised a Virtual Reality revolution for years, but the hardware has always held it back. It was too heavy, too expensive, or required a powerful PC. The latest generation of standalone headsets changes everything. They are lighter, feature higher resolution displays, and offer seamless mixed reality pass-through.</p>
            
            <h2>Mixed Reality is the Key</h2>
            <p>The killer feature isn't just full immersion; it's the ability to blend the digital with the physical. High-fidelity color pass-through allows you to see your surroundings while interacting with virtual screens or objects. This opens up use cases beyond gaming, such as virtual multi-monitor setups for work or interactive learning experiences.</p>
            
            <h2>Is it Worth It?</h2>
             <p>For early adopters and gamers, absolutely. The library of content is growing, and the experience is genuinely 'wow'. For the average user, we are getting closer. The comfort and battery life still need improvement, but the vision of the Metaverse is finally coming into focus.</p>
        `
    },
    {
        id: 6,
        category: "Productivity",
        title: "Deep Work in a Distracted World",
        excerpt: "Reclaiming your focus is the superpower of the 21st century. Techniques to block out noise and get things done.",
        image: "https://picsum.photos/seed/work6/800/400",
        date: "Oct 10, 2024",
        readTime: "4 min read",
        content: `
            <p>In an economy that values information, the ability to focus without distraction is becoming increasingly rare. Notifications, emails, and social media creates a fragmented state of attention that prevents us from doing our best work. This is where the concept of 'Deep Work' comes in.</p>
            
            <h2>Scheduling Focus</h2>
            <p>Deep work doesn't happen by accident. You have to schedule it. This might mean blocking out two hours every morning where you disconnect from the internet and focus on a single, cognitively demanding task. Treat this time as sacrosanct.</p>
            
            <h2>Embracing Boredom</h2>
            <p>We have trained our brains to crave constant stimulation. To regain our focus, we must relearn how to be bored. Stop reaching for your phone the moment you have a second of downtime. By allowing your mind to rest, you strengthen your ability to concentrate when it counts.</p>
        `
    },
    {
        id: 7,
        category: "Finance",
        title: "Crypto: Is the Winter Over?",
        excerpt: "Bitcoin is rallying again. Analysts predict a bull run, but skeptics remain cautious. What should you do?",
        image: "https://picsum.photos/seed/money7/800/400",
        date: "Oct 05, 2024",
        readTime: "7 min read",
        content: `
            <p>The cryptocurrency market is known for its volatility, and the last 'crypto winter' was particularly harsh. However, recent price movements suggest a thaw. Bitcoin and Ethereum have seen significant gains, driven by institutional interest and the approval of spot ETFs.</p>
            
            <h2>Institutional Adoption</h2>
             <p>Unlike previous cycles driven by retail hype, this rally seems to be fueled by traditional finance. Major asset managers are entering the space, bringing legitimacy and deeper liquidity. This structural change could mean more stability, though regulation remains a wild card.</p>
            
            <h2>Caution is Key</h2>
            <p>Despite the optimism, the risks remain high. The technology is still maturing, and the market is rife with speculation. Investors should be wary of FOMO (Fear Of Missing Out) and stick to a long-term strategy rather than chasing quick pumps. The winter might be ending, but the weather is still unpredictable.</p>
        `
    }
];

// Determine if we are on the Feed page or Single Post page
const feedContainer = document.getElementById('blog-feed');
const singlePostContainer = document.getElementById('single-post-container');

function createAd() {
    const adDiv = document.createElement('div');
    adDiv.className = 'ad-container ad-inline';
    
    const adInline = document.createElement('ins');
    adInline.className = 'adsbygoogle';
    adInline.setAttribute('style', 'display:block; text-align:center;');
    adInline.setAttribute('data-ad-client', 'ca-pub-9917851032552239');
    adInline.setAttribute('data-ad-slot', '4567890123');
    adInline.setAttribute('data-ad-format', 'fluid');
    adInline.setAttribute('data-ad-layout', 'in-article');
    
    adDiv.appendChild(adInline);
    
    // Push ads to rendering queue
    if (window.adsbygoogle) {
        adsbygoogle.push({});
    }
    
    return adDiv;
}

function createCard(post) {
    // IMPORTANT: We use an <a> tag now to link to the blog page
    const card = document.createElement('a');
    card.href = `blog.html?id=${post.id}`;
    card.className = 'blog-card';

    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="card-image" loading="lazy">
        <div class="card-content">
            <span class="card-category">${post.category}</span>
            <h2 class="card-title">${post.title}</h2>
            <p class="card-excerpt">${post.excerpt}</p>
            <div class="card-meta">
                <span>${post.date}</span>
                <span>${post.readTime}</span>
            </div>
        </div>
    `;

    return card;
}

function renderFeed() {
    if (!feedContainer) return;

    feedContainer.innerHTML = '';

    posts.forEach((post, index) => {
        feedContainer.appendChild(createCard(post));

        // Logic: Insert ad after every 3rd post
        if ((index + 1) % 3 === 0 && index !== posts.length - 1) {
            feedContainer.appendChild(createAd());
        }
    });
}

function renderSinglePost() {
    if (!singlePostContainer) return;

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id')); // IDs are numbers in our local data

    const post = posts.find(p => p.id === postId);

    if (post) {
        // Update Title Tag with descriptive title (no generic placeholders)
        document.title = `${post.title} | NeonBlog`;

        // Add/Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', post.excerpt);
        }

        // Update canonical URL
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', `https://neonblog.com/blog.html?id=${post.id}`);
        }

        // Create structured data for the article
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
                "@type": "Person",
                "name": "Antigravity AI"
            },
            "publisher": {
                "@type": "Organization",
                "name": "NeonBlog",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://neonblog.com/logo.png"
                }
            },
            "articleSection": post.category,
            "keywords": [post.category.toLowerCase(), "blog", "article"]
        };

        // Remove existing structured data script if present
        const existingScript = document.querySelector('script[data-post-schema]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add new structured data script
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-post-schema', 'true');
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        singlePostContainer.innerHTML = `
            <article>
                <header class="article-header">
                    <span class="article-category">${post.category}</span>
                    <h1 class="article-title">${post.title}</h1>
                    <div class="article-meta">
                        <span>${post.date}</span>
                        <span>&bull;</span>
                        <span>${post.readTime}</span>
                        <span>&bull;</span>
                        <span>By Antigravity AI</span>
                    </div>
                    <img src="${post.image}" alt="${post.title}" class="article-image">
                </header>
                
                <div class="article-content">
                    ${post.content}
                </div>
            </article>

            <div class="ad-container ad-inline" style="margin-top: 4rem;">
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-9917851032552239"
                     data-ad-slot="5678901234"
                     data-ad-format="horizontal"
                     data-full-width-responsive="true"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        `;
    } else {
        singlePostContainer.innerHTML = `
            <div style="text-align: center; padding: 100px 0;">
                <h2>Post not found</h2>
                <a href="index.html" class="btn" style="margin-top: 20px;">Return Home</a>
            </div>
        `;
    }
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', () => {
    if (feedContainer) {
        renderFeed();
    } else if (singlePostContainer) {
        renderSinglePost();
    }
});
