import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Calendar, Clock, Stethoscope, 
  TrendingUp, Bell, Search, MoreHorizontal,
  ArrowUpRight, ArrowDownRight, Plus,
  Filter, Download, ChevronDown
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DashboardPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [appointmentRequests, setAppointmentRequests] = useState([
    { id: 1, patient: 'Sarah Johnson', time: '10:30 AM', type: 'New Patient', status: 'pending' },
    { id: 2, patient: 'Michael Chen', time: '2:15 PM', type: 'Follow-up', status: 'pending' },
    { id: 3, patient: 'Emma Wilson', time: '4:45 PM', type: 'Consultation', status: 'pending' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const statsData = [
    {
      title: "Total Patients",
      value: "1,248",
      change: "+12%",
      isPositive: true,
      icon: <Users className="h-4 w-4" />,
      description: "Till now"
    },
    {
      title: "Today's Patients",
      value: "24",
      change: "+4%",
      isPositive: true,
      icon: <Stethoscope className="h-4 w-4" />,
      description: "From yesterday"
    },
    {
      title: "Today's Appointments",
      value: "18",
      change: "-2%",
      isPositive: false,
      icon: <Calendar className="h-4 w-4" />,
      description: "From yesterday"
    },
    {
      title: "Avg. Wait Time",
      value: "12m",
      change: "-3m",
      isPositive: true,
      icon: <Clock className="h-4 w-4" />,
      description: "From last week"
    }
  ];

  const upcomingAppointments = [
    { id: 1, patient: 'Robert Davis', time: '9:00 AM', type: 'Follow-up', status: 'confirmed' },
    { id: 2, patient: 'Jennifer Lopez', time: '10:30 AM', type: 'Consultation', status: 'confirmed' },
    { id: 3, patient: 'Thomas Moore', time: '11:45 AM', type: 'New Patient', status: 'confirmed' },
    { id: 4, patient: 'Lisa Parker', time: '1:30 PM', type: 'Routine Check', status: 'confirmed' }
  ];

  const handleAcceptRequest = (id) => {
    setAppointmentRequests(prev => prev.filter(req => req.id !== id));
    // In a real app, you would update the backend here
  };

  const handleRejectRequest = (id) => {
    setAppointmentRequests(prev => prev.filter(req => req.id !== id));
    // In a real app, you would update the backend here
  };

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px] h-9 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary border"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center">
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-7 gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" size="sm" className="h-7 gap-1">
                <Download className="h-3.5 w-3.5" />
                <span>Export</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="patients">Patients</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          {stat.title}
                        </CardTitle>
                        {stat.icon}
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <span className={`flex items-center mr-1 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                            {stat.change}
                          </span>
                          {stat.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Appointment Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="flex items-center justify-center h-[200px]">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">86%</div>
                        <p className="text-muted-foreground">of appointments completed on time</p>
                        <Progress value={86} className="w-full mt-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Next Patient</CardTitle>
                    <CardDescription>
                      Your next appointment at {upcomingAppointments[0]?.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="/avatars/02.png" alt="Avatar" />
                          <AvatarFallback>RD</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">{upcomingAppointments[0]?.patient}</p>
                          <p className="text-sm text-muted-foreground">{upcomingAppointments[0]?.type}</p>
                        </div>
                        <div className="ml-auto font-medium">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Confirmed
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center pt-2">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Appointment Time</p>
                          <p className="text-sm font-medium">{upcomingAppointments[0]?.time}</p>
                        </div>
                        <Button size="sm" className="ml-auto">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Upcoming Appointments</CardTitle>
                      <Button variant="outline" size="sm" className="h-7 gap-1">
                        <Plus className="h-3.5 w-3.5" />
                        <span>Add New</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment, index) => (
                        <motion.div 
                          key={appointment.id}
                          className="flex items-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={`/avatars/0${index + 2}.png`} alt="Avatar" />
                            <AvatarFallback>{appointment.patient.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{appointment.patient}</p>
                            <p className="text-sm text-muted-foreground">{appointment.type}</p>
                          </div>
                          <div className="ml-auto font-medium">{appointment.time}</div>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Appointment Requests</CardTitle>
                    <CardDescription>
                      You have {appointmentRequests.length} pending requests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {appointmentRequests.map((request, index) => (
                        <motion.div 
                          key={request.id}
                          className="flex items-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={`/avatars/0${index + 5}.png`} alt="Avatar" />
                            <AvatarFallback>{request.patient.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{request.patient}</p>
                            <p className="text-sm text-muted-foreground">{request.type}</p>
                          </div>
                          <div className="ml-auto space-x-2">
                            <Button 
                              size="sm" 
                              variant="destructive" 
                              onClick={() => handleRejectRequest(request.id)}
                            >
                              Reject
                            </Button>
                            <Button 
                              size="sm" 
                              className="h-8 px-2"
                              onClick={() => handleAcceptRequest(request.id)}
                            >
                              Accept
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;