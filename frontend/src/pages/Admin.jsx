import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import {
  Search,
  Workflow,
  Users,
  UserPlus,
  PhoneCall,
  CheckCircle2,
  Eye,
  Loader2,
  RefreshCw,
  Inbox,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLeads } from "@/hooks/useLeads";
import { toast } from "sonner";

const statusBadge = {
  New: "new",
  Contacted: "contacted",
  Closed: "closed",
};

const statusOptions = ["New", "Contacted", "Closed"];

function formatDate(dateStr) {
  if (!dateStr) return "—";
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function Admin() {
  const [search, setSearch] = useState("");
  const { leads, isLoading, error, refetch, changeStatus } = useLeads(search);

  const summary = useMemo(() => {
    const total = leads.length;
    const New = leads.filter((l) => l.status === "New").length;
    const Contacted = leads.filter((l) => l.status === "Contacted").length;
    const Closed = leads.filter((l) => l.status === "Closed").length;
    return { total, New, Contacted, Closed };
  }, [leads]);

  const cards = [
    { label: "Total Leads", value: summary.total, icon: Users, tone: "bg-ink-950 text-white" },
    { label: "New Leads", value: summary.New, icon: UserPlus, tone: "bg-sky-50 text-sky-700" },
    { label: "Contacted", value: summary.Contacted, icon: PhoneCall, tone: "bg-amber-50 text-amber-700" },
    { label: "Closed", value: summary.Closed, icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-700" },
  ];
console.log("isLoading:", isLoading);
console.log("error:", error);
console.log("leads length:", leads.length);
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  toast.success("Logged out successfully!");
  navigate("/login");
};
  return (
    <div className="min-h-screen bg-ink-50/50">
      {/* Header */}
   {/* Header */}
<header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur-lg">
  <div className="container-app flex h-20 items-center justify-between">
    {/* Logo */}
    <Link to="/" className="flex flex-1 items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white shadow-glow">
        <Workflow className="h-5 w-5" strokeWidth={2.5} />
      </span>

      <div>
        <p className="font-display text-lg font-bold text-ink-950">
          ClientSync
        </p>
        <p className="text-xs text-ink-500">
          Admin Dashboard
        </p>
      </div>
    </Link>

    {/* Search + Badge */}
  <div className="flex items-center gap-3">
  <Button
    variant="outline"
    onClick={handleLogout}
    className="flex items-center gap-2"
  >
    <LogOut className="h-4 w-4" />
    Logout
  </Button>

  <div className="relative w-64">
    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />

    <Input
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="pl-10"
    />
  </div>

  <Badge variant="dark" className="shrink-0">
    {summary.total} total leads
  </Badge>
</div>
  </div>
</header>

      <main className="container-app py-10">
        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.tone}`}
              >
                <card.icon className="h-4.5 w-4.5" />
              </span>
              <p className="mt-4 font-display text-2xl font-bold text-ink-950">
                {card.value}
              </p>
              <p className="text-xs font-medium text-ink-500">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Leads table */}
        <div className="mt-8 rounded-2xl border border-ink-100 bg-white shadow-soft">
          <div className="flex items-center justify-between border-b border-ink-100 p-6">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950">
                All Leads
              </h2>
              <p className="text-sm text-ink-500">
                Manage and track every lead in your pipeline.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-ink-500">
              <Loader2 className="h-6 w-6 animate-spin text-primary-500" />
              <p className="text-sm">Loading leads...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
              <p className="text-sm font-medium text-red-600">{error}</p>
              <Button variant="outline" size="sm" onClick={refetch}>
                Try again
              </Button>
            </div>
          ) : leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100 text-ink-400">
                <Inbox className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-ink-700">No leads found</p>
              <p className="max-w-xs text-xs text-ink-500">
                New leads submitted from your landing page will show up here.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead._id}>
                    <TableCell className="font-medium text-ink-950">
                      {lead.name}
                    </TableCell>
                    <TableCell className="text-ink-600">{lead.email}</TableCell>
                    <TableCell className="text-ink-600">{lead.budget}</TableCell>
                    <TableCell>
                      <Select
                        value={lead.status}
                        onValueChange={(value) => changeStatus(lead._id, value)}
                      >
                        <SelectTrigger className="h-8 w-32 px-3 py-0 text-xs">
                          <SelectValue>
                            <Badge variant={statusBadge[lead.status] || "default"}>
                              {lead.status}
                            </Badge>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-ink-600">
                      {formatDate(lead.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="View lead">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{lead.name}</DialogTitle>
                            <DialogDescription>{lead.email}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-ink-500">Budget</span>
                              <span className="font-medium text-ink-900">{lead.budget}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-ink-500">Status</span>
                              <Badge variant={statusBadge[lead.status] || "default"}>
                                {lead.status}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-ink-500">Created</span>
                              <span className="font-medium text-ink-900">
                                {formatDate(lead.createdAt)}
                              </span>
                            </div>
                            <div>
                              <span className="text-ink-500">Message</span>
                              <p className="mt-1.5 rounded-xl bg-ink-50 p-3 text-ink-700">
                                {lead.message || "No message provided."}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </main>
    </div>
  );
}
