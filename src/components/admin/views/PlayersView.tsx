import { Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PlayersView() {
  const players = [
    {
      id: 1,
      name: "Carlos Rodriguez",
      age: 24,
      position: "Midfielder",
      club: "Real Madrid",
      country: "🇪🇸 Spain",
      status: "Available",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Marcus Silva",
      age: 22,
      position: "Forward",
      club: "Barcelona",
      country: "🇧🇷 Brazil",
      status: "On Loan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Pierre Dubois",
      age: 26,
      position: "Defender",
      club: "PSG",
      country: "🇫🇷 France",
      status: "Available",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Filters and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Countries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="brazil">Brazil</SelectItem>
              <SelectItem value="argentina">Argentina</SelectItem>
              <SelectItem value="spain">Spain</SelectItem>
              <SelectItem value="france">France</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Positions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
              <SelectItem value="defender">Defender</SelectItem>
              <SelectItem value="midfielder">Midfielder</SelectItem>
              <SelectItem value="forward">Forward</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Player
        </Button>
      </div>
      
      {/* Players Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Player</th>
                  <th className="text-left p-4 font-medium">Position</th>
                  <th className="text-left p-4 font-medium">Club</th>
                  <th className="text-left p-4 font-medium">Country</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id} className="border-t border-border hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={player.avatar} 
                          alt={player.name} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{player.name}</p>
                          <p className="text-sm text-muted-foreground">Age {player.age}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{player.position}</td>
                    <td className="p-4">{player.club}</td>
                    <td className="p-4">{player.country}</td>
                    <td className="p-4">
                      <Badge 
                        variant={player.status === 'Available' ? 'default' : 'secondary'}
                        className={player.status === 'Available' ? 'bg-green-500 hover:bg-green-600' : ''}
                      >
                        {player.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}