"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credit from "@/components/Credit";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Heart, 
  Eye, 
  TrendingUp, 
  Calendar,
  Edit,
  Trash2,
  Save,
  LogOut,
  Reply,
  Key
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  description: string;
  doctorName: string;
  createdAt: string;
  likes: number;
  comments: number;
  views: number;
}

interface Analytics {
  totalVisitors: number;
  totalPageViews: number;
  totalPosts: number;
  totalComments: number;
  totalLikes: number;
  todayVisitors: number;
  todayPageViews: number;
  weeklyVisitors: number;
  weeklyPageViews: number;
}

export default function Admin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    doctorName: "",
  });

  useEffect(() => {
    // Simulate API calls
    const mockPosts: Post[] = [
      {
        id: "1",
        title: "Understanding Heart Disease: Prevention and Treatment",
        description: "Heart disease remains one of the leading causes of death worldwide. This comprehensive guide explores the various types of heart conditions, their symptoms, risk factors, and most importantly, preventive measures that can significantly reduce your risk.",
        doctorName: "Dr. Sarah Johnson",
        createdAt: "2024-01-15",
        likes: 245,
        comments: 32,
        views: 1520,
      },
      {
        id: "2",
        title: "Diabetes Management: A Complete Guide",
        description: "Living with diabetes requires careful management and lifestyle adjustments. This article provides detailed insights into blood sugar monitoring, medication management, dietary recommendations, and exercise routines.",
        doctorName: "Dr. Michael Chen",
        createdAt: "2024-01-12",
        likes: 189,
        comments: 28,
        views: 1240,
      },
      {
        id: "3",
        title: "Mental Health in the Digital Age",
        description: "The digital revolution has transformed how we live, work, and interact, but it has also brought new challenges to our mental health. Explore the impact of social media, remote work, and digital connectivity on psychological well-being.",
        doctorName: "Dr. Emily Rodriguez",
        createdAt: "2024-01-10",
        likes: 156,
        comments: 41,
        views: 980,
      },
    ];

    const mockAnalytics: Analytics = {
      totalVisitors: 15420,
      totalPageViews: 45630,
      totalPosts: 6,
      totalComments: 156,
      totalLikes: 890,
      todayVisitors: 245,
      todayPageViews: 680,
      weeklyVisitors: 1680,
      weeklyPageViews: 4520,
    };

    setTimeout(() => {
      setPosts(mockPosts);
      setAnalytics(mockAnalytics);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.description || !newPost.doctorName) return;

    const post: Post = {
      id: Date.now().toString(),
      title: newPost.title,
      description: newPost.description,
      doctorName: newPost.doctorName,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      views: 0,
    };

    setPosts(prev => [post, ...prev]);
    setNewPost({ title: "", description: "", doctorName: "" });
    setShowCreateForm(false);
    
    // Update analytics
    if (analytics) {
      setAnalytics(prev => prev ? {
        ...prev,
        totalPosts: prev.totalPosts + 1
      } : null);
    }
  };

  const handleDeletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
    
    // Update analytics
    if (analytics) {
      const deletedPost = posts.find(p => p.id === id);
      if (deletedPost) {
        setAnalytics(prev => prev ? {
          ...prev,
          totalPosts: prev.totalPosts - 1,
          totalComments: prev.totalComments - deletedPost.comments,
          totalLikes: prev.totalLikes - deletedPost.likes
        } : null);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-32 bg-muted rounded"></div>
              ))}
            </div>
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your medical content and view analytics
            </p>
          </div>

          {analytics && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.totalVisitors.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +{analytics.todayVisitors} today
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.totalPageViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +{analytics.todayPageViews} today
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.totalPosts}</div>
                  <p className="text-xs text-muted-foreground">
                    Published articles
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.totalLikes + analytics.totalComments}</div>
                  <p className="text-xs text-muted-foreground">
                    {analytics.totalLikes} likes, {analytics.totalComments} comments
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          <Tabs defaultValue="posts" className="space-y-4">
            <TabsList>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Posts</h2>
                <Button onClick={() => setShowCreateForm(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Post
                </Button>
              </div>

              {showCreateForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Post</CardTitle>
                    <CardDescription>
                      Add a new medical article to the website
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Title</label>
                      <Input
                        placeholder="Enter post title"
                        value={newPost.title}
                        onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Doctor's Name</label>
                      <Input
                        placeholder="Dr. John Doe"
                        value={newPost.doctorName}
                        onChange={(e) => setNewPost(prev => ({ ...prev, doctorName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Description</label>
                      <Textarea
                        placeholder="Enter post description (up to 10,000 characters)"
                        value={newPost.description}
                        onChange={(e) => setNewPost(prev => ({ ...prev, description: e.target.value }))}
                        rows={6}
                        maxLength={10000}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        {newPost.description.length}/10,000 characters
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={editingPost ? handleUpdatePost : handleCreatePost}>
                        <Save className="w-4 h-4 mr-2" />
                        {editingPost ? "Update Post" : "Publish Post"}
                      </Button>
                      <Button variant="outline" onClick={() => {
                        setShowCreateForm(false);
                        setEditingPost(null);
                        setNewPost({ title: "", description: "", doctorName: "" });
                      }}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                          <CardDescription>
                            Dr. {post.doctorName} • {formatDate(post.createdAt)}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEditPost(post)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views} views
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes} likes
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {post.comments} comments
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <h2 className="text-2xl font-bold">Analytics Overview</h2>
              
              {analytics && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Visitor Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Total Visitors</span>
                        <span className="font-semibold">{analytics.totalVisitors.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Today's Visitors</span>
                        <span className="font-semibold">{analytics.todayVisitors}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>This Week</span>
                        <span className="font-semibold">{analytics.weeklyVisitors}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Page View Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Total Page Views</span>
                        <span className="font-semibold">{analytics.totalPageViews.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Today's Page Views</span>
                        <span className="font-semibold">{analytics.todayPageViews}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>This Week</span>
                        <span className="font-semibold">{analytics.weeklyPageViews}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Content Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Total Posts</span>
                        <span className="font-semibold">{analytics.totalPosts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Likes</span>
                        <span className="font-semibold">{analytics.totalLikes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Comments</span>
                        <span className="font-semibold">{analytics.totalComments}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Engagement Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Avg. Likes per Post</span>
                        <span className="font-semibold">
                          {analytics.totalPosts > 0 ? Math.round(analytics.totalLikes / analytics.totalPosts) : 0}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg. Comments per Post</span>
                        <span className="font-semibold">
                          {analytics.totalPosts > 0 ? Math.round(analytics.totalComments / analytics.totalPosts) : 0}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg. Views per Post</span>
                        <span className="font-semibold">
                          {analytics.totalPosts > 0 ? Math.round(analytics.totalPageViews / analytics.totalPosts) : 0}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="comments" className="space-y-4">
              <h2 className="text-2xl font-bold">Manage Comments</h2>
              
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <div>
                          <h4 className="font-semibold">{comment.name}</h4>
                          <p className="text-sm text-muted-foreground">on "{comment.postTitle}"</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {formatDate(comment.createdAt)}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{comment.content}</p>
                      
                      {/* Admin Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-0 sm:ml-4 space-y-2 mb-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="bg-muted p-3 rounded-md">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                                <span className="font-semibold text-sm">{reply.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(reply.createdAt)}
                                </span>
                              </div>
                              <p className="text-sm">{reply.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Reply Form */}
                      {replyingTo === comment.id ? (
                        <div className="space-y-2">
                          <Input
                            placeholder="Your name (default: Admin)"
                            value={replyName}
                            onChange={(e) => setReplyName(e.target.value)}
                            className="text-sm"
                          />
                          <Textarea
                            placeholder="Write your reply..."
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            rows={3}
                            className="text-sm"
                          />
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" onClick={() => handleReply(comment.id)}>
                              <Reply className="w-4 h-4 mr-1" />
                              Post Reply
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => {
                                setReplyingTo(null);
                                setReplyContent("");
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setReplyingTo(comment.id)}
                        >
                          <Reply className="w-4 h-4 mr-1" />
                          Reply
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <Credit />
    </div>
  );
}