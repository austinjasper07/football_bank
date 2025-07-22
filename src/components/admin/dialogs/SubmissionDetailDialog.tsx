import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Eye, Mail, Phone, MapPin, Calendar, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface Submission {
  id: number;
  name: string;
  country: string;
  position: string;
  age: number;
  submittedAt: string;
  status: string;
  email?: string;
  phone?: string;
  location?: string;
  bio?: string;
  experience?: string;
  achievements?: string[];
  documents?: string[];
}

interface SubmissionDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  submission: Submission | null;
  onApprove: (id: number) => void;
  onReject: (id: number, reason?: string) => void;
}

export function SubmissionDetailDialog({ 
  open, 
  onOpenChange, 
  submission, 
  onApprove, 
  onReject 
}: SubmissionDetailDialogProps) {
  const { toast } = useToast();

  if (!submission) return null;

  const handleApprove = () => {
    onApprove(submission.id);
    onOpenChange(false);
    toast({
      title: "Submission Approved",
      description: `${submission.name}'s submission has been approved`,
    });
  };

  const handleReject = () => {
    onReject(submission.id, "Incomplete documentation");
    onOpenChange(false);
    toast({
      title: "Submission Rejected", 
      description: `${submission.name}'s submission has been rejected`,
      variant: "destructive",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Player Submission Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold">{submission.name}</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                {submission.country} • {submission.position} • Age {submission.age}
              </p>
            </div>
            <Badge 
              variant={submission.status === 'pending' ? 'secondary' : submission.status === 'approved' ? 'default' : 'destructive'}
              className={
                submission.status === 'pending' ? 'bg-yellow-500 hover:bg-yellow-600' : 
                submission.status === 'approved' ? 'bg-green-500 hover:bg-green-600' : ''
              }
            >
              {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
            </Badge>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Information
              </h4>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> {submission.email || "Not provided"}</p>
                <p><strong>Phone:</strong> {submission.phone || "Not provided"}</p>
                <p className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <strong>Location:</strong> {submission.location || "Not provided"}
                </p>
                <p className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <strong>Submitted:</strong> {submission.submittedAt}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Career Highlights
              </h4>
              <div className="space-y-2">
                {submission.achievements && submission.achievements.length > 0 ? (
                  <ul className="text-sm space-y-1">
                    {submission.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[hsl(var(--muted-foreground))]">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">No achievements listed</p>
                )}
              </div>
            </div>
          </div>

          {/* Biography */}
          {submission.bio && (
            <div>
              <h4 className="font-semibold mb-2">Biography</h4>
              <p className="text-sm leading-relaxed bg-[hsl(var(--muted))]/50 p-3 rounded-lg">
                {submission.bio}
              </p>
            </div>
          )}

          {/* Experience */}
          {submission.experience && (
            <div>
              <h4 className="font-semibold mb-2">Experience</h4>
              <p className="text-sm leading-relaxed bg-[hsl(var(--muted))]/50 p-3 rounded-lg">
                {submission.experience}
              </p>
            </div>
          )}

          {/* Documents */}
          {submission.documents && submission.documents.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Documents</h4>
              <div className="space-y-2">
                {submission.documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-[hsl(var(--muted))]/50 rounded">
                    <span className="text-sm">{doc}</span>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        {submission.status === 'pending' && (
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              <X className="h-4 w-4 mr-2" />
              Reject
            </Button>
            <Button onClick={handleApprove} className="bg-green-500 hover:bg-green-600">
              <Check className="h-4 w-4 mr-2" />
              Approve
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}