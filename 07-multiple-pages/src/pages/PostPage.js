import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function PostPage() {
    const [activePost, setActivePost] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchPost = async (index) => {
        try {
            const response = await axios.get(`https://api.jsonbin.io/v3/b/65c33452dc74654018a16c1a`);
            // console.log("route hit =>", response);
            console.log("what is this. let me see", response.data.record.length)

            if (activeIndex !== "" && activeIndex < response.data.record.length){
                setActivePost(response.data.record[index]);
            } else {
                console.log("Item not found")
            }
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    }
    fetchPost(activeIndex);
}, [activeIndex]);

    return (
        <React.Fragment>
            <h1>Posts</h1>
            <h2>Active Post</h2>
            <input
                type="text"
                value={activeIndex}       
                name="activePostId"
                onChange={(event) => setActiveIndex(event.target.value)}
            />
            <div>
                <p>{activePost.foodname}</p>
                <p>{activePost.description}</p>
            </div>
        </React.Fragment>
    )
}
