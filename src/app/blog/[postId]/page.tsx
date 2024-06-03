import { sdk } from "@/lib/client";
import Link from "next/link";

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = await sdk.Posts();

    const post = posts.data.posts.find((post) => post.id === params.postId)


    const styles = {
        backgroundImage: 'url(' + post?.image?.url + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    

    return (
    <div className="post">
        <div className="back-button">
            <Link href={'/blog'}>
                <p>back</p>
            </Link>
        </div>
        <h1>{post?.title}</h1>
        <div className="introduction">
            <div className="image" style={styles}></div>
            <div className="introduction-text px-6">
                <p>{post?.introduction}</p>
            </div>
        </div>
        {
            post?.sections.map((section, index) => {
                return (
                    <div key={section.id} className="blog-section">
                         {
                            index % 2 !== 0 ?
                            <div className="section-title">{section.title}</div>
                            : null
                        }
                        <div dangerouslySetInnerHTML={{ __html: section.content?.html as TrustedHTML }} >
                        </div>
                        {
                            index % 2 === 0 ?
                            <div className="section-title">{section.title}</div>
                            : null
                        }
                    </div>
                )
            })
        }
    </div>
    )
}