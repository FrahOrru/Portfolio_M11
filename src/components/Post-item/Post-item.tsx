import React from "react";
import './post-item.modules.css';
import Image from "next/image";
import Link from "next/link";

interface PostItemLgProps {
    post: any;
}

const PostItem: React.FC<PostItemLgProps> = ({ post }) => {
    return (
        <Link href={'/blog/' + post.id}>
            <div className="post-item">
                <Image src={post.image.url} alt="post" width={300} height={200}></Image>
                <h4>{post.title}</h4>
            </div>
        </Link>
    );
}

export default PostItem;