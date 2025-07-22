import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchBar } from "@/components/admin/SearchBar";
import { PlayerDialog } from "@/components/admin/dialogs/PlayerDialog";
import { useToast } from "@/hooks/use-toast";

export function PlayersView() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");
  const [playerDialogOpen, setPlayerDialogOpen] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState<any>(null);
  
  const [players, setPlayers] = useState([
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
  ]);

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = countryFilter === "all" || player.country.toLowerCase().includes(countryFilter.toLowerCase());
    const matchesPosition = positionFilter === "all" || player.position.toLowerCase() === positionFilter.toLowerCase();
    
    return matchesSearch && matchesCountry && matchesPosition;
  });

  const handleAddPlayer = (playerData: any) => {
    if (editingPlayer) {
      setPlayers(players.map(p => p.id === editingPlayer.id ? { ...playerData, id: editingPlayer.id } : p));
      setEditingPlayer(null);
    } else {
      setPlayers([...players, { ...playerData, id: players.length + 1 }]);
    }
  };

  const handleEditPlayer = (player: any) => {
    setEditingPlayer(player);
    setPlayerDialogOpen(true);
  };

  const handleDeletePlayer = (playerId: number) => {
    setPlayers(players.filter(p => p.id !== playerId));
    toast({
      title: "Player Deleted",
      description: "Player has been removed successfully",
    });
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search players..."
            className="w-80"
          />
          <Select value={countryFilter} onValueChange={setCountryFilter}>
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
          
          <Select value={positionFilter} onValueChange={setPositionFilter}>
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
        
        <Button onClick={() => setPlayerDialogOpen(true)} className="bg-[hsl(210,74%,55%)] text-[hsl(var(--muted))]">
          <Plus className="h-4 w-4 mr-2" />
          Add Player
        </Button>
      </div>
      
      {/* Players Table */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[hsl(var(--muted))]/50">
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
                {filteredPlayers.map((player) => (
                  <tr key={player.id} className="border-t border-border hover:bg-[hsl(var(--muted))]/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={player.avatar} 
                          alt={player.name} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{player.name}</p>
                          <p className="text-sm text-[hsl(var(--muted-foreground))]">Age {player.age}</p>
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
                        <Button variant="ghost" size="sm" onClick={() => handleEditPlayer(player)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeletePlayer(player.id)}>
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

      <PlayerDialog
        open={playerDialogOpen}
        onOpenChange={(open) => {
          setPlayerDialogOpen(open);
          if (!open) setEditingPlayer(null);
        }}
        player={editingPlayer}
        onSave={handleAddPlayer}
      />
    </div>
  );
}