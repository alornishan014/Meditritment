"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, Clock, User, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  description: string;
  doctorName: string;
  createdAt: string;
  likes: number;
  comments: number;
}

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

export default function PostDetail() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [commentName, setCommentName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch post and comments
    const mockPost: Post = {
      id: postId,
      title: "Understanding Heart Disease: Prevention and Treatment",
      description: "Heart disease remains one of the leading causes of death worldwide. This comprehensive guide explores the various types of heart conditions, their symptoms, risk factors, and most importantly, preventive measures that can significantly reduce your risk. Learn about lifestyle changes, medical interventions, and the latest advancements in cardiac care that are helping millions live longer, healthier lives.\n\nHeart disease encompasses a range of conditions affecting the heart and blood vessels. The most common type is coronary artery disease, which occurs when the arteries that supply blood to the heart become narrowed or blocked due to plaque buildup. This can lead to chest pain (angina), heart attacks, and other serious complications.\n\nPrevention is key when it comes to heart disease. Regular exercise, a balanced diet rich in fruits and vegetables, maintaining a healthy weight, and avoiding smoking are all crucial factors in reducing your risk. Additionally, managing stress and getting regular check-ups can help catch potential issues early.\n\nTreatment options vary depending on the specific condition but may include medications, lifestyle changes, medical procedures, or surgery. Advances in medical technology have made treatments more effective and less invasive, giving patients better outcomes and quality of life.",
      doctorName: "Dr. Sarah Johnson",
      createdAt: "2024-01-15",
      likes: 245,
      comments: 32,
    };

    const mockComments: Comment[] = [
      {
        id: "1",
        name: "John Smith",
        content: "This article provided exactly the information I was looking for. The explanation about preventive measures was particularly helpful.",
        createdAt: "2024-01-16",
      },
      {
        id: "2",
        name: "Emily Davis",
        content: "As someone with a family history of heart disease, I found this guide very informative. Thank you for sharing this valuable information.",
        createdAt: "2024-01-16",
      },
      {
        id: "3",
        name: "Michael Brown",
        content: "The section about treatment options was very comprehensive. It's reassuring to know about the advances in cardiac care.",
        createdAt: "2024-01-17",
      },
      {
        id: "4",
        name: "Sarah Wilson",
        content: "I've been trying to improve my lifestyle for better heart health. This article gave me some great ideas to implement.",
        createdAt: "2024-01-17",
      },
      {
        id: "5",
        name: "David Lee",
        content: "Excellent article! The information about risk factors was eye-opening. I'll definitely be making some changes.",
        createdAt: "2024-01-18",
      },
    ];

    setTimeout(() => {
      setPost(mockPost);
      setComments(mockComments);
      setLoading(false);
    }, 1000);
  }, [postId]);

  const handleLike = () => {
    if (!liked && post) {
      setLiked(true);
      setPost(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentContent.trim()) return;

    setSubmittingComment(true);
    
    // Simulate API call
    const newComment: Comment = {
      id: Date.now().toString(),
      name: commentName,
      content: commentContent,
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setComments(prev => [newComment, ...prev]);
      if (post) {
        setPost(prev => prev ? { ...prev, comments: prev.comments + 1 } : null);
      }
      setCommentName("");
      setCommentContent("");
      setSubmittingComment(false);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
            <div className="h-12 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="h-4 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
        <Credit />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
        <Credit />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Medical Article</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {formatDate(post.createdAt)}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-muted-foreground mb-6">
              <User className="w-4 h-4 mr-2" />
              <span>Dr. {post.doctorName}</span>
            </div>

            {/* Engagement Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className={liked ? "bg-primary text-primary-foreground" : ""}
              >
                <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
                {post.likes}
              </Button>
              
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                {post.comments}
              </Button>
              
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  {post.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comments Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Comments ({post.comments})</h2>
            
            {/* Comment Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Leave a Comment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Comment"
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={submittingComment}>
                    <Send className="w-4 h-4 mr-2" />
                    {submittingComment ? 'Posting...' : 'Post Comment'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">{comment.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(comment.createdAt)}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{comment.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Credit />
    </div>
  );
}