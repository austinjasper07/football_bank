import { RefreshCw, Wifi, WifiOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ScoresView() {
  const matches = [
    {
      id: 1,
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      minute: "78'",
      league: "La Liga"
    },
    {
      id: 2,
      homeTeam: "Manchester City",
      awayTeam: "Liverpool",
      homeScore: 0,
      awayScore: 0,
      status: "LIVE",
      minute: "45'",
      league: "Premier League"
    },
    {
      id: 3,
      homeTeam: "PSG",
      awayTeam: "Bayern Munich",
      homeScore: null,
      awayScore: null,
      status: "SCHEDULED",
      time: "20:00",
      league: "Champions League"
    }
  ];

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

      {/* Live Matches */}
      <Card>
        <CardHeader>
          <CardTitle>Live Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matches.filter(match => match.status === 'LIVE').map((match) => (
              <div key={match.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Badge className="bg-red-500 hover:bg-red-600">LIVE</Badge>
                  <div className="text-sm text-muted-foreground">{match.league}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">{match.homeTeam}</div>
                    <div className="text-sm text-muted-foreground">{match.awayTeam}</div>
                  </div>
                  <div className="text-center font-bold text-xl">
                    {match.homeScore} - {match.awayScore}
                  </div>
                  <div className="text-sm text-muted-foreground min-w-12">
                    {match.minute}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Matches */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matches.filter(match => match.status === 'SCHEDULED').map((match) => (
              <div key={match.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Badge variant="outline">SCHEDULED</Badge>
                  <div className="text-sm text-muted-foreground">{match.league}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">{match.homeTeam}</div>
                    <div className="text-sm text-muted-foreground">{match.awayTeam}</div>
                  </div>
                  <div className="text-center font-bold text-xl">
                    vs
                  </div>
                  <div className="text-sm text-muted-foreground min-w-12">
                    {match.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Data Sources Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Football API</span>
              <Badge className="bg-green-500"><Wifi className="h-3 w-3 mr-1" />Online</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Score Feed</span>
              <Badge variant="destructive"><WifiOff className="h-3 w-3 mr-1" />Error</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Stats Provider</span>
              <Badge className="bg-green-500"><Wifi className="h-3 w-3 mr-1" />Online</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Betting Odds</span>
              <Badge className="bg-green-500"><Wifi className="h-3 w-3 mr-1" />Online</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}