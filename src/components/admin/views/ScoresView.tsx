import { RefreshCw, Wifi, WifiOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ScoresView() {

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge className="bg-green-500 hover:bg-green-600">
            <Wifi className="h-3 w-3 mr-1" />
            API CONNECTED
          </Badge>
          <span className="text-sm text-muted-foreground">
            Last updated: 2 minutes ago
          </span>
        </div>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Cache
        </Button>
      </div>

      {/* Data Sources */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Data Sources Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 bg-[hsl(var(--muted))]/50 rounded-lg">
              <span className="text-sm">Football API</span>
              <Badge className="bg-green-500"><Wifi className="h-3 w-3 mr-1" />Online</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-[hsl(var(--muted))]/50 rounded-lg">
              <span className="text-sm">Score Feed</span>
              <Badge variant="destructive"><WifiOff className="h-3 w-3 mr-1" />Error</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-[hsl(var(--muted))]/50 rounded-lg">
              <span className="text-sm">Stats Provider</span>
              <Badge className="bg-green-500"><Wifi className="h-3 w-3 mr-1" />Online</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-[hsl(var(--muted))]/50 rounded-lg">
              <span className="text-sm">Betting Odds</span>
              <Badge className="bg-green-500"><Wifi className="h-3 w-3 mr-1" />Online</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}