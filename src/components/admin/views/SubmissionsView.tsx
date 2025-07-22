import { useState } from "react";
import { Check, X, Clock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/admin/SearchBar";
import { SubmissionDetailDialog } from "@/components/admin/dialogs/SubmissionDetailDialog";
import { useToast } from "@/hooks/use-toast";

export function SubmissionsView() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "Marcus Silva",
      country: "🇧🇷 Brazil",
      position: "Midfielder",
      age: 22,
      submittedAt: "2 days ago",
      status: "pending",
      email: "marcus.silva@email.com",
      phone: "+55 11 99999-9999",
      location: "São Paulo, Brazil",
      bio: "Young midfielder with exceptional ball control and vision. Started playing at age 6 in local youth teams.",
      experience: "5 years in professional youth teams, 2 years in senior squad.",
      achievements: ["Youth League Winner 2023", "Best Young Player Award 2022"],
      documents: ["ID_Document.pdf", "Medical_Certificate.pdf", "Contract_History.pdf"],
      rejectionReason: undefined
    },
    {
      id: 2,
      name: "Antonio Garcia",
      country: "🇪🇸 Spain",
      position: "Forward",
      age: 24,
      submittedAt: "1 day ago",
      status: "pending",
      email: "antonio.garcia@email.com",
      phone: "+34 666 777 888",
      location: "Madrid, Spain",
      bio: "Experienced forward with strong finishing abilities and pace.",
      experience: "3 years in La Liga 2, seeking first division opportunity.",
      achievements: ["Top Scorer 2023 Season", "Player of the Month x3"],
      documents: ["Passport.pdf", "Player_Stats.pdf"],
      rejectionReason: undefined
    },
    {
      id: 3,
      name: "Jean Dubois",
      country: "🇫🇷 France",
      position: "Defender",
      age: 23,
      submittedAt: "3 hours ago",
      status: "pending",
      email: "jean.dubois@email.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
      bio: "Solid defender with excellent aerial ability and leadership qualities.",
      experience: "4 years in Ligue 2, captain for 2 years.",
      achievements: ["Defensive Player of the Year 2023", "Team Captain"],
      documents: ["EU_Passport.pdf", "Leadership_Certificate.pdf"],
      rejectionReason: undefined
    }
  ]);

  const pendingSubmissions = submissions.filter(s => s.status === 'pending');
  const approvedSubmissions = submissions.filter(s => s.status === 'approved');
  const rejectedSubmissions = submissions.filter(s => s.status === 'rejected');

  const filteredPending = pendingSubmissions.filter(submission =>
    submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    submission.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    submission.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApprove = (id: number) => {
    setSubmissions(submissions.map(s => 
      s.id === id ? { ...s, status: 'approved' } : s
    ));
  };

  const handleReject = (id: number, reason?: string) => {
    setSubmissions(submissions.map(s => 
      s.id === id ? { ...s, status: 'rejected', rejectionReason: reason } : s
    ));
  };

  const handleViewDetails = (submission: any) => {
    setSelectedSubmission(submission);
    setDetailDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search submissions..."
        className="w-96"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Pending Review */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            Pending Review ({filteredPending.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPending.map((submission) => (
              <div key={submission.id} className="bg-[hsl(var(--muted))]/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{submission.name}</span>
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">{submission.submittedAt}</span>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
                  {submission.country} • {submission.position} • Age {submission.age}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(submission)}>
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={() => handleApprove(submission.id)}>
                    <Check className="h-3 w-3 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive" className="bg-[hsl(var(--destructive))] hover:bg-[hsl(var(--destructive))]/80" onClick={() => handleReject(submission.id)}>
                    <X className="h-3 w-3 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Approved */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            Approved ({approvedSubmissions.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {approvedSubmissions.length > 0 ? (
              approvedSubmissions.slice(0, 3).map((submission) => (
                <div key={submission.id} className="bg-[hsl(var(--muted))]/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{submission.name}</span>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {submission.country} • {submission.position} • Age {submission.age}
                  </p>
                </div>
              ))
            ) : (
              <div className="bg-[hsl(var(--muted))]/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Roberto Santos</span>
                  <Badge className="bg-green-500">Approved</Badge>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  🇧🇷 Brazil • Goalkeeper • Age 25
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Rejected */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <X className="h-5 w-5 text-red-500" />
            Rejected ({rejectedSubmissions.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rejectedSubmissions.length > 0 ? (
              rejectedSubmissions.slice(0, 3).map((submission) => (
                <div key={submission.id} className="bg-[hsl(var(--muted))]/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{submission.name}</span>
                    <Badge variant="destructive">Rejected</Badge>
                  </div>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {submission.country} • {submission.position} • Age {submission.age}
                  </p>
                  {submission.rejectionReason && (
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">
                      Reason: {submission.rejectionReason}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-[hsl(var(--muted))]/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Mike Johnson</span>
                  <Badge variant="destructive">Rejected</Badge>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  🇺🇸 USA • Forward • Age 28
                </p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">
                  Reason: Incomplete documentation
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      </div>

      <SubmissionDetailDialog
        open={detailDialogOpen}
        onOpenChange={setDetailDialogOpen}
        submission={selectedSubmission}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}