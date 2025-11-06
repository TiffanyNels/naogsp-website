import React, { useState } from 'react';

// Sample data structure for the news feed
const initialNews = [
    { id: 1, title: "NAOGSP Hosts Workshop on Local Content Regulations", date: "Oct 25, 2025", category: "Events", snippet: "Summary of the key takeaways from the recent seminar focused on empowering Namibian service providers.", link: "#" },
    { id: 2, title: "TotalEnergies Announces New Discovery in Orange Basin", date: "Oct 20, 2025", category: "Industry News", snippet: "Analysis of the implications of the latest exploratory success for local supply chain opportunities.", link: "#" },
    { id: 3, title: "NAOGSP Appoints New Board Member for Policy Advocacy", date: "Oct 15, 2025", category: "NAOGSP Announcements", snippet: "Official introduction of the new director and their mandate to drive supportive policies.", link: "#" },
    { id: 4, title: "Government Finalizes Revised Environmental Safety Standards", date: "Oct 10, 2025", category: "Policy Updates", snippet: "Detailed breakdown of the updated standards affecting offshore operations and service delivery.", link: "#" },
    { id: 5, title: "Press Release: NAOGSP Secures MOU with Angolan Counterpart", date: "Sep 28, 2025", category: "NAOGSP Announcements", snippet: "Official statement on the new collaboration agreement to foster regional partnership and expertise exchange.", link: "#" },
];

const categories = ["All", "Industry News", "NAOGSP Announcements", "Policy Updates", "Events"];

function NewsAndMedia() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredNews = initialNews.filter(item => 
        activeCategory === "All" ? true : item.category === activeCategory
    );

    return (
        <section className="news-media-page">
            
            <div className="page-intro">
                <h1>News & Media</h1>
                <h2>Stay informed with the latest developments in Namibia's offshore sector.</h2>
                <p>
                    Find official announcements, press releases, industry insights, and event coverage from NAOGSP and our partners.
                </p>
            </div>

            <div className="news-content-layout">
                
                {/* 1. Category Filter Navigation */}
                <div className="category-filter-nav">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 2. Main News Feed */}
                <div className="main-news-feed">
                    {filteredNews.length > 0 ? (
                        filteredNews.map(item => (
                            <div key={item.id} className="news-article-card content-card">
                                <span className="news-category-tag">{item.category}</span>
                                <h2>{item.title}</h2>
                                <p className="article-date">{item.date}</p>
                                <p>{item.snippet}</p>
                                <a href={item.link} className="read-more-link">Read More &raquo;</a>
                            </div>
                        ))
                    ) : (
                        <p>No news articles found for this category.</p>
                    )}
                </div>
                
                {/* 3. Sidebar Widgets */}
                <aside className="news-sidebar">
                    
                    {/* Newsletter Subscription Widget */}
                    <div className="sidebar-widget newsletter-widget">
                        <h3>Stay Up To Date</h3>
                        <p>Receive exclusive insights and event invites directly to your inbox.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your Email Address" required />
                            <button type="submit" className="btn primary small-btn">Subscribe</button>
                        </form>
                    </div>

                    {/* Quick Links / External Sources Widget */}
                    <div className="sidebar-widget quick-links-widget">
                        <h3>Industry Resources</h3>
                        <ul>
                            <li><a href="#" target="_blank">Namibian Energy Ministry News</a></li>
                            <li><a href="#" target="_blank">Local Content Policy Briefs</a></li>
                            <li><a href="#" target="_blank">Global Offshore Rig Market Report</a></li>
                        </ul>
                    </div>

                    {/* Photo/Video Gallery Placeholder */}
                    <div className="sidebar-widget gallery-widget">
                        <h3>Event Gallery</h3>
                        <p>View photos and videos from our latest events and workshops.</p>
                        <div className="gallery-placeholder">
                           
                        </div>
                        <a href="#" className="btn secondary small-btn">View Full Gallery</a>
                    </div>
                </aside>
            </div>
            
        </section>
    );
}

export default NewsAndMedia;