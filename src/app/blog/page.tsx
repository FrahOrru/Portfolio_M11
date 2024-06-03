import PostItem from "@/components/Post-item/Post-item";
import { sdk } from "@/lib/client";
import Link from "next/link";

export default async function BlogList() {
    const posts = await sdk.Posts();

    return(
    <div className="w-full h-full blog-page">
        <div className="header">
            <h1 className="font-bold">My Posts</h1>
            <p>Francesca Orrù</p>
            <div className="button-back mt-9">
                <Link href={'../'}>
                    <p>Go Back</p>
                </Link>
            </div>
        </div>
        <div className="highlights">
            <h2>Articles</h2>
            <div className="cards">
                {posts.data.posts.map((post) => {
                    return(
                        <PostItem key={post.id} post={post}>
                        </PostItem>
                    )
                })}
            </div>
        </div>
    </div>
    )
}