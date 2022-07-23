import React from "react";
import { MdUpdate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./RecentBlogCard.scss";

function RecentBlogCard({ title, blogs }) {
    const _navigate = useNavigate();
    return (
        <div className="RecentBlogCard">
            <div className="RecentBlogCard__title">{title}</div>
            <div className="RecentBlogCard__listContainer">
                {blogs.map((blog, index) => (
                    <div className="blogCard ptr" key={index} onClick={() => { _navigate(`/view-blog/${blog?.id}`) }}>
                        <p className="title">{blog?.attributes?.title}</p>
                        <p className="date">
                            <MdUpdate />
                            &nbsp; {blog?.attributes?.publishedAt.split('T')[0]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentBlogCard;
