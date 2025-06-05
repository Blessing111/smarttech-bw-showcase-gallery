
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useProjects, useCreateProject, useUpdateProject, useDeleteProject, type Project } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

type ProjectFormData = {
  title: string;
  description: string;
  detailed_description: string;
  category: 'web' | 'mobile' | 'software';
  technologies: string;
  github_url: string;
  live_url: string;
  image_url: string;
  featured: boolean;
};

const Admin = () => {
  const { user, signOut } = useAuth();
  const { data: projects, isLoading } = useProjects();
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();
  const deleteProject = useDeleteProject();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    detailed_description: "",
    category: "web",
    technologies: "",
    github_url: "",
    live_url: "",
    image_url: "",
    featured: false,
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      detailed_description: "",
      category: "web",
      technologies: "",
      github_url: "",
      live_url: "",
      image_url: "",
      featured: false,
    });
    setEditingProject(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
    };

    try {
      if (editingProject) {
        await updateProject.mutateAsync({ id: editingProject.id, ...projectData });
        toast({ title: "Project updated successfully!" });
      } else {
        await createProject.mutateAsync(projectData);
        toast({ title: "Project created successfully!" });
      }
      resetForm();
      setIsCreateDialogOpen(false);
    } catch (error: any) {
      toast({ 
        title: "Error", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description || "",
      detailed_description: project.detailed_description || "",
      category: project.category,
      technologies: project.technologies?.join(', ') || "",
      github_url: project.github_url || "",
      live_url: project.live_url || "",
      image_url: project.image_url || "",
      featured: project.featured || false,
    });
    setEditingProject(project);
    setIsCreateDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject.mutateAsync(id);
        toast({ title: "Project deleted successfully!" });
      } catch (error: any) {
        toast({ 
          title: "Error", 
          description: error.message,
          variant: "destructive" 
        });
      }
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Sign in to manage your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Portfolio Admin</h1>
          <div className="flex gap-4">
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600"
                  onClick={resetForm}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingProject ? "Edit Project" : "Create New Project"}
                  </DialogTitle>
                </DialogHeader>
                <ProjectForm 
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSubmit}
                  isSubmitting={createProject.isPending || updateProject.isPending}
                />
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-white text-center">Loading projects...</div>
        ) : (
          <div className="grid gap-6">
            {projects?.map((project) => (
              <Card key={project.id} className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(project)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDelete(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="bg-yellow-600/20 text-yellow-300">Featured</Badge>
                    )}
                    {project.technologies?.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-gray-300 text-sm">
                    Created: {new Date(project.created_at).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const LoginForm = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(email, password);
    } catch (error: any) {
      toast({ 
        title: "Login failed", 
        description: error.message,
        variant: "destructive" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

interface ProjectFormProps {
  formData: ProjectFormData;
  setFormData: (data: ProjectFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const ProjectForm = ({ formData, setFormData, onSubmit, isSubmitting }: ProjectFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Project Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <Textarea
        placeholder="Short Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <Textarea
        placeholder="Detailed Description"
        value={formData.detailed_description}
        onChange={(e) => setFormData({ ...formData, detailed_description: e.target.value })}
      />
      <Select 
        value={formData.category} 
        onValueChange={(value: 'web' | 'mobile' | 'software') => 
          setFormData({ ...formData, category: value })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="web">Web Application</SelectItem>
          <SelectItem value="mobile">Mobile App</SelectItem>
          <SelectItem value="software">Software</SelectItem>
        </SelectContent>
      </Select>
      <Input
        placeholder="Technologies (comma separated)"
        value={formData.technologies}
        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
      />
      <Input
        placeholder="GitHub URL"
        value={formData.github_url}
        onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
      />
      <Input
        placeholder="Live Demo URL"
        value={formData.live_url}
        onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
      />
      <Input
        placeholder="Image URL"
        value={formData.image_url}
        onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="featured"
          checked={formData.featured}
          onCheckedChange={(checked) => setFormData({ ...formData, featured: !!checked })}
        />
        <label htmlFor="featured" className="text-sm font-medium">
          Featured Project
        </label>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save Project"}
      </Button>
    </form>
  );
};

export default Admin;
