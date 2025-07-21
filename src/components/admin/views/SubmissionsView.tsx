import { Check, X, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SubmissionsView() {
  const submissions = [
    {
      id: 1,
      name: "Marcus Silva",
      country: "🇧🇷 Brazil",
      position: "Midfielder",
      age: 22,
      submittedAt: "2 days ago",
      status: "pending"
    },
    {
      id: 2,
      name: "Antonio Garcia",
      country: "🇪🇸 Spain",
      position: "Forward",
      age: 24,
      submittedAt: "1 day ago",
      status: "pending"
    },
    {
      id: 3,
      name: "Jean Dubois",
      country: "🇫🇷 France",
      position: "Defender",
      age: 23,
      submittedAt: "3 hours ago",
      status: "pending"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Pending Review */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            Pending Review ({submissions.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{submission.name}</span>
                  <span className="text-xs text-muted-foreground">{submission.submittedAt}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {submission.country} • {submission.position} • Age {submission.age}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Check className="h-3 w-3 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            Approved (24)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Roberto Santos</span>
                <Badge className="bg-green-500">Approved</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                🇧🇷 Brazil • Goalkeeper • Age 25
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rejected */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <X className="h-5 w-5 text-red-500" />
            Rejected (8)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Mike Johnson</span>
                <Badge variant="destructive">Rejected</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                🇺🇸 USA • Forward • Age 28
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Reason: Incomplete documentation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}