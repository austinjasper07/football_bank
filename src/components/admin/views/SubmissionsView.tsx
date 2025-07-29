"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, X, Clock, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/admin/SearchBar";
import { SubmissionDetailDialog } from "@/components/admin/dialogs/SubmissionDetailDialog";
import { useToast } from "@/hooks/use-toast";
import { useAdminDataStore } from "@/store/adminDataStore";
import { Submission } from "@/lib/types";

export default function SubmissionsView() {
  const { toast } = useToast();
  const {
    submissions,
    fetchSubmissions,
    approveSubmission,
    rejectSubmission,
    getSubmissionById,
    selectedSubmission,
  } = useAdminDataStore();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [detailDialogOpen, setDetailDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const filtered = useMemo(() => {
  const list = Array.isArray(submissions) ? submissions : [];
  return list.filter((s) =>
    [s.name, s.country, s.position].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
}, [submissions, searchQuery]);


  const handleApprove = (id: string) => {
    approveSubmission(id);
    toast({ title: "Approved", description: "Submission approved." });
  };

  const handleReject = (id: string, reason?: string) => {
    rejectSubmission(id, reason);
    toast({ title: "Rejected", description: "Submission rejected." });
  };

  const handleViewDetails = (id: string) => {
    getSubmissionById(id);
    setDetailDialogOpen(true);
  };

  const pending = filtered.filter((s) => s.status === "pending");
  const approved = filtered.filter((s) => s.status === "approved");
  const rejected = filtered.filter((s) => s.status === "rejected");

  return (
    <div className="space-y-6">
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search submissions..."
        className="w-96"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending */}
        <SubmissionColumn
          icon={<Clock className="h-5 w-5 text-yellow-500" />}
          title="Pending Review"
          count={pending.length}
          data={pending}
          onApprove={handleApprove}
          onReject={handleReject}
          onView={handleViewDetails}
          status="pending"
        />

        {/* Approved */}
        <SubmissionColumn
          icon={<Check className="h-5 w-5 text-green-500" />}
          title="Approved"
          count={approved.length}
          data={approved}
          status="approved"
        />

        {/* Rejected */}
        <SubmissionColumn
          icon={<X className="h-5 w-5 text-red-500" />}
          title="Rejected"
          count={rejected.length}
          data={rejected}
          status="rejected"
        />
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

// Extracted reusable column renderer
type ColumnProps = {
  title: string;
  icon: React.ReactNode;
  count: number;
  data: Submission[];
  status: "pending" | "approved" | "rejected";
  onApprove?: (id: string) => void;
  onReject?: (id: string, reason?: string) => void;
  onView?: (id: string) => void;
};

function SubmissionColumn({
  title,
  icon,
  count,
  data,
  status,
  onApprove,
  onReject,
  onView,
}: ColumnProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon} {title} ({count})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.length > 0 ? (
            data.slice(0, 3).map((submission) => (
              <div
                key={submission.id}
                className="bg-[hsl(var(--muted))]/50 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{submission.name}</span>
                  {status === "pending" ? (
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">
                      {submission.submittedAt}
                    </span>
                  ) : (
                    <Badge
                      className={
                        status === "approved"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }
                      variant={status === "rejected" ? "destructive" : "default"}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                  {submission.country} • {submission.position} • Age {submission.age}
                </p>

                {status === "rejected" && submission.rejectionReason && (
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">
                    Reason: {submission.rejectionReason}
                  </p>
                )}

                {status === "pending" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => onView?.(submission.id)}>
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => onApprove?.(submission.id)}
                    >
                      <Check className="h-3 w-3 mr-1" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onReject?.(submission.id)}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No {status} submissions</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
