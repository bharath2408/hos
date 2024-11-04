'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/candidate/components/ui/tabs";
import { TasksTab } from "@/app/candidate/components/TasksTab";
import { ResourcesTab } from "@/app/candidate/components/ResourcesTab";
import { ModulesTab } from "@/app/candidate/components/ModulesTab";
import { 
  BookOpen, 
  FileText,
  Layers
} from 'lucide-react';

export function TrainingTab() {
  return (
    <Tabs defaultValue="modules" className="space-y-4 -mt-8">
      <div className="sticky top-[.1px]">
        <TabsList className="mb-1">
          <TabsTrigger value="modules" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            Modules
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Tasks
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="modules" className="space-y-4 pt-2">
        <ModulesTab />
      </TabsContent>

      <TabsContent value="resources" className="space-y-4 pt-2">
        <ResourcesTab />
      </TabsContent>

      <TabsContent value="tasks" className="space-y-4 pt-2">
        <TasksTab />
      </TabsContent>
    </Tabs>
  );
} 